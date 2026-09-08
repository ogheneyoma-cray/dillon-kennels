const BADGES = [
  {
    title: "Nationwide Delivery",
    icon: "M3 7h11v9H3z M14 10h4l3 3v3h-7z M6.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z M17.5 19a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  },
  {
    title: "7-Day Returns",
    icon: "M4 12a8 8 0 0 1 14.3-5 M20 4v5h-5 M20 12a8 8 0 0 1-14.3 5 M4 20v-5h5",
  },
  {
    title: "Secure Checkout",
    icon: "M12 3l7 3v6c0 4.4-3 7.6-7 9-4-1.4-7-4.6-7-9V6l7-3Z",
  },
  {
    title: "Real Support",
    icon: "M12 20s-7-4.4-7-9.6A4.4 4.4 0 0 1 12 7a4.4 4.4 0 0 1 7 3.4C19 15.6 12 20 12 20Z",
  },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-2 gap-6 border-y border-ink/10 bg-paper py-6 sm:grid-cols-4">
      {BADGES.map((badge) => (
        <div key={badge.title} className="flex items-center justify-center gap-3 px-2 text-center sm:justify-start sm:text-left">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal/10 text-teal-dark">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d={badge.icon} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-ink">{badge.title}</span>
        </div>
      ))}
    </div>
  );
}
