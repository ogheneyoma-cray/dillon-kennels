export type Category =
  | "UI Kits"
  | "Boilerplates"
  | "Admin Panels"
  | "Browser Extensions"
  | "API Tools";

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
  "UI Kits",
  "Boilerplates",
  "Admin Panels",
  "Browser Extensions",
  "API Tools",
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
    name: "Chromatic Design System",
    instructor: "Silverpoodles Studio",
    price: 34,
    rating: 5,
    category: "UI Kits",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    description:
      "A full design-token system with light and dark themes, over eighty components and a matching React library, so your product's UI stays consistent from Figma to production.",
  },
  {
    name: "Frostkit Component Library",
    instructor: "Silverpoodles Studio",
    price: 28,
    rating: 4,
    category: "UI Kits",
    image:
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?auto=format&fit=crop&w=900&q=80",
    description:
      "A lightweight, accessible component library covering forms, navigation and layout primitives — built to drop into any React project without fighting your existing styles.",
  },
  {
    name: "Nimbus Next.js Boilerplate",
    instructor: "Silverpoodles Studio",
    price: 39,
    rating: 5,
    category: "Boilerplates",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=900&q=80",
    description:
      "A production-ready Next.js starter with authentication, billing hooks and a settings dashboard already wired together, so you start building your product instead of scaffolding it.",
  },
  {
    name: "Vector Node API Starter",
    instructor: "Silverpoodles Studio",
    price: 26,
    rating: 4,
    category: "Boilerplates",
    image:
      "https://images.unsplash.com/photo-1519241047957-be31d7379a5d?auto=format&fit=crop&w=900&q=80",
    description:
      "A structured Node.js and Express API starter with authentication, request validation and test scaffolding configured, following current best practices out of the box.",
  },
  {
    name: "Steelframe Admin Panel",
    instructor: "Silverpoodles Studio",
    price: 37,
    rating: 5,
    category: "Admin Panels",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=900&q=80",
    description:
      "A complete admin panel theme with data tables, role-based navigation and form builders, for teams building internal tools without starting from a blank canvas.",
  },
  {
    name: "Gridline Analytics Panel",
    instructor: "Silverpoodles Studio",
    price: 31,
    rating: 4,
    category: "Admin Panels",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    description:
      "A data-dense analytics dashboard theme with pre-built chart layouts and filter panels, built for reporting-heavy products that need to look sharp on day one.",
  },
  {
    name: "Clipflow Chrome Extension Kit",
    instructor: "Silverpoodles Studio",
    price: 22,
    rating: 4,
    category: "Browser Extensions",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    description:
      "A Manifest V3 Chrome extension starter with a popup UI, background service worker and options page already configured, so you can ship your extension idea faster.",
  },
  {
    name: "Taskbeam Productivity Extension",
    instructor: "Silverpoodles Studio",
    price: 20,
    rating: 4,
    category: "Browser Extensions",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80",
    description:
      "A polished quick-capture browser extension template with local storage sync and a clean popup interface, ready to rebrand for your own productivity tool.",
  },
  {
    name: "Pulsecheck API Monitor",
    instructor: "Silverpoodles Studio",
    price: 29,
    rating: 5,
    category: "API Tools",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=900&q=80",
    description:
      "A self-hosted API uptime and response-time monitor with a status-page template included, so you can watch your endpoints without paying for a third-party service.",
  },
  {
    name: "Routewise API Gateway Toolkit",
    instructor: "Silverpoodles Studio",
    price: 33,
    rating: 4,
    category: "API Tools",
    image:
      "https://images.unsplash.com/photo-1592609931095-54a2168ae893?auto=format&fit=crop&w=900&q=80",
    description:
      "A lightweight API gateway toolkit handling rate limiting, request logging and key management, built for teams who need the basics without a heavyweight platform.",
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
