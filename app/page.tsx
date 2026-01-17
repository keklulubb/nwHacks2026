import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Stress Budgeting
        </h1>
        <p className="max-w-2xl text-lg text-gray-600">
          Track energy, not just time. Log stress before/after tasks and get a
          weekly reflection on what drains you (and what helps).
        </p>
        <div className="flex gap-3">
          <Link
            href="/log"
            className="rounded-lg bg-black px-4 py-2 text-white"
          >
            Try Demo
          </Link>
          <Link
            href="/week"
            className="rounded-lg border px-4 py-2"
          >
            View Weekly Summary
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          { title: "1) Log tasks", desc: "Add a task + stress before/after." },
          { title: "2) See patterns", desc: "Spot what drains you most." },
          { title: "3) Weekly reflection", desc: "Get a short AI insight." },
        ].map((x) => (
          <div key={x.title} className="rounded-xl border p-4">
            <h2 className="font-semibold">{x.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{x.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
