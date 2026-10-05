import { LayoutGrid, PenTool, Zap, Bot, Headphones, Monitor, Film } from "lucide-react";

export default function Stack() {
  const tools = [
    { name: "Premiere Pro", icon: Film, color: "text-indigo-400" },
    { name: "After Effects", icon: PenTool, color: "text-purple-400" },
    { name: "DaVinci Resolve", icon: Monitor, color: "text-cyan-400" },
    { name: "AI Video Tools", icon: Bot, color: "text-emerald-400" },
    { name: "Sound Design", icon: Headphones, color: "text-amber-400" },
    { name: "Motion Graphics", icon: Zap, color: "text-rose-400" },
  ];

  return (
    <section className="py-20 bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">ترسانة البرامج والمهارات</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {tools.map((tool, i) => (
            <div key={i} className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-violet-500/30 hover:bg-slate-800 transition-all group flex flex-col items-center text-center gap-3">
              <tool.icon className={`w-8 h-8 ${tool.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-semibold text-slate-200">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
