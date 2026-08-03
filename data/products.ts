export type Category =
  | "Women's Sleepwear"
  | "Men's Sleepwear"
  | "Robes & Kimonos"
  | "Lounge Sets";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // base price in USD
  /** Set when the piece is discounted; the original USD price. */
  compareAt?: number;
  description: string;
  image: string;
  category: Category;
  fabric: string;
  sizes: string[];
  inStock: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
}

export const categories: Category[] = [
  "Women's Sleepwear",
  "Men's Sleepwear",
  "Robes & Kimonos",
  "Lounge Sets",
];

const img = (slug: string) => `/xiradix/${slug}.jpg`;

export const products: Product[] = [
  // ---------------------------------------------------------------- Women's
  {
    id: 1,
    name: "Lunette Satin Slip Nightdress",
    slug: "lunette-satin-slip-nightdress",
    price: 34,
    category: "Women's Sleepwear",
    fabric: "Washed satin",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    newArrival: true,
    image: img("lunette-satin-slip-nightdress"),
    description:
      "The Lunette is the slip we keep remaking because we cannot improve on it. Cut on the true bias from a washed satin that has been tumbled to take the shine down a stop, it falls in a soft column rather than clinging, and it moves with you when you turn over at night. The cowl neckline is self-faced so nothing scratches at the collarbone, and the straps are fully adjustable through a flat slider that will not dig in when you sleep on your side. We finished the hem with a rolled edge rather than a bulky turn-up, which keeps the drape clean all the way to the ankle. It launders far better than silk — cold machine wash on a delicate cycle, hang to dry, and the satin comes back soft without a trip to the dry cleaner. In Lagos heat it breathes more kindly than a full-length cotton gown, which is exactly why it started as a house sample and became our most repeated piece.",
  },
  {
    id: 2,
    name: "Noir Bias-Cut Slip Dress",
    slug: "noir-bias-cut-slip-dress",
    price: 36,
    compareAt: 44,
    category: "Women's Sleepwear",
    fabric: "Heavy-weight satin",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    bestSeller: true,
    image: img("noir-bias-cut-slip-dress"),
    description:
      "A deep black slip in a heavier satin than our Lunette, chosen because weight is what makes a bias cut hang properly instead of riding up. The extra grams per square metre give it a fluid, almost liquid fall from the hip, and they also mean it is opaque enough to answer the door in. A narrow band of matching lace edges the neckline and the hem, applied flat so there is no ridge under a robe. The straps cross at the back and adjust from the front, a small detail that saves the contortion of reaching behind you. Side seams are French-finished, so there are no raw edges to fray through repeated washing. This is the piece customers tell us they bought for a hotel stay and then wore every night after. Cold wash inside out, line dry away from direct sun, and press on the reverse if you want the hem crisp.",
  },
  {
    id: 3,
    name: "Sage Silk-Touch Slip",
    slug: "sage-silk-touch-slip",
    price: 33,
    category: "Women's Sleepwear",
    fabric: "Silk-touch modal",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    image: img("sage-silk-touch-slip"),
    description:
      "Cut in a muted sage that reads green in daylight and grey by lamplight, this slip trades satin for a silk-touch modal knit. The difference matters if you sleep warm: modal moves moisture away from the skin instead of holding it against you, so it stays cool through a humid night in a way woven satin cannot. The knit has enough recovery to skim rather than cling, and it will not wrinkle in a suitcase, which makes it the one we reach for when packing. A straight neckline sits high enough to be modest and low enough not to feel like a nightshirt. The straps are cut from the same fabric and stitched down at a fixed length, so there is no hardware to press into your shoulder. Machine wash cold with like colours; it comes out of the dryer on low with no ironing needed at all.",
  },
  {
    id: 4,
    name: "Bandeau Satin Sleep Dress",
    slug: "bandeau-satin-sleep-dress",
    price: 31,
    category: "Women's Sleepwear",
    fabric: "Stretch satin",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    newArrival: true,
    image: img("bandeau-satin-sleep-dress"),
    description:
      "A strapless sleep dress for the nights when nothing should touch your shoulders. The bandeau body is cut from a stretch satin with a hidden elastic casing along the top edge, wide enough to hold without leaving a mark by morning, and lined through the bust so it holds its shape after months of wear. From the underbust the fabric releases into a loose A-line that skims the hips and stops just above the knee. Because there is no strap to fuss with, it layers cleanly under any of our robes. We added shallow side slits at the hem so it does not twist around the legs when you move in your sleep. Hand wash or use a delicate cycle in a mesh bag to protect the elastic, and always hang rather than tumble dry — heat is the only thing that will shorten the life of the casing.",
  },
  {
    id: 5,
    name: "Colonnade Draped Nightgown",
    slug: "colonnade-draped-nightgown",
    price: 38,
    category: "Women's Sleepwear",
    fabric: "Matte satin",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    bestSeller: true,
    image: img("colonnade-draped-nightgown"),
    description:
      "Our longest gown, cut to the ankle in a matte satin that photographs like stone and feels like water. The drape is engineered rather than accidental: extra fabric is released from a shoulder yoke so the folds fall in vertical columns down the front, which is where the name comes from. It is a generous cut, deliberately so, because a nightgown that has to be sucked in is a nightgown that stays in the drawer. The back dips slightly lower than the front, and a single covered button closes the shoulder. There are no side seams below the hip, so nothing interrupts the fall of the fabric. This one rewards a little care — hand wash cold, roll in a towel to take the water out, and hang on a padded hanger. Treated that way it will outlast most things in your wardrobe.",
  },
  {
    id: 6,
    name: "Onyx Lace-Trim Nightdress",
    slug: "onyx-lace-trim-nightdress",
    price: 29,
    category: "Women's Sleepwear",
    fabric: "Satin with stretch lace",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    image: img("onyx-lace-trim-nightdress"),
    description:
      "A shorter nightdress with a deep V neckline framed in a stretch lace that gives rather than gaps. We use a lace with a soft scalloped edge and no stiff picot, because anything rigid at the neckline is the first thing you notice at two in the morning. The satin body is cut close through the bust and released from the ribcage, landing mid-thigh. Both the bust and the hem lace are stitched with a narrow zigzag that lets the trim stretch with the body instead of snapping under tension. Adjustable straps let you set the neckline exactly where you want it. It is a small piece that takes up almost no room in a bag, which is why it turns up in a lot of our customers' travel kits. Wash in a mesh bag on cold, and never wring the lace — press the water out flat.",
  },
  {
    id: 7,
    name: "Rouge Satin Slip Dress",
    slug: "rouge-satin-slip-dress",
    price: 37,
    category: "Women's Sleepwear",
    fabric: "Washed satin",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    bestSeller: true,
    image: img("rouge-satin-slip-dress"),
    description:
      "Deep red is difficult to get right in satin — it goes orange under warm light or purple under cool — so we spent three dye lots landing on this one, a true blue-based rouge that holds its colour in every room. The cut is a classic slip with a straight neckline and a low scooped back, cut long enough to reach mid-calf. Lace insets at the bust are tonal rather than contrasting, so the piece stays quiet. Because red is a notoriously fugitive dye, we pre-wash the fabric before cutting; it will not bleed onto your sheets the first time you wear it, which is not something every satin slip can claim. Wash it separately for the first two cycles anyway, cold and inside out, and keep it out of direct sunlight when drying. The colour is the whole point of the piece and sun is the one thing that will take it.",
  },
  {
    id: 8,
    name: "Terracotta Satin Nightgown",
    slug: "terracotta-satin-nightgown",
    price: 35,
    category: "Women's Sleepwear",
    fabric: "Washed satin",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    image: img("terracotta-satin-nightgown"),
    description:
      "A warm clay-red gown cut to just below the knee, with a softly gathered bust and a waist seam that sits at the natural waist rather than the empire line most nightgowns default to. That single change is what stops it reading like maternity wear. The skirt is cut full enough to sit cross-legged in and the neckline is finished with a narrow self-binding instead of elastic, so it holds its shape through the wash. Short flutter sleeves cover the top of the arm, which several customers asked for after buying our strappier styles. The colour is a pigment dye, so it will soften by perhaps half a shade over the first year and then stay put — that gentle fading is characteristic of the process rather than a fault. Machine wash cold, hang dry, warm iron on the reverse if needed.",
  },
  {
    id: 9,
    name: "Champagne Modal Camisole",
    slug: "champagne-modal-camisole",
    price: 22,
    category: "Women's Sleepwear",
    fabric: "Modal jersey",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    image: img("champagne-modal-camisole"),
    description:
      "The plainest thing we make and quietly one of the best-selling. A modal jersey camisole in a pale champagne, cut straight with a small amount of ease so it does not outline anything, and finished with narrow self-fabric straps. Modal is spun from beech pulp and comes out softer than cotton at the same weight, with a drape closer to silk — it is the fabric to choose if your skin objects to everything else. There is no lace, no trim, and no hardware, which is exactly the brief: something to sleep in that you never have to think about. It layers under a robe on a cool night and works alone when it is too warm for anything more. Pair it with our Heather Grey Lounge Pants for a set. Machine washable, tumble dry low, and it keeps its softness well past a hundred washes.",
  },
  {
    id: 10,
    name: "Meadow Cotton Nightdress",
    slug: "meadow-cotton-nightdress",
    price: 30,
    category: "Women's Sleepwear",
    fabric: "Cotton voile",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    newArrival: true,
    image: img("meadow-cotton-nightdress"),
    description:
      "For anyone who cannot sleep in synthetics, this is the answer: a white cotton voile nightdress with nothing clever about it beyond the quality of the cloth. Voile is a fine, open-weave cotton that lets air through in a way jersey never does, so it is the coolest thing in the collection on a still Lagos night. The dress is cut wide from a gathered yoke, with a narrow ribbon tie at the neck and short cap sleeves. Because voile is semi-sheer we line the bodice to the waist. It will crease — that is what cotton does, and we would rather that than a resin finish sitting against your skin all night. Wash it warm, hang it damp, and the weight of the water pulls most of the creases out on its own. It softens noticeably after the third or fourth wash.",
  },
  {
    id: 11,
    name: "Blush Satin Sleep Shirt",
    slug: "blush-satin-sleep-shirt",
    price: 28,
    category: "Women's Sleepwear",
    fabric: "Washed satin",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    image: img("blush-satin-sleep-shirt"),
    description:
      "A boyfriend-cut sleep shirt in a pale blush satin, long enough to wear on its own and loose enough to sleep in without a single seam pressing into you. We cut it with a proper shirt collar, a full button placket in tonal shell-effect buttons, and a curved shirttail hem that sits lower at the back. The sleeves are set slightly dropped and finished with a single-button cuff you can roll. Inside, the placket is faced so the buttons do not print through the satin. It has become the piece people buy as a gift, partly because the sizing is forgiving and partly because it works for someone who does not otherwise wear nightwear. Cold machine wash on delicate, hang dry, and use a cool iron on the collar and cuffs — satin scorches faster than you would expect, so keep the heat low.",
  },
  {
    id: 12,
    name: "Crimson Crossback Slip",
    slug: "crimson-crossback-slip",
    price: 36,
    category: "Women's Sleepwear",
    fabric: "Stretch satin",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    image: img("crimson-crossback-slip"),
    description:
      "The interest in this one is all at the back: four fine straps cross in a lattice between the shoulder blades, anchored to a low scooped back that stays flat against the spine. The front is deliberately plain — a straight neckline and a clean bias-cut body in a stretch satin with just enough give to move with you. The straps are elasticated within their casing, so the lattice holds its geometry rather than sagging after a few wears. Length lands at mid-calf. It is a piece designed for a warm night, when a robe stays on the hook and the back of a slip is the part you actually feel. Because of the strap work it needs a mesh bag in the wash to stop the lattice catching on anything, and it should be hung to dry rather than tumbled, which would tire the elastic early.",
  },
  {
    id: 13,
    name: "Botanical Print Nightgown",
    slug: "botanical-print-nightgown",
    price: 32,
    category: "Women's Sleepwear",
    fabric: "Printed satin",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    image: img("botanical-print-nightgown"),
    description:
      "A full-length gown in a botanical print drawn in-house and printed in small runs, so the scale of the pattern is matched to the size of the garment rather than stretched across every size from the same file. The ground is a soft sage and the leaves are picked out in cream and a faded rose. Construction is straightforward: a gathered bust, adjustable straps, and a skirt that falls unbroken to the ankle. We placed the pattern repeat so the largest motifs land at the hem rather than across the bust, which is the difference between a print that reads as designed and one that reads as bought by the metre. Wash cold and inside out to protect the print surface, and hang to dry. A warm iron on the reverse will bring the satin back if it has been folded in a drawer.",
  },
  {
    id: 14,
    name: "Willow Embroidered Nightdress",
    slug: "willow-embroidered-nightdress",
    price: 34,
    category: "Women's Sleepwear",
    fabric: "Satin with embroidery",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    image: img("willow-embroidered-nightdress"),
    description:
      "Fine embroidery runs across the bust and scatters down the skirt of this pale gown, worked in a tonal thread so it catches the light rather than announcing itself. The stitching is done by machine but placed by hand, which is why the density thins out as it travels down the body instead of stopping at a hard line. Underneath the embroidery the base is a lightweight satin, cut long with adjustable straps and a softly gathered bust. We back the embroidered panel with a fine cotton facing so no thread ends sit against the skin — the single most common complaint about embroidered nightwear, and an easy thing to fix. Hand wash this one, or use a mesh bag on the gentlest cycle your machine has. Dry flat and avoid ironing directly over the stitching.",
  },
  {
    id: 15,
    name: "Pearl Cotton Nightshirt",
    slug: "pearl-cotton-nightshirt",
    price: 31,
    category: "Women's Sleepwear",
    fabric: "Brushed cotton",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    image: img("pearl-cotton-nightshirt"),
    description:
      "An off-white nightshirt in a brushed cotton that has been napped on one side only, so the soft face sits against the skin and the smooth face takes the wear. It is cut long, past the knee, with a button placket to the sternum, a small stand collar, and long sleeves that gather into a plain cuff. There is a patch pocket at the chest, which sounds trivial until you want somewhere to put your phone on the way to bed. Side vents at the hem give it room. Brushed cotton pills if you buy it cheap; this one is a long-staple yarn precisely to avoid that, and it will stay smooth through a couple of years of weekly washing. Wash warm, tumble dry low to lift the nap back up, and skip the fabric softener — it coats the fibres and flattens exactly the texture you paid for.",
  },
  {
    id: 16,
    name: "Moonlight Satin Gown",
    slug: "moonlight-satin-gown",
    price: 38,
    compareAt: 46,
    category: "Women's Sleepwear",
    fabric: "Liquid satin",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    bestSeller: true,
    image: img("moonlight-satin-gown"),
    description:
      "The dressiest piece we make, and the one that gets worn well beyond the bedroom. A pale silver-white satin with a genuinely liquid hand, cut floor-length on the bias with a cowl at the front and a deeper cowl at the back. Bias cutting eats fabric — this gown takes nearly twice what a straight-cut gown of the same length would — but it is the only way to get a drape that pours rather than hangs. The straps are cut in one continuous piece with the back cowl so there is no join to break the line. There is no zip and no closure of any kind; the bias gives enough to step into. Treat it as the special thing it is: hand wash cold, dry flat on a towel, steam rather than iron. Stored on a padded hanger it will keep its shape indefinitely.",
  },
  {
    id: 17,
    name: "Alabaster Ruffle Nightdress",
    slug: "alabaster-ruffle-nightdress",
    price: 37,
    category: "Women's Sleepwear",
    fabric: "Satin",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    newArrival: true,
    image: img("alabaster-ruffle-nightdress"),
    description:
      "Tiered ruffles fall from a fitted bodice down to a mid-calf hem, each tier cut on the cross grain so it stands away from the body instead of collapsing flat. The effect is soft rather than fussy because the ruffles are narrow and the colour is a single flat alabaster — volume and pattern together would be too much. The bodice is lined and boned lightly at the side seams, just enough to hold its line without any of the rigidity that word usually implies. Straps are adjustable and the back closes with a short concealed zip. Because there is a lot of fabric in the tiers, this piece takes up more drawer room than most of the collection; it is better hung. Hand wash or delicate cycle in a bag, hang to dry, and shake the tiers out while damp so they dry with their shape.",
  },
  {
    id: 18,
    name: "Black Lace Cami Short Set",
    slug: "black-lace-cami-short-set",
    price: 25,
    category: "Women's Sleepwear",
    fabric: "Satin with lace trim",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    image: img("black-lace-cami-short-set"),
    description:
      "A two-piece in black satin — a lace-trimmed camisole with adjustable straps and a matching pair of French-cut shorts with an elasticated waist. The shorts are the part worth talking about: cut with a proper curved side seam rather than the flat straight seam most sleep shorts use, so they sit on the hip without riding up. The waistband elastic is enclosed in a satin casing and is wide enough to stay flat. Lace trims the camisole neckline and the leg openings in the same narrow scallop, keeping the set visually consistent. Both pieces are sold and sized together but cut generously, so if you are between sizes the smaller will still work. Mesh bag, cold wash, hang dry. The satin will keep its finish for years if it never sees a hot dryer.",
  },
  {
    id: 19,
    name: "Poppy Satin Chemise",
    slug: "poppy-satin-chemise",
    price: 29,
    category: "Women's Sleepwear",
    fabric: "Washed satin",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    image: img("poppy-satin-chemise"),
    description:
      "A short chemise in a bright poppy red, cut to land at the upper thigh with a swing through the body that makes it one of the coolest pieces to sleep in when the fan is doing all the work. The neckline is a simple straight edge with a narrow binding, and the straps are fixed rather than adjustable, set at a length that works across the size range — one fewer thing to catch on the sheets. Side seams flare gently from the underarm so nothing sits close to the ribs. This is deliberately the least structured thing in the collection; there is no lining, no lace, and no trim, just well-cut satin in a colour that lifts a grey morning. Cold wash inside out with like colours, hang to dry, and it needs no ironing at all if you hang it straight from the machine.",
  },
  {
    id: 20,
    name: "Amethyst Satin Slip",
    slug: "amethyst-satin-slip",
    price: 30,
    category: "Women's Sleepwear",
    fabric: "Satin with lace",
    sizes: ["S", "M", "L", "XL"],
    inStock: false,
    image: img("amethyst-satin-slip"),
    description:
      "A violet satin slip panelled with black lace at the bust and along one hip, where the lace runs as a vertical inset rather than a border. The asymmetry is intentional — it draws a long line down the body that a symmetrical trim would flatten. The satin is a mid-weight with a high sheen, deliberately more lustrous than our washed finishes, because the colour needs the light to read as amethyst rather than plain purple. The body is cut straight with a slight taper and lands just above the knee. Adjustable straps, no closure. It is a piece for people who want their nightwear to look like something, and it sells out faster than we can dye the fabric. Mesh bag on a cold delicate cycle, dry flat, and keep it away from anything with a hook or a zip that could pull the lace.",
  },

  // ------------------------------------------------------------------ Men's
  {
    id: 21,
    name: "Powder Blue Sleep Set",
    slug: "powder-blue-sleep-set",
    price: 35,
    category: "Men's Sleepwear",
    fabric: "Cotton poplin",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    bestSeller: true,
    image: img("powder-blue-sleep-set"),
    description:
      "A two-piece in a pale blue cotton poplin — a camp-collar shirt and a matching pair of drawstring trousers. Poplin is the right cloth for a sleep set in a warm climate: tightly woven so it holds a crisp line, but thin enough that it never feels close. The shirt has a relaxed camp collar that lies flat whether it is buttoned or open, a single chest pocket, and a straight hem meant to be worn out. The trousers sit on the natural waist with a covered elastic back and a flat front, so there is no bunching where you lie on it, and a real drawstring rather than a decorative one. Both pieces are piped in white along the collar, cuff, and pocket edge, which is the traditional detail that makes a sleep set look considered. Machine wash warm, tumble low, warm iron. It will soften with every wash without losing shape.",
  },
  {
    id: 22,
    name: "Ember Satin Lounge Shirt",
    slug: "ember-satin-lounge-shirt",
    price: 38,
    category: "Men's Sleepwear",
    fabric: "Satin",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    image: img("ember-satin-lounge-shirt"),
    description:
      "A deep red satin lounge shirt cut long in the body and easy through the shoulder, with a full button front and a notch collar that sits properly flat when open. Satin is unforgiving of bad construction — every pucker shows — so this one is sewn with a fine needle and a long stitch length, and the seams are pressed open rather than serged to one side, which is slower to make and lies far cleaner. The sleeves are set with a low armhole for room to move, finished in a simple two-button cuff. It works as a sleep shirt on its own or over our Crimson Satin Sleep Set trousers. Because satin is a filament yarn it shows snags, so keep it away from velcro and rough timber. Cold wash on delicate, hang immediately, and a cool iron on the reverse restores the finish.",
  },
  {
    id: 23,
    name: "Crimson Satin Sleep Set",
    slug: "crimson-satin-sleep-set",
    price: 36,
    category: "Men's Sleepwear",
    fabric: "Satin",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    bestSeller: true,
    image: img("crimson-satin-sleep-set"),
    description:
      "The full crimson set: a short-sleeved satin shirt with a matching pair of relaxed trousers, both in the same pre-washed satin so the colour and the hand are identical between pieces. Getting a shirt and trouser to match exactly sounds obvious and rarely happens, because most sets are cut from two different rolls; we cut ours from a single dye lot per size run. The shirt has a camp collar and a chest pocket; the trousers have side seam pockets deep enough to actually hold a phone, an elasticated waist, and a straight leg with no cuff. It is designed to be worn around the house as much as slept in, which is why the shirt is cut close enough not to look like pyjamas from a distance. Cold wash inside out, hang dry, cool iron if wanted.",
  },
  {
    id: 24,
    name: "Holiday Knit Sleep Set",
    slug: "holiday-knit-sleep-set",
    price: 28,
    compareAt: 35,
    category: "Men's Sleepwear",
    fabric: "Cotton jersey",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    image: img("holiday-knit-sleep-set"),
    description:
      "A soft cotton jersey set in red and cream — a long-sleeved top and matching lounge trousers, cut for the few weeks of the year when Lagos gets genuinely cool at night and for anyone who keeps the air conditioning low. The jersey is a mid-weight single knit with a brushed inside face, warm without the bulk of a fleece. The top has a set-in sleeve and a ribbed crew neck that keeps its shape; the trousers have a ribbed waistband with an internal drawcord and elasticated cuffs at the ankle. Jersey is the easiest thing in the collection to care for — machine wash warm, tumble dry, done. Do not use fabric softener, which flattens the brushed face over time. It is the set that gets given as a gift most often, and the one people are least likely to admit they wear year-round.",
  },
  {
    id: 25,
    name: "Lavender Linen Sleep Kurta",
    slug: "lavender-linen-sleep-kurta",
    price: 34,
    category: "Men's Sleepwear",
    fabric: "Washed linen",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    newArrival: true,
    image: img("lavender-linen-sleep-kurta"),
    description:
      "A long kurta-cut sleep shirt in a washed lavender linen, worn loose over matching trousers or on its own. Linen is the coolest fibre we work with — it conducts heat away from the body rather than trapping it — and washing the cloth before cutting takes out the stiffness that puts people off buying it. The kurta has a short mandarin placket with four tonal buttons, long sleeves you can push up and leave up, and deep side vents from the hip so it never pulls when you sit. The hem falls to mid-thigh. Linen creases and there is no way around that; the fabric is chosen for how it feels at three in the morning, not how it looks folded. It softens dramatically over the first ten washes and then keeps improving. Machine wash cool, line dry, press damp if you want it smooth.",
  },
  {
    id: 26,
    name: "Heritage Cotton Sleep Kurta",
    slug: "heritage-cotton-sleep-kurta",
    price: 33,
    category: "Men's Sleepwear",
    fabric: "Cotton",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    image: img("heritage-cotton-sleep-kurta"),
    description:
      "Cut to the same long, easy kurta pattern as our linen version but made up in a plain-weave cotton, for anyone who wants the shape without the creasing. The cotton is a medium weight with a dry, slightly matte surface that does not cling in humidity. The placket runs a little longer than the linen kurta and the collar is a touch taller, both small changes that make it read more like clothing and less like nightwear, which matters if you take deliveries at the door. Side vents, dropped shoulders, and a straight hem. It comes in a set of muted colours we re-cut every season based on what sells rather than what a trend forecast says. Machine wash warm, tumble dry low, and it will shrink less than one percent because the cloth is pre-shrunk before cutting. Warm iron for a crisp finish.",
  },
  {
    id: 27,
    name: "Azure Lounge Kurta Set",
    slug: "azure-lounge-kurta-set",
    price: 35,
    category: "Men's Sleepwear",
    fabric: "Cotton blend",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    image: img("azure-lounge-kurta-set"),
    description:
      "A bright azure kurta with a contrast waistcoat panel and matching straight-leg trousers, sitting at the more dressed end of what we make — the set to own if you receive family at home and want to be comfortable without being caught in pyjamas. The kurta is cut in a cotton blend with a small amount of polyester for wrinkle recovery, a compromise we make deliberately on this piece because it is meant to be seen. The trousers are cut narrow through the leg with an elasticated back waist and a flat front. The panel detail is stitched, not printed, and the buttons are tonal. Machine wash cool on a normal cycle, hang dry, and it needs almost no ironing thanks to the blend. Avoid high heat, which is the one thing that will glaze the surface of the cloth.",
  },
  {
    id: 28,
    name: "Indigo Cotton Sleep Kurta",
    slug: "indigo-cotton-sleep-kurta",
    price: 32,
    category: "Men's Sleepwear",
    fabric: "Cotton",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    image: img("indigo-cotton-sleep-kurta"),
    description:
      "A deep indigo kurta and trouser set in a plain cotton, kept as simple as we could make it: no piping, no pocket, no contrast. Just a well-cut long shirt with a short placket and a matching pair of drawstring trousers. Indigo is the colour we get asked for most and the hardest to keep consistent, so we buy the whole season's cloth in one lot rather than reordering — it means the shirt you buy in December matches the trousers you bought in June. The cut is generous through the chest and body with a dropped shoulder, and the trousers have a wide elasticated waist and a straight leg that breaks at the ankle. Wash cold for the first three cycles and separately, because indigo will give up some dye early no matter how well it is fixed. After that it is machine washable warm with anything.",
  },
  {
    id: 29,
    name: "Dusk Silk Lounge Kurta",
    slug: "dusk-silk-lounge-kurta",
    price: 37,
    category: "Men's Sleepwear",
    fabric: "Silk blend",
    sizes: ["S", "M", "L", "XL"],
    inStock: true,
    image: img("dusk-silk-lounge-kurta"),
    description:
      "Our most considered men's piece: a silk-blend kurta in a deep bronze-brown with a subtle woven texture running through the cloth, cut long and worn over slim trousers in a tonal shade. The blend is silk with cotton, which gives the lustre of silk with enough body to hold a shape and enough durability to survive a domestic wash. The collar is a low band, the placket is faced in a contrasting weave that only shows when the top button is open, and the cuffs close with a single covered button. Side vents run high for movement. It reads as something you would wear to a late dinner rather than to bed, which is exactly the intention — the whole point of good loungewear is that it does not force you to change. Hand wash cold or dry clean, dry flat away from the sun, and steam rather than iron.",
  },
  {
    id: 30,
    name: "Burgundy Rib Sleep Set",
    slug: "burgundy-rib-sleep-set",
    price: 38,
    category: "Men's Sleepwear",
    fabric: "Ribbed cotton knit",
    sizes: ["S", "M", "L", "XL", "XXL"],
    inStock: true,
    newArrival: true,
    image: img("burgundy-rib-sleep-set"),
    description:
      "A ribbed cotton knit set in a deep burgundy — long-sleeved top and matching trousers, both in the same 2x2 rib. Rib knit stretches across the body and recovers, so the set moves with you and does not bag out at the knee and elbow the way a flat jersey does after a few nights. The top has a crew neck, dropped shoulders and a straight hem; the trousers have a wide ribbed waistband with a flat drawcord and taper gently to the ankle. It is a heavier set than most of what we make, meant for cold rooms and cold seasons. Rib knit is best washed cool and dried flat or on a low tumble; hanging a heavy rib garment wet will stretch the shoulders permanently. Skip the softener and it will hold its recovery for years.",
  },

  // ---------------------------------------------------------- Robes/Kimonos
  {
    id: 31,
    name: "Sunday Morning Wrap Robe",
    slug: "sunday-morning-wrap-robe",
    price: 35,
    category: "Robes & Kimonos",
    fabric: "Brushed cotton",
    sizes: ["S/M", "L/XL"],
    inStock: true,
    bestSeller: true,
    image: img("sunday-morning-wrap-robe"),
    description:
      "A soft, unstructured wrap robe in a brushed cotton, cut mid-length and tied with a wide self-belt through proper belt loops — not the flimsy thread loops that give out after a month. The whole design brief was warmth without weight, so the cloth is napped on both faces but kept light enough to wear over a slip without overheating. There are two deep patch pockets set low enough to rest your hands in naturally, a shawl collar cut in one piece so there is no seam at the back of the neck, and a generous overlap at the front that stays closed when you sit. The sleeves are wide and finished with a plain hem you can push up. Machine wash warm, tumble dry low to raise the nap, and avoid fabric softener. It is the piece most likely to end up permanently on the back of a bedroom door.",
  },
  {
    id: 32,
    name: "Scarlet Botanical Kimono",
    slug: "scarlet-botanical-kimono",
    price: 40,
    category: "Robes & Kimonos",
    fabric: "Printed satin",
    sizes: ["One size"],
    inStock: true,
    image: img("scarlet-botanical-kimono"),
    description:
      "A scarlet satin kimono printed with a gold botanical pattern, cut on a true kimono block with square dropped sleeves and no shoulder seam. That construction is what gives a kimono its particular fall; a robe cut with a set-in sleeve will never hang the same way. The print is placed so the densest part of the pattern runs down the sleeve and the front panel, leaving the back quieter. It ties with a matching sash and there are no pockets, deliberately — a pocket cut into this cloth would break the print and pull the drape out of line. Sized as one size with a long body, it works over anything from a slip to a full sleep set. Hand wash cold or dry clean; hang immediately and never wring the sleeves, which carry most of the print and most of the weight.",
  },
  {
    id: 33,
    name: "Pinstripe Satin Robe",
    slug: "pinstripe-satin-robe",
    price: 36,
    category: "Robes & Kimonos",
    fabric: "Satin",
    sizes: ["S/M", "L/XL"],
    inStock: true,
    newArrival: true,
    image: img("pinstripe-satin-robe"),
    description:
      "A satin robe woven with a fine self-coloured pinstripe, so the stripe reads as texture rather than pattern and the piece stays quiet enough for every day. It is cut mid-thigh with a shawl collar, wide sleeves, and a tie belt. The stripe is matched across the front opening and around the belt, which is the kind of thing nobody consciously notices and everybody sees when it is done badly. Two side seam pockets are cut in the seam rather than patched on, keeping the surface clean. The satin has a washed finish, so the sheen is low and it does not slide off the shoulders the way a high-lustre satin does. Cold machine wash on delicate, hang dry on a broad hanger, cool iron on the reverse. The belt is replaceable — write to us and we will send another rather than have you retire the robe.",
  },
  {
    id: 34,
    name: "Ivory Lace Peignoir",
    slug: "ivory-lace-peignoir",
    price: 39,
    category: "Robes & Kimonos",
    fabric: "Chiffon with lace",
    sizes: ["S", "M", "L"],
    inStock: true,
    image: img("ivory-lace-peignoir"),
    description:
      "A full-length peignoir in ivory chiffon with wide lace panels running the length of each front edge and around the cuff. It is the most decorative thing we make and the least practical, which we say plainly — this is a piece for an occasion, not for making tea in. The chiffon is a fine polyester rather than silk, chosen because silk chiffon of this weight will not survive being tied at the waist, and because it lets us price the piece somewhere reasonable. The lace is a soft corded net with a scalloped edge, joined to the chiffon with a narrow French seam so nothing sits raw against the arm. It ties with a self-belt and layers over our Moonlight Satin Gown as a set. Hand wash only, cold, and dry flat. Never tumble dry — heat will cockle the chiffon permanently.",
  },
  {
    id: 35,
    name: "Antique Lace Sleep Robe",
    slug: "antique-lace-sleep-robe",
    price: 40,
    category: "Robes & Kimonos",
    fabric: "Cotton lace",
    sizes: ["S", "M", "L"],
    inStock: true,
    bestSeller: true,
    image: img("antique-lace-sleep-robe"),
    description:
      "A long robe built almost entirely from a cotton lace, worked in horizontal bands of differing patterns so the density changes as it falls — heavier at the shoulder, opening up towards the hem. Cotton lace is rarer and considerably more expensive than the nylon lace most nightwear uses, but it breathes, it softens with washing, and it does not go shiny with age. The bands are joined with fine ladder-stitch insertion rather than overlapped seams, a slower method that leaves both faces of the robe finished. Long sleeves, a ribbon tie at the throat, and no belt — it is meant to hang open. This is the piece in the collection most likely to still be around in twenty years. Hand wash in cool water with a mild soap, roll in a towel, and dry flat. Do not hang it wet; the weight will pull the bands out of true.",
  },
  {
    id: 36,
    name: "Midnight Waffle Robe",
    slug: "midnight-waffle-robe",
    price: 34,
    category: "Robes & Kimonos",
    fabric: "Waffle cotton",
    sizes: ["S/M", "L/XL"],
    inStock: true,
    image: img("midnight-waffle-robe"),
    description:
      "A deep navy robe in a waffle-weave cotton, the same construction used for good hotel robes and for the same reason: the honeycomb structure holds air, so it is warm, and it holds water, so it works straight out of a shower. It is a lighter, faster-drying alternative to towelling, which in Lagos humidity matters more than the warmth does. Cut mid-length with a shawl collar, two patch pockets, and a self-belt on secured loops. The weave is dense enough to be fully opaque. Waffle cotton relaxes with washing and gains its texture over the first few cycles rather than losing it, so it genuinely improves for a while before settling. Machine wash warm, tumble dry medium — this is the one piece in the collection that likes a hot dryer, which lifts the waffle back up. No softener, ever.",
  },
  {
    id: 37,
    name: "Charcoal Belted Robe",
    slug: "charcoal-belted-robe",
    price: 33,
    category: "Robes & Kimonos",
    fabric: "Modal blend",
    sizes: ["S/M", "L/XL"],
    inStock: true,
    image: img("charcoal-belted-robe"),
    description:
      "A long charcoal robe in a modal blend knit, cut lean rather than voluminous so it reads more like a coat than a dressing gown. That was the point: something to pull on over a slip when the doorbell goes that does not immediately announce that you have not got dressed. The knit has a fluid drape and a matte surface, and the colour is a true charcoal with no blue in it. It has a shawl collar, in-seam pockets, a tie belt, and a hem that falls to mid-calf. Because it is a knit rather than a woven it packs down small and does not crease, which makes it the robe we recommend for travelling. Machine wash cool, hang or dry flat, and no ironing required. A lint roller is more use than an iron with this fabric.",
  },
  {
    id: 38,
    name: "Sunrise Terry Robe",
    slug: "sunrise-terry-robe",
    price: 30,
    category: "Robes & Kimonos",
    fabric: "Cotton terry",
    sizes: ["S/M", "L/XL"],
    inStock: true,
    image: img("sunrise-terry-robe"),
    description:
      "A proper cotton terry robe in a warm sand colour, made from a mid-weight looped towelling that dries you off without the density of a spa robe you cannot lift when it is wet. Both faces are looped, so it absorbs from either side, and the loops are woven from a long-staple cotton that will not shed onto everything you own after the first wash. It is cut generously with a shawl collar, two large patch pockets, wide sleeves, and a thick self-belt. The hem sits just above the knee. This is the practical end of the collection — it is the robe for a morning routine rather than an evening one. Machine wash warm, tumble dry, and wash it separately the first time to shed the loose lint from weaving. It gets softer and more absorbent for the first six months of use.",
  },
  {
    id: 39,
    name: "Watercolour Print Kimono",
    slug: "watercolour-print-kimono",
    price: 32,
    category: "Robes & Kimonos",
    fabric: "Printed viscose",
    sizes: ["One size"],
    inStock: true,
    image: img("watercolour-print-kimono"),
    description:
      "A short kimono in a printed viscose, patterned with an abstract watercolour wash in coral, ochre and sky. The print is digitally printed rather than screened, which is the only way to hold the soft gradient edges that make a watercolour read as a watercolour instead of a series of flat blocks. Viscose gives it a cool, fluid hand — it is the fabric that feels almost cold to the touch when you first put it on, which is no small thing in a Lagos bedroom. Cut with dropped square sleeves and a straight hem at the hip, tied with a narrow self-sash. There are no pockets. It is the piece to throw over a plain camisole to make an outfit out of it. Hand wash cold or use a delicate cycle in a bag — viscose loses strength when wet, so handle it gently and dry flat rather than hanging.",
  },
  {
    id: 40,
    name: "Rosewater Satin Kimono",
    slug: "rosewater-satin-kimono",
    price: 35,
    category: "Robes & Kimonos",
    fabric: "Satin",
    sizes: ["One size"],
    inStock: true,
    image: img("rosewater-satin-kimono"),
    description:
      "A soft rose satin kimono cut to just above the knee, with the square sleeve and seamless shoulder of a traditional kimono block and a wide obi-style sash that wraps twice at the waist. The double wrap is what distinguishes it from a standard robe — it holds the front closed properly and gives the waist a defined line rather than a bunched knot. The satin is washed for a low sheen, so the colour stays soft and does not shine under a bedroom light. The sleeve openings are wide, and the seams are French-finished throughout, meaning the inside is as neat as the outside. It layers over almost everything else in the collection. Cold delicate wash in a mesh bag, hang dry immediately, cool iron on the reverse if it has been folded. Keep the sash rolled rather than knotted in storage to avoid a permanent crease.",
  },

  // ------------------------------------------------------------ Lounge Sets
  {
    id: 41,
    name: "Lilac Cloud Lounge Top",
    slug: "lilac-cloud-lounge-top",
    price: 26,
    category: "Lounge Sets",
    fabric: "Brushed fleece",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    newArrival: true,
    image: img("lilac-cloud-lounge-top"),
    description:
      "An oversized lilac sweatshirt in a brushed fleece, cut short in the body and wide through the shoulder so it sits over lounge pants or a slip without adding length. The inside face is brushed to a genuinely soft nap and the outside is left smooth, which keeps it from pilling against a bag strap or a car seat. Ribbed cuffs and hem are knitted rather than cut and turned, so they hold their shape. The neckline is a wide crew with a covered seam at the back — a small comfort detail that stops the tape rubbing. It is the least formal thing we make and the one that gets worn outside the house most often. Machine wash cool inside out, tumble dry low, and do not iron the brushed face. It will stay soft for a couple of hundred washes if it never sees high heat.",
  },
  {
    id: 42,
    name: "Onyx Relaxed Lounge Set",
    slug: "onyx-relaxed-lounge-set",
    price: 37,
    category: "Lounge Sets",
    fabric: "Cotton fleece",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    bestSeller: true,
    image: img("onyx-relaxed-lounge-set"),
    description:
      "A black two-piece in a heavy cotton fleece — a boxy crew-neck sweatshirt with a matching pair of wide-leg lounge trousers. The cut is deliberately oversized on both pieces, with dropped shoulders on the top and a high, wide waistband on the trousers that sits above the natural waist. Everything is designed around a single idea: nothing should touch you closely. The fleece is a loopback rather than a brushed back, which means it breathes better and holds its structure through the wash instead of going limp. The trousers have side seam pockets and a flat internal drawcord. Both pieces are pre-shrunk, so the fit you get is the fit you keep. Machine wash cool, tumble dry low, wash inside out to protect the black. It is the set most of our team owns in two colours.",
  },
  {
    id: 43,
    name: "Heather Grey Lounge Pants",
    slug: "heather-grey-lounge-pants",
    price: 24,
    category: "Lounge Sets",
    fabric: "Cotton jersey",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    image: img("heather-grey-lounge-pants"),
    description:
      "Wide-leg lounge trousers in a heather grey cotton jersey, cut long and full from a high waist so they fall in a straight line from hip to floor. The waistband is a wide fold-over rib with the elastic enclosed rather than exposed, which means it can be worn folded down or pulled up without either version cutting in. There are no pockets, which keeps the front completely flat — pockets are the reason most lounge trousers bag out at the hip. The leg is cut with a generous rise so nothing pulls when you sit cross-legged. Heather grey is a melange yarn, spun from two fibre shades before knitting, so the colour has depth rather than looking flat and the piece hides creasing well. Machine wash warm, tumble dry low. They will be the first thing you reach for and the last thing you fold.",
  },
  {
    id: 44,
    name: "Bubblegum Fleece Lounge Set",
    slug: "bubblegum-fleece-lounge-set",
    price: 34,
    compareAt: 41,
    category: "Lounge Sets",
    fabric: "Brushed fleece",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    image: img("bubblegum-fleece-lounge-set"),
    description:
      "A bright pink fleece set — oversized sweatshirt and matching wide trousers — for people who see no reason for loungewear to be beige. The colour is a reactive dye taken to full saturation, which is why it holds rather than fading to a chalky pastel after a season; cheaper pigment dyes on a fleece will always wash down. Both pieces are cut with volume: dropped shoulders and a cropped body on the top, a high elasticated waist and a full leg on the trousers. The fleece is brushed on the inside only and the fibre is a cotton-rich blend, so it is warm without the plastic feel of a polyester fleece. Machine wash cool inside out with like colours, tumble dry low. Wash it separately for the first couple of cycles — a colour this strong will always release a little at the start.",
  },
  {
    id: 45,
    name: "Pastel Marl Lounge Set",
    slug: "pastel-marl-lounge-set",
    price: 32,
    category: "Lounge Sets",
    fabric: "Marl cotton knit",
    sizes: ["XS", "S", "M", "L"],
    inStock: true,
    image: img("pastel-marl-lounge-set"),
    description:
      "A soft pastel marl knit set, cut closer to the body than the rest of our lounge range — a fitted long-sleeved top with a matching pair of straight-leg trousers. It is the set for people who find oversized loungewear more like a duvet than clothing. The marl is knitted from a blend of pale pink, lilac and cream yarns, so the surface has a gentle mottled depth that a solid colour cannot give. The knit is fine gauge with a small amount of elastane for recovery at the knee and elbow, the two places a fitted knit set will always go first. The top has a ribbed crew neck and the trousers have a plain elasticated waist with no drawcord. Machine wash cool, dry flat to protect the shape, and reshape the cuffs while damp. Avoid the tumble dryer entirely on this one.",
  },
  {
    id: 46,
    name: "Ruby Satin Short Set",
    slug: "ruby-satin-short-set",
    price: 33,
    category: "Lounge Sets",
    fabric: "Satin",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    image: img("ruby-satin-short-set"),
    description:
      "A short-sleeved satin shirt with matching shorts in a deep ruby, piped throughout in a tonal cord so the edges hold a crisp line. Piping is the detail that separates a considered sleep set from a cheap one; it takes an extra operation on every seam it touches and it is the first thing manufacturers drop to save money. The shirt has a camp collar, a chest pocket, and a straight hem. The shorts sit on the hip with an elasticated back waist and a flat front, cut with a proper curved side seam so they hang rather than ride. Both pieces are lined only where they need to be — nowhere — because the satin is heavy enough to be opaque on its own. Cold delicate wash, hang dry, cool iron on the reverse. Store it hanging so the piping does not crease along its length.",
  },
  {
    id: 47,
    name: "Cardinal Piped Pyjama Set",
    slug: "cardinal-piped-pyjama-set",
    price: 36,
    category: "Lounge Sets",
    fabric: "Cotton sateen",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    bestSeller: true,
    image: img("cardinal-piped-pyjama-set"),
    description:
      "The traditional pyjama, done properly: a long-sleeved cotton sateen shirt with a notch collar, a full button placket, a chest pocket, and a matching pair of straight-leg trousers, all piped in cream. Sateen is a cotton woven with a satin structure, so it has the sheen of satin and the breathability of cotton, which is exactly what you want for a set you will sleep in all night rather than photograph. The shirt is cut with a low armhole and a full sleeve so it never binds when you turn over, and the trousers have a drawstring waist with a covered elastic back plus a real fly. Buttons are mother-of-pearl effect and stitched with a shank so they sit properly. Machine wash warm, tumble dry low, warm iron. It is the set most likely to still be in service in five years.",
  },
  {
    id: 48,
    name: "Garnet Satin Sleep Shorts",
    slug: "garnet-satin-sleep-shorts",
    price: 23,
    category: "Lounge Sets",
    fabric: "Satin",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    image: img("garnet-satin-sleep-shorts"),
    description:
      "Satin sleep shorts in a deep garnet, sold on their own because plenty of people want the bottom half without committing to a set. They are cut short with a French-cut leg opening and a curved side seam, sitting on the hip rather than the waist. The waistband is a soft covered elastic, wide and flat, with a tonal satin bow stitched at the centre front. Two shallow side pockets are set into the seam. The satin is the same pre-washed cloth as our Rouge slip, so it will pair exactly if you want to build a set from separates. They take up almost no space, which is why they end up in every travel bag we hear about. Cold wash in a mesh bag on delicate, hang dry. Do not tumble dry — the heat tires the waistband elastic long before the satin gives out.",
  },
  {
    id: 49,
    name: "Rose Modal Pyjama Set",
    slug: "rose-modal-pyjama-set",
    price: 33,
    category: "Lounge Sets",
    fabric: "Modal knit",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    newArrival: true,
    image: img("rose-modal-pyjama-set"),
    description:
      "A dusty rose pyjama set in a modal knit — a button-through long-sleeved top with a matching pair of wide trousers. Choosing a knit rather than a woven for a classic pyjama shape is unusual and it changes everything about how the set feels: it moves with you instead of resisting, and there is no crease anywhere after a night's sleep. The top has a small notch collar, a full placket with tonal buttons, and a curved hem. The trousers are cut wide with a smooth elasticated waist and no drawcord, falling to the floor. Modal takes dye beautifully, which is why this particular soft rose stays warm rather than going grey after a few months. Machine wash cool, tumble dry low, and it comes out ready to wear — no ironing, which is most of the reason people buy a second one.",
  },
  {
    id: 50,
    name: "Cornflower Cotton Pyjama Set",
    slug: "cornflower-cotton-pyjama-set",
    price: 32,
    category: "Lounge Sets",
    fabric: "Cotton poplin",
    sizes: ["XS", "S", "M", "L", "XL"],
    inStock: true,
    image: img("cornflower-cotton-pyjama-set"),
    description:
      "A pale cornflower blue set in a crisp cotton poplin, cut as a long-sleeved shirt and full-length trousers and trimmed with a fine white contrast at the collar, cuff and pocket. Poplin is the classic pyjama cloth and it earns the position: it is cool, it washes hard, and it gets softer without going limp. The shirt has a proper two-piece collar with an interlined stand so it stands up rather than flopping, a full placket, and a single chest pocket. The trousers have a flat front waistband with elastic at the back and a drawstring, plus side seam pockets. Everything is pre-shrunk. It creases, as all poplin does, and a warm iron takes it straight out in a minute. Machine wash warm, tumble dry low, and it will look better in its third year than its first.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function byCategory(category: Category): Product[] {
  return products.filter((product) => product.category === category);
}

export const newArrivals = products.filter((p) => p.newArrival);
export const bestSellers = products.filter((p) => p.bestSeller);
export const onSale = products.filter((p) => p.compareAt !== undefined);
