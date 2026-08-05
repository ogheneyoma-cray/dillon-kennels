export type Category =
  | "Science Fiction"
  | "Fantasy"
  | "Romance"
  | "Mystery & Thriller"
  | "Literary Fiction";

export interface Product {
  id: number;
  /** Book title. */
  name: string;
  slug: string;
  author: string;
  price: number; // base price in USD
  /** Set when the title is reduced; the original USD price. */
  compareAt?: number;
  description: string;
  /** Generated jacket, from scripts/generate-covers.mjs. */
  image: string;
  category: Category;
  pages: number;
  /** Downloadable formats included with every purchase. */
  formats: string[];
  language: string;
  published: string;
  isbn: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  bestSeller?: boolean;
  topRated?: boolean;
  featured?: boolean;
  /** Copies left in the launch allocation, used by the deal band. */
  stockLeft?: number;
  stockTotal?: number;
}

export const categories: Category[] = [
  "Science Fiction",
  "Fantasy",
  "Romance",
  "Mystery & Thriller",
  "Literary Fiction",
];

const cover = (slug: string) => `/coquinate/covers/${slug}.svg`;

const EPUB = ["EPUB", "MOBI", "PDF"];
const EPUB_ONLY = ["EPUB", "PDF"];

export const products: Product[] = [
  // ------------------------------------------------------- Science Fiction
  {
    id: 1,
    name: "See Mars",
    slug: "see-mars",
    author: "Vecuro Hale",
    price: 34,
    category: "Science Fiction",
    pages: 412,
    formats: EPUB,
    language: "English",
    published: "March 2026",
    isbn: "978-1-0000-0001-4",
    rating: 5,
    reviews: 214,
    inStock: true,
    bestSeller: true,
    featured: true,
    image: cover("see-mars"),
    description:
      "Forty years after the last crewed landing, a decommissioned orbital telescope catches something moving in Valles Marineris. Hale writes the discovery not as a triumph but as an administrative problem — three agencies, two governments and one very tired mission director arguing about who is allowed to look. The wonder arrives sideways, in the margins of meeting minutes, which is exactly what makes it land. A first-contact novel for people who have read enough first-contact novels.",
  },
  {
    id: 2,
    name: "Robot and Human",
    slug: "robot-and-human",
    author: "Teni Adeoye",
    price: 31,
    compareAt: 39,
    category: "Science Fiction",
    pages: 356,
    formats: EPUB,
    language: "English",
    published: "January 2026",
    isbn: "978-1-0000-0002-1",
    rating: 5,
    reviews: 188,
    inStock: true,
    bestSeller: true,
    topRated: true,
    stockLeft: 41,
    stockTotal: 300,
    image: cover("robot-and-human"),
    description:
      "A domestic care unit is willed to the daughter of the woman it looked after for eleven years, and neither of them wants the arrangement. Adeoye resists every easy beat — there is no uprising, no awakening, no speech about what it means to be alive. There is a machine that knows how the deceased took her tea, and a daughter who does not, and four hundred pages of that gap slowly closing. Shortlisted for the Nommo Award.",
  },
  {
    id: 3,
    name: "Science Fiction",
    slug: "science-fiction",
    author: "Joseph Martin",
    price: 27,
    category: "Science Fiction",
    pages: 298,
    formats: EPUB,
    language: "English",
    published: "September 2025",
    isbn: "978-1-0000-0003-8",
    rating: 4,
    reviews: 96,
    inStock: true,
    image: cover("science-fiction"),
    description:
      "Martin's flatly titled collection gathers eleven stories written across a decade, arranged so the earliest and the latest sit side by side and you can watch the sentences get shorter. The standouts are the two novellas at the centre — one about a generation ship whose passengers have forgotten it is moving, one about a customs officer on a moon with nothing to declare. Dry, exact, and much funnier than the cover suggests.",
  },
  {
    id: 4,
    name: "Phobof and Deimod",
    slug: "phobof-and-deimod",
    author: "Ada Okonjo",
    price: 29,
    category: "Science Fiction",
    pages: 388,
    formats: EPUB,
    language: "English",
    published: "June 2025",
    isbn: "978-1-0000-0004-5",
    rating: 4,
    reviews: 73,
    inStock: true,
    image: cover("phobof-and-deimod"),
    description:
      "Two mining stations on the two moons of Mars, close enough to see each other and eleven minutes apart by any message worth sending. When the supply contract is awarded to one of them, the other has a year to decide what it is prepared to do about it. Okonjo builds the whole book out of that delay — every conversation is really two monologues, and every apology arrives after the argument has already moved on.",
  },

  // --------------------------------------------------------------- Fantasy
  {
    id: 5,
    name: "Nine Doors of Ulm",
    slug: "nine-doors-of-ulm",
    author: "Joseph Martin",
    price: 38,
    category: "Fantasy",
    pages: 604,
    formats: EPUB,
    language: "English",
    published: "November 2025",
    isbn: "978-1-0000-0005-2",
    rating: 5,
    reviews: 267,
    inStock: true,
    bestSeller: true,
    topRated: true,
    featured: true,
    image: cover("nine-doors-of-ulm"),
    description:
      "The city of Ulm has nine gates and a law that no person may pass through the same one twice in a lifetime. Martin takes that single rule and follows it all the way down — into the clerks who keep the register, the forgers who sell second chances, and the woman who has passed through eight. Six hundred pages that never once stop to explain their own magic system, and are far better for it.",
  },
  {
    id: 6,
    name: "Green Journey",
    slug: "green-journey",
    author: "Nia Bassey",
    price: 26,
    category: "Fantasy",
    pages: 322,
    formats: EPUB,
    language: "English",
    published: "April 2026",
    isbn: "978-1-0000-0006-9",
    rating: 5,
    reviews: 141,
    inStock: true,
    featured: true,
    image: cover("green-journey"),
    description:
      "A pastoral fantasy with almost no violence in it. A hedge-witch and her apprentice walk the length of a country that is slowly turning back into forest, mending fences and settling disputes as they go. Bassey is interested in what happens after the great catastrophe has finished happening, and the answer she gives is: ordinary work, done carefully, for a long time. Read it in one sitting on a rainy afternoon.",
  },
  {
    id: 7,
    name: "Halcyon Drift",
    slug: "halcyon-drift",
    author: "Sena Adjei",
    price: 30,
    category: "Fantasy",
    pages: 447,
    formats: EPUB,
    language: "English",
    published: "February 2026",
    isbn: "978-1-0000-0007-6",
    rating: 4,
    reviews: 118,
    inStock: true,
    image: cover("halcyon-drift"),
    description:
      "An archipelago where the islands themselves move with the current, and a cartographer's guild whose maps are obsolete the day they are drawn. Adjei's conceit could have been a gimmick; instead it becomes a book about the impossibility of going home to a place that has drifted. The middle third, aboard a chart-ship crewed entirely by apprentices, is the best sustained writing in her career so far.",
  },
  {
    id: 8,
    name: "Weive Mockchapu",
    slug: "weive-mockchapu",
    author: "Vecuro Hale",
    price: 28,
    compareAt: 35,
    category: "Fantasy",
    pages: 375,
    formats: EPUB_ONLY,
    language: "English",
    published: "August 2025",
    isbn: "978-1-0000-0008-3",
    rating: 4,
    reviews: 89,
    inStock: true,
    stockLeft: 22,
    stockTotal: 200,
    image: cover("weive-mockchapu"),
    description:
      "Hale's strangest book, and the one her readers argue about. A weaver in a mountain town is commissioned to make a tapestry of an event that has not happened yet, and finds that the work is going faster than she is. Told in reverse chapters, so the reader learns the ending in the first forty pages and spends the rest of the novel discovering why it was always going to happen.",
  },

  // --------------------------------------------------------------- Romance
  {
    id: 9,
    name: "Winterlight Passage",
    slug: "winterlight-passage",
    author: "Elise Marchand",
    price: 25,
    category: "Romance",
    pages: 341,
    formats: EPUB,
    language: "English",
    published: "December 2025",
    isbn: "978-1-0000-0009-0",
    rating: 5,
    reviews: 302,
    inStock: true,
    bestSeller: true,
    featured: true,
    image: cover("winterlight-passage"),
    description:
      "Two lighthouse keepers on adjacent headlands, one radio channel, and a winter long enough to say everything twice. Marchand's romance is built almost entirely from dialogue, and the restraint is the point — nobody in this book touches until page two hundred and eighty, and by then the reader has been waiting so long it registers as an event. Comforting without ever being soft.",
  },
  {
    id: 10,
    name: "L Art Du Subtiliste",
    slug: "l-art-du-subtiliste",
    author: "Elise Marchand",
    price: 27,
    category: "Romance",
    pages: 310,
    formats: EPUB,
    language: "English",
    published: "May 2025",
    isbn: "978-1-0000-0010-6",
    rating: 4,
    reviews: 156,
    inStock: true,
    image: cover("l-art-du-subtiliste"),
    description:
      "A pickpocket and the insurance investigator assigned to her case spend a Paris summer failing to catch one another on purpose. Marchand writes theft the way other novelists write dancing — as something two people do together, in time, each anticipating the other's weight. Light, quick, and rather more melancholy in its final thirty pages than the first two hundred prepare you for.",
  },
  {
    id: 11,
    name: "E Emeher Mme",
    slug: "e-emeher-mme",
    author: "Chidi Nwosu",
    price: 24,
    category: "Romance",
    pages: 288,
    formats: EPUB,
    language: "English",
    published: "July 2025",
    isbn: "978-1-0000-0011-3",
    rating: 5,
    reviews: 174,
    inStock: true,
    bestSeller: true,
    image: cover("e-emeher-mme"),
    description:
      "Two people who grew up on the same Lagos street meet again at forty, both divorced, both pretending the reunion was a coincidence. Nwosu has an ear for the way old neighbours talk — the shorthand, the deliberate omissions, the way a whole grievance can be carried in a greeting. Warm, wry, and refreshingly uninterested in whether either of them deserves a second chance.",
  },
  {
    id: 12,
    name: "Rat Phnory Mttke",
    slug: "rat-phnory-mttke",
    author: "Lena Fournier",
    price: 22,
    category: "Romance",
    pages: 264,
    formats: EPUB_ONLY,
    language: "English",
    published: "October 2025",
    isbn: "978-1-0000-0012-0",
    rating: 4,
    reviews: 64,
    inStock: false,
    image: cover("rat-phnory-mttke"),
    description:
      "Fournier's debut is an epistolary romance conducted entirely through the comment threads of a defunct recipe website. It should not work. It works. The slow accretion of two lives through notes about substituting butter is genuinely moving by the halfway mark, and the moment the site announces its shutdown is as tense as anything in this catalogue. Between print runs; the reissue is set for next quarter.",
  },

  // ----------------------------------------------------- Mystery & Thriller
  {
    id: 13,
    name: "Shadow of Decenit",
    slug: "shadow-of-decenit",
    author: "Marek Vaus",
    price: 33,
    category: "Mystery & Thriller",
    pages: 428,
    formats: EPUB,
    language: "English",
    published: "January 2026",
    isbn: "978-1-0000-0013-7",
    rating: 5,
    reviews: 231,
    inStock: true,
    bestSeller: true,
    topRated: true,
    featured: true,
    image: cover("shadow-of-decenit"),
    description:
      "A translator working on a dead novelist's final manuscript begins to notice that the murder in the book matches one that was never solved. Vaus keeps the reader inside the translation itself — you read the disputed passages twice, once in each rendering, and the discrepancies are the clues. A detective novel where the investigation is a matter of word choice, and none the less tense for it.",
  },
  {
    id: 14,
    name: "The Lantern Verdict",
    slug: "the-lantern-verdict",
    author: "Marek Vaus",
    price: 32,
    compareAt: 40,
    category: "Mystery & Thriller",
    pages: 396,
    formats: EPUB,
    language: "English",
    published: "March 2025",
    isbn: "978-1-0000-0014-4",
    rating: 5,
    reviews: 147,
    inStock: true,
    stockLeft: 15,
    stockTotal: 180,
    image: cover("the-lantern-verdict"),
    description:
      "A jury retires to consider a verdict and does not come back for eleven days. Vaus gives each juror a chapter, in the order they change their minds, and the pleasure of the book is watching an argument you thought you understood turn out to have been about something else entirely. The final chapter, from the one juror who never speaks, reframes the whole thing.",
  },
  {
    id: 15,
    name: "Levtimeline",
    slug: "levtimeline",
    author: "Vecuro Hale",
    price: 35,
    category: "Mystery & Thriller",
    pages: 452,
    formats: EPUB,
    language: "English",
    published: "October 2025",
    isbn: "978-1-0000-0015-1",
    rating: 5,
    reviews: 198,
    inStock: true,
    topRated: true,
    image: cover("levtimeline"),
    description:
      "A missing-person case reconstructed entirely from timestamps — transit taps, door logs, till receipts, the metadata exhaust of an ordinary week. Hale never once tells you what anybody was thinking, and the restraint turns the reader into the investigator. By the time the gaps in the record start to look deliberate rather than accidental, you are already committed.",
  },
  {
    id: 16,
    name: "Fuarcnusk Preentine",
    slug: "fuarcnusk-preentine",
    author: "Imani Cole",
    price: 29,
    category: "Mystery & Thriller",
    pages: 367,
    formats: EPUB,
    language: "English",
    published: "August 2026",
    isbn: "978-1-0000-0016-8",
    rating: 4,
    reviews: 82,
    inStock: true,
    image: cover("fuarcnusk-preentine"),
    description:
      "A locked-room mystery set in a language school where none of the six suspects shares a fluent language with the detective. Cole makes the translation gap do the work a red herring usually does — every misunderstanding is honest, and every honest misunderstanding buries the solution deeper. The resolution turns on a mistranslated preposition, and it is entirely fair.",
  },

  // ------------------------------------------------------- Literary Fiction
  {
    id: 17,
    name: "The Quiet Cartographer",
    slug: "the-quiet-cartographer",
    author: "Marta Rein",
    price: 36,
    category: "Literary Fiction",
    pages: 389,
    formats: EPUB,
    language: "English",
    published: "February 2026",
    isbn: "978-1-0000-0017-5",
    rating: 5,
    reviews: 163,
    inStock: true,
    topRated: true,
    featured: true,
    image: cover("the-quiet-cartographer"),
    description:
      "A surveyor spends thirty years mapping a valley that is scheduled to be flooded, knowing the map will be the only record left. Rein writes work — actual, physical, repetitive work — better than almost anyone currently publishing, and the accumulation of survey days becomes something close to a life. The last forty pages, as the water comes up, are extraordinary.",
  },
  {
    id: 18,
    name: "Saltwater Almanac",
    slug: "saltwater-almanac",
    author: "Nia Bassey",
    price: 28,
    category: "Literary Fiction",
    pages: 304,
    formats: EPUB,
    language: "English",
    published: "June 2026",
    isbn: "978-1-0000-0018-2",
    rating: 4,
    reviews: 71,
    inStock: true,
    image: cover("saltwater-almanac"),
    description:
      "Twelve chapters, one per month, following a fishing family through a single bad year. Bassey structures it as an almanac — tides, catches, prices, weather — and lets the family's story surface between the entries. The restraint is total and the effect cumulative: by November you are reading the price of mackerel with genuine dread.",
  },
  {
    id: 19,
    name: "Ashes of Marivel",
    slug: "ashes-of-marivel",
    author: "Imani Cole",
    price: 31,
    category: "Literary Fiction",
    pages: 418,
    formats: EPUB,
    language: "English",
    published: "September 2025",
    isbn: "978-1-0000-0019-9",
    rating: 5,
    reviews: 129,
    inStock: true,
    image: cover("ashes-of-marivel"),
    description:
      "Three generations of a family return to a town that burned down before any of them were born, each convinced they are the one who remembers it correctly. Cole moves between the three without warning or signposting, trusting the reader to keep up, and the disorientation is doing real work — this is a novel about how a story hardens into a fact.",
  },
  {
    id: 20,
    name: "Tevely Entiamile",
    slug: "tevely-entiamile",
    author: "Bisi Ogun",
    price: 26,
    category: "Literary Fiction",
    pages: 276,
    formats: EPUB_ONLY,
    language: "English",
    published: "November 2026",
    isbn: "978-1-0000-0020-5",
    rating: 4,
    reviews: 58,
    inStock: true,
    image: cover("tevely-entiamile"),
    description:
      "Ogun's second novel is a single conversation, held over one night, between a woman leaving the country in the morning and the sister who is staying. No chapters, no scene breaks, no flashbacks — just the talk, and everything the two of them decline to say. At two hundred and seventy-six pages it should be exhausting; instead it goes down in one breath.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function byCategory(category: Category): Product[] {
  return products.filter((product) => product.category === category);
}

export function byAuthor(author: string): Product[] {
  return products.filter((product) => product.author === author);
}

export const bestSellers = products.filter((p) => p.bestSeller);
export const topRated = products.filter((p) => p.topRated);
export const featured = products.filter((p) => p.featured);
export const onSale = products.filter((p) => p.compareAt !== undefined);
/** Titles with a launch-allocation countdown, used by the deal band. */
export const dealProducts = products.filter(
  (p) => p.stockLeft !== undefined && p.compareAt !== undefined
);

/** The house author the home page features. */
export const FEATURED_AUTHOR = "Joseph Martin";
