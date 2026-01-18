"use client"
import { useState } from 'react';
import LiquidBackground from "../week/liquidbackground";
import StressChart from "@/components/StressChart";
import { X, Plus, Sparkles, Brain, Calendar, AlertCircle } from "lucide-react";
import Markdown from "react-markdown";
import {checkSetGlobals, getUnfinishedTasks, Task} from "@/lib/seed";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddTaskOpen, setIsAddTaskOpen] = useState(false);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  checkSetGlobals();

  // Task List State
  //const [tasks, setTasks] = useState([
    //{ id: 1, name: 'Midterm Prep', deadline: '2024-01-20', priority: 'High' },
    //{ id: 2, name: 'Bug Fix #42', deadline: '2024-01-22', priority: 'Medium' },
  //]);

  const [tasks, setTasks] = useState(getUnfinishedTasks());

  // Form States
  const [newName, setNewName] = useState('');
  const [newDeadline, setNewDeadline] = useState('');
  const [newPriority, setNewPriority] = useState('Medium');

  // HELPER FUNCTIONS
  const addTask = () => {
    if (!newName) return;
    const newTask = {
      id: Date.now(),
      name: newName,
      deadline: newDeadline,
      priority: newPriority,
      stressBefore: 90, stressAfter: 75, completed: true, completedDate: 1
    };
    setTasks([...tasks, newTask]);
    setNewName('');
    setNewDeadline('');
    setNewPriority('Medium');
    setIsAddTaskOpen(false);
  };

  const markTaskComplete = () => {
      //
  };

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <LiquidBackground />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* THE TASK LEDGER (7-Day Horizontal) */}
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
                  <div className="flex-1 rounded-3xl border-2 border-dashed border-white/40 flex flex-col items-center justify-center gap-2 text-white/40 group hover:border-indigo-300 hover:bg-white/20 transition-all cursor-pointer">
                    <Plus size={24} className="group-hover:scale-125 transition-transform" />
                    <span className="text-[10px] font-bold uppercase">Budget Task</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INSIGHTS SECTION */}
        <section id="insights" className="scroll-mt-32 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* UNASSIGNED BOX */}
            <div className="md:col-span-2 p-10 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-2xl flex flex-col min-h-[400px]">
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
                  <div key={task.id} className="p-4 bg-white/60 rounded-2xl border border-white/20 shadow-sm flex justify-between items-center group hover:bg-white/80 transition-all">
                    <div>
                      <p className="text-sm font-bold text-slate-700">{task.title}</p>
                      <p className="text-[10px] text-slate-400 font-medium uppercase mt-1 flex items-center gap-1">
                        <Calendar size={10} /> {task.deadline || 'No Deadline'}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      task.priority === 'High' ? 'bg-rose-100 text-rose-600' : 
                      task.priority === 'Medium' ? 'bg-indigo-100 text-indigo-600' : 'bg-emerald-100 text-emerald-600'
                    }`}>
                      {task.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* GEMINI BOX */}
            <div className="bg-[#072c3f] p-10 rounded-[3rem] shadow-2xl text-white flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-indigo-400" size={20} />
                <h3 className="text-xl font-bold font-display">Gemini Audit</h3>
                <Markdown>{weekSummary}</Markdown>
              </div> 
            </div>
          </div>
        </section>
      </div>

      {/* WEEKLY AUDIT */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-7xl bg-white/80 backdrop-blur-3xl rounded-[3rem] border border-white/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-8 flex justify-between items-center border-b border-slate-200/50">
              <h2 className="text-3xl font-bold text-slate-900 font-display">Weekly Audit View</h2>
              <button onClick={() => setIsModalOpen(false)} className="p-3 bg-slate-100 rounded-full hover:bg-rose-100"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-8 h-64">
              <StressChart />
              <p className="mt-10 text-center text-slate-400 italic">Audit history visualization</p>
            </div>
          </div>
        </div>
      )}

      {/* ADD TASK */}
      {isAddTaskOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-md" onClick={() => setIsAddTaskOpen(false)} />
          <div className="relative w-full max-w-md bg-white/90 backdrop-blur-3xl rounded-[2.5rem] border border-white/40 shadow-2xl p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-900 font-display">New Task</h2>
              <button onClick={() => setIsAddTaskOpen(false)}><X className="text-slate-400" /></button>
            </div>
            <div className="space-y-5">
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