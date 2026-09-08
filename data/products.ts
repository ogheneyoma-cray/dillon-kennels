export type Category =
  | "Fiction & Fantasy"
  | "Romance"
  | "Mystery & Thriller"
  | "Business & Self-Development"
  | "Children & Young Readers";

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
  "Fiction & Fantasy",
  "Romance",
  "Mystery & Thriller",
  "Business & Self-Development",
  "Children & Young Readers",
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
  // ------------------------------------------------------- Fiction & Fantasy
  {
    name: "The Glass Orchard",
    author: "Ada Eze",
    price: 28,
    rating: 5,
    category: "Fiction & Fantasy",
    popular: true,
    description:
      "A glassblower inherits her grandmother's failing orchard and discovers the greenhouse at its center was built to grow something no botanist has ever named. Eze balances a slow, sensory magic system with a very grounded story about debt, inheritance and the work of keeping something alive.",
  },
  {
    name: "Wind Over Kaduna",
    author: "Tunde Bakare",
    price: 24,
    rating: 4,
    category: "Fiction & Fantasy",
    description:
      "A harmattan wind that never stops blowing forces a river-town to rebuild its entire way of life around it, generation after generation, until one engineer decides to find out where the wind is actually coming from. A patient, atmospheric novel more interested in adaptation than answers.",
  },
  {
    name: "The Last Griot",
    author: "Ngozi Chukwu",
    price: 32,
    rating: 4,
    category: "Fiction & Fantasy",
    description:
      "The last apprentice to a dying line of oral historians has one season to memorize four hundred years of songs before her teacher's memory goes for good. Chukwu writes memory itself as the novel's real antagonist, in a story about what a culture loses when nobody is left to recite it.",
  },

  // -------------------------------------------------------------- Romance
  {
    name: "Say It in Igbo",
    author: "Chiamaka Obi",
    price: 22,
    rating: 5,
    category: "Romance",
    popular: true,
    description:
      "A language-app voice actor and the diaspora client hiring her privately to learn Igbo for his grandmother's funeral fall for each other one lesson at a time. Obi keeps the humor light and the grief real, never letting the romance skip past why he waited so long to learn.",
  },
  {
    name: "A Season for Us",
    author: "Bola Ade",
    price: 26,
    rating: 4,
    category: "Romance",
    description:
      "Two rival florists supplying the same wedding season in Kaduna keep getting double-booked by the same clients, and keep ending up at the same events. A warm, competitive-enemies romance told almost entirely through the flowers each chapter is named for.",
  },
  {
    name: "The Wrong Address",
    author: "Femi Alade",
    price: 25,
    rating: 4,
    category: "Romance",
    description:
      "A courier delivers a parcel to the wrong house for three weeks straight before admitting he's been doing it on purpose. Alade's debut is short, funny and entirely dialogue-driven, built around two people who are much better at texting than talking.",
  },

  // -------------------------------------------------------- Mystery & Thriller
  {
    name: "The Durumi File",
    author: "Ibrahim Sule",
    price: 34,
    rating: 5,
    category: "Mystery & Thriller",
    popular: true,
    description:
      "A records clerk finds a decades-sealed case file mixed into a routine archive transfer and can't work out who wants it found — or who wants it to disappear again. Sule builds a tight, procedural thriller almost entirely out of paperwork, and it's more gripping than it has any right to be.",
  },
  {
    name: "Nine Nights in Kaduna",
    author: "Grace Owusu",
    price: 30,
    rating: 4,
    category: "Mystery & Thriller",
    description:
      "A radio call-in show host takes an anonymous tip live on air and spends the next nine nights trying to verify it before the story runs without her. Owusu uses the format of nightly broadcasts to escalate tension chapter by chapter toward a finale listeners never saw coming.",
  },
  {
    name: "The Silent Registry",
    author: "Peter Okoye",
    price: 27,
    rating: 4,
    category: "Mystery & Thriller",
    description:
      "A junior civil servant notices that one name keeps vanishing from a public registry every time it's reprinted, and nobody above her will explain why. A quiet, bureaucratic thriller about the kind of corruption that never raises its voice.",
  },

  // ------------------------------------------------ Business & Self-Development
  {
    name: "Build Before You're Ready",
    author: "Amara Chukwu",
    price: 29,
    rating: 5,
    category: "Business & Self-Development",
    popular: true,
    description:
      "A field guide for starting a business with less capital and less certainty than the guides usually assume, drawn from interviews with over forty small Nigerian founders. Chukwu skips the pitch-deck theatre and focuses on the plumbing — first hires, first suppliers, first real setback.",
  },
  {
    name: "The Discipline Ledger",
    author: "Samuel Adeyemi",
    price: 23,
    rating: 4,
    category: "Business & Self-Development",
    description:
      "Discipline treated as a resource you track and rebuild, not a personality trait you either have or don't. A simple daily ledger method for noticing where your discipline actually leaks — and where it doesn't need to be spent at all.",
  },
  {
    name: "Price It Right",
    author: "Kwame Asante",
    price: 31,
    rating: 4,
    category: "Business & Self-Development",
    description:
      "A short, practical book on pricing a product or service without guessing — cost floors, competitor anchoring, and the conversation script for raising a price without losing the client. Written for small business owners who've been pricing on instinct for too long.",
  },

  // -------------------------------------------------- Children & Young Readers
  {
    name: "The Boy Who Counted Stars",
    author: "Halima Yusuf",
    price: 20,
    rating: 5,
    category: "Children & Young Readers",
    popular: true,
    description:
      "A boy who can't sleep starts counting the stars from his window every night, and slowly realizes he's the only one in his compound who's noticed one of them is new. A gentle bedtime story about looking up, illustrated in warm, simple shapes.",
  },
  {
    name: "Adaeza and the Talking Drum",
    author: "Chinedu Eze",
    price: 21,
    rating: 5,
    category: "Children & Young Readers",
    description:
      "A girl inherits her grandfather's talking drum and discovers it only repeats exactly what she says — until the day it starts answering back. A playful early-reader about listening, told in short, rhythmic sentences perfect for reading aloud.",
  },
  {
    name: "The Marketplace of Small Wonders",
    author: "Blessing Nnamdi",
    price: 24,
    rating: 4,
    category: "Children & Young Readers",
    description:
      "Every stall in this market sells something ordinary that turns out to be a little bit magic, and one curious girl is determined to visit all of them before sundown. A busy, colourful picture book built for repeat read-alouds.",
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
