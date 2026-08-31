export type Category =
  | "Fiction & Novels"
  | "Mystery & Thriller"
  | "Drama"
  | "Cookery & Recipe Books"
  | "Memoir & Lifestyle";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // in USD
  author: string;
  rating: number; // out of 5
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "Fiction & Novels",
  "Mystery & Thriller",
  "Drama",
  "Cookery & Recipe Books",
  "Memoir & Lifestyle",
];

interface Seed {
  name: string;
  author: string;
  price: number;
  rating: number;
  category: Category;
  description: string;
  popular?: boolean;
  inStock?: boolean;
}

const seeds: Seed[] = [
  // ------------------------------------------------------------- Fiction & Novels
  {
    name: "New Galaxy",
    author: "Richard Mann",
    price: 32,
    rating: 5,
    category: "Fiction & Novels",
    popular: true,
    description:
      "A cargo pilot on the last supply run to a dying colony discovers a signal that shouldn't exist, and has to decide whether to report it or follow it. Mann builds a slow-burn space opera out of static-filled radio chatter and the loneliness of long hauls, more interested in the silence between stars than in the fireworks.",
  },
  {
    name: "The Long Road to the Deep Silence",
    author: "Richard Mann",
    price: 34,
    rating: 4,
    category: "Fiction & Novels",
    popular: true,
    description:
      "Companion novel to New Galaxy, following the engineer left behind on the colony as rescue ships stop answering. A patient, atmospheric read about waiting for news that may never come, praised on release for a final chapter that answers almost nothing and still feels complete.",
  },
  {
    name: "It's a Really Strange Story",
    author: "Burt Geller",
    price: 27,
    rating: 5,
    category: "Fiction & Novels",
    description:
      "A retired postman starts receiving letters addressed to himself from a version of his life he never lived. Geller plays the premise for warmth rather than dread, and the small Ohio town he builds around it is drawn with enough specific, funny detail that it barely matters whether the letters are real.",
  },
  {
    name: "Let the Sun Shine",
    author: "Richard Mann",
    price: 29,
    rating: 5,
    category: "Fiction & Novels",
    description:
      "Three siblings inherit their father's failing citrus farm and have exactly one harvest to save it or sell it. A generous, unhurried family novel that trades melodrama for the actual mechanics of running an orchard, and lets its characters be wrong about each other for most of the book.",
  },
  {
    name: "A Banquet of Mouse",
    author: "Richard Mann",
    price: 24,
    rating: 5,
    category: "Fiction & Novels",
    description:
      "A fable told from the floor of a grand house, where a household of mice stage an elaborate heist the night of the family's biggest dinner party. Sharper and darker than its whimsical title suggests, with a closing twist that recasts everything that came before it.",
  },
  {
    name: "The Quiet Ledger",
    author: "Nora Bellweather",
    price: 31,
    rating: 4,
    category: "Fiction & Novels",
    description:
      "A small-town bookkeeper finds a decades-old discrepancy in the accounts of the shop she just inherited, and pulling on it unravels the reason her aunt cut off contact with the family. A quiet, precise novel about debts that were never about money.",
  },
  {
    name: "Salt and Static",
    author: "Owen Marsh",
    price: 28,
    rating: 4,
    category: "Fiction & Novels",
    description:
      "Two estranged brothers are forced to crew a decommissioned lighthouse for one last winter before it's demolished. Marsh writes weather like a character in its own right, and the brothers' short, clipped conversations do more work than any of the flashbacks.",
  },

  // -------------------------------------------------------------- Mystery & Thriller
  {
    name: "The Forest",
    author: "Karen Perry",
    price: 30,
    rating: 4,
    category: "Mystery & Thriller",
    popular: true,
    description:
      "A wildlife ranger reopens the disappearance of a hiking group last seen entering a protected forest twenty years earlier, after a name from the case turns up somewhere it shouldn't. Perry keeps the forest itself menacing without ever tipping into the supernatural.",
  },
  {
    name: "The Strings of Murders",
    author: "Linda Hamilton",
    price: 36,
    rating: 5,
    category: "Mystery & Thriller",
    popular: true,
    description:
      "A luthier is called in to consult on a murder staged inside a concert hall, and finds that the killer left clues only another string-instrument maker would recognize. A tightly plotted, craft-obsessed thriller that treats violin-making with the same precision most crime novels reserve for forensics.",
  },
  {
    name: "The Hour Before Rain",
    author: "Karen Perry",
    price: 33,
    rating: 4,
    category: "Mystery & Thriller",
    description:
      "A storm-chasing meteorologist witnesses what looks like a body dumped from a moving car during a tornado warning, and no one believes her because of the weather. Perry uses the unreliable, adrenaline-soaked narration to keep readers guessing right up to the last chapter.",
  },
  {
    name: "A Ledger of Lies",
    author: "Simon Cole",
    price: 29,
    rating: 4,
    category: "Mystery & Thriller",
    description:
      "A forensic accountant is hired to audit a family charity and finds the books have been cooked so carefully that the fraud is, in its own way, a work of art. Cole's background in finance shows in every page of this slow-burn corporate mystery.",
  },
  {
    name: "The Cartographer's Wife",
    author: "Diane Cooper",
    price: 35,
    rating: 5,
    category: "Mystery & Thriller",
    description:
      "When a celebrated mapmaker vanishes on a survey trip, his widow discovers that the maps he left behind mark locations that don't officially exist. A moody period thriller set across three decades, built around the idea that a map is also a confession.",
  },
  {
    name: "Nine Doors on Elm Street",
    author: "Frank Delgado",
    price: 27,
    rating: 4,
    category: "Mystery & Thriller",
    description:
      "A single suburban street loses power for one night, and by morning something has gone missing from every house on it. Delgado tells the story from nine different doorsteps, letting the neighborhood's small resentments do most of the suspicious work.",
  },

  // -------------------------------------------------------------------- Drama
  {
    name: "The Son",
    author: "Burt Geller",
    price: 26,
    rating: 4,
    category: "Drama",
    popular: true,
    description:
      "A father takes in his estranged adult son after a breakdown, and the two men relearn each other one strained dinner at a time. Geller's dialogue carries the whole book — long scenes of two people trying and failing to say the thing they actually mean.",
  },
  {
    name: "Lonely Man in White Hat",
    author: "Burt Geller",
    price: 24,
    rating: 4,
    category: "Drama",
    description:
      "A retired rodeo announcer takes a summer job narrating a children's carnival and finds it harder than expected to perform cheer he doesn't feel. A small, plainspoken novel about the distance between a public voice and a private one.",
  },
  {
    name: "The Shed",
    author: "Jessica Ford",
    price: 32,
    rating: 4,
    category: "Drama",
    description:
      "After her husband's death, a woman finally opens the locked shed he never let anyone into, and finds forty years of a hobby he never once mentioned. Ford handles grief with a light touch, letting curiosity do the work sadness usually does in this kind of novel.",
  },
  {
    name: "Where the Orchard Ends",
    author: "Theresa Yates",
    price: 28,
    rating: 4,
    category: "Drama",
    description:
      "Two neighboring families have shared a property line and a decades-old grudge since a boundary dispute over an apple orchard. When a new survey threatens to redraw the line for good, three generations are forced to finally talk to each other.",
  },
  {
    name: "A House With Two Doors",
    author: "Miles Whitfield",
    price: 30,
    rating: 4,
    category: "Drama",
    description:
      "A divorced couple ends up co-owning the family home after a messy split, each entering through a different door on alternating weeks. Whitfield turns an awkward custody arrangement into a study of two people slowly becoming strangers in a house full of shared memory.",
  },
  {
    name: "The Weight of Small Rooms",
    author: "Grace Okonkwo",
    price: 25,
    rating: 5,
    category: "Drama",
    description:
      "A live-in caregiver for an aging playwright becomes the only audience for the memoir he's too proud to finish writing. Okonkwo's debut is spare and interior, most of it unfolding in a single bedroom over one long winter.",
  },

  // --------------------------------------------------------- Cookery & Recipe Books
  {
    name: "The Sunday Kitchen",
    author: "Priya Anand",
    price: 23,
    rating: 5,
    category: "Cookery & Recipe Books",
    popular: true,
    description:
      "Sixty unhurried recipes built around the idea of a slow, phone-free Sunday — stews that simmer for hours, bread that proves overnight, and a whole chapter on what to do with Saturday's leftovers. Anand writes headnotes like short stories, not just ingredient lists.",
  },
  {
    name: "Roots, Grain and Fire",
    author: "Daniel Ruiz",
    price: 26,
    rating: 4,
    category: "Cookery & Recipe Books",
    description:
      "A collection built entirely around open-flame cooking — root vegetables charred whole, grains toasted before they're boiled, and a live-fire method for nearly everything from flatbread to dessert. Ruiz includes a full chapter on building and tending a backyard fire pit.",
  },
  {
    name: "A Table for Slow Mornings",
    author: "Priya Anand",
    price: 22,
    rating: 4,
    category: "Cookery & Recipe Books",
    description:
      "A breakfast-and-brunch companion to The Sunday Kitchen, organized by how much time you actually have — five minutes, twenty, or all morning. Every recipe scales from one plate to a table of eight without any of the math.",
  },
  {
    name: "The Coastal Larder",
    author: "Theresa Yates",
    price: 25,
    rating: 4,
    category: "Cookery & Recipe Books",
    description:
      "Recipes built around a well-stocked pantry rather than a daily fish market — tinned, cured and dried seafood turned into proper coastal cooking. A practical, unfussy book for anyone who loves the flavors of a seaside kitchen without living near one.",
  },
  {
    name: "Spice Route Suppers",
    author: "Priya Anand",
    price: 27,
    rating: 5,
    category: "Cookery & Recipe Books",
    description:
      "Weeknight dinners drawn from the historic spice trade routes, grouped by the single spice each one is built around — cardamom, clove, star anise and more. Anand keeps every recipe to under an hour and under a dozen ingredients.",
  },
  {
    name: "Bread, Butter, Repeat",
    author: "Daniel Ruiz",
    price: 21,
    rating: 4,
    category: "Cookery & Recipe Books",
    description:
      "A no-nonsense guide to baking one really good loaf and then twelve different ways to use it — croutons, puddings, crumbs, and a whole chapter of compound butters to go with it. Written for people who own one loaf pan and no stand mixer.",
  },

  // ------------------------------------------------------------- Memoir & Lifestyle
  {
    name: "A Doctor in the House",
    author: "Candy Carson",
    price: 28,
    rating: 5,
    category: "Memoir & Lifestyle",
    popular: true,
    description:
      "A candid memoir of thirty years spent married to a surgeon, told from the side of the house that never makes it into the medical journals — the missed dinners, the 3 a.m. pages, and the strange calm of a marriage built around other people's emergencies.",
  },
  {
    name: "Life in the Garden",
    author: "Candy Carson",
    price: 24,
    rating: 3,
    category: "Memoir & Lifestyle",
    description:
      "A season-by-season memoir of turning a neglected backyard into a working garden after retirement, and what the slow, unglamorous work of it taught the author about patience she didn't know she was missing. Equal parts memoir and gentle how-to.",
  },
  {
    name: "The Story About Me",
    author: "Carol Foster",
    price: 22,
    rating: 4,
    category: "Memoir & Lifestyle",
    description:
      "A wry, self-deprecating memoir from a woman who spent twenty years ghostwriting other people's autobiographies before finally sitting down to write her own — and finding it was the hardest interview subject she'd ever had.",
  },
  {
    name: "Design of the 20th Century",
    author: "Carol Foster",
    price: 34,
    rating: 4,
    category: "Memoir & Lifestyle",
    description:
      "A large-format survey of a century of furniture, product and graphic design, organized by the everyday objects it produced rather than by decade or movement. A coffee-table favorite as comfortable being read cover to cover as it is being left open on a side table.",
  },
  {
    name: "Notes from a Slower Year",
    author: "Nora Bellweather",
    price: 26,
    rating: 4,
    category: "Memoir & Lifestyle",
    description:
      "A journal-style memoir of one deliberate year spent cutting the author's commitments in half, told in short dated entries rather than chapters. Less a manifesto than an honest record of what got easier and what, surprisingly, didn't.",
  },
];

export const products: Product[] = seeds.map((seed, index) => {
  const slug = seed.name
    .toLowerCase()
    .replace(/[()']/g, "")
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return {
    id: index + 1,
    slug,
    name: seed.name,
    author: seed.author,
    price: seed.price,
    rating: seed.rating,
    description: seed.description,
    image: `/products/${slug}.png`,
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
