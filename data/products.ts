export type Category =
  | "Digital Marketing"
  | "SEO & Search"
  | "Social & Branding"
  | "Analytics & Advertising"
  | "Content & Affiliate";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // in USD
  instructor: string;
  rating: number; // out of 5
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "Digital Marketing",
  "SEO & Search",
  "Social & Branding",
  "Analytics & Advertising",
  "Content & Affiliate",
];

interface Seed {
  name: string;
  instructor: string;
  price: number;
  rating: number;
  category: Category;
  description: string;
  popular?: boolean;
  inStock?: boolean;
}

const seeds: Seed[] = [
  // ------------------------------------------------------------- Digital Marketing
  {
    name: "The Digital Marketing Playbook",
    instructor: "Marcus Reid",
    price: 34,
    rating: 5,
    category: "Digital Marketing",
    popular: true,
    description:
      "A ground-up guide to every major digital channel — search, social, email and paid — built around a single repeatable planning framework instead of a grab-bag of tactics. Reid draws on a decade of in-house marketing roles to show how the channels reinforce each other rather than compete for the same budget line.",
  },
  {
    name: "Funnels That Convert",
    instructor: "Elena Cho",
    price: 29,
    rating: 4,
    category: "Digital Marketing",
    description:
      "A practical walkthrough of building a sales funnel from cold traffic to paying customer, with real conversion benchmarks at every stage so you know whether a drop-off is normal or a warning sign. Cho favors small, testable funnels over sprawling multi-step ones, and shows why that usually wins.",
  },
  {
    name: "Zero to First Customer",
    instructor: "Daniel Okafor",
    price: 24,
    rating: 5,
    category: "Digital Marketing",
    description:
      "A marketing manual written specifically for solo founders with no budget and no audience, focused on the handful of channels that actually work before you have either. Okafor is blunt about what to ignore — paid ads, influencer outreach, most of social media — until you've earned the right to spend on them.",
  },
  {
    name: "The Attention Economy",
    instructor: "Priya Shah",
    price: 32,
    rating: 4,
    category: "Digital Marketing",
    description:
      "An analysis of why the cost of reaching anyone has risen every year for two decades, and what that means for how small businesses should actually compete. Shah argues for depth over reach — fewer channels, done properly — backed by case studies from brands that grew without outspending anyone.",
  },
  {
    name: "Growth Without Ads",
    instructor: "Tariq Bello",
    price: 27,
    rating: 5,
    category: "Digital Marketing",
    description:
      "A collection of organic growth tactics — partnerships, community, referral loops, and content that compounds — for businesses that can't or won't rely on paid acquisition. Bello is a former growth lead at two bootstrapped startups, and writes from tight-budget experience rather than theory.",
  },
  {
    name: "Marketing on a Shoestring",
    instructor: "Grace Adeyemi",
    price: 22,
    rating: 4,
    category: "Digital Marketing",
    description:
      "A month-by-month marketing plan for small businesses working with a few hundred dollars rather than a few thousand, prioritizing effort over spend at every step. Adeyemi includes real budget breakdowns from Nigerian small businesses she's consulted for, not hypothetical numbers.",
  },

  // -------------------------------------------------------------- SEO & Search
  {
    name: "Rank One",
    instructor: "Sam Whitfield",
    price: 35,
    rating: 5,
    category: "SEO & Search",
    popular: true,
    description:
      "A technical and on-page SEO deep dive that treats search engines as the literal-minded systems they are, rather than something to be outsmarted. Whitfield walks through site architecture, crawl budgets and content structure with the kind of specificity most SEO guides skip past.",
  },
  {
    name: "The Keyword Method",
    instructor: "Lena Okoro",
    price: 26,
    rating: 4,
    category: "SEO & Search",
    description:
      "A repeatable framework for keyword research that goes beyond search volume to weigh competition, intent and business relevance together. Okoro includes the exact spreadsheet template she uses with clients, along with worked examples across three different industries.",
  },
  {
    name: "Local Search Wins",
    instructor: "Chidi Obi",
    price: 23,
    rating: 4,
    category: "SEO & Search",
    description:
      "A focused guide to ranking a local business in map results and local search, covering listings, reviews and the on-site signals that matter most at a neighborhood level. Obi has run local SEO for restaurants and service businesses across three Nigerian cities.",
  },
  {
    name: "Search Intent",
    instructor: "Yusuf Bala",
    price: 31,
    rating: 5,
    category: "SEO & Search",
    description:
      "An argument that most SEO failures come from matching the wrong content to the right keyword, not from any technical mistake. Bala teaches a simple method for classifying intent before writing a single word, and shows how it changes what actually ranks.",
  },
  {
    name: "Link Building Field Guide",
    instructor: "Rita Mensah",
    price: 28,
    rating: 4,
    category: "SEO & Search",
    description:
      "A practical, ethics-first approach to earning backlinks through relationships, original research and genuinely useful content, rather than the outreach-spam tactics most guides teach. Mensah includes real outreach templates and the response rates they actually got.",
  },
  {
    name: "The Algorithm Diaries",
    instructor: "Mark Delaney",
    price: 25,
    rating: 3,
    category: "SEO & Search",
    description:
      "A plain-language explanation of how modern search algorithms actually evaluate a page, drawn from patent filings, official documentation and Delaney's own testing over twelve years in SEO. Less a how-to than a mental model for reasoning about ranking changes as they happen.",
  },

  // -------------------------------------------------------------- Social & Branding
  {
    name: "Brand Voice",
    instructor: "Sofia Guerra",
    price: 30,
    rating: 5,
    category: "Social & Branding",
    popular: true,
    description:
      "A working method for defining a brand's tone of voice and applying it consistently across every touchpoint, from product copy to customer support replies. Guerra includes a step-by-step worksheet that turns a vague brand personality into concrete writing rules a whole team can follow.",
  },
  {
    name: "The Social Playbook",
    instructor: "Kwame Asante",
    price: 27,
    rating: 4,
    category: "Social & Branding",
    description:
      "A platform-by-platform strategy guide covering what actually works on each major social network, updated with the format shifts of the last few years rather than outdated best practices. Asante is candid about which platforms are worth a small team's limited time.",
  },
  {
    name: "Design Systems for Founders",
    instructor: "Ines Duarte",
    price: 33,
    rating: 4,
    category: "Social & Branding",
    description:
      "A non-designer's guide to building a visual brand identity that holds together — color, type, logo usage and layout — without hiring an agency. Duarte, a brand designer, breaks the process into decisions any founder can make with confidence.",
  },
  {
    name: "Community Over Followers",
    instructor: "Ada Nwosu",
    price: 24,
    rating: 5,
    category: "Social & Branding",
    description:
      "A case for building a smaller, more engaged community instead of chasing follower counts that don't convert to revenue or loyalty. Nwosu shares the exact structure she used to grow a 4,000-member paid community from a mailing list of 200.",
  },
  {
    name: "The Content Calendar",
    instructor: "Ben Okoye",
    price: 21,
    rating: 4,
    category: "Social & Branding",
    description:
      "A practical system for planning, batching and scheduling content a month at a time, so posting stops being a daily source of anxiety. Okoye includes the actual calendar template and batching workflow he uses to run three brand accounts alone.",
  },
  {
    name: "Story-First Branding",
    instructor: "Hana Suleiman",
    price: 29,
    rating: 4,
    category: "Social & Branding",
    description:
      "A guide to building a brand narrative that customers actually remember and repeat to others, using the same structural tools screenwriters use for character arcs. Suleiman applies the framework to five real brand relaunches, showing the before and after messaging side by side.",
  },

  // ------------------------------------------------------ Analytics & Advertising
  {
    name: "Numbers That Matter",
    instructor: "Victor Osei",
    price: 36,
    rating: 5,
    category: "Analytics & Advertising",
    popular: true,
    description:
      "A practical marketing analytics guide that identifies the handful of metrics worth tracking for a small business, and dismisses the dozens of vanity metrics that just create noise. Osei, a former analytics lead at an ad agency, teaches the reasoning behind each metric, not just how to read a dashboard.",
  },
  {
    name: "The Paid Ads Manual",
    instructor: "Claire Novak",
    price: 34,
    rating: 4,
    category: "Analytics & Advertising",
    description:
      "A fundamentals-first guide to running paid campaigns across search and social platforms, covering targeting, budgets and creative testing without assuming a large ad spend. Novak includes campaign structures that work for accounts starting as small as $10 a day.",
  },
  {
    name: "Attribution Made Simple",
    instructor: "Femi Adigun",
    price: 28,
    rating: 4,
    category: "Analytics & Advertising",
    description:
      "A clear-headed explanation of how to figure out which marketing efforts are actually driving sales, without needing an enterprise attribution platform. Adigun favors simple, defensible models a small team can maintain over complex ones nobody trusts.",
  },
  {
    name: "Budgets That Scale",
    instructor: "Rachel Kim",
    price: 32,
    rating: 5,
    category: "Analytics & Advertising",
    description:
      "A guide to increasing ad spend responsibly as a campaign proves itself, with the specific signals Kim watches for before scaling a budget and the ones that mean it's time to pull back. Drawn from managing eight-figure ad budgets across several verticals.",
  },
  {
    name: "A/B Testing for Marketers",
    instructor: "Tunde Bakare",
    price: 25,
    rating: 4,
    category: "Analytics & Advertising",
    description:
      "An introduction to running valid experiments on landing pages, emails and ads, covering sample size, statistical significance and the most common ways marketers fool themselves with test results. Bakare keeps the math to what's actually necessary to use.",
  },
  {
    name: "Dashboards That Tell the Truth",
    instructor: "Nadia Farouk",
    price: 23,
    rating: 3,
    category: "Analytics & Advertising",
    description:
      "A guide to building marketing dashboards that surface real problems early instead of just looking impressive in a monthly meeting. Farouk walks through common dashboard mistakes she's seen at a dozen companies, and how to fix each one.",
  },

  // ----------------------------------------------------------- Content & Affiliate
  {
    name: "The Content Engine",
    instructor: "Owen Baptiste",
    price: 30,
    rating: 5,
    category: "Content & Affiliate",
    popular: true,
    description:
      "A systemized approach to producing content consistently without burning out, built around repurposing a single piece of long-form content into a week's worth of smaller ones. Baptiste has run content operations for three media brands and shares the actual production workflow he built.",
  },
  {
    name: "Affiliate Income Blueprint",
    instructor: "Chiamaka Eze",
    price: 27,
    rating: 5,
    category: "Content & Affiliate",
    description:
      "A step-by-step guide to building a sustainable affiliate income stream, from choosing programs worth promoting to disclosing relationships in a way that builds rather than erodes trust. Eze shares real earnings screenshots and the traffic behind them.",
  },
  {
    name: "Write to Sell",
    instructor: "Grace Halloway",
    price: 22,
    rating: 4,
    category: "Content & Affiliate",
    description:
      "A foundational guide to sales copywriting for product pages, emails and ads, teaching the handful of structures that do most of the work in persuasive writing. Halloway includes annotated before-and-after rewrites so you can see exactly what changed and why.",
  },
  {
    name: "Email That Earns",
    instructor: "Daniel Frost",
    price: 26,
    rating: 4,
    category: "Content & Affiliate",
    description:
      "A practical email marketing playbook covering list building, sequence design and the subject-line habits that actually move open rates, tested across Frost's own list of 40,000 subscribers. Every tactic in the book ships with the real numbers behind it.",
  },
  {
    name: "The Creator's Toolkit",
    instructor: "Amina Yusuf",
    price: 24,
    rating: 4,
    category: "Content & Affiliate",
    description:
      "A field guide to the tools and workflows independent content creators actually use day to day, from editing and scheduling to invoicing and rights management. Yusuf updates her recommendations from firsthand use, not sponsorship deals.",
  },
  {
    name: "Partnerships That Pay",
    instructor: "Louis Marchetti",
    price: 31,
    rating: 4,
    category: "Content & Affiliate",
    description:
      "A guide to structuring affiliate and brand partnership deals that are fair and sustainable for both sides, written from Marchetti's years negotiating on both the brand and creator side of the table. Includes sample deal terms and the red flags worth walking away from.",
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
    instructor: seed.instructor,
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
