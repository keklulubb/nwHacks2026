import Link from "next/link";
import LiquidBackground from "./week/liquidbackground";
import Navbar from "@/components/Navbar";
import StressChart from "@/components/StressChart";
import {prioritizeTasks, suggestDeStress} from "@/lib/gemini";
import {Task, seedTasks} from "@/lib/seed";


export default function HomePage() {
  //prioritizeTasks(seedTasks);
  suggestDeStress(75);
  return (
    <main className="relative min-h-screen w-full">
      <LiquidBackground />

      {/* THE CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-16">
        
        {/* HERO SECTION */}
        <section className="space-y-6 max-w-3xl">
          <h1 className="text-6xl font-extrabold tracking-tight text-[#c25f4e] leading-tight">
            Auto <span className="text-[#072c3f] ">Nomi</span>
          </h1>
          <p className="text-xl text-[#ebebeb]  leading-relaxed">
            The first ledger for your nervous system.
            Track energy, not just time. Log stress before and after tasks 
            and get a weekly reflection on what drains you (and what helps).
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all active:scale-95">
              Try Demo
            </button>
            <button className="px-8 py-4 bg-white/70 backdrop-blur-md text-slate-700 rounded-full font-bold border border-white/50 shadow-sm hover:bg-white transition-all active:scale-95">
              View Weekly Insights
            </button>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          
          {/* Top Priority Tasks (Tall Box) */}
          <div className="md:col-span-2 md:row-span-2 p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Top Priority Tasks</h3>
            <div className="space-y-4">
              {['Finish nwHacks project', 'Grocery Shopping', 'Call Mom'].map(task => (
                <div key={task} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-white/20">
                  <input type="checkbox" className="w-5 h-5 rounded-md border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  <span className="font-medium text-slate-700">{task}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stress Trend (Wide Box) */}
<div className="md:col-span-2 p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-xl flex flex-col">
  <h3 className="text-2xl font-bold text-slate-900 tracking-widest mb-4">
    Stress Trend
  </h3>
  
  {/* The Chart Container - We give it a specific height so Recharts can find its space */}
  <div className="w-full h-[180px]">
    <StressChart />
  </div>
</div>

          {/* Weekly Budget (Small Box) */}
          <div className="md:col-span-2 p-8 bg-[#072c3f] text-white rounded-[2.5rem] shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-indigo-200 text-2xl font-bold mb-6 text-2xl tracking-widest">Weekly Stress Budget</h3>
              <p className="text-4xl font-bold mt-2">60% <span className="text-lg font-normal opacity-80 text-indigo-100">Left</span></p>
            </div>
            <div className="w-full h-3 bg-indigo-900/30 rounded-full overflow-hidden">
              <div className="h-full bg-white rounded-full" style={{ width: '60%' }}></div>
            </div>
          </div>

          {/* Recommended Activities (Tall Box) */}
          <div className="md:col-span-4 md:row-span-1 p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white/40 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Recommended Activities</h3>
            <div className="space-y-4">
              {['Song', 'Video'].map(task => (
                <div key={task} className="flex items-center gap-4 p-4 bg-white/50 rounded-2xl border border-white/20">
                  <input type="checkbox" className="w-5 h-5 rounded-md border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  <span className="font-medium text-slate-700">{task}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}