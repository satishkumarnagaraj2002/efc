import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#B8FF3B]">404</p>
      <h1 className="text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-300">
        The page you’re looking for may still be under development or has moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full border border-[#B8FF3B] bg-[#B8FF3B] px-6 py-3 text-sm font-semibold text-[#070B12]"
      >
        Return home
      </Link>
    </main>
  );
}
