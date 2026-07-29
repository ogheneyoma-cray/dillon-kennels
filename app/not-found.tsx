import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="section-heading mt-3">Page Not Found</h1>
      <p className="mt-4 max-w-sm text-bone/70">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Back to Home
      </Link>
    </div>
  );
}
