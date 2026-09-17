export type Category =
  | "Support & Maintenance"
  | "Security"
  | "Networking"
  | "Cloud & Data";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  rating: number;
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  popular?: boolean;
}

export const categories: Category[] = [
  "Support & Maintenance",
  "Security",
  "Networking",
  "Cloud & Data",
];

interface Seed {
  name: string;
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
    name: "Website Health Audit",
    price: 24,
    rating: 5,
    category: "Support & Maintenance",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=900&q=80",
    description:
      "A full technical review of your website covering speed, uptime, broken links, SEO basics and mobile responsiveness. You receive a written report with prioritized fixes within 3 business days, plus a 20-minute call to walk through the findings.",
  },
  {
    name: "Managed IT Support (Monthly)",
    price: 35,
    rating: 5,
    category: "Support & Maintenance",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=900&q=80",
    description:
      "Ongoing remote IT support for small teams — unlimited ticket submissions, monthly system health checks, software updates and priority response within 4 business hours. Ideal for offices without an in-house IT staff.",
  },
  {
    name: "Network & Wi-Fi Setup",
    price: 32,
    rating: 4,
    category: "Networking",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80",
    description:
      "Professional setup of your office or home network — router configuration, Wi-Fi coverage optimization, guest network isolation and device connectivity testing, completed on-site or remotely depending on your location.",
  },
  {
    name: "Cybersecurity Vulnerability Scan",
    price: 38,
    rating: 5,
    category: "Security",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    description:
      "An automated and manual scan of your network, endpoints and public-facing systems to identify weak passwords, outdated software and open ports. Delivered as a ranked risk report with clear remediation steps.",
  },
  {
    name: "Business Email Migration",
    price: 22,
    rating: 4,
    category: "Cloud & Data",
    image:
      "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=900&q=80",
    description:
      "Seamless migration of your business email and contacts to a new provider or domain, with zero data loss and minimal downtime. Includes DNS record setup, spam filter configuration and a staff transition guide.",
  },
  {
    name: "VPN & Remote Access Setup",
    price: 27,
    rating: 4,
    category: "Networking",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=80",
    description:
      "Secure remote access for your team, set up with an encrypted VPN, role-based permissions and device authentication. Perfect for hybrid teams that need safe access to office systems from anywhere.",
  },
  {
    name: "Cloud Backup & Recovery Setup",
    price: 29,
    rating: 5,
    category: "Cloud & Data",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    description:
      "Automated, encrypted cloud backup configured for your critical files and systems, with scheduled snapshots and a tested recovery plan so you can restore operations quickly after any data loss event.",
  },
  {
    name: "POS & Payment System Integration",
    price: 34,
    rating: 4,
    category: "Support & Maintenance",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    description:
      "Installation and configuration of a point-of-sale system integrated with card payment processing, inventory tracking and receipt printing — set up and tested on-site before we hand over full training.",
  },
  {
    name: "Data Recovery Service",
    price: 40,
    rating: 5,
    category: "Cloud & Data",
    image:
      "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&w=900&q=80",
    description:
      "Recovery of lost or corrupted files from failed drives, accidental deletion or ransomware incidents. Our engineers run a diagnostic first and only charge this rate once recovery is confirmed possible.",
  },
  {
    name: "IT Helpdesk Hour Bundle (5 Hours)",
    price: 20,
    rating: 4,
    category: "Support & Maintenance",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=900&q=80",
    description:
      "Five hours of on-demand remote helpdesk support to use anytime within 60 days — for troubleshooting, software installs, printer issues, or general IT questions. Hours are tracked and billed in 15-minute increments.",
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
