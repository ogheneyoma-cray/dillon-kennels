import Link from "next/link";
import { LogoMark } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="ruled">
      <div className="wrap flex flex-col items-start py-32">
        <LogoMark className="h-8 w-9 text-brass" />
        <p className="eyebrow mt-8">Error 404</p>
        <h1 className="display-1 mt-5">Nothing hangs here</h1>
        <p className="mt-5 max-w-md text-[15px] font-light leading-[1.9] text-smoke">
          The link you followed does not lead anywhere on this site. The
          collection is still exactly where you left it.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/shop" className="btn-brass">
            Open the collection
          </Link>
          <Link href="/" className="btn-line">
            Back home
          </Link>
        </div>
      </div>
    </div>
  );
}
