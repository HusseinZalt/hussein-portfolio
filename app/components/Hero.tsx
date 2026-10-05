"use client";

import { Play, Sparkles, Video, Flame, Eye, Film, Award } from "lucide-react";

interface HeroProps {
  onOpenShowreel: () => void;
  onOpenContact: () => void;
}

export default function Hero({ onOpenShowreel, onOpenContact }: HeroProps) {
  const stats = [
    { value: "+100M", label: "إجمالي المشاهدات", icon: Eye, color: "text-cyan-400" },
    { value: "+90", label: "مشروع ناجح", icon: Video, color: "text-violet-400" },
    { value: "100%", label: "رضا العملاء", icon: Award, color: "text-emerald-400" },
    { value: "+5", label: "سنوات خبرة", icon: Flame, color: "text-amber-400" },
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6 text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs w-fit">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>محرر فيديو ومصمم موشن جرافيكس</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-white tracking-tight">
              أحول الأفكار إلى <br />
              <span className="text-gradient font-black">قصص بصرية مذهلة</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              أصمم مقاطع الفيديو، الموشن جرافيكس، والإعلانات التجارية بأعلى معايير الجودة العالمية. خبرة في المونتاج وتعديل الألوان والمؤثرات البصرية.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button onClick={onOpenShowreel} className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold hover:scale-[1.02] transition-transform">
                <Play className="w-4 h-4 fill-white" />
                <span>شاهد الشوريل</span>
              </button>
              <button onClick={onOpenContact} className="px-7 py-4 rounded-2xl bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800">
                <span>تواصل معي</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl p-2 bg-gradient-to-b from-violet-500/30 to-cyan-500/20 border border-slate-700/60 backdrop-blur-xl">
              <div className="aspect-video rounded-2xl bg-slate-950 flex items-center justify-center relative overflow-hidden">
                <button onClick={onOpenShowreel} className="w-20 h-20 rounded-full bg-violet-600/90 flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md">
              <stat.icon className={`w-6 h-6 mb-3 ${stat.color}`} />
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
