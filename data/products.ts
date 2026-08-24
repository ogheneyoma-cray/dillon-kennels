export type Category =
  | "Business & Finance"
  | "Personal Development"
  | "Technology & Coding"
  | "Health & Wellness"
  | "Fiction & Storytelling";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // in USD
  description: string;
  author: string;
  category: Category;
  inStock: boolean;
  pages: number;
  format: string;
  /** Cover accent color, keyed to the Tailwind palette used by EbookCover. */
  coverColor: "sky" | "gold" | "teal" | "rose" | "ink";
  popular?: boolean;
}

export const categories: Category[] = [
  "Business & Finance",
  "Personal Development",
  "Technology & Coding",
  "Health & Wellness",
  "Fiction & Storytelling",
];

export const products: Product[] = [
  // ------------------------------------------------------ Business & Finance
  {
    id: 1,
    name: "The Bootstrapped Founder's Playbook",
    slug: "the-bootstrapped-founders-playbook",
    price: 32,
    author: "Adaeze Nwosu",
    category: "Business & Finance",
    inStock: true,
    popular: true,
    pages: 214,
    format: "EPUB · PDF · MOBI",
    coverColor: "sky",
    description:
      "A field guide for founders building without outside funding — how to price your first product, hold onto margin, and say no to growth that doesn't pay for itself. Written from a decade of self-funded launches, it skips the pitch-deck theatre and focuses on the plumbing: cash flow, hiring your first contractor, and knowing when a slow month is normal versus a warning sign.",
  },
  {
    id: 2,
    name: "Cash Flow Clarity",
    slug: "cash-flow-clarity",
    price: 28,
    author: "Tunde Bakare",
    category: "Business & Finance",
    inStock: true,
    pages: 168,
    format: "EPUB · PDF",
    coverColor: "gold",
    description:
      "Small-business money management stripped of jargon: a simple weekly routine for knowing exactly what's coming in, what's going out, and what's left. Includes worksheet templates for a 13-week cash flow forecast that you can rebuild in any spreadsheet in under an hour, plus a chapter on separating personal and business finances properly.",
  },
  {
    id: 3,
    name: "Negotiate Like You Mean It",
    slug: "negotiate-like-you-mean-it",
    price: 24,
    author: "Grace Owusu",
    category: "Business & Finance",
    inStock: true,
    pages: 152,
    format: "EPUB · PDF · MOBI",
    coverColor: "teal",
    description:
      "A short, direct book on getting better terms — from a supplier contract to a salary review — without resorting to tricks that damage the relationship. Built around a repeatable four-step framework and a dozen real scripted exchanges you can adapt on the spot.",
  },
  {
    id: 4,
    name: "Freelance to Firm",
    slug: "freelance-to-firm",
    price: 30,
    author: "Chinedu Eze",
    category: "Business & Finance",
    inStock: true,
    pages: 196,
    format: "EPUB · PDF",
    coverColor: "rose",
    description:
      "The transition from solo freelancer to a small team, covering the decisions that actually matter: when to hire your first contractor, how to price retainer work, and how to keep the quality that got you clients in the first place once someone else is doing the work.",
  },
  {
    id: 5,
    name: "The Budgeting Reset",
    slug: "the-budgeting-reset",
    price: 22,
    author: "Amara Chukwu",
    category: "Business & Finance",
    inStock: true,
    pages: 134,
    format: "EPUB · PDF · MOBI",
    coverColor: "ink",
    description:
      "For anyone starting a personal budget over after it fell apart — again. A calm, no-shame walkthrough of building a budget you'll actually keep, with a simple envelope-style system that works whether your income is fixed or unpredictable.",
  },
  {
    id: 6,
    name: "Pitch Decks That Get Funded",
    slug: "pitch-decks-that-get-funded",
    price: 36,
    author: "Kwame Asante",
    category: "Business & Finance",
    inStock: true,
    pages: 178,
    format: "EPUB · PDF",
    coverColor: "sky",
    description:
      "A slide-by-slide teardown of what investors actually read a pitch deck for, built from patterns across hundreds of raised and rejected decks. Covers the story arc, the numbers slide investors distrust least, and how to answer the questions a deck can't.",
  },

  // -------------------------------------------------- Personal Development
  {
    id: 7,
    name: "Deep Focus, Shallow Distractions",
    slug: "deep-focus-shallow-distractions",
    price: 26,
    author: "Ifeoma Obi",
    category: "Personal Development",
    inStock: true,
    popular: true,
    pages: 188,
    format: "EPUB · PDF · MOBI",
    coverColor: "teal",
    description:
      "A practical system for protecting attention in a job full of notifications and open calendars. Rather than another willpower pep talk, it walks through environment design, message triage, and how to negotiate quiet hours with a team that expects instant replies.",
  },
  {
    id: 8,
    name: "The Discipline Ledger",
    slug: "the-discipline-ledger",
    price: 24,
    author: "Samuel Adeyemi",
    category: "Personal Development",
    inStock: true,
    pages: 142,
    format: "EPUB · PDF",
    coverColor: "gold",
    description:
      "Discipline treated as a resource you track and rebuild, not a personality trait you either have or don't. Includes a simple daily ledger method for noticing where your discipline actually leaks — and where it doesn't need to be spent at all.",
  },
  {
    id: 9,
    name: "Say Less, Mean More",
    slug: "say-less-mean-more",
    price: 23,
    author: "Ngozi Eze",
    category: "Personal Development",
    inStock: true,
    pages: 128,
    format: "EPUB · PDF · MOBI",
    coverColor: "rose",
    description:
      "A guide to direct, kind communication for people who over-explain under pressure. Short chapters on cutting the padding out of hard conversations, disagreeing without apologizing for the disagreement, and asking for what you need in one clear sentence.",
  },
  {
    id: 10,
    name: "Morning Architecture",
    slug: "morning-architecture",
    price: 21,
    author: "David Mensah",
    category: "Personal Development",
    inStock: true,
    pages: 116,
    format: "EPUB · PDF",
    coverColor: "sky",
    description:
      "Designing your first hour of the day on purpose, without a rigid 5 a.m. routine that collapses the first time life gets busy. A flexible framework you rebuild around your own energy, not someone else's morning routine video.",
  },
  {
    id: 11,
    name: "The Confidence Rebuild",
    slug: "the-confidence-rebuild",
    price: 27,
    author: "Blessing Nnamdi",
    category: "Personal Development",
    inStock: true,
    pages: 164,
    format: "EPUB · PDF · MOBI",
    coverColor: "ink",
    description:
      "For rebuilding confidence after a specific setback — a layoff, a failed launch, a hard breakup — rather than generic self-esteem advice. Structured around small, provable wins rather than affirmations, with a chapter on separating the setback from your self-worth.",
  },
  {
    id: 12,
    name: "Habits That Hold When Life Doesn't",
    slug: "habits-that-hold-when-life-doesnt",
    price: 29,
    author: "Emeka Chukwuemeka",
    category: "Personal Development",
    inStock: true,
    pages: 172,
    format: "EPUB · PDF",
    coverColor: "teal",
    description:
      "Habit systems built for the weeks that don't go to plan — travel, illness, a busy quarter at work. Instead of an all-or-nothing streak, it teaches a minimum-viable version of every habit so a disrupted week doesn't undo months of progress.",
  },

  // -------------------------------------------------- Technology & Coding
  {
    id: 13,
    name: "JavaScript Without the Jargon",
    slug: "javascript-without-the-jargon",
    price: 34,
    author: "Wale Fashina",
    category: "Technology & Coding",
    inStock: true,
    popular: true,
    pages: 246,
    format: "EPUB · PDF",
    coverColor: "gold",
    description:
      "A ground-up JavaScript book for people who learn best from plain explanations and small working examples, not academic definitions. Covers the language as it's actually written in 2026 — async/await, modules, and the DOM — without assuming prior programming experience.",
  },
  {
    id: 14,
    name: "Practical System Design for Small Teams",
    slug: "practical-system-design-for-small-teams",
    price: 38,
    author: "Chiamaka Uche",
    category: "Technology & Coding",
    inStock: true,
    popular: true,
    pages: 232,
    format: "EPUB · PDF · MOBI",
    coverColor: "sky",
    description:
      "System design advice scaled down for teams of three to ten engineers, not hypothetical unicorn-scale interviews. Real trade-offs on databases, caching and queues explained through the actual constraints small teams face — limited budget, limited on-call coverage, limited time.",
  },
  {
    id: 15,
    name: "The Clean API Handbook",
    slug: "the-clean-api-handbook",
    price: 32,
    author: "Peter Okoye",
    category: "Technology & Coding",
    inStock: true,
    pages: 198,
    format: "EPUB · PDF",
    coverColor: "teal",
    description:
      "A short, opinionated handbook on designing REST and JSON APIs that are pleasant to consume — consistent naming, sane pagination, and error messages a caller can actually act on. Every rule comes with a before-and-after example lifted from real API reviews.",
  },
  {
    id: 16,
    name: "Automating the Boring 80%",
    slug: "automating-the-boring-80-percent",
    price: 29,
    author: "Funmi Adeleke",
    category: "Technology & Coding",
    inStock: true,
    pages: 176,
    format: "EPUB · PDF · MOBI",
    coverColor: "rose",
    description:
      "Practical scripting for the repetitive parts of a technical job — file renaming, report generation, deploy checklists — using plain Python and shell scripts rather than heavyweight tooling. Aimed at engineers who want their time back, not a new framework to learn.",
  },
  {
    id: 17,
    name: "Databases for Builders, Not Academics",
    slug: "databases-for-builders-not-academics",
    price: 35,
    author: "Ibrahim Sule",
    category: "Technology & Coding",
    inStock: true,
    pages: 220,
    format: "EPUB · PDF",
    coverColor: "ink",
    description:
      "Relational database fundamentals taught through the questions builders actually ask — when to add an index, why a query got slow after the table grew, and how to design a schema that won't need a rewrite in a year. No relational calculus, just working judgment.",
  },
  {
    id: 18,
    name: "Shipping Fast Without Breaking Things",
    slug: "shipping-fast-without-breaking-things",
    price: 31,
    author: "Chidinma Okafor",
    category: "Technology & Coding",
    inStock: true,
    pages: 204,
    format: "EPUB · PDF · MOBI",
    coverColor: "sky",
    description:
      "A practical guide to release process for small engineering teams — feature flags, staged rollouts, and a rollback plan you actually test. Written to be adopted incrementally by a team with no dedicated platform engineer.",
  },

  // -------------------------------------------------------- Health & Wellness
  {
    id: 19,
    name: "The Sleep Reset Protocol",
    slug: "the-sleep-reset-protocol",
    price: 25,
    author: "Dr. Yemisi Balogun",
    category: "Health & Wellness",
    inStock: true,
    popular: true,
    pages: 158,
    format: "EPUB · PDF",
    coverColor: "teal",
    description:
      "A two-week protocol for resetting a broken sleep schedule, written by a sleep-focused physician for a lay audience. Covers light exposure, caffeine timing, and what to do on the nights the plan doesn't work, rather than pretending it always will.",
  },
  {
    id: 20,
    name: "Eating for Energy, Not Restriction",
    slug: "eating-for-energy-not-restriction",
    price: 23,
    author: "Halima Yusuf",
    category: "Health & Wellness",
    inStock: true,
    pages: 146,
    format: "EPUB · PDF · MOBI",
    coverColor: "gold",
    description:
      "An approach to eating built around sustained energy through the day rather than calorie restriction, with simple swaps for common West African staples. No meal plans to follow exactly — just principles you apply to what's already in your kitchen.",
  },
  {
    id: 21,
    name: "Desk-Bound",
    slug: "desk-bound",
    price: 22,
    author: "Michael Adisa",
    category: "Health & Wellness",
    inStock: true,
    pages: 118,
    format: "EPUB · PDF",
    coverColor: "rose",
    description:
      "A mobility guide for office workers built around ten-minute routines you can actually fit into a workday — no gym required. Photographs are replaced with clear step-by-step text descriptions so the book stays light and readable on any device.",
  },
  {
    id: 22,
    name: "The Quiet Mind",
    slug: "the-quiet-mind",
    price: 20,
    author: "Nkechi Aliyu",
    category: "Health & Wellness",
    inStock: true,
    pages: 104,
    format: "EPUB · PDF · MOBI",
    coverColor: "sky",
    description:
      "A practical, secular introduction to meditation for people who've bounced off apps and guided tracks before. Short chapters, no mysticism, and an honest chapter on what meditation won't fix.",
  },
  {
    id: 23,
    name: "Strength Training After 30",
    slug: "strength-training-after-30",
    price: 28,
    author: "Chukwudi Okoro",
    category: "Health & Wellness",
    inStock: true,
    pages: 190,
    format: "EPUB · PDF",
    coverColor: "ink",
    description:
      "A beginner-friendly strength program for people starting training later, with an emphasis on joint-friendly progression and realistic weekly time budgets. Includes a 12-week plan usable with just dumbbells or a basic gym membership.",
  },
  {
    id: 24,
    name: "Recovering From Burnout, Properly",
    slug: "recovering-from-burnout-properly",
    price: 26,
    author: "Dr. Folake Ogundele",
    category: "Health & Wellness",
    inStock: true,
    pages: 172,
    format: "EPUB · PDF · MOBI",
    coverColor: "teal",
    description:
      "A structured recovery path for burnout that goes beyond 'take a break' — covering the conversation with your employer, the financial planning a real recovery period needs, and how to tell the difference between rest and avoidance.",
  },

  // ---------------------------------------------------- Fiction & Storytelling
  {
    id: 25,
    name: "The Last Signal",
    slug: "the-last-signal",
    price: 24,
    author: "Obinna Maduike",
    category: "Fiction & Storytelling",
    inStock: true,
    popular: true,
    pages: 312,
    format: "EPUB · MOBI",
    coverColor: "ink",
    description:
      "A near-future novel following a radio engineer in a coastal city who picks up a transmission that shouldn't exist. Slow-burn and character-driven, more about the engineer's fraying marriage than the mystery itself — until the two collide in the final act.",
  },
  {
    id: 26,
    name: "Salt and Harmattan",
    slug: "salt-and-harmattan",
    price: 22,
    author: "Aisha Bello",
    category: "Fiction & Storytelling",
    inStock: true,
    pages: 168,
    format: "EPUB · PDF · MOBI",
    coverColor: "gold",
    description:
      "A collection of twelve short stories set across a single harmattan season, moving between a fishing town and the capital. Each story stands alone but shares a thread of characters who cross paths in small, unnoticed ways.",
  },
  {
    id: 27,
    name: "The Cartographer's Daughter",
    slug: "the-cartographers-daughter",
    price: 27,
    author: "Rita Uzoma",
    category: "Fiction & Storytelling",
    inStock: true,
    pages: 288,
    format: "EPUB · MOBI",
    coverColor: "teal",
    description:
      "A historical novel following a mapmaker's daughter who inherits her father's unfinished survey of a disputed border region, and the decision she has to make about what the finished map will mean for the people living on it.",
  },
  {
    id: 28,
    name: "Nine Doors in Kubwa",
    slug: "nine-doors-in-kubwa",
    price: 23,
    author: "Ikenna Obasi",
    category: "Fiction & Storytelling",
    inStock: true,
    pages: 204,
    format: "EPUB · PDF · MOBI",
    coverColor: "rose",
    description:
      "A quietly funny novel about a landlord in Abuja managing nine tenants across one compound, told in interlocking chapters from each tenant's point of view. Sharp, warm, and rooted firmly in one neighbourhood.",
  },
  {
    id: 29,
    name: "The Weight of Small Rooms",
    slug: "the-weight-of-small-rooms",
    price: 25,
    author: "Zainab Lawal",
    category: "Fiction & Storytelling",
    inStock: true,
    pages: 236,
    format: "EPUB · MOBI",
    coverColor: "sky",
    description:
      "A literary novel about three sisters clearing out their late mother's flat over one week, and everything the packing boxes force them to finally say to each other. Told in alternating perspectives with a dry, understated humour.",
  },
  {
    id: 30,
    name: "Echoes From the Third Mainland",
    slug: "echoes-from-the-third-mainland",
    price: 29,
    author: "Segun Adebayo",
    category: "Fiction & Storytelling",
    inStock: true,
    pages: 256,
    format: "EPUB · PDF · MOBI",
    coverColor: "gold",
    description:
      "A Lagos-set mystery following a retired detective pulled back for one last case involving a body found beneath the Third Mainland Bridge. Atmospheric and briskly plotted, with a city as vividly drawn as any of its characters.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.popular);
}
