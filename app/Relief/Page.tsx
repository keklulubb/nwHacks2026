import LiquidBackground from "../week/liquidbackground";
import Navbar from "@/components/Navbar";
import { Sparkles } from "lucide-react";


export default function ReliefCenter() {
  return (
    <main className="relative min-h-screen pt-32 px-6">
      <LiquidBackground />
      <Navbar />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-5xl font-bold text-slate-900 mb-4 font-display italic">
          Relief Center
        </h1>
        <p className="text-slate-700 mb-12 max-w-2xl mx-auto font-medium">
          Immediate activities to activate the Parasympathetic Nervous System and liquidate your stress.
        </p>
        
        {/* THE GRID: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* CARD 1: SPOTIFY */}
          <div className="bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/50 shadow-xl hover:-translate-y-2 transition-all flex flex-col items-center">
            <span className="text-5xl inline-flex items-center mb-4">
              <svg viewBox="0 0 24 24" className="w-[1em] h-[1em]" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.215.352-.676.463-1.028.249-2.82-1.722-6.368-2.111-10.547-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.803.562-.896 4.582-1.05 8.51-.595 11.659 1.328.352.215.463.676.249 1.038zm1.468-3.26c-.272.441-.847.58-1.288.308-3.23-1.984-8.153-2.558-11.972-1.398-.496.15-1.023-.13-1.173-.626-.15-.496.13-1.023.626-1.173 4.364-1.324 9.791-.684 13.518 1.597.441.272.58.847.289 1.291zm.139-3.39c-3.873-2.3-10.264-2.512-13.974-1.387-.595.18-1.226-.154-1.406-.75-.18-.595.154-1.226.75-1.406 4.267-1.296 11.325-1.047 15.772 1.594.536.318.712 1.01.394 1.546-.318.536-1.01.712-1.546.403z"/>
              </svg>
            </span>
            <h3 className="text-slate-900 mt-2 textxl font-bold leading-relaxed">A playlist of classical pieces to lower cortisol levels.</h3>
            <button className="mt-auto w-full py-4 bg-[#1DB954] text-white rounded-2xl font-bold shadow-lg shadow-emerald-200/50 hover:scale-[1.02] transition-transform">
              Stream in Spotify
            </button>
          </div>

          {/* CARD 2: YOUTUBE */}
          <div className="bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/50 shadow-xl hover:-translate-y-2 transition-all flex flex-col items-center">
            <span className="text-5xl inline-flex items-center mb-4">
              <svg viewBox="0 0 24 24" className="w-[1em] h-[1em]" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            <h3 className="text-slate-900 mt-2 text-sm font-bold leading-relaxed">
              Breathing exercises designed to slow your heart rate and center your focus.
            </h3>
            <button className="mt-auto w-full py-4 bg-[#FF0000] text-white rounded-2xl font-bold shadow-lg shadow-red-200/50 hover:scale-[1.02] transition-transform">
              Watch on YouTube
            </button>
          </div>

          {/* CARD 3: PHYSICAL EXERCISE */}
        <div className="bg-white/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/50 shadow-xl hover:-translate-y-2 transition-all flex flex-col items-center">
        <span className="text-5xl inline-flex items-center mb-4">
            {/* Heart Activity SVG - Using a "Pulse Red" (#ef4444) */}
            <svg 
            viewBox="0 0 24 24" 
            className="w-[1em] h-[1em]" 
            fill="none" 
            stroke="#ef4444" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            xmlns="http://www.w3.org/2000/svg"
            >
            
            <path d="M12.5 15.5l-1-1 1-1m4 0l1 1-1 1" opacity="0.3"/>
            <path d="M20.5 11.5a4.5 4.5 0 0 0-8.5-2 4.5 4.5 0 0 0-8.5 2c0 4 4.5 8 8.5 10.5 4-2.5 8.5-6.5 8.5-10.5z" stroke="#ef4444" fill="#fee2e2" />
            </svg>
        </span>
    
        
        <h3 className="text-sm font-bold text-slate-900 font-display">
            Low-intensity physical movement designed to lower cortisol and reset your heart rate.
        </h3>
        
        <button className="mt-auto w-full py-4 bg-rose-500 text-white rounded-2xl font-bold shadow-lg shadow-rose-200/50 hover:scale-[1.02] transition-transform">
            Start Movement
        </button>
        </div>
        

         <div className="bg-white/50 backdrop-blur-xl md:col-span-3 p-30 rounded-[2.5rem] border border-white/50 shadow-xl hover:-translate-y-2 transition-all flex flex-col items-center">
            <span className="text-5xl inline-flex items-center mb-4"></span>
          <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="text-indigo-400" size={20} />
                    <h3 className="text-xl font-bold font-display">Gemini Audit</h3>
            </div>
            </div> 

        </div>
      </div>
    </main>
  );
}