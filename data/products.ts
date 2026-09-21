export type Category = "Support Plans" | "Network & Security" | "Cloud Services" | "Setup & Installation" | "Maintenance";

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

export const categories: Category[] = ["Support Plans", "Network & Security", "Cloud Services", "Setup & Installation", "Maintenance"];

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

const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`;

const seeds: Seed[] = [
  // Support Plans
  {
    name: "Remote IT Support Session",
    price: 25,
    rating: 5,
    category: "Support Plans",
    popular: true,
    image: img("1581091226825-a6a2a5aee158"),
    description: "A one-hour remote session with a technician to diagnose and fix software or connectivity issues.",
  },
  {
    name: "IT Helpdesk Plan (Monthly)",
    price: 39,
    rating: 5,
    category: "Support Plans",
    popular: true,
    image: img("1519389950473-47ba0277781c"),
    description: "Unlimited email and chat support for a month, covering everyday desktop and software troubleshooting.",
  },
  {
    name: "PC Virus & Malware Removal",
    price: 30,
    rating: 4,
    category: "Support Plans",
    image: img("1550751827-4bd374c3f58b"),
    description: "Full scan and removal of viruses, malware and adware, plus a report on how the infection occurred.",
  },
  {
    name: "Laptop Tune-Up Service",
    price: 28,
    rating: 4,
    category: "Support Plans",
    image: img("1588702547923-7093a6c3ba33"),
    description: "Speed up a slow laptop with startup cleanup, disk optimization and driver updates.",
  },
  {
    name: "Device Diagnostics Service",
    price: 22,
    rating: 4,
    category: "Support Plans",
    image: img("1518770660439-4636190af475"),
    description: "A full hardware and software diagnostic report to pinpoint what's wrong with an underperforming device.",
  },

  // Network & Security
  {
    name: "Wi-Fi Network Setup",
    price: 32,
    rating: 5,
    category: "Network & Security",
    popular: true,
    image: img("1553406830-ef2513450d76"),
    description: "Router and access point setup for full-coverage home or office Wi-Fi, including guest network configuration.",
  },
  {
    name: "Firewall Configuration",
    price: 38,
    rating: 4,
    category: "Network & Security",
    image: img("1558494949-ef010cbdcc31"),
    description: "Hardening of your network firewall rules to block unauthorized access while keeping business traffic flowing.",
  },
  {
    name: "Basic Cybersecurity Audit",
    price: 40,
    rating: 5,
    category: "Network & Security",
    popular: true,
    image: img("1550751827-4bd374c3f58b"),
    description: "A review of passwords, devices and accounts with a prioritized checklist of security fixes.",
  },
  {
    name: "VPN Setup & Configuration",
    price: 27,
    rating: 4,
    category: "Network & Security",
    image: img("1573164713988-8665fc963095"),
    description: "Installation and configuration of a secure VPN for safe remote access to your files and network.",
  },
  {
    name: "Network Cabling Service",
    price: 35,
    rating: 4,
    category: "Network & Security",
    image: img("1544197150-b99a580bb7a8"),
    description: "Structured Ethernet cabling run and terminated for a faster, more reliable wired network.",
  },

  // Cloud Services
  {
    name: "Cloud Backup Setup (Monthly)",
    price: 24,
    rating: 5,
    category: "Cloud Services",
    popular: true,
    image: img("1544197150-b99a580bb7a8"),
    description: "Automated cloud backup configured for your key folders and devices, monitored monthly for failures.",
  },
  {
    name: "Google Workspace Setup",
    price: 30,
    rating: 4,
    category: "Cloud Services",
    image: img("1516321318423-f06f85e504b3"),
    description: "Domain verification, mailbox setup and shared drive configuration for a new Google Workspace account.",
  },
  {
    name: "Microsoft 365 Setup",
    price: 30,
    rating: 4,
    category: "Cloud Services",
    image: img("1497215728101-856f4ea42174"),
    description: "Full Microsoft 365 tenant setup including Outlook, Teams and OneDrive for your team.",
  },
  {
    name: "Cloud Storage Migration",
    price: 36,
    rating: 4,
    category: "Cloud Services",
    image: img("1451187580459-43490279c0fa"),
    description: "Migration of existing files from local drives or another provider into your new cloud storage.",
  },
  {
    name: "Domain & Hosting Setup",
    price: 26,
    rating: 4,
    category: "Cloud Services",
    image: img("1560472354-b33ff0c44a43"),
    description: "Domain registration guidance, DNS configuration and hosting setup for a new website.",
  },

  // Setup & Installation
  {
    name: "Software Installation Package",
    price: 20,
    rating: 4,
    category: "Setup & Installation",
    image: img("1518432031352-d6fc5c10da5a"),
    description: "Installation and licensing setup for up to five essential applications on one device.",
  },
  {
    name: "Printer Setup & Troubleshooting",
    price: 21,
    rating: 4,
    category: "Setup & Installation",
    image: img("1612815154858-60aa4c59eaa6"),
    description: "Printer installation across your home or office network with driver setup and test prints.",
  },
  {
    name: "Smart Home Device Setup",
    price: 29,
    rating: 4,
    category: "Setup & Installation",
    image: img("1558002038-1055907df827"),
    description: "Configuration of smart speakers, plugs, cameras and hubs so they all work together reliably.",
  },
  {
    name: "CCTV Remote Setup",
    price: 34,
    rating: 4,
    category: "Setup & Installation",
    image: img("1557597774-9d273605dfa9"),
    description: "Remote configuration of IP cameras and NVR software for phone-based live viewing and alerts.",
  },
  {
    name: "Email Migration Service",
    price: 33,
    rating: 5,
    category: "Setup & Installation",
    popular: true,
    image: img("1596526131083-e8c633c948d2"),
    description: "Migration of mailboxes, contacts and calendars from your old provider with zero message loss.",
  },

  // Maintenance
  {
    name: "Server Maintenance (Monthly)",
    price: 40,
    rating: 5,
    category: "Maintenance",
    popular: true,
    image: img("1544197150-b99a580bb7a8"),
    description: "Monthly patching, backup verification and health checks for a small business server.",
  },
  {
    name: "Website Speed Optimization",
    price: 32,
    rating: 4,
    category: "Maintenance",
    image: img("1460925895917-afdab827c52f"),
    description: "Image compression, caching and code cleanup to measurably improve your website's load time.",
  },
  {
    name: "Website Health Checkup",
    price: 23,
    rating: 4,
    category: "Maintenance",
    image: img("1467232004584-a241de8bcf5d"),
    description: "A full audit of uptime, broken links, plugin versions and security patches for your website.",
  },
  {
    name: "Data Recovery Consultation",
    price: 25,
    rating: 4,
    category: "Maintenance",
    image: img("1580927752452-89d86da3fa0a"),
    description: "An assessment of a failed drive or lost files with a clear recommendation on recovery options.",
  },
  {
    name: "Preventive Maintenance Visit",
    price: 31,
    rating: 4,
    category: "Maintenance",
    image: img("1581092160562-40aa08e78837"),
    description: "An on-site check of hardware, cabling and software updates to catch problems before they spread.",
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
