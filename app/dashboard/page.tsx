"use client"
import { useState } from 'react';
import LiquidBackground from "../week/liquidbackground";
import StressChart from "@/components/StressChart";
import { X, Plus, Sparkles, Brain } from "lucide-react";

export default function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-hidden">
      <LiquidBackground />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* THE TASK POOL  */}
        <section id="log" className="scroll-mt-32">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-4xl font-bold font-display text-slate-900">Task Ledger</h1>
              <p className="text-slate-500 font-medium">Drag or assign tasks to your weekly budget.</p>
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transition-all">
              <Plus size={20} /> New Task
            </button>
          </div>



            {/* THE 7-DAY HORIZONTAL SCROLL */}
<div className="flex-1 overflow-x-auto pb-8 -mx-4 px-4 scrollbar-hide">
  
  <div className="flex gap-6 min-w-[2500px]"> 
    {days.map((day) => (
      <div 
        key={day} 
        
        className="w-[350px] flex-shrink-0 flex flex-col bg-white/40 backdrop-blur-md rounded-[2.5rem] border border-white/40 p-6 h-[450px] transition-all hover:bg-white/50"
      >
        <span className="text-sm font-black text-slate-400 uppercase tracking-tighter mb-4">
          {day}
        </span>
        
        {/* The "Drop Zone" */}
        <div className="flex-1 rounded-3xl border-2 border-dashed border-white/40 flex flex-col items-center justify-center gap-2 text-white/40 group hover:border-indigo-300 hover:bg-white/20 transition-all">
          <Plus size={24} className="group-hover:scale-125 transition-transform" />
          <span className="text-[10px] font-bold uppercase">Budget Task</span>
        </div>
      </div>
    ))}
  </div>
</div>
</section>

        {/* Last week's insights") */}
        <section id="insights" className="scroll-mt-32 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* The unassigned tasks box */}
        <div className="md:col-span-2 p-10 bg-white/40 backdrop-blur-2xl rounded-[3rem] border border-white/40 shadow-2xl flex flex-col">
        <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl font-bold text-slate-900 font-display">Unassigned</h3>
            {/* CLICKABLE TRIGGER */}
            <button 
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full hover:bg-indigo-600 hover:text-white transition-all cursor-pointer"
            >
            Weekly Trend
            </button>
        </div>
        {/* Content of the unassigned box here */}
        </div>

            {/* Gemini Box  */}
            <div className="bg-[#072c3f] p-10 rounded-[3rem] shadow-2xl text-white flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="text-indigo-400" size={20} />
                <h3 className="text-xl font-bold font-display">Gemini Audit</h3>
              </div>
              
            </div>

          </div>
        </section>

      </div>
      {/* THE WEEKLY AUDIT MODAL */}
{isModalOpen && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
    {/* Dark Backdrop */}
    <div 
      className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
      onClick={() => setIsModalOpen(false)}
    />
    
    {/* The Modal Content */}
    <div className="relative w-full max-w-7xl bg-white/80 backdrop-blur-3xl rounded-[3rem] border border-white/40 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
      
      {/* Modal Header */}
      <div className="p-8 flex justify-between items-center border-b border-slate-200/50">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 font-display">Weekly Audit View</h2>
          <p className="text-slate-500">Cross-referencing your budget with your stress volatility.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(false)}
          className="p-3 bg-slate-100 rounded-full hover:bg-rose-100 hover:text-rose-600 transition-all"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-12">
        {/* Top Half: The Chart */}
        <div className="h-64 w-full bg-white/40 rounded-3xl p-6 border border-white/40 shadow-inner">
           <StressChart />
        </div>


          </div>
        </div>
      </div>
    
)}
    </main>
  );
}