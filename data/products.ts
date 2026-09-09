export type Category =
  | "Cybersecurity"
  | "Cloud Services"
  | "IT Support"
  | "Web & App Dev"
  | "Data Solutions";

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
  "Cybersecurity",
  "Cloud Services",
  "IT Support",
  "Web & App Dev",
  "Data Solutions",
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
    name: "Firewall Configuration Service",
    instructor: "Cyber Travellers Security Team",
    price: 35,
    rating: 5,
    category: "Cybersecurity",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    description:
      "A properly configured firewall for your office network — rules reviewed, ports locked down and remote access secured, with a written summary of what changed and why.",
  },
  {
    name: "Malware Removal & Cleanup",
    instructor: "Cyber Travellers Security Team",
    price: 25,
    rating: 4,
    category: "Cybersecurity",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    description:
      "A full malware sweep and cleanup for an infected device — threats removed, startup items reviewed and basic protection installed so it doesn't happen again.",
  },
  {
    name: "Cloud Server Setup",
    instructor: "Cyber Travellers Cloud Team",
    price: 39,
    rating: 5,
    category: "Cloud Services",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80",
    description:
      "A cloud server provisioned, secured and configured for your application — firewall rules, backups and monitoring set up before we hand you the keys.",
  },
  {
    name: "Cloud Backup Migration",
    instructor: "Cyber Travellers Cloud Team",
    price: 32,
    rating: 4,
    category: "Cloud Services",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    description:
      "Move your files and backups from local drives onto secure cloud storage, with proper folder structure and access permissions for your whole team.",
  },
  {
    name: "Remote IT Helpdesk — Monthly",
    instructor: "Cyber Travellers Support Desk",
    price: 28,
    rating: 4,
    category: "IT Support",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
    description:
      "A month of remote IT support for your small team — software troubleshooting, printer and network issues, answered within one business day.",
  },
  {
    name: "On-Demand Tech Support Session",
    instructor: "Cyber Travellers Support Desk",
    price: 22,
    rating: 4,
    category: "IT Support",
    image:
      "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?auto=format&fit=crop&w=900&q=80",
    description:
      "A single remote session with a technician to fix whatever's slowing you down right now — no monthly commitment, just the help you need today.",
  },
  {
    name: "Landing Page Build",
    instructor: "Cyber Travellers Web Team",
    price: 37,
    rating: 5,
    category: "Web & App Dev",
    popular: true,
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80",
    description:
      "A single responsive landing page built and deployed to your domain — hero, features, contact form and one round of revisions included.",
  },
  {
    name: "Bug Fix & Maintenance Sprint",
    instructor: "Cyber Travellers Web Team",
    price: 30,
    rating: 4,
    category: "Web & App Dev",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    description:
      "A focused sprint to fix a defined list of bugs on your existing site or app, with a written report of what was found and fixed.",
  },
  {
    name: "Database Optimization Service",
    instructor: "Cyber Travellers Data Team",
    price: 34,
    rating: 5,
    category: "Data Solutions",
    image:
      "https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?auto=format&fit=crop&w=900&q=80",
    description:
      "A performance review of your database — slow queries identified, indexes tuned and a report on what to watch as your data grows.",
  },
  {
    name: "Data Recovery Service",
    instructor: "Cyber Travellers Data Team",
    price: 26,
    rating: 4,
    category: "Data Solutions",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
    description:
      "Recovery of files from a failed drive or accidental deletion, with a diagnostic report up front so you know what's recoverable before we start.",
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
