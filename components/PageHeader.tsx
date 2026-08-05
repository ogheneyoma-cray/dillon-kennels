import Link from "next/link";

/**
 * Breadcrumb band that opens every page except the home page — a pale grey
 * strip with the title at the left and the trail at the right, exactly as the
 * reference frames its inner pages.
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
    <section className="border-b border-line bg-mist">
      <div className="wrap flex flex-col gap-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-14">
        <div>
          <h1 className="display-2">{title}</h1>
          {intro && (
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-body">
              {intro}
            </p>
          )}
        </div>

        <nav aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-wide2">
            <li>
              <Link href="/" className="text-muted transition-colors hover:text-rose">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-line-firm">
              /
            </li>
            <li className="text-rose">{crumb ?? title}</li>
          </ol>
        </nav>
      </div>
    </section>
  );
}
