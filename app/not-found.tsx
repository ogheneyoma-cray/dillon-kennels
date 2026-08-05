import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="wrap flex flex-col items-center py-28 text-center lg:py-36">
      <LogoMark className="h-14 w-14 text-slate" />
      <p className="eyebrow mt-8">Error 404</p>
      <h1 className="display-1 mt-3">This page is not in the catalogue</h1>
      <p className="mt-5 max-w-md text-[15px] leading-relaxed text-body">
        The link you followed does not lead anywhere on this site. The shelf is
        still exactly where you left it.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <Link href="/shop" className="btn-clay">
          Browse the catalogue
        </Link>
        <Link href="/" className="btn-line">
          Back home
        </Link>
      </div>
    </div>
  );
}
