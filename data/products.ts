export type Category =
  | "Business & Finance"
  | "Design & Creative"
  | "Marketing & Sales"
  | "Data & Analytics"
  | "Productivity & Tools"
  | "Personal Growth";

export type Level = "Beginner" | "Intermediate" | "Advanced";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // base price in USD
  ngnOverride?: number; // fixed NGN price, when it doesn't follow the standard rate
  description: string;
  image: string;
  category: Category;
  level: Level;
  hours: number;
  format: string;
  rating: number;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "Business & Finance",
  "Design & Creative",
  "Marketing & Sales",
  "Data & Analytics",
  "Productivity & Tools",
  "Personal Growth",
];

interface Seed {
  name: string;
  price: number;
  ngnOverride?: number;
  category: Category;
  level: Level;
  hours: number;
  format: string;
  rating: number;
  inStock: boolean;
  popular?: boolean;
  description: string;
}

const seeds: Seed[] = [
  {
    name: "Excel for Business Analysts",
    price: 43,
    ngnOverride: 66470.95,
    category: "Data & Analytics",
    level: "Intermediate",
    hours: 12,
    format: "Self-paced video course + workbook",
    rating: 4.9,
    inStock: true,
    popular: true,
    description:
      "Build the exact Excel skillset business analysts are hired for: dynamic dashboards, pivot tables, INDEX/MATCH and XLOOKUP, scenario modelling, and clean handoff-ready reporting. Every module is built around real analyst deliverables — board packs, variance reports, forecast trackers — not toy spreadsheets. You'll leave with a portfolio of three finished workbooks and a reusable dashboard template.",
  },
  {
    name: "Financial Modeling Fundamentals",
    price: 39,
    category: "Business & Finance",
    level: "Intermediate",
    hours: 10,
    format: "Self-paced video course + templates",
    rating: 4.8,
    inStock: true,
    popular: true,
    description:
      "Learn to build three-statement financial models from a blank sheet — income statement, balance sheet, and cash flow, fully linked. Covers assumptions design, sensitivity analysis, and how to present a model to non-finance stakeholders without losing them in the mechanics. Includes a downloadable model template used throughout the course.",
  },
  {
    name: "Small Business Bookkeeping Mastery",
    price: 28,
    category: "Business & Finance",
    level: "Beginner",
    hours: 7,
    format: "Self-paced video course",
    rating: 4.7,
    inStock: true,
    description:
      "A practical bookkeeping course for founders and freelancers who need to keep their own books straight — recording transactions, reconciling accounts, tracking receivables, and preparing simple monthly statements. No accounting background required; every lesson uses a running example business.",
  },
  {
    name: "Investment Analysis & Valuation",
    price: 37,
    category: "Business & Finance",
    level: "Advanced",
    hours: 11,
    format: "Self-paced video course + case studies",
    rating: 4.8,
    inStock: true,
    description:
      "A grounded introduction to company valuation — comparable company analysis, discounted cash flow, and precedent transactions — taught through five real, anonymized case studies. Built for analysts who need to defend a number in a room, not just calculate one.",
  },
  {
    name: "Graphic Design Foundations with Adobe",
    price: 32,
    category: "Design & Creative",
    level: "Beginner",
    hours: 9,
    format: "Self-paced video course + source files",
    rating: 4.7,
    inStock: true,
    description:
      "Covers the core design principles — layout, type, color, hierarchy — alongside hands-on practice in Photoshop and Illustrator. You'll finish five real briefs: a social post set, a poster, a logo, a brochure, and a resume, each critiqued against professional standards.",
  },
  {
    name: "UI/UX Design for Beginners",
    price: 35,
    category: "Design & Creative",
    level: "Beginner",
    hours: 10,
    format: "Self-paced video course + Figma files",
    rating: 4.9,
    inStock: true,
    popular: true,
    description:
      "Go from a blank canvas to a clickable prototype. Covers user research basics, wireframing, Figma component systems, and usability testing, structured around a single app project you design from start to finish across the course.",
  },
  {
    name: "Adobe Photoshop Creative Mastery",
    price: 29,
    category: "Design & Creative",
    level: "Intermediate",
    hours: 8,
    format: "Self-paced video course",
    rating: 4.6,
    inStock: true,
    description:
      "Move past basic edits into compositing, retouching, and advanced layer work. Built for anyone producing marketing or product imagery who wants control over masks, blend modes, and non-destructive editing without the guesswork.",
  },
  {
    name: "Canva for Content Creators",
    price: 22,
    category: "Design & Creative",
    level: "Beginner",
    hours: 5,
    format: "Self-paced video course + templates",
    rating: 4.6,
    inStock: true,
    description:
      "A fast, practical course for creators who need on-brand graphics without a design background. Covers brand kits, reusable templates, animated posts, and a repeatable workflow for turning one piece of content into a week's worth of posts.",
  },
  {
    name: "Digital Marketing Strategy Blueprint",
    price: 34,
    category: "Marketing & Sales",
    level: "Intermediate",
    hours: 9,
    format: "Self-paced video course + planning kit",
    rating: 4.7,
    inStock: true,
    description:
      "A channel-agnostic framework for planning a marketing strategy from scratch — audience research, positioning, channel selection, budget allocation, and measurement. Includes the same planning worksheet used to build the in-course example strategy end to end.",
  },
  {
    name: "Social Media Growth & Content Systems",
    price: 26,
    category: "Marketing & Sales",
    level: "Beginner",
    hours: 6,
    format: "Self-paced video course",
    rating: 4.8,
    inStock: true,
    popular: true,
    description:
      "Build a content system that doesn't depend on daily inspiration — batching, repurposing, a 30-day content calendar template, and platform-specific posting tactics for Instagram, TikTok and LinkedIn. Focused on consistent output over viral luck.",
  },
  {
    name: "Search Engine Optimization Essentials",
    price: 31,
    category: "Marketing & Sales",
    level: "Beginner",
    hours: 8,
    format: "Self-paced video course + audit checklist",
    rating: 4.6,
    inStock: true,
    description:
      "Keyword research, on-page optimization, technical SEO basics, and link building explained without the jargon. You'll run a full SEO audit on a real site using the same checklist included with the course, so the skill transfers immediately.",
  },
  {
    name: "Sales Funnel & Copywriting Bootcamp",
    price: 33,
    category: "Marketing & Sales",
    level: "Intermediate",
    hours: 9,
    format: "Self-paced video course + swipe file",
    rating: 4.7,
    inStock: true,
    description:
      "Learn to write landing pages, email sequences, and ad copy that move people through a funnel, from cold traffic to paying customer. Includes an annotated swipe file of real, high-performing copy broken down line by line.",
  },
  {
    name: "Data Analysis with Python",
    price: 40,
    category: "Data & Analytics",
    level: "Intermediate",
    hours: 14,
    format: "Self-paced video course + notebooks",
    rating: 4.9,
    inStock: true,
    popular: true,
    description:
      "Covers pandas, data cleaning, exploratory analysis, and visualization with matplotlib and seaborn, all applied to real, messy datasets rather than toy examples. Ends with a full analysis project you can add directly to a portfolio.",
  },
  {
    name: "Power BI for Decision Makers",
    price: 36,
    category: "Data & Analytics",
    level: "Intermediate",
    hours: 10,
    format: "Self-paced video course + sample datasets",
    rating: 4.7,
    inStock: true,
    description:
      "Build interactive dashboards and reports that stakeholders actually use — data modelling, DAX fundamentals, and dashboard design that avoids the usual clutter. Structured around building one polished executive dashboard from raw data to publish.",
  },
  {
    name: "SQL for Data Professionals",
    price: 30,
    category: "Data & Analytics",
    level: "Beginner",
    hours: 9,
    format: "Self-paced video course + practice database",
    rating: 4.8,
    inStock: true,
    description:
      "From SELECT statements to window functions and query optimization, taught against a realistic sample database so every exercise resembles a question you'd actually be asked to answer at work.",
  },
  {
    name: "Google Sheets Automation & Dashboards",
    price: 24,
    category: "Productivity & Tools",
    level: "Beginner",
    hours: 6,
    format: "Self-paced video course + templates",
    rating: 4.6,
    inStock: true,
    description:
      "Turn Google Sheets into a lightweight reporting tool — formulas, conditional formatting, Apps Script basics, and linked dashboards that update themselves. Built for teams that need automation without a full BI stack.",
  },
  {
    name: "Notion for Productivity & Project Management",
    price: 21,
    category: "Productivity & Tools",
    level: "Beginner",
    hours: 5,
    format: "Self-paced video course + template pack",
    rating: 4.7,
    inStock: true,
    description:
      "A practical walkthrough of building a Notion workspace that sticks — databases, views, relations, and a project tracker you can duplicate and adapt on day one. Focused on systems you'll still be using in six months.",
  },
  {
    name: "Project Management with Agile & Scrum",
    price: 38,
    category: "Productivity & Tools",
    level: "Intermediate",
    hours: 11,
    format: "Self-paced video course + templates",
    rating: 4.8,
    inStock: true,
    description:
      "Covers Scrum roles, ceremonies, and backlog management alongside practical Agile planning you can run without certification-speak. Includes sprint planning templates and a sample backlog to practice against.",
  },
  {
    name: "Public Speaking & Presentation Skills",
    price: 23,
    category: "Personal Growth",
    level: "Beginner",
    hours: 5,
    format: "Self-paced video course",
    rating: 4.7,
    inStock: true,
    description:
      "Structure, delivery, and nerves — practical techniques for building a talk that holds attention and delivering it without reading from a script. Includes a framework for turning any topic into a clear, three-part presentation.",
  },
  {
    name: "Time Management & Deep Work Systems",
    price: 20,
    category: "Personal Growth",
    level: "Beginner",
    hours: 4,
    format: "Self-paced video course + planner",
    rating: 4.6,
    inStock: true,
    description:
      "A no-nonsense system for protecting focused work time — task triage, calendar blocking, and reducing context-switching. Short by design, built to be finished and applied in a single weekend.",
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
    ngnOverride: seed.ngnOverride,
    category: seed.category,
    level: seed.level,
    hours: seed.hours,
    format: seed.format,
    rating: seed.rating,
    inStock: seed.inStock,
    popular: seed.popular,
    image: `/products/${slug}.jpg`,
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
