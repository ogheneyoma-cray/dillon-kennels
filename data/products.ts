export type Category =
  | "Device & PC Support"
  | "Network & Wi-Fi"
  | "Cybersecurity"
  | "Cloud & Backup"
  | "Software & Setup";

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number; // base price in USD
  description: string;
  image: string;
  category: Category;
  inStock: boolean;
  /** How quickly the service is typically completed once booked. */
  turnaround: string;
  /** Remote, on-site, or both, and where. */
  coverage: string;
  /** Flags the six services shown as "most booked" on the home page. */
  popular?: boolean;
}

export const categories: Category[] = [
  "Device & PC Support",
  "Network & Wi-Fi",
  "Cybersecurity",
  "Cloud & Backup",
  "Software & Setup",
];

const pexelsPhoto = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=1200`;

export const products: Product[] = [
  // --------------------------------------------------- Device & PC Support
  {
    id: 1,
    name: "Laptop Tune-Up & Speed Optimization",
    slug: "laptop-tune-up-speed-optimization",
    price: 24,
    category: "Device & PC Support",
    inStock: true,
    popular: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(7639374),
    description:
      "A technician connects to your laptop remotely and works through the usual causes of a slow machine: bloated startup programs, fragmented storage, outdated drivers and background processes eating your battery. You get a short written report of what was changed and what to keep an eye on, plus a follow-up call two weeks later to confirm the fix held. Works on both Windows and macOS.",
  },
  {
    id: 2,
    name: "Desktop Hardware Diagnostic",
    slug: "desktop-hardware-diagnostic",
    price: 28,
    category: "Device & PC Support",
    inStock: true,
    turnaround: "24–48 hours",
    coverage: "On-site — Accra & Kumasi",
    image: pexelsPhoto(36861987),
    description:
      "A technician visits your home or office to test the machine's core components — power supply, RAM, storage, cooling and motherboard — and rules out the failing part rather than guessing. You leave the visit with a plain-language explanation of what's wrong and a written quote for any part that needs replacing, with no obligation to book the repair through us.",
  },
  {
    id: 3,
    name: "Screen & Battery Health Check",
    slug: "screen-battery-health-check",
    price: 22,
    category: "Device & PC Support",
    inStock: true,
    turnaround: "Same day",
    coverage: "On-site — Accra & Kumasi",
    image: pexelsPhoto(33531806),
    description:
      "For a laptop that's dimming, flickering or draining faster than it used to. We run a full diagnostic on the display panel and battery cycle count, then tell you honestly whether a recalibration will fix it or whether you're looking at a genuine hardware replacement — and what that would cost before you commit to anything.",
  },
  {
    id: 4,
    name: "Virus & Malware Removal",
    slug: "virus-malware-removal",
    price: 32,
    category: "Device & PC Support",
    inStock: true,
    popular: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(7639373),
    description:
      "For a machine that's showing pop-ups, running hot for no reason, or just behaving strangely. A technician runs a full scan across your file system, browser extensions and startup entries, removes anything malicious, and closes the entry point it came in through — not just the symptom. Includes a basic antivirus setup so it doesn't come back.",
  },
  {
    id: 5,
    name: "Data Recovery — Standard",
    slug: "data-recovery-standard",
    price: 38,
    category: "Device & PC Support",
    inStock: true,
    turnaround: "2–4 business days",
    coverage: "On-site — Accra & Kumasi",
    image: pexelsPhoto(6804586),
    description:
      "Covers logical data loss — accidental deletion, a corrupted drive that still spins, or a failed operating system update — on a single drive up to 2TB. We assess the drive first and only proceed once we can tell you our estimated success rate, so you're never charged for a recovery attempt that was unlikely to work. Physically damaged drives are quoted separately.",
  },
  {
    id: 6,
    name: "Printer & Peripheral Setup",
    slug: "printer-peripheral-setup",
    price: 20,
    category: "Device & PC Support",
    inStock: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(33694014),
    description:
      "Getting a new printer, scanner, webcam or external monitor actually talking to your computer and, where relevant, to every device on your network. Covers driver installation, wireless printing setup, and a test print or scan before we close the session out, so you know it works rather than taking our word for it.",
  },

  // --------------------------------------------------------- Network & Wi-Fi
  {
    id: 7,
    name: "Home Wi-Fi Setup & Optimization",
    slug: "home-wifi-setup-optimization",
    price: 26,
    category: "Network & Wi-Fi",
    inStock: true,
    popular: true,
    turnaround: "Same day",
    coverage: "On-site — Accra & Kumasi",
    image: pexelsPhoto(4218546),
    description:
      "A technician sets up your router in the position that actually gives you the best coverage, configures your network name and password properly, separates a guest network from your main one, and checks every room for signal strength before leaving. You get the admin login in writing, not just a working connection you can't manage yourself.",
  },
  {
    id: 8,
    name: "Office Network Installation",
    slug: "office-network-installation",
    price: 40,
    category: "Network & Wi-Fi",
    inStock: true,
    turnaround: "2–3 business days",
    coverage: "On-site — nationwide",
    image: pexelsPhoto(2881224),
    description:
      "Structured cabling, switch configuration and Wi-Fi coverage planning for a small office of up to 15 workstations. We map the space first, run cable where it needs to run rather than where it's convenient, label every port, and leave you with a simple network diagram so the next person who touches it isn't starting from zero.",
  },
  {
    id: 9,
    name: "Router Configuration & Security",
    slug: "router-configuration-security",
    price: 24,
    category: "Network & Wi-Fi",
    inStock: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(29711663),
    description:
      "Beyond the default settings your ISP shipped: we change the admin password from the printed default, disable remote management you don't need, set up port forwarding only where you've asked for it, and turn on the router's built-in firewall properly. A short checklist of what was changed is emailed to you afterward.",
  },
  {
    id: 10,
    name: "Wi-Fi Dead Zone Fix (Mesh Setup)",
    slug: "wifi-dead-zone-mesh-setup",
    price: 34,
    category: "Network & Wi-Fi",
    inStock: true,
    turnaround: "Same day",
    coverage: "On-site — Accra & Kumasi",
    image: pexelsPhoto(28348054),
    description:
      "For the room upstairs, the boys' quarters, or the far end of the compound that never gets a signal. We test coverage across the whole property, position mesh extenders or access points where the measurements actually say to put them, and confirm every corner holds a usable connection before we consider the job done.",
  },
  {
    id: 11,
    name: "VPN Setup for Remote Work",
    slug: "vpn-setup-remote-work",
    price: 28,
    category: "Network & Wi-Fi",
    inStock: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(18071864),
    description:
      "Configures a secure VPN connection so you can reach office files, printers or internal tools safely from home or while travelling. Covers the initial setup on up to three devices, a walkthrough of how to connect and disconnect, and a note on what to do if the connection drops while you're mid-task.",
  },
  {
    id: 12,
    name: "Smart Home Device Integration",
    slug: "smart-home-device-integration",
    price: 30,
    category: "Network & Wi-Fi",
    inStock: true,
    turnaround: "Same day",
    coverage: "On-site — Accra & Kumasi",
    image: pexelsPhoto(32698413),
    description:
      "Getting smart plugs, cameras, doorbells and speakers onto one stable network and, where the devices support it, into a single control app instead of five different ones. Includes a check that your router can actually handle the extra device load without your regular Wi-Fi slowing down.",
  },

  // ------------------------------------------------------------- Cybersecurity
  {
    id: 13,
    name: "Full System Security Audit",
    slug: "full-system-security-audit",
    price: 36,
    category: "Cybersecurity",
    inStock: true,
    popular: true,
    turnaround: "2–3 business days",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(38482453),
    description:
      "A structured review of your devices, accounts and network for the weak points that actually get exploited — reused passwords, missing updates, exposed ports, and accounts without two-factor authentication turned on. You receive a written report ranked by risk, not a wall of technical jargon, and we walk through the top three fixes with you on a call.",
  },
  {
    id: 14,
    name: "Antivirus & Firewall Setup",
    slug: "antivirus-firewall-setup",
    price: 22,
    category: "Cybersecurity",
    inStock: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(5483248),
    description:
      "We install and correctly configure a reputable antivirus and your operating system's built-in firewall — most machines we see have one or both switched off without the owner realizing. Includes a scheduled scan setup so protection keeps running after we leave, not just on the day of the appointment.",
  },
  {
    id: 15,
    name: "Phishing & Email Security Training",
    slug: "phishing-email-security-training",
    price: 25,
    category: "Cybersecurity",
    inStock: true,
    turnaround: "Scheduled session",
    coverage: "Remote or on-site — nationwide",
    image: pexelsPhoto(11391947),
    description:
      "A one-hour session for you or your small team covering how to spot a phishing email, a fake invoice and a cloned login page, using real examples rather than generic slides. Best booked for a team of up to eight; larger groups are quoted separately.",
  },
  {
    id: 16,
    name: "Password Manager & 2FA Setup",
    slug: "password-manager-2fa-setup",
    price: 20,
    category: "Cybersecurity",
    inStock: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(60504),
    description:
      "Moves you off reused, written-down passwords and onto a proper password manager, with two-factor authentication turned on for your email, banking apps and social accounts. We help you migrate your existing logins in rather than leaving you to start from a blank vault.",
  },
  {
    id: 17,
    name: "Ransomware Protection Plan",
    slug: "ransomware-protection-plan",
    price: 38,
    category: "Cybersecurity",
    inStock: true,
    turnaround: "2–3 business days",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(38482455),
    description:
      "Sets up layered protection against ransomware specifically: endpoint monitoring, an isolated backup that an infection can't reach, and a written response plan so you know exactly what to do in the first hour if it ever happens. Aimed at small businesses handling client data or financial records.",
  },
  {
    id: 18,
    name: "Business Endpoint Protection (per device)",
    slug: "business-endpoint-protection-per-device",
    price: 32,
    category: "Cybersecurity",
    inStock: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(38482451),
    description:
      "Centrally managed security software deployed to a single company device, so your IT contact can see its patch status and threat alerts from one dashboard instead of chasing each machine individually. Priced per device — book multiples for a full office rollout.",
  },

  // -------------------------------------------------------------- Cloud & Backup
  {
    id: 19,
    name: "Automated Cloud Backup Setup",
    slug: "automated-cloud-backup-setup",
    price: 27,
    category: "Cloud & Backup",
    inStock: true,
    popular: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(37730212),
    description:
      "Sets your important folders to back up automatically to the cloud on a schedule you choose, so a stolen laptop or a failed drive doesn't mean losing years of files. Includes a test restore before we finish, because a backup nobody has ever restored from is a backup you can't actually trust yet.",
  },
  {
    id: 20,
    name: "Google Workspace Migration",
    slug: "google-workspace-migration",
    price: 35,
    category: "Cloud & Backup",
    inStock: true,
    turnaround: "3–5 business days",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(17489150),
    description:
      "Moves your email, calendar and files from a personal or legacy provider into Google Workspace with mail history intact, for up to ten users. We schedule the cutover for outside business hours where possible and give your team a short guide for what changes on day one.",
  },
  {
    id: 21,
    name: "Microsoft 365 Setup & Migration",
    slug: "microsoft-365-setup-migration",
    price: 35,
    category: "Cloud & Backup",
    inStock: true,
    turnaround: "3–5 business days",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(17489157),
    description:
      "Sets up Microsoft 365 for your business from scratch, or migrates an existing setup, covering Outlook, shared drives and Teams for up to ten users. We configure sensible default permissions rather than leaving everything wide open, and hand over admin access with a short explainer.",
  },
  {
    id: 22,
    name: "External Drive Backup Configuration",
    slug: "external-drive-backup-configuration",
    price: 21,
    category: "Cloud & Backup",
    inStock: true,
    turnaround: "Same day",
    coverage: "On-site — Accra & Kumasi",
    image: pexelsPhoto(17489151),
    description:
      "For anyone who'd rather keep a physical backup than rely on the cloud alone. We set your computer to automatically mirror chosen folders to an external drive on a schedule, and show you how to check it's actually running rather than assuming it is.",
  },
  {
    id: 23,
    name: "Cloud Storage Cleanup & Organization",
    slug: "cloud-storage-cleanup-organization",
    price: 23,
    category: "Cloud & Backup",
    inStock: true,
    turnaround: "24–48 hours",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(17489152),
    description:
      "Your cloud storage is full of duplicates, half-finished downloads and files nobody can find by name. We sort, deduplicate and set up a folder structure that actually makes sense, then show you how to keep it that way — a genuinely useful hour for anyone drowning in an unsorted Drive or OneDrive.",
  },
  {
    id: 24,
    name: "Disaster Recovery Planning",
    slug: "disaster-recovery-planning",
    price: 40,
    category: "Cloud & Backup",
    inStock: true,
    turnaround: "3–5 business days",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(17489153),
    description:
      "A written plan for what your business actually does if a server fails, a laptop is stolen, or your office loses power for days — what gets restored first, from where, and who is responsible for each step. Built around your existing setup rather than a generic template, and tested once before we hand it over.",
  },

  // ------------------------------------------------------------- Software & Setup
  {
    id: 25,
    name: "Operating System Installation",
    slug: "operating-system-installation",
    price: 25,
    category: "Software & Setup",
    inStock: true,
    turnaround: "Same day",
    coverage: "On-site — Accra & Kumasi",
    image: pexelsPhoto(9553905),
    description:
      "A clean install of Windows or macOS on an existing machine — useful for a computer that's become unstable, or one you've bought secondhand and want set up properly. Includes driver installation, essential updates, and a walkthrough of the basics before we hand it back.",
  },
  {
    id: 26,
    name: "Software License Setup & Activation",
    slug: "software-license-setup-activation",
    price: 20,
    category: "Software & Setup",
    inStock: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(9553909),
    description:
      "Installing and correctly activating licensed software you already own — Office, design tools, accounting packages — so it's registered under the right account and won't nag you or lock you out later. We also check the license is being used on the number of devices your agreement actually allows.",
  },
  {
    id: 27,
    name: "PC Build & First-Time Setup",
    slug: "pc-build-first-time-setup",
    price: 30,
    category: "Software & Setup",
    inStock: true,
    turnaround: "2–3 business days",
    coverage: "On-site — Accra & Kumasi",
    image: pexelsPhoto(30469971),
    description:
      "Assembling a desktop from parts you've already bought, cable-managed properly and stress-tested before it's handed over — not just powered on and called done. Includes operating system installation and driver setup, so it's ready to use the moment it's back in your hands.",
  },
  {
    id: 28,
    name: "Business Software Onboarding",
    slug: "business-software-onboarding",
    price: 33,
    category: "Software & Setup",
    inStock: true,
    turnaround: "2–4 business days",
    coverage: "Remote or on-site — nationwide",
    image: pexelsPhoto(12902862),
    description:
      "Rolling out a new piece of business software — accounting, inventory, CRM — across your team, with accounts, permissions and a basic data import handled for you. Ends with a short training session so the tool actually gets used instead of sitting untouched after the sign-up email.",
  },
  {
    id: 29,
    name: "Driver & Firmware Update Service",
    slug: "driver-firmware-update-service",
    price: 22,
    category: "Software & Setup",
    inStock: true,
    turnaround: "Same day",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(89724),
    description:
      "Brings every driver and firmware component on your machine up to date in one pass — graphics, chipset, storage controller and BIOS where it's safe to do so — which quietly fixes a surprising number of random crashes and connectivity issues that look unrelated on the surface.",
  },
  {
    id: 30,
    name: "Remote IT Helpdesk — Monthly Plan",
    slug: "remote-it-helpdesk-monthly-plan",
    price: 40,
    category: "Software & Setup",
    inStock: true,
    popular: true,
    turnaround: "Ongoing — replies within business hours",
    coverage: "Remote — nationwide",
    image: pexelsPhoto(7859348),
    description:
      "Unlimited remote support requests for one user for a full month — the plan for anyone who'd rather pay a flat monthly fee than book a new session every time something breaks. Covers troubleshooting, minor setup requests and general how-do-I-do-this questions, billed monthly and cancellable any time.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.popular);
}
