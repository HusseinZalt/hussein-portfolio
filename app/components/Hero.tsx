"use client";
import { motion } from "framer-motion";
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
    <section id="hero" className="relative pt-32 pb-20 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6 text-right"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-violet-300 text-xs w-fit backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>محرر فيديو ومصمم موشن جرافيكس</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl sm:text-6xl font-extrabold leading-tight text-white tracking-tight"
            >
              أحول الأفكار إلى <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 font-black">قصص بصرية مذهلة</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-slate-400 max-w-2xl leading-relaxed"
            >
              أصمم مقاطع الفيديو، الموشن جرافيكس، والإعلانات التجارية بأعلى معايير الجودة العالمية. خبرة في المونتاج وتعديل الألوان والمؤثرات البصرية.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button onClick={onOpenShowreel} className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold hover:scale-[1.02] transition-transform shadow-lg shadow-violet-600/20">
                <Play className="w-4 h-4 fill-white" />
                <span>شاهد الشوريل</span>
              </button>
              <button onClick={onOpenContact} className="px-7 py-4 rounded-2xl bg-white/5 border border-white/10 text-slate-200 hover:bg-white/10 backdrop-blur-md">
                <span>تواصل معي</span>
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-3xl p-2 bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl">
              <div className="aspect-video rounded-2xl bg-black/40 flex items-center justify-center relative overflow-hidden border border-white/5">
                <button onClick={onOpenShowreel} className="w-20 h-20 rounded-full bg-violet-600/90 flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-white ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
              <stat.icon className={`w-6 h-6 mb-3 ${stat.color}`} />
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
