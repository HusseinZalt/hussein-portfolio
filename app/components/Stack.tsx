"use client";

import { motion } from "framer-motion";
import { Film, PenTool, Zap, Bot, Headphones, Monitor } from "lucide-react";

export default function Stack() {
  const tools = [
    { name: "After Effects", icon: PenTool, color: "border-purple-500", desc: "Motion Graphics & Compositing" },
    { name: "Premiere Pro", icon: Film, color: "border-indigo-500", desc: "Narrative Pacing & Sound Sync" },
    { name: "DaVinci Resolve", icon: Monitor, color: "border-cyan-500", desc: "Film Emulation & Color Science" },
    { name: "AI Tools", icon: Bot, color: "border-emerald-500", desc: "Generative Video & Flow" },
    { name: "Sound Design", icon: Headphones, color: "border-amber-500", desc: "Audio Engineering & Mixing" },
    { name: "Motion Graphics", icon: Zap, color: "border-rose-500", desc: "Visual Effects & Keyframing" },
  ];

  return (
    <section id="stack" className="py-20 bg-[#07080c] relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">ترسانة البرامج والمهارات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              className={`p-6 rounded-3xl bg-white/[0.03] border ${tool.color} border-white/10 backdrop-blur-md transition-all hover:bg-white/[0.06] flex items-start gap-4`}
            >
              <div className={`p-3 rounded-2xl bg-white/5 ${tool.color.replace('border', 'text')}`}>
                <tool.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{tool.name}</h3>
                <p className="text-sm text-slate-400 mt-1">{tool.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
