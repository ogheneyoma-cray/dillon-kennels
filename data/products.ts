export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // base price in USD
  description: string;
  image: string;
  category: "Womenswear" | "Menswear" | "Footwear" | "Accessories";
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Aso-Oke Heritage Wrap Shirt",
    slug: "aso-oke-heritage-wrap-shirt",
    price: 38,
    category: "Menswear",
    inStock: true,
    image: "/products/aso-oke-heritage-wrap-shirt.jpg",
    description:
      "The Aso-Oke Heritage Wrap Shirt reinterprets a centuries-old West African weaving tradition for the modern wardrobe. Woven in small batches on narrow-strip looms, each panel is hand-joined by artisans in Iseyin before being cut and finished at our Lagos studio, which means no two shirts carry the exact same stripe rhythm. The fabric is a cotton-silk blend that feels substantial without trapping heat, making it equally suited to a humid Lagos afternoon or a cool evening reception. We cut it with a relaxed wrap-front silhouette, dropped shoulders, and a shirttail hem so it can be worn open over a plain tee or buttoned as a statement piece on its own. A single interior tie secures the wrap without a single button in sight, keeping the front clean and uncluttered. Care for it gently: hand wash in cold water, lay flat to dry, and press on the reverse with a warm iron to protect the sheen of the silk threads. This is a piece meant to be inherited, not discarded, and it only grows more characterful with wear. Pair it with tailored trousers for the office or straight denim for the weekend.",
  },
  {
    id: 2,
    name: "Lagos Linen Kaftan",
    slug: "lagos-linen-kaftan",
    price: 42,
    category: "Menswear",
    inStock: true,
    image: "/products/lagos-linen-kaftan.jpg",
    description:
      "Built for the climate it's named after, the Lagos Linen Kaftan is our warm-weather workhorse. It's cut from a heavyweight European linen that softens with every wash while holding its structure through the day, so the drape you see on the hanger is the drape you get by evening. The silhouette is generously boxy through the body with dropped shoulder seams and side vents at the hem, allowing air to move freely in a way fitted shirting simply can't. A hand-embroidered placket runs down the chest in a tonal thread that catches the light without shouting for attention, a nod to the embroidery traditions found across Yoruba agbada tailoring. We finished the neckline with a narrow band collar rather than a full collar stand, keeping the look relaxed enough for a beach wedding yet composed enough for a dinner reservation. The three-quarter sleeves are wide enough to roll without bunching. Because linen is a living fabric, expect gentle creasing to be part of its character rather than a flaw; a light steam is all it needs between wears. Machine wash cold on a delicate cycle, or hand wash for longevity.",
  },
  {
    id: 3,
    name: "Indigo Wash Denim Jacket",
    slug: "indigo-wash-denim-jacket",
    price: 47,
    category: "Menswear",
    inStock: true,
    image: "/products/indigo-wash-denim-jacket.jpg",
    description:
      "The Indigo Wash Denim Jacket is a rework of the classic trucker silhouette, built from a mid-weight 12oz cotton denim that's been stone-washed for a broken-in feel straight out of the box. We kept the details period-correct: a chest-pocket flap on each side, a button-through front, and a two-piece back yoke that gives the shoulders room to move without the jacket riding up. Where we diverged from the archive is the fit — slightly cropped at the waist and cut trim through the arm, so it layers cleanly over a hoodie without adding bulk. The hardware is solid brass, chosen because it ages honestly rather than flaking like plated alternatives, and the inner pocket is lined with a striped cotton twill for a hit of color when you reach for your phone. Every wash will lift the indigo a shade lighter and soften the hand-feel further, so this is a jacket that genuinely improves with use rather than simply wearing out. It's the kind of piece that works over a plain tee on a Tuesday and over a collared shirt on a Friday night out. Wash inside-out, cold, and sparingly to protect the wash.",
  },
  {
    id: 4,
    name: "Ankara Print Wide-Leg Trousers",
    slug: "ankara-print-wide-leg-trousers",
    price: 33,
    category: "Womenswear",
    inStock: true,
    image: "/products/ankara-print-wide-leg-trousers.jpg",
    description:
      "Our Ankara Print Wide-Leg Trousers turn a fabric usually reserved for special-occasion dressing into an everyday staple. The wax-print cotton is sourced from a family-run printworks and rendered here in a bold geometric pattern in warm terracotta, ochre, and ink tones. We cut the leg full and fluid from hip to hem, with a flat-front waistband finished in an elasticated back panel so the fit stays comfortable through a full day of movement, whether that's a market run or a desk job. Two deep side pockets are cut on the bias so they sit flat against the body instead of gaping open, and the trousers land at a clean ankle-skimming length that pairs equally well with heels or flat sandals. The wax-resist dyeing process means the color is worked into the fibre itself rather than sitting on the surface, so it resists fading far better than a standard print. Because the pattern is large-scale, we recommend styling it with a solid top to let the trousers do the talking — a fitted white shirt or a simple rib tank both work beautifully. Machine washable on a cold, gentle cycle; hang dry to preserve the crispness of the cotton.",
  },
  {
    id: 5,
    name: "Ivory Silk Slip Dress",
    slug: "ivory-silk-slip-dress",
    price: 45,
    category: "Womenswear",
    inStock: true,
    image: "/products/ivory-silk-slip-dress.jpg",
    description:
      "There's a reason the slip dress has never really left rotation, and the Ivory Silk Slip Dress is our answer to why. Cut on the true bias from a weighty mulberry silk charmeuse, it skims the body rather than clinging to it, falling in soft vertical folds from a narrow cowl neckline down to a mid-calf hem. Adjustable spaghetti straps let you fine-tune the fit across the shoulders, and a hidden side zip keeps the silhouette smooth without visible seaming at the hip. The ivory tone was chosen specifically because it photographs warm rather than clinical under most lighting, and it layers beautifully — worn alone for an evening event, under a blazer for a daytime meeting, or beneath the Indigo Wash Denim Jacket for contrast. Bias-cut silk requires a gentler hand than most fabrics in your wardrobe: dry cleaning is recommended to preserve the drape, though a careful cold hand wash with a silk-safe detergent will also work in a pinch. Store it on a padded hanger rather than folded to avoid crease lines settling into the fabric. This is the kind of dress you reach for when the occasion actually matters.",
  },
  {
    id: 6,
    name: "Terracotta Ribbed Knit Sweater",
    slug: "terracotta-ribbed-knit-sweater",
    price: 29,
    category: "Womenswear",
    inStock: true,
    image: "/products/terracotta-ribbed-knit-sweater.jpg",
    description:
      "The Terracotta Ribbed Knit Sweater is proof that a fitted knit doesn't need to sacrifice comfort for shape. Knitted in a fine rib from a cotton-modal yarn blend, it holds its structure across the shoulders while stretching easily through the torso, so it moves with you rather than against you. We chose a rounded crew neckline and set-in sleeves finished with a narrow ribbed cuff, keeping the silhouette clean enough to tuck into trousers or a skirt without excess bulk at the waistband. The terracotta shade was developed to sit between rust and clay — warm enough to read as a statement color, muted enough to work as a neutral against denim, leather, or the Ankara Print Wide-Leg Trousers. A double-ribbed hem prevents the classic knitwear problem of stretching out and losing shape after a few wears, and the yarn has been treated to resist pilling under normal use. It's lightweight enough for indoor air conditioning yet substantial enough to wear alone on a mild evening. Hand wash cold and lay flat to dry; tumble drying will shorten the life of any knit, however well made. A wardrobe staple built to be worn on repeat.",
  },
  {
    id: 7,
    name: "Charcoal Tailored Blazer",
    slug: "charcoal-tailored-blazer",
    price: 50,
    category: "Womenswear",
    inStock: true,
    image: "/products/charcoal-tailored-blazer.jpg",
    description:
      "The Charcoal Tailored Blazer is cut from a wool-blend suiting fabric with just enough stretch to move through a full workday without losing its shape by 5pm. We built it with structured shoulders, a nipped waist, and a single-button closure that creates a clean vertical line, while notched lapels and double besom pockets keep the detailing traditional rather than trend-driven. The lining is a smooth bemberg-style viscose that lets you slide the jacket on over any fabric without static or drag, and the sleeves are finished with a working three-button cuff for a genuinely tailored touch rarely found at this price point. Charcoal was chosen deliberately over true black because it reads as softer and more versatile in daylight while still photographing crisp under office lighting. Wear it buttoned over the Ivory Silk Slip Dress for an evening look, or open over a simple tee and the Ankara Print Wide-Leg Trousers for something more relaxed. The shoulder is lightly padded rather than heavily structured, so it suits a range of body types without looking stiff. Dry clean recommended; steam between wears to keep the wool fibres relaxed and the silhouette sharp.",
  },
  {
    id: 8,
    name: "Sunset Batik Maxi Dress",
    slug: "sunset-batik-maxi-dress",
    price: 40,
    category: "Womenswear",
    inStock: true,
    image: "/products/sunset-batik-maxi-dress.jpg",
    description:
      "The Sunset Batik Maxi Dress is built around a hand-dyed cotton voile in a gradient of amber, rust, and burnt orange, each length dyed individually so the exact placement of the ombre effect varies slightly from piece to piece. The bodice is fitted through a shirred elastic panel at the back for stretch without a zipper, while the skirt falls in a full circle cut that catches air and movement beautifully, whether you're walking through a market or dancing at a wedding. Thin adjustable straps and a scooped neckline keep the shoulders open and cool, and side seam pockets — genuinely large enough for a phone — are hidden seamlessly within the skirt's fullness. The voile is lightweight and semi-sheer by design, so we recommend a simple slip underneath for full coverage, sold separately or paired with our Ivory Silk Slip Dress in a coordinating tone. Batik dyeing is a wax-resist process, meaning slight variation in the pattern is a feature of the technique rather than an inconsistency. Hand wash cold in the first few washes to set the dye fully, then machine wash gentle thereafter. Hang to dry out of direct sun to preserve the vibrancy of the gradient.",
  },
  {
    id: 9,
    name: "Classic White Oxford Shirt",
    slug: "classic-white-oxford-shirt",
    price: 27,
    category: "Menswear",
    inStock: true,
    image: "/products/classic-white-oxford-shirt.jpg",
    description:
      "Every wardrobe needs one shirt that works with everything, and the Classic White Oxford Shirt is ours. Woven from a combed cotton oxford cloth with a slight basketweave texture, it has enough body to hold a crisp collar roll without feeling stiff against the skin. We cut it with a gently tapered fit through the body, a button-down collar for a more casual read, and a single chest pocket finished with a hidden button so the front stays uninterrupted. The tail is curved and long enough to stay tucked through a full day of movement, and the sleeve placket is reinforced at the stress points where cheaper shirts tend to fail first. This is the shirt that goes under the Charcoal Tailored Blazer for a boardroom meeting, gets rolled to the elbow with the Ankara Print Wide-Leg Trousers on the weekend, or layers under the Terracotta Ribbed Knit Sweater when the evening cools down. Mother-of-pearl-effect buttons add a small but genuine upgrade over the plastic buttons found on most shirts at this price. Machine washable, though we recommend a warm iron while slightly damp for the sharpest possible finish. A genuine everyday essential, built to outlast trends.",
  },
  {
    id: 10,
    name: "Olive Cargo Utility Pants",
    slug: "olive-cargo-utility-pants",
    price: 35,
    category: "Menswear",
    inStock: true,
    image: "/products/olive-cargo-utility-pants.jpg",
    description:
      "The Olive Cargo Utility Pants take the workwear cargo silhouette and refine it for everyday city wear rather than the job site it originated from. Cut from a brushed cotton twill with a soft hand-feel, they sit at the natural waist with a tapered leg that narrows gently toward the ankle, avoiding the baggy, shapeless cut cargo pants are sometimes associated with. Six functional pockets — including two bellowed side-leg pockets with flap closures — are positioned to lie flat when empty rather than pulling at the fabric, and an internal drawcord at the waistband allows for a customized fit beyond the standard sizing. The olive shade was selected for its versatility: warmer than a true khaki, cooler than a true brown, so it sits comfortably alongside both warm terracottas and cool charcoals already in your wardrobe. A double row of stitching at the knee and seat reinforces the highest-wear areas without adding visible bulk. Wear them with the Classic White Oxford Shirt tucked in for a smart-casual look, or with a plain tee and the Onyx Leather Ankle Boots for something more rugged. Machine wash cold, tumble dry low, and expect the twill to soften noticeably after the first few washes.",
  },
  {
    id: 11,
    name: "Coral Puff-Sleeve Blouse",
    slug: "coral-puff-sleeve-blouse",
    price: 24,
    category: "Womenswear",
    inStock: true,
    image: "/products/coral-puff-sleeve-blouse.jpg",
    description:
      "The Coral Puff-Sleeve Blouse brings a touch of drama to an otherwise simple silhouette. Made from a lightweight cotton-poplin in a saturated coral tone, the blouse features dramatic balloon sleeves gathered into a fitted cuff, contrasting a fitted, tapered body that tucks neatly into high-waisted trousers or skirts. A round neckline with a delicate ruffle trim frames the collarbone without ever feeling fussy, and a row of self-covered buttons runs the full length of the front for a clean, considered finish. The poplin has just enough structure to hold the volume in the sleeves through a full day of wear without collapsing, while remaining soft enough against the skin for all-day comfort. Coral was chosen as a warm counterpoint to the more muted earth tones across the rest of the collection, making it easy to use as a single statement piece against neutral bottoms like the Olive Cargo Utility Pants or a plain black skirt. The fabric is finished with a soil-release treatment, making everyday spills easier to manage. Machine wash cold on a gentle cycle and hang to dry; a cool iron on the reverse will keep the ruffle detailing crisp without flattening the poplin's texture.",
  },
  {
    id: 12,
    name: "Onyx Leather Ankle Boots",
    slug: "onyx-leather-ankle-boots",
    price: 49,
    category: "Footwear",
    inStock: true,
    image: "/products/onyx-leather-ankle-boots.jpg",
    description:
      "The Onyx Leather Ankle Boots are built on a full-grain leather upper that's been vegetable-tanned for a rich, matte-black finish that deepens with polish over time rather than cracking or peeling like bonded leather alternatives. We used a Chelsea-inspired silhouette with elasticated side gussets for an easy on-off fit, no laces or buckles required, and a stacked block heel that adds just over an inch of height while keeping the profile stable enough for a full day on your feet. The insole is cushioned with a layer of memory foam beneath the leather lining, and the outsole is a durable rubber compound with a subtle tread pattern for grip on both wet pavement and dry tile. A pull tab at the back makes them easy to step into, and the toe is rounded rather than pointed, giving the boot a shape that works equally well under wide-leg trousers or a midi skirt. These boots are designed to be a genuine workhorse in a capsule wardrobe: pair them with the Ankara Print Wide-Leg Trousers, the Ivory Silk Slip Dress, or simple denim, and they'll look intentional in every case. Condition the leather every few months with a natural leather balm to keep it supple and crack-free.",
  },
  {
    id: 13,
    name: "Sand Suede Loafers",
    slug: "sand-suede-loafers",
    price: 39,
    category: "Footwear",
    inStock: true,
    image: "/products/sand-suede-loafers.jpg",
    description:
      "The Sand Suede Loafers are cut from a soft, brushed suede in a warm sand tone that reads as neutral against nearly everything else in the collection, from the Indigo Wash Denim Jacket to the Charcoal Tailored Blazer. The penny-strap detail across the vamp is a nod to the classic loafer archetype, though we've kept the toe box slightly more rounded and the overall profile lower for a more contemporary, streamlined look. Inside, a leather-lined footbed molds to the shape of your foot over the first few wears, and a lightly cushioned midsole absorbs impact well enough for genuine all-day wear, not just short errands. The outsole is a natural crepe-effect rubber that adds noticeable grip without disrupting the clean lines of the shoe from above. Suede is a genuinely delicate material, so we recommend treating these with a suede protector spray before the first wear and keeping a suede brush on hand to lift any surface marks. Avoid wearing them in heavy rain, where possible — a small trade-off for a texture that elevates even the simplest outfit. Slip them on with rolled denim and bare ankles for warm-weather days, or with wool trousers for a dressier, no-socks look.",
  },
  {
    id: 14,
    name: "Woven Raffia Tote Bag",
    slug: "woven-raffia-tote-bag",
    price: 22,
    category: "Accessories",
    inStock: true,
    image: "/products/woven-raffia-tote-bag.jpg",
    description:
      "The Woven Raffia Tote Bag is hand-woven from natural raffia palm fibre by artisans working in small cooperative groups, using a technique passed down across generations rather than a machine process. Each bag takes several hours to complete, and the natural variation in the fibre's tone — from pale straw to deeper amber — means every tote is genuinely one of a kind. We lined the interior with a durable cotton canvas in a warm rust tone, which also holds an inner zip pocket for keys, cards, or a phone, since raffia alone can't offer that kind of secure storage. Two structured top handles are reinforced with an internal leather wrap where they meet the body of the bag, the point that takes the most stress over years of daily use, and a magnetic snap closure keeps the top secure without needing a zip that can snag the fibres. The bag holds its rectangular shape well even when lightly loaded, making it a genuinely practical everyday carry rather than a decorative piece that collapses the moment you put anything in it. Spot clean only with a barely damp cloth, and keep it away from prolonged direct moisture, as natural raffia is not fully waterproof.",
  },
  {
    id: 15,
    name: "Beaded Coral Statement Necklace",
    slug: "beaded-coral-statement-necklace",
    price: 18,
    category: "Accessories",
    inStock: true,
    image: "/products/beaded-coral-statement-necklace.jpg",
    description:
      "The Beaded Coral Statement Necklace is hand-strung using a mix of recycled glass beads and coral-toned resin beads, layered across five graduated strands that sit close to the collarbone rather than hanging low, so it reads as a finishing detail rather than an overpowering centerpiece. Each strand is threaded onto a durable nylon-coated wire rather than plain string, which resists stretching and snapping far better over repeated wear. The clasp is a secure lobster-style closure in an antiqued gold-tone finish that complements the warm palette of the beads without looking overly shiny or costume-like. Because the beads are individually strung and knotted at intervals, if one bead were ever to loosen, the rest of the strand stays intact rather than scattering entirely — a small construction detail that matters a great deal in daily wear. This piece was designed as the finishing touch for simpler silhouettes: worn against the round neckline of the Coral Puff-Sleeve Blouse it becomes a tonal layering piece, or against the plain scoop neck of a white tee it becomes the whole outfit's focal point. Store it flat or hanging rather than balled up in a drawer, and avoid contact with perfume or lotion directly on the beads to preserve their finish.",
  },
  {
    id: 16,
    name: "Adire Print Bomber Jacket",
    slug: "adire-print-bomber-jacket",
    price: 44,
    category: "Menswear",
    inStock: true,
    image: "/products/adire-print-bomber-jacket.jpg",
    description:
      "The Adire Print Bomber Jacket takes adire, the resist-dye technique historically practiced by Yoruba women using cassava starch paste and indigo, and applies it to a modern bomber silhouette. The indigo pattern is hand-applied in a traditional geometric motif before dyeing, then cut and constructed as a lightweight cotton-poplin bomber with a ribbed collar, cuffs, and hem that keep the fit close to the body without restricting movement. A two-way front zip allows the jacket to be worn fully closed for a streamlined look or cracked open at the bottom when seated, a small but genuinely useful detail borrowed from technical outerwear. Two zippered hand pockets sit at hip height, deep enough to secure a phone and keys securely while walking. Because the dye process is entirely manual, expect natural variation in pattern placement and indigo saturation between pieces, which is very much the point rather than a flaw — no factory print can replicate it. The jacket is unlined, making it best suited to transitional weather rather than genuine cold, and pairs naturally with the Classic White Oxford Shirt underneath or worn alone over a plain tee. Hand wash cold separately for the first several washes, as indigo dye will continue to release minor color for some time.",
  },
  {
    id: 17,
    name: "Camel Wool-Blend Overcoat",
    slug: "camel-wool-blend-overcoat",
    price: 50,
    category: "Womenswear",
    inStock: true,
    image: "/products/camel-wool-blend-overcoat.jpg",
    description:
      "The Camel Wool-Blend Overcoat is the collection's outerwear anchor: a full-length, double-breasted coat cut from a wool-viscose blend with enough structure to hold its shape through a season of wear without ever feeling stiff. We used a notch lapel, a self-belt with matching belt loops for a cinched or relaxed fit depending on the day, and set-in sleeves finished with a functional button cuff. The camel tone was chosen carefully to skew slightly warmer than a classic camel, closer to the terracotta and clay tones found elsewhere in the range, so it reads as intentional rather than accidental when styled with the rest of the collection. Twin front pockets are positioned at a genuinely useful hand-warming height, and the interior is fully lined in a smooth, static-resistant fabric that makes it easy to slide over blazers, sweaters, or bulkier layers without bunching. At just below knee length, it strikes a balance between formal enough for the office and relaxed enough for a Saturday errand run. Given the weight and structure of the wool blend, dry cleaning is strongly recommended over home washing, and we suggest storing it on a wide, curved hanger during the off-season to preserve the shoulder line.",
  },
  {
    id: 18,
    name: "Emerald Satin Camisole",
    slug: "emerald-satin-camisole",
    price: 19,
    category: "Womenswear",
    inStock: true,
    image: "/products/emerald-satin-camisole.jpg",
    description:
      "The Emerald Satin Camisole is a wardrobe multiplier disguised as a simple piece. Cut from a smooth, weighty satin with a subtle sheen rather than a high-gloss finish, it holds a deep emerald tone that reads as rich rather than costume-bright under most lighting. A scooped neckline and adjustable straps sit comfortably under a blazer or on their own for evening wear, and a straight, gently curved hem sits just at the hip, long enough to tuck cleanly into high-waisted trousers or skirts without riding up. The satin is woven with a small percentage of elastane, which most pure silk camisoles lack, giving it a closer, more consistent fit across different body shapes while retaining that fluid, light-catching drape satin is known for. French seams throughout mean there's no rough interior stitching against the skin, a detail usually reserved for far more expensive pieces. Worn alone, it's a striking evening top; worn under the Charcoal Tailored Blazer, it becomes the single pop of color in an otherwise neutral outfit. Hand wash cold with a gentle detergent, or use a mesh laundry bag on a cold, delicate machine cycle, and always hang or lay flat to dry rather than wringing the fabric.",
  },
  {
    id: 19,
    name: "Canvas High-Top Sneakers",
    slug: "canvas-high-top-sneakers",
    price: 32,
    category: "Footwear",
    inStock: true,
    image: "/products/canvas-high-top-sneakers.jpg",
    description:
      "The Canvas High-Top Sneakers are built from a heavyweight, tightly woven cotton canvas that resists stretching and sagging far longer than the lighter canvas typically used in budget sneakers. The high-top silhouette wraps and supports the ankle without restricting its movement, secured by a genuine metal-eyelet lace-up front and finished with a padded canvas collar around the top edge for comfort against the ankle bone. Inside, a removable cushioned insole allows for a custom orthotic swap if needed, and the midsole is a lightweight EVA foam that provides genuine shock absorption rather than the flat, unpadded feel common to cheaper canvas shoes. The rubber outsole extends slightly up the toe cap for reinforcement, protecting the canvas at the point that wears through fastest on any sneaker. We kept the colorway to a warm off-white canvas with rust-toned laces and a matching heel tab, so the shoes read as a coordinated part of the collection rather than a generic add-on. They're the natural pairing for the Olive Cargo Utility Pants or straight denim, and casual enough to wear with the Lagos Linen Kaftan on relaxed days. Spot clean the canvas with a damp cloth and mild soap, and air dry fully before wearing again to prevent the canvas from stiffening.",
  },
  {
    id: 20,
    name: "Leather Woven Belt",
    slug: "leather-woven-belt",
    price: 15,
    category: "Accessories",
    inStock: true,
    image: "/products/leather-woven-belt.jpg",
    description:
      "The Leather Woven Belt is constructed from interlaced strips of genuine full-grain leather, hand-woven into a basketweave pattern that gives it far more flexibility than a single-piece belt while remaining sturdy enough to support a full day of wear. Because it's woven rather than cut as one solid strip, it moves naturally with the body and avoids the stiff, uncomfortable break-in period typical of rigid leather belts. A brushed antique-brass buckle finishes the front with a simple, understated pin closure that pairs well with both formal and casual buckle-adjacent hardware already in your wardrobe. The weave pattern also means the belt works through a wider range of waist adjustment without needing extra holes punched, since the flexible construction allows it to cinch smoothly at nearly any point along its length. We chose a rich cognac-brown leather that darkens gradually and attractively with wear and sun exposure, developing a natural patina that's part of the appeal rather than a flaw to avoid. It sits well with the Olive Cargo Utility Pants, the Classic White Oxford Shirt tucked into trousers, or as a subtle accent cinching the Sunset Batik Maxi Dress at the waist. Wipe clean with a dry cloth and apply leather conditioner every few months to keep it supple.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 6);
}
