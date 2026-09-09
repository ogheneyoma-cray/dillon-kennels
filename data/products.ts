export type Category =
  | "Web Templates"
  | "UI Kits"
  | "Boilerplates & Starters"
  | "Plugins & Extensions"
  | "Mobile App Templates";

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
  "Web Templates",
  "UI Kits",
  "Boilerplates & Starters",
  "Plugins & Extensions",
  "Mobile App Templates",
];

interface Seed {
  name: string;
  instructor: string;
  price: number;
  rating: number;
  category: Category;
  description: string;
  image: string;
  popular?: boolean;
  inStock?: boolean;
}

const seeds: Seed[] = [
  {
    name: "SaaS Landing Page Template",
    instructor: "Built by the Aims I-Tech Studio",
    price: 29,
    rating: 5,
    category: "Web Templates",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    description:
      "A conversion-focused landing page built with semantic HTML and Tailwind CSS — pricing table, feature grid, testimonials and a sticky CTA header included. Fully responsive and easy to reskin.",
  },
  {
    name: "Agency Portfolio Template",
    instructor: "Built by the Aims I-Tech Studio",
    price: 25,
    rating: 4,
    category: "Web Templates",
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
    description:
      "A clean multi-page portfolio site for agencies and freelancers — case study layout, team grid and a working contact form markup, ready to hook up to your backend of choice.",
  },
  {
    name: "Dashboard UI Kit",
    instructor: "Built by the Aims I-Tech Studio",
    price: 39,
    rating: 5,
    category: "UI Kits",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    description:
      "Over sixty components for building admin dashboards — charts, tables, forms, modals and navigation shells — delivered as a Figma file plus a matching React component library.",
  },
  {
    name: "E-commerce UI Kit",
    instructor: "Built by the Aims I-Tech Studio",
    price: 34,
    rating: 4,
    category: "UI Kits",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    description:
      "Every screen a storefront needs — product grid, cart drawer, checkout flow and order tracking — as reusable, themeable components for a faster build.",
  },
  {
    name: "Next.js SaaS Starter Kit",
    instructor: "Built by the Aims I-Tech Studio",
    price: 39,
    rating: 5,
    category: "Boilerplates & Starters",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    description:
      "A production-ready Next.js codebase with auth, billing hooks, a settings dashboard and a marketing site already wired together, so you start building your product on day one instead of scaffolding.",
  },
  {
    name: "Node REST API Boilerplate",
    instructor: "Built by the Aims I-Tech Studio",
    price: 27,
    rating: 4,
    category: "Boilerplates & Starters",
    image:
      "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=900&q=80",
    description:
      "A structured Node.js and Express API starter with authentication, request validation, error handling and test scaffolding already configured, following current best practices.",
  },
  {
    name: "WordPress SEO Toolkit Plugin",
    instructor: "Built by the Aims I-Tech Studio",
    price: 22,
    rating: 4,
    category: "Plugins & Extensions",
    image:
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=900&q=80",
    description:
      "A lightweight WordPress plugin covering meta tags, sitemap generation and basic schema markup — no bloat, no upsells, just the SEO fundamentals done right.",
  },
  {
    name: "VS Code Productivity Pack",
    instructor: "Built by the Aims I-Tech Studio",
    price: 20,
    rating: 4,
    category: "Plugins & Extensions",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    description:
      "A curated bundle of VS Code snippets, keybindings and workspace settings tuned for fast full-stack development, plus a short guide for tailoring it to your own stack.",
  },
  {
    name: "React Native Fitness App Template",
    instructor: "Built by the Aims I-Tech Studio",
    price: 35,
    rating: 5,
    category: "Mobile App Templates",
    image:
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=900&q=80",
    description:
      "A complete React Native fitness app — onboarding, workout tracking, progress charts and profile screens — styled and ready to connect to your own API.",
  },
  {
    name: "Flutter E-commerce App Template",
    instructor: "Built by the Aims I-Tech Studio",
    price: 32,
    rating: 4,
    category: "Mobile App Templates",
    image:
      "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=900&q=80",
    description:
      "A Flutter storefront app with product browsing, cart, checkout and order history screens, built with a clean state-management pattern that's easy to extend.",
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
    image: seed.image,
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
