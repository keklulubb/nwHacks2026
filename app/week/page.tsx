import {currentWeekIndex, seedTasks, taskStressChanges} from "@/lib/seed";

export default function WeekPage() {

  const tasks = seedTasks;

  const deltas = taskStressChanges(tasks);
  const mostDraining = deltas.reduce((a, b) => (b.delta > a.delta ? b : a));
  const bestBooster = deltas.reduce((a, b) => (b.delta < a.delta ? b : a));

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">This Week</h1>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">Most draining</h2>
          <p className="mt-2 text-sm text-gray-600">
            {mostDraining.title} (Δ {mostDraining.delta})
          </p>
        </div>

        <div className="rounded-xl border p-4">
          <h2 className="font-semibold">Biggest morale boost</h2>
          <p className="mt-2 text-sm text-gray-600">
            {bestBooster.title} (Δ {bestBooster.delta})
          </p>
        </div>
      </div>

      <div className="rounded-xl border p-4">
        <h2 className="font-semibold">All tasks</h2>
        <ul className="mt-3 space-y-2 text-sm">
          {deltas.map((t) => (
            <li key={t.id} className="flex justify-between">
              <span>{t.title}</span>
              <span className="text-gray-600">
                {t.stressBefore} → {t.stressAfter} (Δ {t.delta})
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
