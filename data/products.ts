export type Category =
  | "Landing Page Themes"
  | "E-commerce Themes"
  | "Admin Dashboards"
  | "Blog & Magazine Themes"
  | "Plugins & Utilities";

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
  "Landing Page Themes",
  "E-commerce Themes",
  "Admin Dashboards",
  "Blog & Magazine Themes",
  "Plugins & Utilities",
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
    name: "Nova SaaS Landing Theme",
    instructor: "Lawin Store Design Team",
    price: 29,
    rating: 5,
    category: "Landing Page Themes",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
    description:
      "A conversion-focused SaaS landing theme with a pricing table, feature grid, testimonial carousel and a sticky call-to-action bar — fully responsive and ready to reskin with your own brand colors.",
  },
  {
    name: "Orbit Startup Theme",
    instructor: "Lawin Store Design Team",
    price: 25,
    rating: 4,
    category: "Landing Page Themes",
    image:
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    description:
      "A clean, single-page startup theme built around a bold hero and a simple story-driven layout, ideal for product launches and early-access waitlists.",
  },
  {
    name: "Bazaar Shopify Theme",
    instructor: "Lawin Store Design Team",
    price: 39,
    rating: 5,
    category: "E-commerce Themes",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=900&q=80",
    description:
      "A full storefront theme with a mega-menu, quick-view product cards, cart drawer and a checkout flow tuned for fast mobile conversions.",
  },
  {
    name: "Mercado WooCommerce Theme",
    instructor: "Lawin Store Design Team",
    price: 34,
    rating: 4,
    category: "E-commerce Themes",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    description:
      "A WooCommerce theme with flexible product grids, a built-in wishlist layout and clean typography that keeps the focus on your product photography.",
  },
  {
    name: "Pulse Admin Dashboard Theme",
    instructor: "Lawin Store Design Team",
    price: 37,
    rating: 5,
    category: "Admin Dashboards",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    description:
      "Over fifty dashboard components — charts, tables, forms and navigation shells — for building admin panels and internal tools without starting from scratch.",
  },
  {
    name: "Vertex Analytics Dashboard",
    instructor: "Lawin Store Design Team",
    price: 32,
    rating: 4,
    category: "Admin Dashboards",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=900&q=80",
    description:
      "A data-dense analytics dashboard theme with pre-built chart layouts, filter panels and a dark-mode toggle, built for reporting-heavy products.",
  },
  {
    name: "Chronicle Magazine Theme",
    instructor: "Lawin Store Design Team",
    price: 24,
    rating: 4,
    category: "Blog & Magazine Themes",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
    description:
      "An editorial magazine theme with a featured-story hero, category ribbons and a clean reading layout that keeps articles the focus, not the chrome.",
  },
  {
    name: "Inkwell Blog Theme",
    instructor: "Lawin Store Design Team",
    price: 22,
    rating: 4,
    category: "Blog & Magazine Themes",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=900&q=80",
    description:
      "A minimal personal-blog theme with generous whitespace, a distraction-free post layout and built-in support for newsletter sign-up blocks.",
  },
  {
    name: "Speedster Cache Plugin",
    instructor: "Lawin Store Dev Team",
    price: 20,
    rating: 4,
    category: "Plugins & Utilities",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    description:
      "A lightweight caching and asset-minification plugin that speeds up page loads without the bloated settings panels most performance plugins ship with.",
  },
  {
    name: "FormFlow Builder Plugin",
    instructor: "Lawin Store Dev Team",
    price: 23,
    rating: 5,
    category: "Plugins & Utilities",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=900&q=80",
    description:
      "A drag-and-drop form builder plugin with conditional logic, spam protection and one-click integrations for the email tools you already use.",
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
