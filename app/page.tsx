"use client"
import { useState, useEffect } from 'react';
import LiquidBackground from "./week/liquidbackground";
import Navbar from "@/components/Navbar";
import StressChart from "@/components/StressChart";
import { X, Plus, Sparkles, Calendar, Send } from "lucide-react";
import Markdown from "react-markdown";
import { addNewTask, checkSetGlobals, getFinishedTasksByDay, getUnfinishedTasks } from "@/lib/seed";

export default function HomePage() {
  // --- 1. STATES ---
  const [tasks, setTasks] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const [displayedSummary, setDisplayedSummary] = useState("");
  const [displayedReliefText, setDisplayedReliefText] = useState("");
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const stressLevel = 65;

  // --- 2. HARDCODED CONTENT (For the "Simulated" Demo) ---
  const insightAudit = "### Analysis\nYour stress peaked on **Tuesday**. \n\n* **Hardest Task:** Refactoring\n* **Suggestion:** Move social tasks to Friday.";
  const reliefAudit = `At a **65/100**, your energy is draining. Here is your reset plan:
\n### 1. 🎧 Music: Indie Folk\nBridges the gap between relaxation and energy.
\n### 2. 📺 Video: POV Tours\nTricks your brain into a state of "visual novelty."
\n### 3. 👟 Wildcard: 10m Walk\nA biological micro-dose of movement.`;

  // --- 3. TYPING LOGIC ---
  useEffect(() => {
    checkSetGlobals();
    setTasks(getUnfinishedTasks());

    // Type the Insight Audit
    let i = 0;
    const insightTimer = setInterval(() => {
      setDisplayedSummary(insightAudit.slice(0, i));
      i++;
      if (i > insightAudit.length) clearInterval(insightTimer);
    }, 30);

    // Type the Relief Audit
    let j = 0;
    const reliefTimer = setInterval(() => {
      setDisplayedReliefText(reliefAudit.slice(0, j));
      j++;
      if (j > reliefAudit.length) clearInterval(reliefTimer);
    }, 20);

    return () => { clearInterval(insightTimer); clearInterval(reliefTimer); };
  }, []);

  const addTask = (e: any) => {
    e.preventDefault();
    const name = (document.getElementById('taskName') as HTMLInputElement).value;
    if (!name) return;
    const newTask = { id: Date.now(), title: name, deadline: "2024-01-20", priority: "High", completed: false };
    setTasks([...tasks, newTask]);
    addNewTask(newTask);
    setIsAddTaskOpen(false);
  };

  return (
    <main className="relative w-full bg-transparent">
      <LiquidBackground />
      <Navbar />

      {/* --- HERO --- */}
      <section id="home" className="relative z-10 max-w-6xl mx-auto px-6 min-h-screen flex flex-col justify-center">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-8xl font-normal leading-tight font-logo">
            <span className="text-[#c25f4e]">Stressy</span> <span className="text-[#072c3f]">Baka</span>
          </h1>
          <p className="text-2xl text-slate-700 font-medium leading-relaxed italic">The energy accountant for your nervous system.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#log" className="px-10 py-4 bg-[#072c3f] text-white rounded-full font-bold shadow-xl hover:scale-105 transition-all">Try Demo</a>
            <a href="#insights" className="px-10 py-4 bg-white/70 backdrop-blur-md text-slate-700 rounded-full font-bold border border-white/50 shadow-sm hover:bg-white transition-all">Weekly Insights</a>
          </div>
        </div>
      </section>

      {/* --- 7-DAY LEDGER (Figma Day Boxes) --- */}
      <section id="log" className="relative z-10 max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-bold font-display text-slate-900 italic">Task Ledger</h2>
          <button onClick={() => setIsAddTaskOpen(true)} className="px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg shadow-indigo-100">+ New Stressor</button>
        </div>
        <div className="flex overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide gap-6">
          <div className="flex gap-6 min-w-[2500px]">
            {days.map((day) => (
              <div key={day} className="w-[350px] flex-shrink-0 flex flex-col bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/40 p-8 h-[450px] shadow-xl">
                <span className="text-sm font-black text-slate-400 uppercase mb-6">{day}</span>
                {/* SHOWING TASKS ALREADY IN THE LEDGER */}
                <div className="space-y-3 overflow-y-auto mb-4">
                  {getFinishedTasksByDay(day).map((t: any) => (
                    <div key={t.id} className="p-4 bg-white/60 rounded-2xl border border-white/10 shadow-sm">
                      <p className="text-sm font-bold text-slate-700">{t.title}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-auto rounded-3xl border-2 border-dashed border-white/40 flex items-center justify-center py-6 text-white/40 hover:bg-white/20 transition-all cursor-pointer">
                  <Plus size={24} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- INSIGHTS BENTO GRID --- */}
      <section id="insights" className="relative z-10 max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Unassigned Tasks (Wide Bento) */}
          <div className="md:col-span-2 p-10 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-2xl flex flex-col min-h-[500px]">
            <div className="flex justify-between items-start mb-8">
              <h3 className="text-2xl font-bold text-slate-900 font-display">Unassigned Ledger</h3>
              <button onClick={() => setIsModalOpen(true)} className="px-4 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all">Weekly Trend</button>
            </div>
            <div className="space-y-4 overflow-y-auto pr-2">
              {tasks.map((task) => (
                <div key={task.id} className="p-6 bg-white/60 rounded-3xl border border-white/20 shadow-sm flex justify-between items-center hover:bg-white/80 transition-all">
                  <div>
                    <p className="text-lg font-bold text-slate-700">{task.title}</p>
                    <p className="text-xs text-slate-400 mt-1 flex items-center gap-1"><Calendar size={12} /> {task.deadline || 'Pending'}</p>
                  </div>
                  <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">{task.priority}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gemini Audit (Side Bento) */}
          <div className="bg-[#072c3f] p-10 rounded-[3rem] shadow-2xl text-white flex flex-col min-h-[500px]">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-indigo-400 animate-pulse" size={24} />
              <h3 className="text-2xl font-bold font-display">Gemini Audit</h3>
            </div>
            <div className="prose prose-invert prose-sm max-w-none [&>p]:text-slate-300 [&>h3]:text-indigo-300">
              <Markdown>{displayedSummary}</Markdown>
            </div>
          </div>
        </div>
      </section>

      {/* --- RELIEF CENTER BENTO --- */}
      <section id="relief" className="relative z-10 max-w-7xl mx-auto px-6 py-24 scroll-mt-20">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-slate-900 font-display italic mb-4">Relief Center</h2>
          <p className="text-slate-600 text-lg">Instant Para-effect Activation.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/50 shadow-xl flex flex-col items-center">
            <span className="text-5xl mb-4"><svg viewBox="0 0 24 24" className="w-[1em] h-[1em]" fill="#1DB954"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.215.352-.676.463-1.028.249-2.82-1.722-6.368-2.111-10.547-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.803.562-.896 4.582-1.05 8.51-.595 11.659 1.328.352.215.463.676.249 1.038zm1.468-3.26c-.272.441-.847.58-1.288.308-3.23-1.984-8.153-2.558-11.972-1.398-.496.15-1.023-.13-1.173-.626-.15-.496.13-1.023.626-1.173 4.364-1.324 9.791-.684 13.518 1.597.441.272.58.847.289 1.291zm.139-3.39c-3.873-2.3-10.264-2.512-13.974-1.387-.595.18-1.226-.154-1.406-.75-.18-.595.154-1.226.75-1.406 4.267-1.296 11.325-1.047 15.772 1.594.536.318.712 1.01.394 1.546-.318.536-1.01.712-1.546.403z"/></svg></span>
            <h3 className="text-xl font-bold mb-4 font-display">Audio Therapy</h3>
            <button className="w-full py-4 bg-[#1DB954] text-white rounded-2xl font-bold">Open Spotify</button>
          </div>
          <div className="bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/50 shadow-xl flex flex-col items-center">
            <span className="text-5xl mb-4"><svg viewBox="0 0 24 24" className="w-[1em] h-[1em]" fill="#FF0000"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></span>
            <h3 className="text-xl font-bold mb-4 font-display">Visual Reset</h3>
            <button className="w-full py-4 bg-[#FF0000] text-white rounded-2xl font-bold">Watch YouTube</button>
          </div>
          <div className="bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/50 shadow-xl flex flex-col items-center">
            <span className="text-5xl mb-4"><svg viewBox="0 0 24 24" className="w-[1em] h-[1em]" fill="none" stroke="#ef4444" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/><path d="M20.5 11.5a4.5 4.5 0 0 0-8.5-2 4.5 4.5 0 0 0-8.5 2c0 4 4.5 8 8.5 10.5 4-2.5 8.5-6.5 8.5-10.5z" stroke="#ef4444" fill="#fee2e2" /></svg></span>
            <h3 className="text-xl font-bold mb-4 font-display">Vagus Walk</h3>
            <button className="w-full py-4 bg-rose-500 text-white rounded-2xl font-bold">Start Activity</button>
          </div>
        </div>

        {/* RECOVERY AUDIT (BIG CARD) */}
        <div className="bg-[#072c3f] p-12 rounded-[3rem] shadow-2xl text-white flex flex-col text-left relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <Sparkles className="text-indigo-400 animate-pulse" size={28} />
            <h2 className="text-3xl font-bold font-display">Recovery Strategy Audit</h2>
          </div>
          <div className="prose prose-invert max-w-none relative z-10 pb-20 [&>h3]:text-indigo-300">
            <Markdown>{displayedReliefText}</Markdown>
            <span className="inline-block w-2 h-5 bg-indigo-400 ml-1 animate-pulse" />
          </div>
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="flex items-center gap-3 p-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl">
              <input type="text" placeholder="Ask Gemini for recovery tips..." className="flex-1 bg-transparent px-4 py-2 outline-none text-white placeholder:text-slate-500" />
              <button className="p-3 bg-indigo-600 rounded-xl"><Send size={18} /></button>
            </div>
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-indigo-500/20 blur-[100px]" />
        </div>
      </section>

      {/* --- MODALS --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-5xl bg-white/90 backdrop-blur-3xl rounded-[3rem] p-12 shadow-2xl h-[600px] flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold font-display">Weekly Volatility Index</h2>
              <X className="cursor-pointer" onClick={() => setIsModalOpen(false)} />
            </div>
            <div className="flex-1 w-full"><StressChart /></div>
          </div>
        </div>
      )}

      {isAddTaskOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsAddTaskOpen(false)} />
          <form onSubmit={addTask} className="relative w-full max-w-md bg-white/90 backdrop-blur-3xl rounded-[3rem] p-10 shadow-2xl space-y-6">
            <h2 className="text-2xl font-bold font-display">New Stressor</h2>
            <input id="taskName" required className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-slate-900" placeholder="Task Name" />
            <select id="taskPriority" className="w-full p-4 bg-white border border-slate-200 rounded-2xl text-slate-900">
              <option value="High">High Priority</option>
              <option value="Medium">Medium Priority</option>
              <option value="Low">Low Priority</option>
            </select>
            <button type="submit" className="w-full py-4 bg-[#072c3f] text-white rounded-2xl font-bold">Add to Ledger</button>
          </form>
        </div>
      )}
    </main>
  );
}