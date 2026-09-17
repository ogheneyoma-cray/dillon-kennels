export type Category =
  | "WordPress Themes"
  | "Site Plugins"
  | "UI Kits"
  | "Page Builders";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  instructor: string;
  rating: number;
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "WordPress Themes",
  "Site Plugins",
  "UI Kits",
  "Page Builders",
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
    name: "Flavor starter theme",
    instructor: "Richavaid",
    price: 29,
    rating: 5,
    category: "WordPress Themes",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    description:
      "A lightweight, modern starter theme for blogs and portfolios. Fully responsive, SEO-optimised and compatible with all major page builders. Includes dark-mode support and one-click demo import.",
  },
  {
    name: "QuickForms plugin",
    instructor: "Richavaid",
    price: 22,
    rating: 4,
    category: "Site Plugins",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80",
    description:
      "An essential plugin bundle that adds contact forms, social sharing, lazy loading and basic analytics to any WordPress installation — zero configuration required.",
  },
  {
    name: "Starter UI Kit",
    instructor: "Richavaid",
    price: 35,
    rating: 5,
    category: "UI Kits",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    description:
      "Over 120 ready-made UI components for Figma and Sketch, covering dashboards, e-commerce, SaaS and marketing layouts. Tokens are provided for Tailwind and vanilla CSS.",
  },
  {
    name: "VeloxTheme Pro",
    instructor: "Richavaid",
    price: 40,
    rating: 5,
    category: "WordPress Themes",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80",
    description:
      "A performance-first theme built for online stores. WooCommerce-ready with AJAX cart, quick-view modals, wishlist integration and a built-in mega-menu builder.",
  },
  {
    name: "FormCraft Pro",
    instructor: "Richavaid",
    price: 25,
    rating: 4,
    category: "Site Plugins",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    description:
      "Drag-and-drop form builder with conditional logic, file uploads, payment fields and webhook integrations. Works with any theme and sends submissions to your email or CRM.",
  },
  {
    name: "NovaDrag Builder",
    instructor: "Richavaid",
    price: 38,
    rating: 5,
    category: "Page Builders",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
    description:
      "A visual page builder with 80+ pre-designed sections. Inline editing, global design tokens, responsive controls and export-to-HTML so you are never locked in.",
  },
  {
    name: "ShieldWP Security",
    instructor: "Richavaid",
    price: 20,
    rating: 4,
    category: "Site Plugins",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?auto=format&fit=crop&w=900&q=80",
    description:
      "Hardens your WordPress installation with two-factor auth, login-attempt limiting, malware scanning and automatic core/plugin update management.",
  },
  {
    name: "Developer Component Kit",
    instructor: "Richavaid",
    price: 32,
    rating: 5,
    category: "UI Kits",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
    description:
      "A React + Tailwind component library with 60+ production-ready components, dark/light tokens and full TypeScript support. Ships as an npm package for easy integration.",
  },
  {
    name: "StoreFront starter eCommerce",
    instructor: "Richavaid",
    price: 36,
    rating: 4,
    category: "WordPress Themes",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=900&q=80",
    description:
      "A clean, conversion-focused theme for small online stores. Built-in product filtering, sticky add-to-cart bar, trust-badge placement and optimised checkout flow.",
  },
  {
    name: "PixelGrid Layout Builder",
    instructor: "Richavaid",
    price: 28,
    rating: 4,
    category: "Page Builders",
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=900&q=80",
    description:
      "A grid-based layout engine that lets you build magazine-style pages with masonry, mosaic and card layouts. Drag to resize, snap-to-grid and full mobile preview.",
  },
];

export const products: Product[] = seeds.map((seed, i) => ({
  ...seed,
  id: i + 1,
  slug: seed.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  inStock: seed.inStock !== false,
}));

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.popular);
}
