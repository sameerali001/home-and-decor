import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-[70vh] items-center justify-center py-24 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-slate-950 dark:text-white sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-gradient-to-r from-cyan-300 to-sky-500 px-6 py-3 font-semibold text-slate-950"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
