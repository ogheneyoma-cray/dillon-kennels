import Link from "next/link";

/**
 * Breadcrumb band opening every page except the home page — a sand strip with
 * the same loose circles the hero uses, the title centred, and the trail
 * beneath it. This is how the reference frames its inner pages.
 */
export default function PageHeader({
  title,
  crumb,
  intro,
}: {
  title: string;
  /** Label for the current page in the trail; defaults to the title. */
  crumb?: string;
  intro?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-sand">
      <span
        aria-hidden="true"
        className="absolute -left-16 -top-20 h-56 w-56 rounded-full bg-clay/10"
      />
      <span
        aria-hidden="true"
        className="absolute -bottom-24 right-0 h-64 w-64 rounded-[45%_55%_60%_40%] bg-rose/10"
      />

      <div className="wrap relative py-14 text-center sm:py-16">
        <h1 className="display-2">{title}</h1>

        {intro && (
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            {intro}
          </p>
        )}

        <nav aria-label="Breadcrumb" className="mt-6">
          <ol className="flex items-center justify-center gap-2 font-display text-[13px] font-semibold uppercase tracking-wide2">
            <li>
              <Link
                href="/"
                className="text-muted transition-colors hover:text-clay"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-line">
              /
            </li>
            <li className="text-clay">{crumb ?? title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
