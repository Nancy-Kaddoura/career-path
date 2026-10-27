import Link from "next/link";

export default function Opportunities() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold">My Opportunities</h1>
      <p className="mt-4 text-stone-600">Coming soon.</p>
      <Link href="/" className="mt-8 inline-block text-emerald-700 underline">
        ← Back home
      </Link>
    </main>
  );
}