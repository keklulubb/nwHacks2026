import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
  <nav className="w-full max-w-5xl flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-sm">
    <div className="font-bold text-slate-900 tracking-tight">STRESS BUDGET</div>
    <div className="flex gap-6 text-sm font-medium text-slate-500">
      <a href="#log" className="hover:text-indigo-600 transition-colors">Log</a>
      <a href="#insights" className="hover:text-indigo-600 transition-colors">Insights</a>
      <a href="#recommend" className="hover:text-indigo-600 transition-colors">Relief</a>
    </div>
  </nav>
</header>
  );
}
