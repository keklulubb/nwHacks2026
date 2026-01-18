import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
      <nav className="w-full max-w-5xl flex items-center justify-between px-6 py-3 bg-white/70 backdrop-blur-xl border border-white/40 rounded-2xl shadow-sm">
        {/* Click the logo to go home */}
        <Link href="/" className="font-logo text-2xl text-[#072c3f] tracking-tight">
          Stressy<span className="text-[#c25f4e]">Baka</span>
        </Link>
        
        <div className="flex gap-6 text-sm font-medium text-slate-500">
          {/* These two go to different parts of the Dashboard page */}
          <Link href="/dashboard#log" className="hover:text-indigo-600 transition-colors">Log Task</Link>
          <Link href="/dashboard#insights" className="hover:text-indigo-600 transition-colors">Insights</Link>
          {/* This goes to the Relief page */}
          <Link href="/Relief" className="hover:text-emerald-600 transition-colors">Relief Center</Link>
        </div>
      </nav>
    </header>
  );
}