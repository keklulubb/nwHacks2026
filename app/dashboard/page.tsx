"use client"
import { useState, useEffect } from 'react';
import LiquidBackground from "../week/liquidbackground";
import StressChart from "@/components/StressChart";
import { X, Plus, Sparkles, Brain, Calendar, AlertCircle } from "lucide-react";
import Markdown from "react-markdown";
import { addNewTask, checkSetGlobals, getFinishedTasksByDay, getUnfinishedTasks } from "@/lib/seed";

export default function Dashboard() {
  // 1. STATE & GLOBALS
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  checkSetGlobals();

  const [tasks, setTasks] = useState(getUnfinishedTasks());
  const [newName, setNewName] = useState('');
  const [newDeadline, setNewDeadline] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');

  // --- TYPING ANIMATION LOGIC ---
  const weekSummary = "### Analysis\nBased on your data, your stress peaked on **Tuesday**. \n\n* **Hardest Task:** Refactoring \n* **Suggestion:** Take a 10m walk to activate the para-effect.";
  const [displayedSummary, setDisplayedSummary] = useState("");

  useEffect(() => {
    let i = 0;
    const typingSpeed = 30; // Milliseconds per character
    setDisplayedSummary(""); // Reset
    
    const timer = setInterval(() => {
      setDisplayedSummary(weekSummary.slice(0, i));
      i++;
      if (i > weekSummary.length) clearInterval(timer);
    }, typingSpeed);

    return () => clearInterval(timer);
  }, []); // Runs once when dashboard opens
  // ------------------------------

  // 2. HELPER FUNCTIONS
  const addTask = () => {
    if (!newName) return;
    const newTask = {
      id: Date.now(),
      title: newName,
      deadline: newDeadline,
      priority: newPriority,
      stressBefore: 0,
      stressAfter: 0,
      completed: false,
      completedDate: 0,
    };
    
    setTasks([...tasks, newTask]);
    addNewTask(newTask);
    
    // Safety check for tasksChanged
    if (typeof window !== 'undefined') {
        (window as any).tasksChanged = true;
    }
    
    setNewName('');
    setNewDeadline('');
    setNewPriority('Medium');
    setIsAddTaskOpen(false);
  };

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <LiquidBackground />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* SECTION: TASK LEDGER */}
        <section id="log" className="scroll-mt-32">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-4xl font-bold font-display text-slate-900">Task Ledger</h1>
              <p className="text-slate-500 font-medium">Assign tasks to your weekly budget.</p>
            </div>
            <button 
              onClick={() => setIsAddTaskOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
            >
              <Plus size={20} /> New Task
            </button>
          </div>

          <div className="flex-1 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-6 min-w-[2500px]"> 
              {days.map((day) => (
                <div key={day} className="w-[350px] flex-shrink-0 flex flex-col bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/40 p-6 h-[450px] transition-all hover:bg-white/50">
                  <span className="text-sm font-black text-slate-400 uppercase tracking-tighter mb-4">{day}</span>
                  <div className="space-y-3 overflow-y-auto mb-4">
                    {getFinishedTasksByDay(day).map((task) => (
                      <div key={task.id} className="p-4 bg-white/60 rounded-2xl border border-white/20 shadow-sm flex justify-between items-center">
                        <p className="text-sm font-bold text-slate-700">{task.title}</p>
                        <span className="text-[10px] font-black text-indigo-500 uppercase">{task.priority}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto rounded-3xl border-2 border-dashed border-white/40 flex flex-col items-center justify-center py-8 text-white/40 group hover:border-indigo-300 hover:bg-white/20 transition-all cursor-pointer">
                    <Plus size={24} className="group-hover:scale-125 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: INSIGHTS GRID */}
        <section id="insights" className="scroll-mt-32 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* UNASSIGNED BOX */}
            <div className="md:col-span-2 p-10 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-2xl flex flex-col min-h-[450px]">
              <div className="flex justify-between items-start mb-8">
                <h3 className="text-2xl font-bold text-slate-900 font-display">Unassigned</h3>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-4 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all"
                >
                  Weekly Trend
                </button>
              </div>

              <div className="space-y-3 overflow-y-auto pr-2">
                {tasks.map((task) => (
                  <div key={task.id} className="p-5 bg-white/60 rounded-3xl border border-white/20 shadow-sm flex justify-between items-center group hover:bg-white/80 transition-all">
                    <div>
                      <p className="text-md font-bold text-slate-700">{task.title}</p>
                      <p className="text-xs text-slate-400 font-medium mt-1 flex items-center gap-1">
                        <Calendar size={12} /> {task.deadline || 'No Deadline'}
                      </p>
                    </div>
                    <span className="bg-rose-100 text-rose-600 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GEMINI AUDIT BOX ( with Typing Animation) */}
            <div className="bg-[#072c3f] p-10 rounded-[3rem] shadow-2xl text-white flex flex-col min-h-[450px]">
              <div className="flex items-center gap-2 mb-6 shrink-0">
                <Sparkles className="text-indigo-400" size={20} />
                <h3 className="text-xl font-bold font-display">Gemini Audit</h3>
              </div>
              
              <div className="flex-1 overflow-y-auto pr-2">
                <div className="prose prose-invert prose-sm max-w-none 
                  [&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-4
                  [&>h3]:text-indigo-300 [&>h3]:text-lg [&>h3]:font-bold [&>h3]:mb-2 [&>h3]:mt-4
                  [&>ul]:list-disc [&>ul]:ml-4 [&>ul]:mb-4 [&>ul]:text-slate-300
                  [&>strong]:text-white [&>strong]:font-bold
                ">
                  {/* Using displayedSummary for typing effect */}
                  <Markdown>{displayedSummary}</Markdown>
                  {/* blinking cursor effect */}
                  <span className="inline-block w-2 h-4 bg-indigo-400 ml-1 animate-pulse" />
                </div>
              </div> 
            </div>
            
          </div> 
        </section>
      </div>

      {/* MODAL: WEEKLY AUDIT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-7xl bg-white/80 backdrop-blur-3xl rounded-[3rem] border border-white/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-8 flex justify-between items-center border-b border-slate-200/50">
              <h2 className="text-3xl font-bold text-slate-900 font-display">Weekly Audit View</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-3 bg-slate-100 rounded-full hover:bg-rose-100 transition-all"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 h-64">
              <StressChart />
            </div>
          </div>
        </div>
      )}

      {/* MODAL: ADD TASK */}
      {isAddTaskOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsAddTaskOpen(false)} />
          <div className="relative w-full max-w-md bg-white/90 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 font-display">New Task</h2>
              <button onClick={() => setIsAddTaskOpen(false)}><X className="text-slate-400" /></button>
            </div>
            <div className="space-y-5 text-slate-900">
              <input value={newName} onChange={(e) => setNewName(e.target.value)} className="w-full p-4 bg-white border border-slate-200 rounded-2xl" placeholder="Task Name" />
              <input type="date" value={newDeadline} onChange={(e) => setNewDeadline(e.target.value)} className="w-full p-4 bg-white border border-slate-200 rounded-2xl" />
              <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)} className="w-full p-4 bg-white border border-slate-200 rounded-2xl">
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <button onClick={addTask} className="w-full py-4 bg-[#072c3f] text-white rounded-2xl font-bold">Add to Ledger</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}