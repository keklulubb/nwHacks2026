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




  <section id="dashboard" className="w-full max-w-6xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 
  gap-4 auto-rows-[250px]">

  
{/* Card 1: Bar Chart */}
  <div className="md:col-span-2 bg-white/60 backdrop-blur-md rounded-3xl border border-white/20 p-8 shadow-sm">
  <h3 className="text-slate-50 text-sm font-bold uppercase-tracking "
  {/* Card 2 */}
  {/* Card 3 */}
  {/* Card 4 */}
  


  </div>
</section>
