import LiquidBackground from "../week/liquidbackground";

export default function ReliefCenter() {
  return (
    <main className="relative min-h-screen pt-32 px-6">
      <LiquidBackground />
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-slate-900 mb-4 font-display italic">Relief Center</h1>
        <p className="text-slate-600 mb-12">Immediate activities to activate the Parasympathetic Nervous System.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/50 shadow-xl hover:-translate-y-2 transition-all">
            <span className="text-4xl">🎵</span>
            <h3 className="text-xl font-bold mt-4">Vagus Nerve Reset</h3>
            <p className="text-slate-500 mt-2 text-sm">A 5-minute spatial audio track designed to lower cortisol.</p>
            <button className="mt-6 w-full py-3 bg-emerald-500 text-white rounded-2xl font-bold">Start Activity</button>
          </div>
          {/* Add more cards like this */}
        </div>
      </div>
    </main>
  );
}