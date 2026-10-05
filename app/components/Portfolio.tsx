"use client";
import { useState } from "react";
import { Play } from "lucide-react";
import { VideoModal } from "./VideoModal";

interface Project {
  id: number;
  title: string;
  category: "Motion Graphics" | "Video Editing" | "VFX";
  description: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
}

const projects: Project[] = [
  { id: 1, title: "إعلان تجاري", category: "Motion Graphics", description: "عمل موشن جرافيك إبداعي لعلامة تجارية.", role: "Motion Designer", thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600", videoUrl: "#" },
  { id: 2, title: "فيلم وثائقي", category: "Video Editing", description: "مونتاج سينمائي لفيلم وثائقي قصير.", role: "Lead Editor", thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=600", videoUrl: "#" },
  { id: 3, title: "مشروع VFX", category: "VFX", description: "دمج وتأثيرات بصرية متقدمة.", role: "VFX Artist", thumbnail: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=600", videoUrl: "#" },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-20 bg-[#07080c]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-8 text-right">معرض الأعمال</h2>
        
        <div className="flex justify-end gap-2 mb-8">
          {["All", "Motion Graphics", "Video Editing", "VFX"].map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${filter === cat ? "bg-violet-600 text-white" : "bg-slate-900 text-slate-400 hover:bg-slate-800"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 h-64">
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080c] to-transparent opacity-80" />
              <div className="absolute bottom-4 right-4 z-10">
                <h3 className="text-white font-bold">{project.title}</h3>
                <p className="text-violet-400 text-xs">{project.category}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 backdrop-blur-sm">
                <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 fill-white text-white ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && <VideoModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  );
}
