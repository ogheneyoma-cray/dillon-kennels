export type Category = "Website Templates" | "App & Dashboard Kits" | "Growth & Automation";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // in USD
  description: string;
  category: Category;
  inStock: boolean;
  /** What ships in the download — source stack, not physical format. */
  techStack: string;
  /** How and when the package is delivered after checkout. */
  delivery: string;
  /** Product cover illustration, served from /public/products. */
  image: string;
  popular?: boolean;
}

export const categories: Category[] = [
  "Website Templates",
  "App & Dashboard Kits",
  "Growth & Automation",
];

export const products: Product[] = [
  // -------------------------------------------------------- Website Templates
  {
    id: 1,
    name: "Startup Launch Website Template",
    slug: "startup-launch-website-template",
    price: 29,
    category: "Website Templates",
    inStock: true,
    popular: true,
    techStack: "Next.js · Tailwind CSS · Framer Motion",
    delivery: "Source ZIP + setup guide emailed within minutes of checkout.",
    image: "/products/startup-launch-website-template.png",
    description:
      "A complete marketing site for an early-stage product — home, pricing, about and contact pages, wired up with responsive layouts and lightweight animation out of the box. Drop in your copy and brand colours and it's ready to deploy to Vercel or Netlify the same day.",
  },
  {
    id: 2,
    name: "E-Commerce Storefront Starter Kit",
    slug: "ecommerce-storefront-starter-kit",
    price: 38,
    category: "Website Templates",
    inStock: true,
    popular: true,
    techStack: "Next.js · Stripe-ready checkout · Tailwind CSS",
    delivery: "Source ZIP + setup guide emailed within minutes of checkout.",
    image: "/products/ecommerce-storefront-starter-kit.png",
    description:
      "A ready-to-brand online store front end — product grid, product detail page, cart and a checkout flow scaffolded for a hosted payment provider. Built for a small catalogue that needs to look considered without a six-week build.",
  },
  {
    id: 3,
    name: "One-Page Portfolio Template",
    slug: "one-page-portfolio-template",
    price: 21,
    category: "Website Templates",
    inStock: true,
    techStack: "Next.js · Tailwind CSS",
    delivery: "Source ZIP + setup guide emailed within minutes of checkout.",
    image: "/products/one-page-portfolio-template.png",
    description:
      "A single scrolling page for a freelancer, studio or small agency to show off recent work — a project grid, a short about section and a contact block, with no unnecessary pages to maintain. Fast to load and fast to launch.",
  },

  // -------------------------------------------------- App & Dashboard Kits
  {
    id: 4,
    name: "Admin Dashboard UI Kit",
    slug: "admin-dashboard-ui-kit",
    price: 34,
    category: "App & Dashboard Kits",
    inStock: true,
    popular: true,
    techStack: "React · Tailwind CSS · Chart.js",
    delivery: "Source ZIP + component guide emailed within minutes of checkout.",
    image: "/products/admin-dashboard-ui-kit.png",
    description:
      "A set of dashboard screens — overview charts, a data table with sorting and filters, a settings panel and an activity feed — for teams building an internal tool or a SaaS back office rather than starting every screen from a blank canvas.",
  },
  {
    id: 5,
    name: "SaaS Landing + App Shell Kit",
    slug: "saas-landing-app-shell-kit",
    price: 36,
    category: "App & Dashboard Kits",
    inStock: true,
    techStack: "Next.js · Tailwind CSS · Responsive app shell",
    delivery: "Source ZIP + setup guide emailed within minutes of checkout.",
    image: "/products/saas-landing-app-shell-kit.png",
    description:
      "A matched pair: a conversion-focused marketing landing page and the logged-in application shell that follows it — sidebar navigation, top bar and content frame — so the jump from public site to product doesn't feel like two different companies.",
  },

  // ---------------------------------------------------- Growth & Automation
  {
    id: 6,
    name: "SEO Launch Toolkit",
    slug: "seo-launch-toolkit",
    price: 23,
    category: "Growth & Automation",
    inStock: true,
    techStack: "Technical SEO checklist · Search Console setup · Sitemap config",
    delivery: "PDF toolkit + config files emailed within minutes of checkout.",
    image: "/products/seo-launch-toolkit.png",
    description:
      "Everything a new site needs configured in its first week — metadata templates, an XML sitemap and robots.txt starting point, Search Console verification steps, and a plain-language checklist for the technical basics that actually move rankings.",
  },
  {
    id: 7,
    name: "Workflow Automation Scripts Bundle",
    slug: "workflow-automation-scripts-bundle",
    price: 27,
    category: "Growth & Automation",
    inStock: true,
    techStack: "Node.js scripts · Zapier-ready webhooks",
    delivery: "Source ZIP + setup guide emailed within minutes of checkout.",
    image: "/products/workflow-automation-scripts-bundle.png",
    description:
      "A set of small, focused scripts for the repetitive parts of running a web product — form-to-inbox notifications, scheduled report emails, and webhook handlers ready to connect to Zapier or a cron job. No framework to learn, just working code to adapt.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.popular);
}
