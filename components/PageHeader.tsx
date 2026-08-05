import Link from "next/link";

/**
 * Interior page opener: a tall black band carrying the column rules, with the
 * title set left and the breadcrumb dropped underneath on a hairline.
 */
export default function PageHeader({
  title,
  intro,
  crumb,
}: {
  title: string;
  intro?: string;
  crumb?: string;
}) {
  return (
    <div className="ruled border-b border-rule bg-pitch">
      <div className="wrap py-16 lg:py-24">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-3 text-[11px] font-medium uppercase tracking-micro"
        >
          <Link href="/" className="text-slate transition-colors hover:text-brass">
            Home
          </Link>
          <span aria-hidden="true" className="h-px w-5 bg-rule" />
          <span className="text-brass">{crumb ?? title}</span>
        </nav>

        <h1 className="display-1 mt-6">{title}</h1>

        {intro && (
          <p className="mt-6 max-w-2xl text-[15px] font-light leading-[1.9] text-smoke">
            {intro}
          </p>
        )}
      </div>
    </div>
  );
}
