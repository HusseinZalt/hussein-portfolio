  "use client";
import { X, Play, Film, User, Tag } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  role: string;
  thumbnail: string;
  videoUrl: string;
}

interface VideoModalProps {
  project: Project;
  onClose: () => void;
}

export function VideoModal({ project, onClose }: VideoModalProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl bg-[#0d0e15] border border-violet-500/20 rounded-2xl overflow-hidden shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-black/50 rounded-full hover:bg-white/20 transition-all">
          <X className="w-6 h-6 text-white" />
        </button>
        
        <div className="aspect-video bg-black flex items-center justify-center">
            <div className="text-slate-500 flex flex-col items-center gap-2">
                <Play className="w-12 h-12 text-violet-500/50" />
                <p>مشغل الفيديو سيعمل هنا (URL: {project.videoUrl})</p>
            </div>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
          <div className="flex gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1.5"><Tag className="w-4 h-4" /> {project.category}</div>
            <div className="flex items-center gap-1.5"><User className="w-4 h-4" /> دوري: {project.role}</div>
          </div>
          <p className="mt-4 text-slate-300">{project.description}</p>
        </div>
      </div>
    </div>
  );
}
