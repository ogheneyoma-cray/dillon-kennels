export type Category =
  | "Business & Management"
  | "Website Development"
  | "Digital Marketing"
  | "Graphic Design & Visual Arts"
  | "Data Science & Analytics"
  | "Project Management";

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
  "Business & Management",
  "Website Development",
  "Digital Marketing",
  "Graphic Design & Visual Arts",
  "Data Science & Analytics",
  "Project Management",
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
  // ------------------------------------------------------- Business & Management
  {
    name: "Small Business Operations Playbook",
    instructor: "Derek Ashworth",
    price: 34,
    rating: 5,
    category: "Business & Management",
    popular: true,
    description:
      "A practical operating system for running a small business day to day — inventory, cash flow, staffing and the recurring decisions that eat up a founder's week. Ashworth built this course from fifteen years of operating three different small businesses, not from a textbook.",
  },
  {
    name: "Leading Without Ego",
    instructor: "Monica Reyes",
    price: 28,
    rating: 4,
    category: "Business & Management",
    description:
      "A management course built around one idea: the best managers make themselves less necessary over time, not more. Reyes covers delegation, giving feedback that actually lands, and stepping back without disengaging.",
  },
  {
    name: "The Founder's Finance Crash Course",
    instructor: "Patrick Owusu",
    price: 32,
    rating: 5,
    category: "Business & Management",
    description:
      "Everything a first-time founder needs to read their own numbers — cash flow, runway, margins and the handful of ratios that actually predict trouble before it hits. Owusu, a former startup CFO, keeps the accounting jargon to a minimum.",
  },
  {
    name: "Negotiation for Everyday Deals",
    instructor: "Sarah Lindqvist",
    price: 25,
    rating: 4,
    category: "Business & Management",
    description:
      "A negotiation course for the deals that actually come up at work — vendor contracts, salary conversations, scope changes — rather than boardroom theatrics. Lindqvist teaches a small set of tactics that work even when you have little leverage.",
  },
  {
    name: "Building a Business That Runs Without You",
    instructor: "Ibrahim Sanni",
    price: 37,
    rating: 5,
    category: "Business & Management",
    description:
      "A systemization course for owner-operators ready to step back from daily operations — documenting processes, hiring for ownership, and building the reporting that lets you trust the business without watching it constantly.",
  },

  // --------------------------------------------------------- Website Development
  {
    name: "Full-Stack Foundations",
    instructor: "Leah Buchanan",
    price: 39,
    rating: 5,
    category: "Website Development",
    popular: true,
    description:
      "A from-scratch introduction to building a complete web application — front end, back end and database — for people who can already write basic HTML and JavaScript. Buchanan builds one real project across the whole course instead of disconnected exercises.",
  },
  {
    name: "Responsive Design From Scratch",
    instructor: "Marcus Delgado",
    price: 27,
    rating: 4,
    category: "Website Development",
    description:
      "A hands-on course in building layouts that hold up across phones, tablets and desktops using modern CSS, without relying on a framework to hide what's actually happening. Delgado rebuilds three real sites live across the lessons.",
  },
  {
    name: "APIs for Front-End Developers",
    instructor: "Tomiwa Adekunle",
    price: 31,
    rating: 4,
    category: "Website Development",
    description:
      "A practical guide to consuming and reasoning about REST APIs from the front end — authentication, error states, caching and the mistakes that cause the most production bugs. Adekunle draws every example from real public APIs.",
  },
  {
    name: "Debugging Like a Senior Engineer",
    instructor: "Renata Kowalski",
    price: 29,
    rating: 5,
    category: "Website Development",
    description:
      "Less a tools course than a thinking course — how experienced engineers narrow down a bug instead of guessing. Kowalski walks through real debugging sessions end to end, including the dead ends.",
  },
  {
    name: "Ship Your First Web App",
    instructor: "Colin Frasier",
    price: 24,
    rating: 4,
    category: "Website Development",
    description:
      "A beginner-friendly course focused entirely on getting a simple web app built and deployed, on the theory that shipping something small teaches more than tutorials ever will. Frasier keeps the scope deliberately tight.",
  },

  // ---------------------------------------------------------- Digital Marketing
  {
    name: "Performance Marketing Fundamentals",
    instructor: "Yara Haddad",
    price: 33,
    rating: 5,
    category: "Digital Marketing",
    popular: true,
    description:
      "A grounding in paid acquisition across search and social — targeting, budgets, and reading results honestly instead of chasing vanity metrics. Haddad has managed ad budgets for both scrappy startups and larger retail brands.",
  },
  {
    name: "The Organic Traffic Blueprint",
    instructor: "Femi Okonjo",
    price: 26,
    rating: 4,
    category: "Digital Marketing",
    description:
      "A step-by-step approach to growing search and referral traffic without a paid budget, covering content, technical basics and the slow compounding work that actually moves the needle over months.",
  },
  {
    name: "Marketing Analytics for Non-Analysts",
    instructor: "Sasha Petrov",
    price: 30,
    rating: 4,
    category: "Digital Marketing",
    description:
      "A practical analytics course for marketers who aren't data people, focused on the handful of numbers worth checking weekly and how to explain them to a boss who wants a straight answer.",
  },
  {
    name: "Building Campaigns That Convert",
    instructor: "Aisha Bello",
    price: 28,
    rating: 5,
    category: "Digital Marketing",
    description:
      "A campaign-planning course covering offer, audience and creative together rather than in isolation, with real campaign breakdowns showing what worked and what quietly didn't.",
  },
  {
    name: "Brand Positioning in a Noisy Market",
    instructor: "Diego Alvarez",
    price: 32,
    rating: 4,
    category: "Digital Marketing",
    description:
      "A course on carving out a distinct market position when every competitor sounds the same, built around a repeatable positioning exercise Alvarez has run with over forty brands.",
  },

  // ------------------------------------------------- Graphic Design & Visual Arts
  {
    name: "Design Systems in Practice",
    instructor: "Naomi Chukwu",
    price: 35,
    rating: 5,
    category: "Graphic Design & Visual Arts",
    popular: true,
    description:
      "A practical guide to building and maintaining a design system that a whole team actually uses — components, tokens and the governance that keeps it from drifting apart within a year.",
  },
  {
    name: "Typography That Works",
    instructor: "Elliot Marsh",
    price: 23,
    rating: 4,
    category: "Graphic Design & Visual Arts",
    description:
      "A focused course on choosing and pairing typefaces, setting hierarchy, and fixing the small spacing decisions that separate amateur layouts from professional ones.",
  },
  {
    name: "Digital Illustration Foundations",
    instructor: "Priya Nair",
    price: 27,
    rating: 4,
    category: "Graphic Design & Visual Arts",
    description:
      "An introduction to digital illustration covering line, shape and color fundamentals, built for people coming from traditional drawing who want to work confidently in digital tools.",
  },
  {
    name: "Color Theory for Working Designers",
    instructor: "Grace Umeh",
    price: 22,
    rating: 5,
    category: "Graphic Design & Visual Arts",
    description:
      "A practical color course focused on making confident palette decisions on deadline, rather than memorizing the color wheel in the abstract. Umeh includes a repeatable palette-building method used across her own client work.",
  },
  {
    name: "From Sketch to Screen",
    instructor: "Hassan Idris",
    price: 29,
    rating: 4,
    category: "Graphic Design & Visual Arts",
    description:
      "A workflow course on taking a design from rough sketch through to a polished, presentable screen mockup, covering the in-between steps most tutorials skip entirely.",
  },

  // --------------------------------------------------------- Data Science & Analytics
  {
    name: "Data Analysis with Spreadsheets",
    instructor: "Ravi Chandran",
    price: 30,
    rating: 4,
    category: "Data Science & Analytics",
    popular: true,
    description:
      "A course proving you don't need Python to analyze data well — advanced formulas, pivot tables and clean reporting built entirely in spreadsheets most teams already have.",
  },
  {
    name: "Statistics for Decision Makers",
    instructor: "Ines Coelho",
    price: 34,
    rating: 5,
    category: "Data Science & Analytics",
    description:
      "A statistics course for people who need to make and defend decisions with data, not pass an exam — sample size, significance, and spotting a misleading chart on sight.",
  },
  {
    name: "Dashboards That Get Used",
    instructor: "Kwabena Mensah",
    price: 28,
    rating: 4,
    category: "Data Science & Analytics",
    description:
      "A design-first approach to building dashboards people actually open, instead of ones that get built once and forgotten. Mensah shares real before-and-after dashboard redesigns.",
  },
  {
    name: "SQL for Everyday Analysts",
    instructor: "Fatima Zahra",
    price: 25,
    rating: 4,
    category: "Data Science & Analytics",
    description:
      "A practical SQL course covering the queries analysts actually write day to day — joins, aggregates and window functions — skipping the database-administration material most SQL courses pad in.",
  },
  {
    name: "Introduction to Predictive Modeling",
    instructor: "Julian Voss",
    price: 38,
    rating: 4,
    category: "Data Science & Analytics",
    description:
      "A first course in predictive modeling that prioritizes intuition over math notation, building toward a working model while explaining what each step is actually doing and why.",
  },

  // ---------------------------------------------------------- Project Management
  {
    name: "The Practical PM Toolkit",
    instructor: "Bianca Torres",
    price: 31,
    rating: 5,
    category: "Project Management",
    popular: true,
    description:
      "A no-certification, no-jargon project management course covering the templates and habits Torres actually uses to run projects — status updates, scope changes and the meetings worth having.",
  },
  {
    name: "Agile Without the Jargon",
    instructor: "Tunde Fashola",
    price: 26,
    rating: 4,
    category: "Project Management",
    description:
      "A plain-language introduction to agile practices for teams that want the useful parts — short cycles, honest standups, visible work — without adopting an entire framework wholesale.",
  },
  {
    name: "Managing Remote Teams Well",
    instructor: "Nadia Kessler",
    price: 29,
    rating: 4,
    category: "Project Management",
    description:
      "A course on the specific challenges of managing people you rarely see in person — async communication, trust-building and knowing when a video call actually beats a written update.",
  },
  {
    name: "Risk Management for Small Teams",
    instructor: "Samuel Achebe",
    price: 27,
    rating: 4,
    category: "Project Management",
    description:
      "A lightweight risk-management course sized for small teams without a dedicated PMO — spotting risks early, deciding which ones are worth tracking, and not drowning the project in process.",
  },
  {
    name: "From Chaos to Roadmap",
    instructor: "Layla Hassan",
    price: 33,
    rating: 5,
    category: "Project Management",
    description:
      "A course on turning a messy backlog of requests into a roadmap stakeholders actually trust, covering prioritization frameworks that hold up under pressure from the loudest voice in the room.",
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
