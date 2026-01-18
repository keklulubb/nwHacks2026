"use client"
import { useState, useEffect } from 'react';
import LiquidBackground from "../week/liquidbackground";
import Navbar from "@/components/Navbar";
import { Sparkles, Send } from "lucide-react";
import Markdown from 'react-markdown';

export default function ReliefCenter() {
  // 1. DATA & STATE
  // Using your specific content from reliefRecs[3]
  const rawContent = `At a **65/100**, you are still in positive territory, but the "battery" is starting to drain slightly. You might be feeling the "Sunday Scaries" or just a bit of accumulated fatigue from the week. The goal now is to gently lift your energy and prevent that number from sliding further down.

Here are three activities to help you reset, based on what worked for you in the data you provided.

### 1. 🎧 Music Genre: Upbeat Indie Folk
This genre bridges the gap between relaxation and energy. It helps you transition from "tired" to "awake" without the aggression of high-intensity pop or rock.

### 2. 📺 Video Style: "POV Walking Tours"
These videos provide "visual novelty." They trick your brain into feeling like you are exploring a new environment without requiring the effort of commuting.

### 3. 👟 The Wildcard: The "Round the Block" Reset
The combination of fresh air and physical movement triggers a biological reset. This is a "micro-dose" of that remedy.`;

  const [displayedText, setDisplayedText] = useState("");
  const [chatInput, setChatInput] = useState("");

  // 2. TYPING ANIMATION LOGIC
  useEffect(() => {
    let i = 0;
    const typingSpeed = 15; // Fast typing for long content
    const timer = setInterval(() => {
      setDisplayedText(rawContent.slice(0, i));
      i++;
      if (i > rawContent.length) clearInterval(timer);
    }, typingSpeed);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="relative min-h-screen pt-32 pb-20 px-6 overflow-x-hidden">
      <LiquidBackground />
      <Navbar />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h1 className="text-6xl font-bold text-slate-900 mb-4 font-display italic">
          Relief Center
        </h1>
        <p className="text-slate-900 mb-12 max-w-2xl mx-auto font-medium text-xl">
          Immediate activities to activate the <span className="text-emerald-600">Parasympathetic Nervous System</span> and liquidate your stress.
        </p>
        
        {/* TOP ROW: THE 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* CARD 1: SPOTIFY */}
          <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl flex flex-col items-center">
            <span className="text-5xl mb-4">
              <svg viewBox="0 0 24 24" className="w-[1em] h-[1em]" fill="#1DB954" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.503 17.306c-.215.352-.676.463-1.028.249-2.82-1.722-6.368-2.111-10.547-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.803.562-.896 4.582-1.05 8.51-.595 11.659 1.328.352.215.463.676.249 1.038zm1.468-3.26c-.272.441-.847.58-1.288.308-3.23-1.984-8.153-2.558-11.972-1.398-.496.15-1.023-.13-1.173-.626-.15-.496.13-1.023.626-1.173 4.364-1.324 9.791-.684 13.518 1.597.441.272.58.847.289 1.291zm.139-3.39c-3.873-2.3-10.264-2.512-13.974-1.387-.595.18-1.226-.154-1.406-.75-.18-.595.154-1.226.75-1.406 4.267-1.296 11.325-1.047 15.772 1.594.536.318.712 1.01.394 1.546-.318.536-1.01.712-1.546.403z"/>
              </svg>
            </span>
            <h3 className="text-slate-900 text-lg font-bold">Indie Folk Playlist</h3>
            <button className="mt-4 w-full py-3 bg-[#1DB954] text-white rounded-xl font-bold text-sm">Open Spotify</button>
          </div>

          {/* CARD 2: YOUTUBE */}
          <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl flex flex-col items-center">
            <span className="text-5xl mb-4">
              <svg viewBox="0 0 24 24" className="w-[1em] h-[1em]" fill="#FF0000" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
            <h3 className="text-slate-900 text-lg font-bold">POV Walking Tour</h3>
            <button className="mt-4 w-full py-3 bg-[#FF0000] text-white rounded-xl font-bold text-sm">Watch YouTube</button>
          </div>

          {/* CARD 3: HEART */}
          <div className="bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/40 shadow-xl flex flex-col items-center">
            <span className="text-5xl mb-4">
              <svg viewBox="0 0 24 24" className="w-[1em] h-[1em]" fill="none" stroke="#ef4444" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                <path d="M20.5 11.5a4.5 4.5 0 0 0-8.5-2 4.5 4.5 0 0 0-8.5 2c0 4 4.5 8 8.5 10.5 4-2.5 8.5-6.5 8.5-10.5z" stroke="#ef4444" fill="#fee2e2" />
              </svg>
            </span>
            <h3 className="text-slate-900 text-lg font-bold">10-Min Reset</h3>
            <button className="mt-4 w-full py-3 bg-rose-500 text-white rounded-xl font-bold text-sm">Start Reset</button>
          </div>
        </div>

        {/* BOTTOM ROW: GEMINI BIG AUDIT CARD */}
        <div className="bg-[#072c3f] p-12 rounded-[3rem] shadow-2xl text-white flex flex-col text-left relative overflow-hidden">
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <Sparkles className="text-indigo-400 animate-pulse" size={28} />
            <h2 className="text-3xl font-bold font-display"> Recovery Audit</h2>
          </div>

          <div className="prose prose-invert max-w-none relative z-10 pb-20
            [&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-6 [&>p]:text-lg
            [&>h3]:text-indigo-300 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mb-4 [&>h3]:mt-8
            [&>ul]:list-disc [&>ul]:ml-6 [&>ul]:mb-6 [&>ul]:text-slate-300
            [&>strong]:text-white [&>strong]:font-bold
          ">
            <Markdown>{displayedText}</Markdown>
            {displayedText.length < rawContent.length && (
              <span className="inline-block w-2 h-5 bg-indigo-400 animate-pulse ml-1" />
            )}
          </div>

          {/* CHAT INPUT BOX (Bottom of Card) */}
          <div className="absolute bottom-6 left-6 right-6 z-20">
            <div className="flex items-center gap-3 p-2 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl">
              <input 
                type="text" 
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder="Ask Gemini for more recovery tips..."
                className="flex-1 bg-transparent px-4 py-2 outline-none text-white placeholder:text-slate-500"
              />
              <button className="p-3 bg-indigo-600 rounded-xl hover:bg-indigo-500 transition-all">
                <Send size={18} />
              </button>
            </div>
          </div>

          {/* Ambient Glow behind text */}
          <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-indigo-500/20 blur-[100px]" />
        </div>

      </div>
    </main>
  );
}