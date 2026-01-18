import LiquidBackground from "../week/liquidbackground";
import Navbar from "@/components/Navbar";
import { Sparkles } from "lucide-react";
import {suggestDeStress} from "@/lib/gemini";
import Markdown from 'react-markdown'
import {checkSetGlobals} from "@/lib/seed";

export default async function ReliefCenter() {

  checkSetGlobals();

  if (stressChanged || reliefRecs.length === 0) {
      console.log("regenerate gemini relief recs");
      reliefRecs = []; //for debug
      if (process.env.DEBUG_MODE) {
          reliefRecs = ["Upbeat Indie Folk", "\"POV Walking Tours\"", "\"Round the Block\" Reset", "At a **65/100**, you are still in positive territory, but the \"battery\" is starting to drain slightly. You might be feeling the \"Sunday Scaries\" or just a bit of accumulated fatigue from the week. The goal now is to gently lift your energy and prevent that number from sliding further down.\n" +
          "\n" +
          "Here are three activities to help you reset, based on what worked for you in the data you provided (specifically the positive impact of novelty and movement).\n" +
          "\n" +
          "### 1. 🎧 Music Genre: Upbeat Indie Folk\n" +
          "Since it is Sunday morning, you want music that feels like \"sunshine\" to counteract the lower mood score.\n" +
          "*   **The Vibe:** Acoustic guitars, slightly faster tempos, and warm vocals. It’s energetic enough to wake you up but cozy enough for a weekend.\n" +
          "*   **Artists to try:** *The Lumineers, Vance Joy, Noah Kahan, or Jack Johnson.*\n" +
          "*   **Why this works:** This genre bridges the gap between relaxation and energy. It helps you transition from \"tired\" to \"awake\" without the aggression of high-intensity pop or rock.\n" +
          "\n" +
          "### 2. 📺 Video Style: \"POV Walking Tours\" (Virtual Travel)\n" +
          "Your data showed that **\"Visit a new cafe\" (+15)** was a big restorative hit for you. Since you might not want to leave the house right this second, simulate that sense of novelty.\n" +
          "*   **What to search:** *\"4K POV walking tour Tokyo rain,\" \"Swiss village walking tour,\"* or *\"New York City ambient walk.\"*\n" +
          "*   **Why this works:** These videos provide \"visual novelty.\" They trick your brain into feeling like you are exploring a new environment (which your data proves you enjoy) without requiring the effort of dressing up and commuting. It provides a mental escape from the current stress.\n" +
          "\n" +
          "### 3. 👟 The Wildcard: The \"Round the Block\" Reset\n" +
          "Your data is very clear: **\"Work out\" (+15)** and **\"Go on a walk\" (+10)** are reliable ways for you to reduce stress. However, when you feel 65/100, a full workout might feel daunting.\n" +
          "*   **The Activity:** Commit to leaving your house for **only 10 minutes**. Just walk around the block once and come back.\n" +
          "*   **Why this works:** You don't need to commit to a full \"exercise\" session. The combination of fresh air and physical movement triggers a biological reset. Based on your stats, physical movement is one of your most consistent tools for feeling better—this is a \"micro-dose\" of that remedy."];
      }
      else {
          reliefRecs = await suggestDeStress(stressLevel);
      }
      stressChanged = false;
  }
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
            <h3 className="text-slate-900 mt-2 textxl font-bold leading-relaxed">A playlist of {reliefRecs[0]} to lower cortisol levels.</h3>
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
                {reliefRecs[1]} designed to center your focus.
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
            {reliefRecs[2]} designed to reset your heart rate.
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
                    <p text-align="left">
                        <Markdown>{reliefRecs[3]}</Markdown>
                    </p>
            </div>
            </div> 

        </div>
      </div>
    </main>
  );
}