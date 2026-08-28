import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-yellow-600">
        404
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy">
        Page not found
      </h1>
      <p className="mt-3 max-w-md text-ink-muted">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-yellow px-6 py-3 font-display text-sm font-bold uppercase tracking-wide text-navy transition-colors hover:bg-yellow-600"
      >
        Back to home
      </Link>
    </div>
  );
}
