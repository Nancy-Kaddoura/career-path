import Link from "next/link";

const steps = [
  {
    title: "Remember the goal",
    text: "One clear target keeps the noise away.",
  },
  {
    title: "Take the next step",
    text: "Small weekly actions instead of a giant to-do list.",
  },
  {
    title: "Review and adjust",
    text: "Track every application and learn from each one.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-800">
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        {/* Intro */}
        <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
          Yehia&apos;s career path
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight sm:text-6xl">
          Hi, I&apos;m Yehia. I just graduated, and I&apos;m building my way
          forward.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-stone-600">
          I studied Computer Science at the Lebanese University, First Branch.
          Graduation felt great. The job search afterwards felt like a hundred
          open tabs and no direction. This is the place where I slow down,
          plan, and move one step at a time.
        </p>

        {/* Goal card */}
        <div className="mt-12 rounded-2xl border border-emerald-200 bg-emerald-50 p-8 shadow-sm">
          <p className="text-sm font-semibold text-emerald-700">My goal</p>
          <p className="mt-2 text-2xl font-semibold sm:text-3xl">
            Find my first tech job within two months.
          </p>
          <p className="mt-3 text-stone-600">
            No promises, just a clear plan and steady progress.
          </p>
        </div>

        {/* Links */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/plan"
            className="rounded-xl bg-emerald-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-emerald-800"
          >
            See my plan
          </Link>
          <Link
            href="/opportunities"
            className="rounded-xl border border-stone-300 bg-white px-6 py-3 text-center font-semibold transition hover:border-emerald-700 hover:text-emerald-700"
          >
            Explore opportunities
          </Link>
        </div>

        {/* Path steps */}
        <ol className="mt-20 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="rounded-xl bg-white p-6 shadow-sm">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-700 font-bold text-white">
                {i + 1}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{step.title}</h2>
              <p className="mt-2 text-stone-600">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}