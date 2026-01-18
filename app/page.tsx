import Link from "next/link";
import LiquidBackground from "./week/liquidbackground";
import Navbar from "@/components/Navbar";
import StressChart from "@/components/StressChart";
import { Sparkles } from "lucide-react";
import { prioritizeTasks } from "@/lib/gemini";
import { checkSetGlobals } from "@/lib/seed";
import Markdown from "react-markdown";

export default async function HomePage() {
  checkSetGlobals();

  // Logic for filtering tasks (Keeping your team's logic)
  if (tasksChanged || tasksPriority.length === 0) {
    const unfinishedTasks = userTasks[currentWeek].filter(
      (t) => !t.completed
    );

    if (unfinishedTasks.length <= 3) {
      tasksPriority = unfinishedTasks.map((t) => t.title);
      if (tasksPriority.length > 0) {
        tasksPriority.push(
          "Not that many tasks, no need to prioritize! Keep pushing forwards!"
        );
      }
    } else {
      tasksPriority = await prioritizeTasks(unfinishedTasks);
    }

    tasksChanged = false;

    if (tasksPriority.length === 0) {
      tasksPriority.push("All tasks are finished!");
    }
  }

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      <LiquidBackground />
      <Navbar />

      {/* THE CONTENT WRAPPER */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 space-y-16">
        
        {/* HERO SECTION */}
        <section className="space-y-6 max-w-3xl pt-10">
          <h1 className="text-8xl font-normal tracking-tight leading-tight font-logo">
            <span className="text-[#c25f4e]">Stressy</span>{" "}
            <span className="text-[#072c3f]">Baka</span>
          </h1>

          <p className="text-2xl text-[#ebebeb] font-medium leading-relaxed">
            The first ledger for your nervous system.
          </p>

          <p className="text-lg text-[#ebebeb] max-w-xl leading-relaxed">
            Track energy, not just time. Log stress before and after tasks and
            get a weekly reflection on what drains you.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="/dashboard#log"
              className="px-10 py-4 bg-[#072c3f] text-white rounded-full font-bold shadow-xl hover:bg-slate-800 transition-all active:scale-95"
            >
              Try Demo
            </Link>

            <Link
              href="/dashboard#insights"
              className="px-10 py-4 bg-white/70 backdrop-blur-md text-slate-700 rounded-full font-bold border border-white/50 shadow-sm hover:bg-white transition-all active:scale-95"
            >
              View Weekly Insights
            </Link>
          </div>
        </section>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[250px]">

          {/* Top Priority Tasks */}
          <div className="md:col-span-2 md:row-span-2 p-10 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/40 shadow-xl flex flex-col">
            <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">
              Top Priority Tasks
            </h3>

            <div className="space-y-4 flex-1 overflow-y-auto pr-2">
              {tasksPriority
                .slice(0, tasksPriority.length - 1)
                .map((task) => (
                  <div
                    key={task}
                    className="flex items-center gap-4 p-5 bg-white/60 rounded-3xl border border-white/20 shadow-sm"
                  >
                    <input
                      type="checkbox"
                      className="w-5 h-5 rounded-md border-slate-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="font-bold text-slate-700">
                      {task}
                    </span>
                  </div>
                ))}
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200/50">
              <div className="flex items-start gap-3 bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100/50">
                <Sparkles
                  className="text-indigo-500 shrink-0 mt-1"
                  size={20}
                />
                <div
                  className="prose prose-sm max-w-none text-left
                    [&>p]:text-indigo-900 [&>p]:font-medium [&>p]:leading-relaxed
                    [&>strong]:text-indigo-600 [&>strong]:font-black
                  "
                >
                  <Markdown>
                    {tasksPriority[tasksPriority.length - 1]}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>

          {/* Stress Trend */}
          <div className="md:col-span-2 p-10 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/40 shadow-xl flex flex-col">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-[0.2em] mb-3">
              Stress Trend
            </h3>
            <div className="flex-1 w-full min-h-[180px]">
              <StressChart />
            </div>
          </div>

          {/* Mental Liquidity */}
          <div className="md:col-span-2 p-10 bg-[#072c3f] text-white rounded-[3rem] shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-indigo-300 text-sm font-bold uppercase tracking-[0.2em] mb-6">
                Mental Liquidity
              </h3>
              <p className="text-6xl font-bold mt-2">
                {stressLevel}
                <span className="text-2xl font-light opacity-50 ml-1">
                  %
                </span>
              </p>
              <p className="text-indigo-200/60 text-sm mt-1 font-medium">
                Capacity remaining this week
              </p>
            </div>

            <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-indigo-400 rounded-full transition-all duration-1000"
                style={{ width: `${stressLevel}%` }}
              />
            </div>
          </div>

          {/* Recommended Assets */}
          <div className="md:col-span-4 p-10 bg-white/40 backdrop-blur-xl rounded-[3rem] border border-white/40 shadow-xl">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 font-display italic">
                Recommended Assets
              </h3>
              <Link
                href="/relief"
                className="text-indigo-600 font-bold text-sm hover:underline"
              >
                View Relief Center →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {["Indie Folk Playlist", "Vagus Reset Walk"].map((task) => (
                <div
                  key={task}
                  className="flex items-center gap-4 p-5 bg-white/50 rounded-2xl border border-white/20 hover:bg-white/80 transition-all cursor-pointer"
                >
                  <div className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span className="font-bold text-slate-700">
                    {task}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
