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
        <div className="flex gap-4 mt-10">
          <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold
          shadow-lg shadow-slate-200 hover:bg-indigo-200 transition-all activate:scale-95"
          >
            Try Demo
          </button>
          <button className="px-8 py-4 bg-white/80 text-slate-600 rounded-full
          font-bold border border-slate-200 hover:bg-emerald-100 transition-all
          activate:scale-95">
            View Weekly Insights
          </button>
        </div>
      </section>

      <section>
      <div className="w-full max-w-md bg-white/50 p-6 rounded-3xl border border-white/20">
        <div className="flex justify-between mb-2">
        <span className="text-sm font-bold text-slate-700">Weekly Stress Budget</span>
        <span className="text-sm font-bold text-indigo-600">60% Remaining</span>
      </div>
  <div className="w-full h-4 bg-slate-200 rounded-full overflow-hidden">
    <div className="h-full bg-indigo-500 rounded-full" style={{ width: '60%' }}></div>
  </div>
</div>
      </section>



      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl px-6 mt-12">
  
  {/* Card 1 */}
  <div className="group p-8 rounded-3xl bg-white/50 backdrop-blur-md border border-white/20 shadow-xl shadow-indigo-500/5 transition-all hover:-translate-y-1">
    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="text-2xl">📝</span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">Log Tasks</h3>
    <p className="text-slate-600 leading-relaxed">
      Quickly record your mental spend before and after every major task. 
    </p>
  </div>

  {/* Card 2 */}
  <div className="group p-8 rounded-3xl bg-white/50 backdrop-blur-md border border-white/20 shadow-xl shadow-indigo-500/5 transition-all hover:-translate-y-1">
    <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="text-2xl">📈</span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">See Patterns</h3>
    <p className="text-slate-600 leading-relaxed">
      Watch your energy trends over the week. Identify what truly drains you.
    </p>
  </div>

  {/* Card 3 */}
  <div className="group p-8 rounded-3xl bg-white/50 backdrop-blur-md border border-white/20 shadow-xl shadow-indigo-500/5 transition-all hover:-translate-y-1">
    <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <span className="text-2xl">✨</span>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">Weekly Audit</h3>
    <p className="text-slate-600 leading-relaxed">
      Gemini AI reviews your ledger and tells you where to save your energy.
    </p>
  </div>

</div>
    </div>
  );
}
