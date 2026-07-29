export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // USD
  description: string;
  image: string;
  category:
    | "Dresses"
    | "Tops"
    | "Bottoms"
    | "Outerwear"
    | "Knitwear"
    | "Footwear"
    | "Accessories";
  inStock: boolean;
}

export const products: Product[] = [
  // Dresses
  {
    id: 1,
    name: "Amara Wrap Midi Dress",
    slug: "amara-wrap-midi-dress",
    price: 34,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/amara-wrap-midi-dress.jpg",
    description:
      "A soft crepe wrap dress that ties at the waist for a fit you can adjust through the day. The V-neckline and midi-length skirt move easily from desk to dinner, and the fabric resists creasing so it travels well. Finished with a self-belt and side pockets.",
  },
  {
    id: 2,
    name: "Cloud Cotton Sundress",
    slug: "cloud-cotton-sundress",
    price: 28,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/cloud-cotton-sundress.jpg",
    description:
      "Lightweight cotton poplin cut into a breezy A-line silhouette with a scooped neckline and thin adjustable straps. Designed for warm days, it pairs a fitted bodice with a skirt that has just enough volume to move in the breeze without feeling costume-y.",
  },
  {
    id: 3,
    name: "Bloom Field Floral Dress",
    slug: "bloom-field-floral-dress",
    price: 36,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/bloom-field-floral-dress.jpg",
    description:
      "An all-over floral print on a fluid viscose blend, cut with a fitted waist seam and a skirt that falls just below the knee. The long sleeves are finished with a button cuff, making this the dress that carries you from a spring lunch into evening.",
  },
  {
    id: 4,
    name: "Studio Bias-Cut Slip Dress",
    slug: "studio-bias-cut-slip-dress",
    price: 38,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/studio-bias-cut-slip-dress.jpg",
    description:
      "Cut on the bias so it skims rather than clings, this satin-finish slip dress has a cowl neckline and adjustable straps. Wear it alone for evening or layered under a blazer for daytime — the fluid drape makes it one of the most versatile pieces in the edit.",
  },
  {
    id: 5,
    name: "Noir Evening Slip Dress",
    slug: "noir-evening-slip-dress",
    price: 40,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/noir-evening-slip-dress.jpg",
    description:
      "A deep black slip dress in a weighted satin that holds its shape without needing a slip underneath. The straight neckline and column silhouette keep it minimal, letting a great pair of heels and a bold lip do the rest of the work.",
  },
  {
    id: 6,
    name: "Ivy Garden Party Dress",
    slug: "ivy-garden-party-dress",
    price: 35,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/ivy-garden-party-dress.jpg",
    description:
      "A fit-and-flare dress with a fitted bodice, a full skirt with soft pleats, and a hidden back zip. Made from a lightweight woven with a subtle sheen, it's built for outdoor celebrations, garden parties, and any occasion that calls for a little movement.",
  },
  {
    id: 7,
    name: "Sunray Halter Sundress",
    slug: "sunray-halter-sundress",
    price: 27,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/sunray-halter-sundress.jpg",
    description:
      "A halter-neck sundress with a fitted, shirred bodice that stretches comfortably and a flowing knee-length skirt below. The open back and adjustable neck tie make it easy to dress up with sandals or down with sneakers on a hot afternoon.",
  },
  {
    id: 8,
    name: "Onyx Column Dress",
    slug: "onyx-column-dress",
    price: 39,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/onyx-column-dress.jpg",
    description:
      "A sleeveless column dress in matte black ponte knit that skims the body without clinging. The round neckline and knee-skimming hem make it the kind of dress that works for a client meeting in the day and a dinner reservation at night.",
  },
  {
    id: 9,
    name: "Azure Puff-Sleeve Dress",
    slug: "azure-puff-sleeve-dress",
    price: 32,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/azure-puff-sleeve-dress.jpg",
    description:
      "A cornflower-blue dress with dramatic puff sleeves gathered at a fitted cuff, contrasted against a tapered, tucked-in bodice. The fabric has a light structure that holds the sleeve shape through a full day of wear without feeling stiff against the skin.",
  },
  {
    id: 10,
    name: "Market Day Linen Dress",
    slug: "market-day-linen-dress",
    price: 30,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/market-day-linen-dress.jpg",
    description:
      "A relaxed linen-blend shirt dress with a button-through front, a tie waist, and patch pockets deep enough to actually use. Built for warm weather and long days on your feet, it softens with every wash and never looks fussy.",
  },
  {
    id: 11,
    name: "Carnival Print Maxi Dress",
    slug: "carnival-print-maxi-dress",
    price: 37,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/carnival-print-maxi-dress.jpg",
    description:
      "A vibrant printed maxi dress with a fitted waist and a floor-grazing skirt that catches movement beautifully. The bold colorway is designed to be the statement piece of an outfit — pair it with simple sandals and let the dress lead.",
  },
  {
    id: 12,
    name: "Straw & Silk Occasion Dress",
    slug: "straw-and-silk-occasion-dress",
    price: 40,
    category: "Dresses",
    inStock: true,
    image: "/nudgenic/straw-and-silk-occasion-dress.jpg",
    description:
      "An elegant black dress in a silky, fluid weave with a fitted silhouette and a subtle side slit. Understated enough for daytime, sharp enough for evening — this is the dress we reach for when we can't decide what the occasion calls for.",
  },

  // Tops & Blouses
  {
    id: 13,
    name: "Meadow Floral Blouse",
    slug: "meadow-floral-blouse",
    price: 24,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/meadow-floral-blouse.jpg",
    description:
      "A lightweight floral-print blouse with a relaxed fit, long sleeves, and a single chest pocket. Soft enough to tuck into denim or wear loose over trousers, it's the easy, no-thought top that still photographs like it took effort.",
  },
  {
    id: 14,
    name: "Cobalt Tie-Neck Blouse",
    slug: "cobalt-tie-neck-blouse",
    price: 26,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/cobalt-tie-neck-blouse.jpg",
    description:
      "A rich cobalt-blue blouse with a self-tie neck bow and gently gathered sleeves. The fabric has enough weight to drape well without being sheer, making it a reliable layer under blazers or a standalone top for the office.",
  },
  {
    id: 15,
    name: "Cloudline White Blouse",
    slug: "cloudline-white-blouse",
    price: 22,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/cloudline-white-blouse.jpg",
    description:
      "A crisp white blouse cut with a slightly relaxed fit through the body and a clean point collar. This is the wardrobe workhorse — it goes under blazers, tucks into skirts, and layers beneath knitwear without ever looking out of place.",
  },
  {
    id: 16,
    name: "Poppy Red Blouse",
    slug: "poppy-red-blouse",
    price: 25,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/poppy-red-blouse.jpg",
    description:
      "A poppy-red blouse with a fluid drape and a relaxed, slightly boxy fit through the shoulders. One confident color-block top that instantly lifts a pair of white trousers or plain denim without needing any other accessories.",
  },
  {
    id: 17,
    name: "Atelier Linen Blouse",
    slug: "atelier-linen-blouse",
    price: 27,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/atelier-linen-blouse.jpg",
    description:
      "A warm caramel linen-blend blouse with a relaxed, boxy cut and dropped shoulder seams. The breathable weave makes it a natural choice for warmer months, and the earthy tone pairs easily with denim, tailored trousers, or a simple skirt.",
  },
  {
    id: 18,
    name: "Fernwood Green Blouse",
    slug: "fernwood-green-blouse",
    price: 23,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/fernwood-green-blouse.jpg",
    description:
      "A deep forest-green blouse with a fitted waist and softly gathered sleeves. The saturated color reads as a neutral against black, camel, or denim, making it easy to build a full outfit around without much extra thought.",
  },
  {
    id: 19,
    name: "Folded Hands Silk Blouse",
    slug: "folded-hands-silk-blouse",
    price: 28,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/folded-hands-silk-blouse.jpg",
    description:
      "A silky, fluid blouse with a soft cowl neckline and long sleeves that taper to a narrow cuff. Elegant enough for client meetings and soft enough for a Sunday brunch, this is a top built to be reached for often.",
  },
  {
    id: 20,
    name: "Birchline Long-Sleeve Shirt",
    slug: "birchline-long-sleeve-shirt",
    price: 21,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/birchline-long-sleeve-shirt.jpg",
    description:
      "A simple, well-cut long-sleeve shirt in a soft cotton-blend jersey. Not trying to be anything more than a great basic — layer it under a blazer, tie it at the waist over denim, or wear it exactly as is.",
  },
  {
    id: 21,
    name: "Market Row Summer Blouse",
    slug: "market-row-summer-blouse",
    price: 24,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/market-row-summer-blouse.jpg",
    description:
      "A lightweight woven blouse in a soft, sun-faded colorway with short sleeves and a relaxed, easy fit. Built for warm-weather errands and market mornings, it's breathable enough for all-day wear without a second thought.",
  },
  {
    id: 22,
    name: "Crimson Reading Room Top",
    slug: "crimson-reading-room-top",
    price: 20,
    category: "Tops",
    inStock: true,
    image: "/nudgenic/crimson-reading-room-top.jpg",
    description:
      "A soft, brushed long-sleeve top in a deep crimson red, cut with a relaxed fit that's equally at home under a coat or worn alone on a lazy weekend. Simple, comfortable, and one of the easiest colors to build around.",
  },

  // Bottoms
  {
    id: 23,
    name: "Onyx Mini Skirt",
    slug: "onyx-mini-skirt",
    price: 26,
    category: "Bottoms",
    inStock: true,
    image: "/nudgenic/onyx-mini-skirt.jpg",
    description:
      "A fitted black mini skirt with a high waist and a hidden back zip. The structured fabric holds its shape through the day, making it a reliable base for tucked-in blouses, knits, or an oversized blazer thrown on top.",
  },
  {
    id: 24,
    name: "Mustard Field Midi Skirt",
    slug: "mustard-field-midi-skirt",
    price: 29,
    category: "Bottoms",
    inStock: true,
    image: "/nudgenic/mustard-field-midi-skirt.jpg",
    description:
      "A mustard-yellow A-line midi skirt with a fitted waistband and soft box pleats that add movement without bulk. The saturated color is designed to be a statement piece, worn with a simple black or white top to let the skirt lead.",
  },
  {
    id: 25,
    name: "Plaid Prep Skirt",
    slug: "plaid-prep-skirt",
    price: 27,
    category: "Bottoms",
    inStock: true,
    image: "/nudgenic/plaid-prep-skirt.jpg",
    description:
      "A classic plaid mini skirt with pleating throughout and a fitted waistband. Equal parts preppy and rebellious, it pairs naturally with a plain white blouse for the office or with a simple tee for off-duty days.",
  },
  {
    id: 26,
    name: "Distressed Blue Denim",
    slug: "distressed-blue-denim",
    price: 32,
    category: "Bottoms",
    inStock: true,
    image: "/nudgenic/distressed-blue-denim.jpg",
    description:
      "Mid-rise straight jeans in a classic mid-wash denim with subtle distressing at the knee. Cut from a cotton-elastane blend for a bit of stretch, they hold their shape through a full day without feeling restrictive.",
  },
  {
    id: 27,
    name: "Everyday Straight Jeans",
    slug: "everyday-straight-jeans",
    price: 30,
    category: "Bottoms",
    inStock: true,
    image: "/nudgenic/everyday-straight-jeans.jpg",
    description:
      "A no-fuss straight-leg jean in a clean mid-blue wash, cut with a mid-rise waist and a leg that skims rather than clings. The denim we reach for on repeat because it goes with absolutely everything else in the closet.",
  },
  {
    id: 28,
    name: "High-Rise Ankle Jeans",
    slug: "high-rise-ankle-jeans",
    price: 34,
    category: "Bottoms",
    inStock: true,
    image: "/nudgenic/high-rise-ankle-jeans.jpg",
    description:
      "A high-rise, cropped ankle-length jean with a slim leg that pairs perfectly with heels or flats without pooling at the hem. The higher rise smooths through the waist for a cleaner line under tucked-in tops.",
  },
  {
    id: 29,
    name: "Classic Blue Denim",
    slug: "classic-blue-denim",
    price: 31,
    category: "Bottoms",
    inStock: true,
    image: "/nudgenic/classic-blue-denim.jpg",
    description:
      "A timeless straight-leg jean in a medium-blue wash with a comfortable mid-rise fit. Made from a durable cotton denim with just enough give to move through a full day, this is a foundational piece for any wardrobe.",
  },
  {
    id: 30,
    name: "Indigo Wide-Leg Denim",
    slug: "indigo-wide-leg-denim",
    price: 33,
    category: "Bottoms",
    inStock: true,
    image: "/nudgenic/indigo-wide-leg-denim.jpg",
    description:
      "A deep-indigo wide-leg jean with a high waist and a relaxed, flowing leg that balances a fitted top beautifully. The wide silhouette moves easily and layers well over boots in cooler months.",
  },

  // Outerwear
  {
    id: 31,
    name: "Violet Tailored Blazer",
    slug: "violet-tailored-blazer",
    price: 38,
    category: "Outerwear",
    inStock: true,
    image: "/nudgenic/violet-tailored-blazer.jpg",
    description:
      "A structured single-button blazer in a bold violet hue, cut with a nipped waist and notched lapels. Fully lined for a clean drape, this is a blazer built to stand out on its own over a simple black slip or tee.",
  },
  {
    id: 32,
    name: "Blush Pink Blazer",
    slug: "blush-pink-blazer",
    price: 36,
    category: "Outerwear",
    inStock: true,
    image: "/nudgenic/blush-pink-blazer.jpg",
    description:
      "A soft blush-pink blazer with structured shoulders and a fitted waist, finished with a double-button front and welt pockets. Wear it over denim for daytime polish or over a slip dress for an evening out.",
  },
  {
    id: 33,
    name: "Petal Suit Jacket",
    slug: "petal-suit-jacket",
    price: 37,
    category: "Outerwear",
    inStock: true,
    image: "/nudgenic/petal-suit-jacket.jpg",
    description:
      "A soft pink tailored suit jacket with clean lines and a single-button closure, designed to be worn as a matching set or mixed with contrasting trousers. The structured shoulder gives it presence without feeling stiff.",
  },
  {
    id: 34,
    name: "Sunflower Tailored Jacket",
    slug: "sunflower-tailored-jacket",
    price: 35,
    category: "Outerwear",
    inStock: true,
    image: "/nudgenic/sunflower-tailored-jacket.jpg",
    description:
      "A bright sunflower-yellow jacket with a fitted silhouette and structured lapels, built to be the focal point of any outfit. Wear it over all-black for maximum contrast or let it stand entirely on its own.",
  },
  {
    id: 35,
    name: "Scarlet Statement Jacket",
    slug: "scarlet-statement-jacket",
    price: 39,
    category: "Outerwear",
    inStock: true,
    image: "/nudgenic/scarlet-statement-jacket.jpg",
    description:
      "A bold scarlet-red jacket with a tailored fit and clean, structured lines. Not a jacket for blending in — this is the piece that turns a plain outfit into one people remember, worn open over a simple top.",
  },
  {
    id: 36,
    name: "Rosé Boutique Blazer",
    slug: "rose-boutique-blazer",
    price: 34,
    category: "Outerwear",
    inStock: true,
    image: "/nudgenic/rose-boutique-blazer.jpg",
    description:
      "A soft rosé-pink blazer with a relaxed tailored fit and notch lapels, finished in a smooth woven fabric with a subtle sheen. A gentler alternative to a classic black blazer that still reads as polished and considered.",
  },
  {
    id: 37,
    name: "Classic Charcoal Blazer",
    slug: "classic-charcoal-blazer",
    price: 40,
    category: "Outerwear",
    inStock: true,
    image: "/nudgenic/classic-charcoal-blazer.jpg",
    description:
      "A charcoal-grey tailored blazer with structured shoulders, a nipped waist, and a fully lined interior. The most versatile piece in the outerwear edit — it works over everything from jeans to tailored trousers to a simple dress.",
  },
  {
    id: 38,
    name: "Emerald Tailored Jacket",
    slug: "emerald-tailored-jacket",
    price: 36,
    category: "Outerwear",
    inStock: true,
    image: "/nudgenic/emerald-tailored-jacket.jpg",
    description:
      "A rich emerald-green jacket with a fitted, tailored silhouette and clean notch lapels. The jewel tone works as a bold layer over neutrals or as the anchor piece in an all-green outfit for those who want to commit.",
  },

  // Knitwear
  {
    id: 39,
    name: "Golden Hour Knit Sweater",
    slug: "golden-hour-knit-sweater",
    price: 28,
    category: "Knitwear",
    inStock: true,
    image: "/nudgenic/golden-hour-knit-sweater.jpg",
    description:
      "A soft mustard-yellow knit sweater with a relaxed fit and ribbed cuffs and hem. Warm without being bulky, it layers easily under a coat or stands alone with jeans on cooler days.",
  },
  {
    id: 40,
    name: "Cinnamon Cable Knit",
    slug: "cinnamon-cable-knit",
    price: 30,
    category: "Knitwear",
    inStock: true,
    image: "/nudgenic/cinnamon-cable-knit.jpg",
    description:
      "A warm cinnamon-brown cable-knit sweater with a relaxed crew neckline and dropped shoulders. The chunky cable texture adds visual interest to an otherwise simple silhouette, making it an easy layering piece for the colder months.",
  },
  {
    id: 41,
    name: "Cloud Knit Pullover",
    slug: "cloud-knit-pullover",
    price: 26,
    category: "Knitwear",
    inStock: true,
    image: "/nudgenic/cloud-knit-pullover.jpg",
    description:
      "A soft, cloud-white knit pullover with a fine-gauge weave and a fitted crew neckline. Light enough to layer under a blazer, warm enough to wear alone — a genuinely versatile knit built to be worn on repeat.",
  },
  {
    id: 42,
    name: "Blush Ribbed Knit",
    slug: "blush-ribbed-knit",
    price: 29,
    category: "Knitwear",
    inStock: true,
    image: "/nudgenic/blush-ribbed-knit.jpg",
    description:
      "A fitted blush-pink ribbed knit top with a rounded neckline and long sleeves. The fine rib holds its shape through wear, making it a flattering base layer under blazers or a simple standalone top with denim.",
  },

  // Footwear
  {
    id: 43,
    name: "Sable Suede Heels",
    slug: "sable-suede-heels",
    price: 32,
    category: "Footwear",
    inStock: true,
    image: "/nudgenic/sable-suede-heels.jpg",
    description:
      "A classic pointed-toe heel in soft beige suede with a mid-height stiletto heel built for genuine wearability. The neutral tone elongates the leg and pairs with nearly everything from denim to eveningwear.",
  },
  {
    id: 44,
    name: "Noir Stiletto Pumps",
    slug: "noir-stiletto-pumps",
    price: 34,
    category: "Footwear",
    inStock: true,
    image: "/nudgenic/noir-stiletto-pumps.jpg",
    description:
      "A sleek black pointed-toe pump with a slim stiletto heel and a cushioned insole for genuine all-day comfort. The wardrobe staple heel that works for the office, for dinner, and for everything in between.",
  },
  {
    id: 45,
    name: "Umber Leather Heels",
    slug: "umber-leather-heels",
    price: 30,
    category: "Footwear",
    inStock: true,
    image: "/nudgenic/umber-leather-heels.jpg",
    description:
      "A rich umber-brown leather heel with a rounded toe and a stable block heel for easy all-day wear. The warm tone works beautifully with autumn colors, denim, and tailored trousers alike.",
  },
  {
    id: 46,
    name: "Ivory Pointed Heels",
    slug: "ivory-pointed-heels",
    price: 36,
    category: "Footwear",
    inStock: true,
    image: "/nudgenic/ivory-pointed-heels.jpg",
    description:
      "A crisp ivory pointed-toe heel with a slim silhouette and a comfortable mid-height heel. Clean enough for special occasions, versatile enough to become a regular in the everyday rotation.",
  },
  {
    id: 47,
    name: "Classic Nude Pumps",
    slug: "classic-nude-pumps",
    price: 28,
    category: "Footwear",
    inStock: true,
    image: "/nudgenic/classic-nude-pumps.jpg",
    description:
      "A timeless nude pump with a rounded toe and a comfortable mid-height heel, designed to blend seamlessly with nearly any skin tone and outfit. The kind of shoe you buy once and wear for years.",
  },

  // Accessories
  {
    id: 48,
    name: "Duo Leather Handbag Set",
    slug: "duo-leather-handbag-set",
    price: 36,
    category: "Accessories",
    inStock: true,
    image: "/nudgenic/duo-leather-handbag-set.jpg",
    description:
      "A set of two structured leather handbags in complementary neutral tones — one compact crossbody, one roomier tote. Both feature a secure zip closure and an interior slip pocket, giving you a bag for every occasion.",
  },
  {
    id: 49,
    name: "Sterling Statement Jewelry Set",
    slug: "sterling-statement-jewelry-set",
    price: 24,
    category: "Accessories",
    inStock: true,
    image: "/nudgenic/sterling-statement-jewelry-set.jpg",
    description:
      "A curated set of silver-tone jewelry pieces with delicate stone detailing, designed to be layered or worn individually. Hypoallergenic and tarnish-resistant, this set is built for daily wear, not just special occasions.",
  },
  {
    id: 50,
    name: "Gold Chain Necklace",
    slug: "gold-chain-necklace",
    price: 22,
    category: "Accessories",
    inStock: true,
    image: "/nudgenic/gold-chain-necklace.jpg",
    description:
      "A fine gold-tone chain necklace with a secure lobster clasp, simple enough to wear every day and dainty enough to layer with other pieces. A quiet finishing touch for almost any neckline.",
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
  "Dresses",
  "Tops",
  "Bottoms",
  "Outerwear",
  "Knitwear",
  "Footwear",
  "Accessories",
];
