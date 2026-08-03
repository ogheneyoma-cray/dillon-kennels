const FEATURES = [
  {
    title: "14-day returns",
    copy: "Unworn, tags on, and we cover the pickup within Lagos.",
    d: "M9 5 4.5 9.5 9 14M4.5 9.5H14a5.5 5.5 0 0 1 0 11h-3",
  },
  {
    title: "Free Lagos delivery",
    copy: "On every order over ₦75,000, dispatched within 48 hours.",
    d: "M2.5 6.5h11v9h-11v-9Zm11 3h4l2.5 3v3h-6.5v-6Zm-7 9.5a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Zm10 0a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5Z",
  },
  {
    title: "Real people, real hours",
    copy: "Mon–Sat, 9am to 6pm WAT. A person reads every message.",
    d: "M4 13v-1a8 8 0 0 1 16 0v1m-16 0v2.5A2.5 2.5 0 0 0 6.5 18H7v-5h-.5A2.5 2.5 0 0 0 4 13Zm16 0v2.5A2.5 2.5 0 0 1 17.5 18H17v-5h.5A2.5 2.5 0 0 1 20 13Z",
  },
  {
    title: "Fabric-first",
    copy: "Every cloth is washed and worn by us before it goes on sale.",
    d: "M12 3.5 14 8l5 .6-3.7 3.5 1 4.9L12 14.6 7.7 17l1-4.9L5 8.6 10 8l2-4.5Z",
  },
];

export default function FeatureStrip() {
  return (
    <section className="shell pt-24 lg:pt-28">
      <ul className="grid gap-10 border-t border-midnight/10 pt-14 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature) => (
          <li key={feature.title} className="text-center">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="mx-auto text-orchid"
            >
              <path
                d={feature.d}
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="mt-4 font-body text-[15px] font-semibold text-midnight">
              {feature.title}
            </h3>
            <p className="mx-auto mt-2 max-w-[15rem] text-[13px] leading-relaxed text-slate">
              {feature.copy}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
