export type Category =
  | "Dresses"
  | "Tops & Blouses"
  | "Knitwear"
  | "Outerwear"
  | "Denim & Trousers"
  | "Accessories";

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

export const categories: Category[] = [
  "Dresses",
  "Tops & Blouses",
  "Knitwear",
  "Outerwear",
  "Denim & Trousers",
  "Accessories",
];

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
    name: "Floral Wrap Midi Dress",
    price: 39,
    category: "Dresses",
    size: "XS, S, M, L, XL",
    inStock: true,
    popular: true,
    description:
      "A soft floral print wrap dress cut in a fluid crepe that skims rather than clings. A self-tie waist defines the shape, while the midi-length, gently flared skirt moves easily from a desk to dinner. Fully lined, with a V-neckline finished in a narrow self-fabric trim.",
  },
  {
    name: "Ivory Linen Shift Dress",
    price: 34,
    category: "Dresses",
    size: "XS, S, M, L, XL",
    inStock: true,
    description:
      "A relaxed shift dress in a breathable linen-cotton blend, cut with a clean boat neckline and dropped shoulders. Side seam pockets and a straight, unfussy silhouette make it an easy warm-weather staple that layers well under a jacket.",
  },
  {
    name: "Polka Dot Puff-Sleeve Dress",
    price: 37,
    category: "Dresses",
    size: "XS, S, M, L",
    inStock: true,
    description:
      "A playful polka dot dress with dramatic puff sleeves gathered at an elasticated cuff, paired with a fitted bodice and a flowing knee-length skirt. A concealed back zip keeps the silhouette clean, with a self-tie belt to define the waist.",
  },
  {
    name: "Ribbed Bodycon Dress",
    price: 28,
    category: "Dresses",
    size: "XS, S, M, L",
    inStock: true,
    description:
      "A fine ribbed knit dress with real stretch, cut close to the body with a round neckline and long sleeves. Minimal in shape and detail, it works equally well dressed up with heels or down with sneakers and a denim jacket.",
  },
  {
    name: "Eco Aware Organic Cotton Top",
    price: 27,
    category: "Tops & Blouses",
    size: "XS, S, M, L, XL",
    inStock: true,
    popular: true,
    description:
      "A relaxed-fit top made from certified organic cotton jersey, garment-washed for a soft, lived-in hand-feel. A dropped shoulder and ribbed crew neckline keep the shape easy, making it a genuine everyday layering piece.",
  },
  {
    name: "Polka Dot Short Sleeve Blouse",
    price: 32,
    category: "Tops & Blouses",
    size: "XS, S, M, L",
    inStock: true,
    description:
      "A lightweight woven blouse in a classic polka dot print, with a soft point collar, short sleeves, and a button-through front. Cut with a gentle waist shaping, it tucks cleanly into trousers or skirts for a polished daytime look.",
  },
  {
    name: "Printed Silky Cami Top",
    price: 25,
    category: "Tops & Blouses",
    size: "XS, S, M, L",
    inStock: true,
    description:
      "A fluid satin-effect camisole in a soft printed finish, cut on a gentle bias for natural drape. Adjustable straps and a scooped neckline make it easy to dress up under a blazer or wear alone on warmer days.",
  },
  {
    name: "Viscose Relaxed T-Shirt",
    price: 22,
    category: "Tops & Blouses",
    size: "XS, S, M, L, XL",
    inStock: true,
    description:
      "A drapey viscose-blend tee with a relaxed, slightly boxy fit and a dropped shoulder seam. The fabric has a soft, cool hand-feel that makes it a genuine step up from a basic cotton tee, in a versatile crew neckline.",
  },
  {
    name: "Embossed Knit Cardigan",
    price: 33,
    category: "Knitwear",
    size: "XS, S, M, L",
    inStock: true,
    popular: true,
    description:
      "A textured cardigan knitted in an embossed floral-effect stitch, with a relaxed, open front and dropped shoulders. Ribbed cuffs and hem keep the shape through wear, and the mid-weight yarn makes it a genuine three-season layer.",
  },
  {
    name: "High Turtleneck Jumper",
    price: 30,
    category: "Knitwear",
    size: "XS, S, M, L",
    inStock: true,
    description:
      "A fine-gauge turtleneck jumper knitted from a soft cotton-wool blend, with a fitted rib body and a generously high neck. Long sleeves finish in a ribbed cuff, making this the layering piece the rest of your wardrobe builds around.",
  },
  {
    name: "Cardigan With Pockets",
    price: 29,
    category: "Knitwear",
    size: "XS, S, M, L, XL",
    inStock: true,
    description:
      "A classic button-through cardigan finished with two patch pockets at the hip. Knitted in a soft acrylic-cotton blend with a ribbed collar, cuffs and hem, it layers easily over blouses and tees for a polished, put-together look.",
  },
  {
    name: "Lightweight Fitted Jumper",
    price: 26,
    category: "Knitwear",
    size: "XS, S, M, L",
    inStock: true,
    description:
      "A fine-knit fitted jumper in a lightweight cotton-blend yarn, cut close to the body with a round neckline. Thin enough to layer under a jacket, substantial enough to wear on its own — a genuine knitwear staple.",
  },
  {
    name: "Faux Suede Biker Jacket",
    price: 39,
    category: "Outerwear",
    size: "XS, S, M, L",
    inStock: true,
    popular: true,
    description:
      "A soft-hand faux suede jacket cut in a classic biker silhouette, with an asymmetric zip front, notch lapel, and zippered cuffs. Fully lined for easy on-off wear, it adds an edge to dresses and softens up denim in equal measure.",
  },
  {
    name: "Parka Jacket With Hood",
    price: 38,
    category: "Outerwear",
    size: "S, M, L, XL",
    inStock: true,
    description:
      "A lightweight parka in a water-resistant shell, finished with a drawstring hood, adjustable waist toggle, and four functional pockets. Built for transitional weather, it layers easily over knitwear without adding bulk.",
  },
  {
    name: "Blended Wool Coat",
    price: 40,
    category: "Outerwear",
    size: "XS, S, M, L",
    inStock: true,
    description:
      "A single-breasted wool-blend coat with a notch lapel, welt pockets, and a straight, tailored silhouette that skims rather than clings. A genuine outerwear anchor, dressy enough for the office and warm enough for daily wear.",
  },
  {
    name: "Basic Sweat Joggers",
    price: 24,
    category: "Denim & Trousers",
    size: "XS, S, M, L, XL",
    inStock: true,
    description:
      "Relaxed-fit joggers in a brushed-back cotton fleece, with an elasticated drawstring waist and ribbed cuffs at the ankle. Deep side pockets and a soft, substantial hand-feel make these a genuine loungewear-to-errands staple.",
  },
  {
    name: "Straight Leg Denim Jeans",
    price: 34,
    category: "Denim & Trousers",
    size: "XS, S, M, L, XL",
    inStock: true,
    popular: true,
    description:
      "Mid-rise straight leg jeans in a rigid cotton denim with a hint of stretch for comfort. A classic five-pocket construction and a clean, un-distressed wash make these the jeans that go with everything else in your wardrobe.",
  },
  {
    name: "Pleated Wide-Leg Trousers",
    price: 31,
    category: "Denim & Trousers",
    size: "XS, S, M, L",
    inStock: true,
    description:
      "Tailored wide-leg trousers with a front pleat and a fluid drape from a lightweight woven fabric. A concealed side zip and belt loops at a flattering high rise make these easy to dress up for the office or down for the weekend.",
  },
  {
    name: "Quilted Chain Shoulder Bag",
    price: 36,
    category: "Accessories",
    size: "One Size",
    inStock: true,
    description:
      "A structured quilted shoulder bag finished with a polished chain-and-leather strap and a signature turn-lock closure. Sized to carry the essentials, it works as a daytime crossbody or an evening shoulder bag in equal measure.",
  },
  {
    name: "Wide Brim Straw Hat",
    price: 23,
    category: "Accessories",
    size: "One Size",
    inStock: true,
    description:
      "A woven straw hat with a wide, gently curved brim and a grosgrain ribbon band. Lightweight and packable, it's the finishing piece for warm-weather outfits and genuine sun protection on brighter days.",
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
