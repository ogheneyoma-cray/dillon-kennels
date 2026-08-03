export type Category =
  | "Tops & Tees"
  | "Dresses"
  | "Shorts & Trousers"
  | "Outerwear & Knits"
  | "Sets & Rompers"
  | "Shoes";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // base price in USD
  /** Set when the piece is reduced; the original USD price. */
  compareAt?: number;
  description: string;
  image: string;
  category: Category;
  fabric: string;
  /** Age-based sizing, which is how children's clothing is actually bought. */
  sizes: string[];
  inStock: boolean;
  bestSeller?: boolean;
  newArrival?: boolean;
}

export const categories: Category[] = [
  "Tops & Tees",
  "Dresses",
  "Shorts & Trousers",
  "Outerwear & Knits",
  "Sets & Rompers",
  "Shoes",
];

const img = (slug: string) => `/anikoda/${slug}.jpg`;

const CLOTHING_SIZES = ["2-3Y", "4-5Y", "6-7Y", "8-9Y", "10-11Y"];
const BABY_SIZES = ["6-12M", "12-18M", "18-24M", "2-3Y"];
const SHOE_SIZES = ["EU 24", "EU 26", "EU 28", "EU 30", "EU 32", "EU 34"];

export const products: Product[] = [
  // ------------------------------------------------------------ Tops & Tees
  {
    id: 1,
    name: "Future Leader Slogan Tee",
    slug: "future-leader-slogan-tee",
    price: 22,
    category: "Tops & Tees",
    fabric: "Combed cotton jersey",
    sizes: CLOTHING_SIZES,
    inStock: true,
    bestSeller: true,
    image: img("future-leader-slogan-tee"),
    description:
      "A soft combed-cotton tee printed with a slogan we hear from parents constantly and figured a child might as well wear. The print is a water-based ink pushed into the fabric rather than sitting on top of it, so it stays soft against the skin and will not crack down the middle after a dozen washes the way a plastisol print does. The body is cut with a little extra room through the chest and a slightly dropped shoulder, because children do not stand still to be measured and a tee that pulls at the armhole is a tee that gets refused at the door. The neckband is ribbed and twin-needled flat, the single detail that most decides whether a child's tee still looks new in six months or hangs open like a hammock. Machine wash warm, tumble dry low, and turn it inside out to protect the print. It survives the school run, the sandpit, and a reasonable amount of ice cream.",
  },
  {
    id: 2,
    name: "Sunday Stripe Tee",
    slug: "sunday-stripe-tee",
    price: 20,
    category: "Tops & Tees",
    fabric: "Cotton jersey",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("sunday-stripe-tee"),
    description:
      "The plainest thing we make and the one that gets reordered most. A yarn-dyed striped tee, meaning the stripes are knitted from pre-dyed yarn rather than printed on afterwards, so the colour goes right through the cloth and the stripe cannot fade off the surface. It is a mid-weight jersey — heavy enough to hold its shape through the wash, light enough for a Kwara afternoon. Short sleeves, a plain ribbed crew neck, and a straight hem that stays tucked or untucked without riding up. We match the stripe across the shoulder seam, which sounds fussy and takes an extra minute per garment, but it is the difference between a tee that looks made and one that looks assembled. Machine wash warm with like colours, tumble dry low. It gets softer for about ten washes and then stays that way.",
  },
  {
    id: 3,
    name: "Playground Pocket Tee",
    slug: "playground-pocket-tee",
    price: 21,
    category: "Tops & Tees",
    fabric: "Slub cotton jersey",
    sizes: CLOTHING_SIZES,
    inStock: true,
    newArrival: true,
    image: img("playground-pocket-tee"),
    description:
      "A slub-cotton tee with a small patch pocket on the chest, which exists entirely because children want somewhere to put a stone, a bottle top, or a folded drawing. Slub yarn is spun with deliberate thick-and-thin variation, giving the surface a gentle texture that hides the ordinary marks of a day outdoors far better than a flat jersey does. The pocket is bar-tacked at both top corners — the two points that fail first when a small hand tugs downward on it — and it is deep enough to actually hold something rather than being decorative. Cut roomy through the body with a dropped shoulder and a curved hem. Machine wash warm, tumble dry low, no need to iron. Check the pocket before it goes in the machine; we cannot help with what you find.",
  },
  {
    id: 4,
    name: "Meadow Green Tee",
    slug: "meadow-green-tee",
    price: 22,
    category: "Tops & Tees",
    fabric: "Organic cotton jersey",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("meadow-green-tee"),
    description:
      "A bright green tee in an organic cotton jersey, chosen for this piece because it is the plain tee children tend to wear closest to the skin on the hottest days. Organic cotton is grown without synthetic pesticides and finished without the formaldehyde-based resins used to make cheap cotton feel crisp on the shelf — the sort of thing that matters more on a child's clothing than an adult's. The knit is slightly heavier than our stripe tee, with a dense round neck that resists stretching when it is pulled over a head in a hurry. Set-in sleeves, a straight body, and a plain hem. Green is a difficult colour to hold in cotton and this one is a reactive dye taken to full depth, so it will soften by perhaps a shade over a year and then hold. Machine wash warm, tumble low, no softener.",
  },
  {
    id: 5,
    name: "Adventure Graphic Tee",
    slug: "adventure-graphic-tee",
    price: 23,
    category: "Tops & Tees",
    fabric: "Cotton jersey",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("adventure-graphic-tee"),
    description:
      "A graphic tee with an illustration drawn in-house rather than bought from a print library, which is why you will not find the same artwork on four other brands this season. The design is printed large across the front with a discharge ink — a process that removes the base dye and replaces it with colour, so the print ends up as soft as the fabric around it instead of forming a stiff panel. It is the technique to insist on for children's graphics, and it costs more than the alternative. The tee itself is a standard mid-weight jersey, cut generous with a ribbed crew neck and short sleeves. Wash inside out, warm, and tumble dry low. Avoid a hot iron directly on the artwork; press from the back if you need to.",
  },
  {
    id: 6,
    name: "Everyday Crew Tee",
    slug: "everyday-crew-tee",
    price: 20,
    category: "Tops & Tees",
    fabric: "Cotton jersey",
    sizes: CLOTHING_SIZES,
    inStock: true,
    bestSeller: true,
    image: img("everyday-crew-tee"),
    description:
      "No print, no pocket, no slogan — the tee to buy three of. This is the piece we tell parents to start with, because a plain crew in a good cotton does more work in a child's wardrobe than anything else in this shop. The jersey is a 180gsm single knit, which is the weight where a tee stops being see-through and starts holding its shape, and the neck is a 1x1 rib with a shoulder-to-shoulder tape across the back so the collar cannot stretch out sideways. Side seams are proper seams rather than a tube, which means the tee hangs straight instead of twisting around the body after a few washes. Available in the full size run and restocked continuously rather than seasonally. Machine wash warm, tumble dry low, wear until it gives out.",
  },

  // --------------------------------------------------------------- Dresses
  {
    id: 7,
    name: "Marigold Twirl Dress",
    slug: "marigold-twirl-dress",
    price: 34,
    category: "Dresses",
    fabric: "Cotton poplin",
    sizes: CLOTHING_SIZES,
    inStock: true,
    bestSeller: true,
    image: img("marigold-twirl-dress"),
    description:
      "The dress that gets bought because of the way it moves. A deep marigold cotton poplin cut with a full circle skirt gathered onto a simple yoke — the volume is what makes it spin, and children test this immediately and thoroughly. Poplin is the right cloth for it: crisp enough to hold the shape of the skirt rather than hanging limp, and cool enough to wear through an Ilorin afternoon. The bodice is lined so nothing scratches, the straps are wide enough not to slip off a shoulder, and the back closes with a covered elastic panel instead of a zip, which means a five-year-old can get into it without help. Pockets are set into the side seams, deep and functional. Machine wash cold, hang dry, warm iron. The colour is a reactive dye and will not chalk out after a season.",
  },
  {
    id: 8,
    name: "Gingham Picnic Dress",
    slug: "gingham-picnic-dress",
    price: 32,
    compareAt: 39,
    category: "Dresses",
    fabric: "Yarn-dyed cotton",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("gingham-picnic-dress"),
    description:
      "A classic gingham check in a yarn-dyed cotton, which means the check is woven from coloured yarn rather than printed onto white cloth. You can tell the difference by looking at the reverse — a woven check is identical on both faces, a printed one is pale on the back and will wash out unevenly. We cut this one with a gathered skirt, short puffed sleeves finished with a narrow elastic rather than a tight band, and a plain round neck. The check is matched at the centre front and down the side seams, which uses noticeably more cloth than ignoring the pattern would. There are two side pockets. It is the dress that ends up in every school-holiday photograph. Machine wash warm, tumble dry low, warm iron if you want the crispness back.",
  },
  {
    id: 9,
    name: "Rosegarden Tea Dress",
    slug: "rosegarden-tea-dress",
    price: 33,
    category: "Dresses",
    fabric: "Printed cotton lawn",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("rosegarden-tea-dress"),
    description:
      "A floral tea dress in cotton lawn — a fine, closely woven cotton that feels almost silky and is the coolest woven cloth we use. The rose print is scaled deliberately small so it reads as pattern rather than as a series of large motifs stretched across a small garment, which is the usual mistake when an adult print is reused in a children's size. The dress has a fitted bodice with a gathered skirt, a narrow tie at the back waist, and short flutter sleeves. The bodice is fully lined in plain cotton so the print does not show through and no seam allowances sit against the skin. Lawn creases readily, which is the trade for how light it is. Machine wash cool on a gentle cycle, hang dry, and press on a warm setting while very slightly damp.",
  },
  {
    id: 10,
    name: "Wildflower Print Dress",
    slug: "wildflower-print-dress",
    price: 31,
    category: "Dresses",
    fabric: "Viscose blend",
    sizes: CLOTHING_SIZES,
    inStock: true,
    newArrival: true,
    image: img("wildflower-print-dress"),
    description:
      "A loose, easy dress in a viscose-cotton blend printed with a busy wildflower pattern — chosen partly because it looks lovely and partly because a dense multi-colour print is the single most forgiving surface in a child's wardrobe. Marks that would end a plain pale dress simply disappear into it. The blend gives the fluid drape of viscose with enough cotton to keep it washable and stable, which pure viscose is not. It is cut with a simple gathered neckline that pulls on over the head with no fastening at all, short sleeves, and a straight hem below the knee. There is a narrow elastic at the neck edge so it sits without gaping. Machine wash cool on a delicate cycle, hang to dry, and press cool. Do not tumble dry — heat will shrink the viscose.",
  },
  {
    id: 11,
    name: "Candy Stripe Sundress",
    slug: "candy-stripe-sundress",
    price: 29,
    compareAt: 36,
    category: "Dresses",
    fabric: "Cotton seersucker",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("candy-stripe-sundress"),
    description:
      "A striped sundress in cotton seersucker, which is the cleverest warm-weather cloth there is: alternating stripes are woven at different tensions so the fabric puckers permanently, holding itself away from the skin and letting air move underneath. It is also, usefully, a fabric that is supposed to look crinkled, so it never needs ironing. The dress is sleeveless with wide shoulder straps, a gently gathered skirt, and a hem that sits at the knee. The stripe runs vertically through the bodice and skirt to keep the line long. There is no lining, because lining a seersucker would defeat the entire point of it. Machine wash warm, hang or tumble dry low, and do not press — pressing flattens the pucker and the fabric loses its whole function.",
  },
  {
    id: 12,
    name: "Bluebell Tulle Party Dress",
    slug: "bluebell-tulle-party-dress",
    price: 38,
    category: "Dresses",
    fabric: "Tulle over cotton",
    sizes: CLOTHING_SIZES,
    inStock: true,
    bestSeller: true,
    image: img("bluebell-tulle-party-dress"),
    description:
      "The birthday dress. Layers of soft blue tulle over a full cotton underskirt, with a fitted sleeveless bodice and a bow at the back waist. The important detail is what sits against the child: tulle is scratchy, so the entire underlayer and the whole bodice lining are a smooth cotton, and the tulle is attached at the waist seam only, never at the neckline or the armhole. That is the difference between a party dress worn all evening and one abandoned within twenty minutes. We use four tulle layers rather than the two most dresses at this price carry, which is what gives the skirt its shape without needing a stiff net petticoat. Hand wash cold or use a mesh bag on the most delicate cycle, hang to dry, and never iron the tulle — it will melt.",
  },
  {
    id: 13,
    name: "Midnight Sparkle Party Dress",
    slug: "midnight-sparkle-party-dress",
    price: 39,
    category: "Dresses",
    fabric: "Embellished cotton sateen",
    sizes: CLOTHING_SIZES,
    inStock: false,
    image: img("midnight-sparkle-party-dress"),
    description:
      "A dark navy party dress scattered with small sequins, cut in a cotton sateen so it has a soft sheen without the plastic hand of a full polyester party frock. The sequins are the part that needed solving: on most children's dresses they are glued, and they come off in the wash within two cycles and end up everywhere. Ours are individually stitched, which is slower and more expensive and is the reason this piece costs what it does. The dress has a fitted bodice, short sleeves, a gathered skirt falling just below the knee, and a concealed zip at the back with a hook and eye at the neck. Fully lined in smooth cotton. Hand wash cold only, dry flat away from direct sun, and press on the reverse through a cloth if needed. Treated properly this is a dress that gets handed down.",
  },

  // ----------------------------------------------------- Shorts & Trousers
  {
    id: 14,
    name: "Berry Jersey Play Shorts",
    slug: "berry-jersey-play-shorts",
    price: 20,
    category: "Shorts & Trousers",
    fabric: "Cotton jersey",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("berry-jersey-play-shorts"),
    description:
      "Pull-on jersey shorts in a deep berry, made for the part of the day when nothing should have a button on it. The waistband is a wide covered elastic with an internal drawcord that is stitched down at the centre back — so it cannot be pulled all the way out, which is the single most common way a child's drawstring garment is ruined. The leg is cut generously with a proper curved side seam so it does not ride up when a child sits cross-legged on the floor. Two side pockets, bar-tacked at the openings. The jersey is the same weight as our tees, which means these shorts pair with any of them and wash on the same cycle. Machine wash warm, tumble dry low. They will outlast the season and probably the next one too.",
  },
  {
    id: 15,
    name: "Teal Chino Shorts",
    slug: "teal-chino-shorts",
    price: 24,
    category: "Shorts & Trousers",
    fabric: "Cotton twill",
    sizes: CLOTHING_SIZES,
    inStock: true,
    bestSeller: true,
    image: img("teal-chino-shorts"),
    description:
      "Proper chino shorts in a cotton twill, for the days that need something smarter than jersey — a family visit, a photograph, the first day of a term. Twill is a diagonal weave, and the structure is what makes it far more abrasion-resistant than a plain weave of the same weight, which matters at the knee and the seat. The waistband has an adjustable internal elastic on both sides, reachable through a buttonhole, so the same pair fits a child through a growth spurt instead of being outgrown in one direction. There is a real fly with a proper closure, two slant front pockets, and one welt pocket at the back. Belt loops are wide enough for an actual belt. Machine wash warm, tumble dry low, warm iron for a crease if you want one.",
  },
  {
    id: 16,
    name: "Sandpit Twill Shorts",
    slug: "sandpit-twill-shorts",
    price: 22,
    category: "Shorts & Trousers",
    fabric: "Washed cotton twill",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("sandpit-twill-shorts"),
    description:
      "Named for exactly what they are for. A sand-coloured washed twill short, cut looser than our chino and finished with an all-round elasticated waist rather than a fly, so a child can manage them alone. The cloth is garment-washed after making up, which takes the stiffness out of the twill before it ever reaches you and means the shorts will not shrink further in your machine. Two deep patch pockets at the front are sewn on with a double row of stitching, and the hem is turned twice and topstitched so it cannot fray when it is dragged across concrete. The colour was chosen for sound practical reasons: this is the shade that hides Kwara dust between washes. Machine wash warm, tumble dry low. They get softer and slightly paler and look better for it.",
  },
  {
    id: 17,
    name: "Cobalt Sport Shorts",
    slug: "cobalt-sport-shorts",
    price: 21,
    category: "Shorts & Trousers",
    fabric: "Recycled polyester mesh",
    sizes: CLOTHING_SIZES,
    inStock: true,
    newArrival: true,
    image: img("cobalt-sport-shorts"),
    description:
      "Bright cobalt sports shorts in a recycled polyester mesh — the one place in this collection where we choose a synthetic over cotton, and deliberately. Cotton holds sweat against the skin and gets heavy; a knitted polyester mesh moves it outward and dries in minutes, which is what you want for football at two in the afternoon. The mesh is knitted from recycled bottle stock, and it is soft rather than the papery synthetic most cheap kit uses. The waistband is a flat covered elastic with a drawcord, the side seams are flatlocked so nothing rubs at the thigh, and the leg openings are wide and unbound. There is a small mesh liner. Machine wash cool, hang dry — they will be dry before a cotton short has finished spinning. Never tumble dry on high; heat is what kills technical fabric.",
  },

  // ---------------------------------------------------- Outerwear & Knits
  {
    id: 18,
    name: "Sherpa-Lined Denim Jacket",
    slug: "sherpa-lined-denim-jacket",
    price: 40,
    category: "Outerwear & Knits",
    fabric: "Cotton denim, sherpa lining",
    sizes: CLOTHING_SIZES,
    inStock: true,
    bestSeller: true,
    image: img("sherpa-lined-denim-jacket"),
    description:
      "A proper trucker jacket in a mid-weight cotton denim, lined through the body with a soft sherpa fleece and through the sleeves with a smooth cotton so it slides on over a jumper instead of catching. Sleeve lining is the detail cheap lined jackets skip, and it is the reason those jackets get abandoned. The denim is a real 10oz rather than the thin stuff usually used in children's sizes, and it has been stone-washed so it arrives soft rather than board-stiff. Two chest flap pockets, two hand-warmer pockets at the waist, and a button front with metal shanks that will not crack. The collar can be turned up and stays up. Machine wash cold inside out, tumble dry low, and expect the indigo to lighten a shade or two over the first year — that is the denim doing what denim does.",
  },
  {
    id: 19,
    name: "Racer Stripe Bomber",
    slug: "racer-stripe-bomber",
    price: 36,
    compareAt: 44,
    category: "Outerwear & Knits",
    fabric: "Poly-cotton twill",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("racer-stripe-bomber"),
    description:
      "A black bomber with a contrast stripe running the length of each sleeve, cut on a classic MA-1 shape with a ribbed collar, cuffs and hem. The shell is a poly-cotton twill — the polyester content is there for wind resistance and to stop the jacket creasing into a ball in a school bag, and the cotton keeps it from feeling like a plastic bag. It is lined throughout in a smooth taffeta so it goes on quickly, which is the practical measure of a child's jacket. The zip is a chunky moulded plastic with a large pull that small or cold fingers can actually grip, and there is a chin guard at the top so the slider never meets a neck. Two zip pockets at the waist. Machine wash cool, hang to dry, do not iron the shell directly.",
  },
  {
    id: 20,
    name: "Snowday Puffer Coat",
    slug: "snowday-puffer-coat",
    price: 39,
    category: "Outerwear & Knits",
    fabric: "Recycled ripstop, synthetic fill",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("snowday-puffer-coat"),
    description:
      "A bright hooded puffer for genuine cold — travel, harmattan mornings, or a child who feels the cold more than the rest of the family. The shell is a recycled ripstop nylon with a water-repellent finish that sheds a light shower, and the fill is a synthetic rather than down, chosen because synthetic keeps insulating when it gets wet and down does not. The baffles are stitched through in narrow channels, which stops the fill migrating into the hem and leaving the shoulders bare after a year. The hood is generously cut and lined in fleece, the cuffs have an internal elastic to keep wind out, and both pockets are fleece-lined for hands. The zip has a storm flap behind it. Machine wash cool on a gentle cycle, then tumble dry low with a couple of dryer balls — that is what redistributes the fill and brings the loft back.",
  },
  {
    id: 21,
    name: "Cloud Fleece Hoodie",
    slug: "cloud-fleece-hoodie",
    price: 28,
    compareAt: 34,
    category: "Outerwear & Knits",
    fabric: "Brushed cotton fleece",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("cloud-fleece-hoodie"),
    description:
      "A cream pullover hoodie in a brushed cotton fleece, which is the layer most children reach for without being asked. The inside face is brushed to a soft nap and the outside is left smooth, so it stays comfortable against the skin while resisting the pilling that a double-brushed fleece gets from a car seat and a backpack strap. The hood is double-layered so it holds its shape up rather than collapsing flat, and — importantly for a child's garment — there is no drawcord in it at all, which is both a safety standard and a sensible decision. There is a kangaroo pocket across the front, bar-tacked at both openings. Ribbed cuffs and hem are knitted rather than cut and folded, so they keep their spring. Machine wash cool inside out, tumble dry low, skip the softener.",
  },
  {
    id: 22,
    name: "Harvest Flannel Shirt",
    slug: "harvest-flannel-shirt",
    price: 27,
    category: "Outerwear & Knits",
    fabric: "Brushed cotton flannel",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("harvest-flannel-shirt"),
    description:
      "A patterned cotton flannel shirt that works as a shirt on a cool morning and as a light jacket over a tee by midday. Flannel is a plain cotton that has been brushed on both faces to raise a soft nap, and the quality of a flannel is entirely in the length of the fibre — a short-staple flannel pills within a month, which is why cheap ones feel furry and then bald. This is a long-staple cotton and it will stay smooth. Full button front with real buttons sewn with a shank, a proper two-piece collar with an interlined stand, one chest pocket, and a curved shirttail hem. The cuffs take a single button and roll well. Machine wash warm, tumble dry low to lift the nap back up, and warm iron the collar and cuffs if you want it sharp.",
  },

  // ------------------------------------------------------ Sets & Rompers
  {
    id: 23,
    name: "Chambray Snap Romper",
    slug: "chambray-snap-romper",
    price: 26,
    category: "Sets & Rompers",
    fabric: "Cotton chambray",
    sizes: BABY_SIZES,
    inStock: true,
    newArrival: true,
    image: img("chambray-snap-romper"),
    description:
      "A short-sleeved romper in a lightweight cotton chambray, which looks like denim and weighs almost nothing — the right cloth for a baby in a warm climate who still needs to look dressed. The whole point of this piece is the fastening: poppers run down the front placket and all the way along both inside legs, so a nappy change takes seconds and does not involve pulling anything over a head. The poppers are nickel-free and set with a reinforcing washer behind each one so they cannot tear out of the cloth. There is a small chest pocket and a plain turn-back collar. Seams are flat-felled, meaning no raw edges anywhere inside the garment. Machine wash warm, tumble dry low. Chambray softens quickly and this will feel broken-in by the third wash.",
  },
  {
    id: 24,
    name: "Island Print Short Set",
    slug: "island-print-short-set",
    price: 30,
    category: "Sets & Rompers",
    fabric: "Cotton poplin",
    sizes: CLOTHING_SIZES,
    inStock: true,
    image: img("island-print-short-set"),
    description:
      "A matching shirt and shorts in a printed cotton poplin — the set that solves a morning, because there is no decision to make about what goes with what. The shirt has a camp collar that lies flat open or closed, a full button front, and a straight hem meant to be worn out. The shorts have an all-round elasticated waist with a flat front panel so they look tailored rather than pulled-on. Both pieces are cut from a single roll per size run, so the print scale and the colour match exactly between top and bottom, which is not true of most sets sold as sets. The print is placed so the busiest part of the pattern falls on the shirt and the shorts stay quieter. Machine wash cool inside out, hang dry, warm iron. Sold and sized as a two-piece.",
  },
  {
    id: 25,
    name: "Courtside Track Set",
    slug: "courtside-track-set",
    price: 35,
    category: "Sets & Rompers",
    fabric: "Cotton-rich french terry",
    sizes: CLOTHING_SIZES,
    inStock: true,
    bestSeller: true,
    image: img("courtside-track-set"),
    description:
      "A zip-through track top and matching joggers in a cotton-rich french terry — looped on the inside rather than brushed, which breathes far better than a fleece and is why this set works year-round here rather than only in December. The top has a stand collar, a full-length zip with a chin guard, two zip pockets, and contrast panels down the sleeve. The joggers have a ribbed waistband with a flat internal drawcord, side pockets, and ribbed ankle cuffs that stay put rather than sliding down over a shoe. Both pieces are pre-shrunk, so the fit you get out of the first wash is the fit you keep. The set is the one children choose for themselves in the shop, which is generally the most reliable review available. Machine wash cool, tumble dry low, no softener.",
  },

  // ------------------------------------------------------------------ Shoes
  {
    id: 26,
    name: "Rainbow Canvas Trainers",
    slug: "rainbow-canvas-trainers",
    price: 32,
    category: "Shoes",
    fabric: "Cotton canvas, rubber sole",
    sizes: SHOE_SIZES,
    inStock: true,
    bestSeller: true,
    image: img("rainbow-canvas-trainers"),
    description:
      "A low-top canvas trainer with a multi-colour panel construction and a vulcanised rubber sole. Vulcanising means the sole is bonded to the upper under heat rather than glued, and it is the reason these do not separate at the toe in the way glued children's shoes reliably do around month three. The canvas upper is a heavy cotton duck with a cushioned collar around the ankle, and the footbed is a removable moulded EVA so you can take it out to dry it or replace it. Flat laces hold a knot better than round ones, which is a small thing that saves a lot of stopping. Sizes run true to a standard EU last with a slightly wider toe box, because children's feet are wider than adults' at the same length. Wipe clean, or machine wash cool in a bag and air dry away from direct heat.",
  },
  {
    id: 27,
    name: "Seafoam Canvas Plimsolls",
    slug: "seafoam-canvas-plimsolls",
    price: 26,
    category: "Shoes",
    fabric: "Cotton canvas, rubber sole",
    sizes: SHOE_SIZES,
    inStock: true,
    image: img("seafoam-canvas-plimsolls"),
    description:
      "A simple slip-on plimsoll in a seafoam canvas with a small printed motif — the shoe for indoors, for school, and for the days when laces are one thing too many. Twin elastic gussets at the instep let the shoe stretch open for a foot to go in and then hold it snugly, and they are stitched into the upper rather than glued on top of it. The sole is a thin vulcanised rubber with a gently patterned tread, flexible enough that a child's foot can actually bend through a step, which stiff-soled shoes prevent. There is a padded heel collar to stop rubbing. These are deliberately light — the whole shoe weighs very little, which matters over a full day. Wipe clean with a damp cloth, or hand wash the canvas and air dry. Do not put them in a tumble dryer.",
  },
  {
    id: 28,
    name: "Sunbeam Summer Sandals",
    slug: "sunbeam-summer-sandals",
    price: 28,
    category: "Shoes",
    fabric: "Textile upper, EVA sole",
    sizes: SHOE_SIZES,
    inStock: true,
    newArrival: true,
    image: img("sunbeam-summer-sandals"),
    description:
      "A closed-toe sandal in a soft textile with three adjustable hook-and-loop straps — across the toes, over the instep, and around the heel. Three points of adjustment rather than the usual one is what lets a sandal fit a narrow foot and a wide one, and lets it keep fitting as a foot grows through a season. The toe is closed and reinforced, which is non-negotiable for a shoe a child will kick a football in by accident. The sole is a lightweight EVA with a grippy tread and a slightly raised edge around the footbed to keep the foot seated. There is no lining seam anywhere under the foot. Machine washable on a cool gentle cycle in a mesh bag, then air dry completely before wearing again — never dry them near direct heat, which will warp the EVA.",
  },
  {
    id: 29,
    name: "Blossom Ankle Boots",
    slug: "blossom-ankle-boots",
    price: 38,
    category: "Shoes",
    fabric: "Leather upper, rubber sole",
    sizes: SHOE_SIZES,
    inStock: true,
    image: img("blossom-ankle-boots"),
    description:
      "A soft pink leather ankle boot with a side zip and a decorative lace, built on a rounded last with room across the toes. Leather is worth the difference on a boot a child wears daily: it moulds to the individual foot within a couple of weeks and it lets moisture out, which no coated synthetic does. The lining is a breathable leather too, right through to the insole — a boot lined in synthetic simply moves the problem inward. The zip runs the full height of the inside ankle so the boot opens wide enough for a foot to go straight in, and the laces are there for looks and can be left tied permanently. The sole is a lightly treaded rubber, stitched as well as bonded. Wipe clean, condition occasionally with a neutral leather cream, and let them dry naturally if they get wet.",
  },
  {
    id: 30,
    name: "Trailmate Lace-Up Boots",
    slug: "trailmate-lace-up-boots",
    price: 40,
    category: "Shoes",
    fabric: "Nubuck leather, rubber sole",
    sizes: SHOE_SIZES,
    inStock: true,
    image: img("trailmate-lace-up-boots"),
    description:
      "A tan nubuck lace-up boot for weather and rough ground — the most substantial thing we sell and the one most likely to be handed to a younger sibling still serviceable. Nubuck is a top-grain leather sanded to a fine nap, tougher than suede and more forgiving of scuffs than a smooth finish. The boot is built on a padded collar with a gusseted tongue, meaning the tongue is joined to the upper along both sides so grit and water cannot get in past the laces. Seven eyelets give real adjustment through the instep and ankle. The outsole is a lugged rubber with a defined heel breast for grip going downhill, bonded and stitched. There is a steel-free shank for support underfoot. Brush the nubuck dry rather than washing it, use a nubuck block on marks, and dry away from direct heat.",
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
