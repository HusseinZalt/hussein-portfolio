"use client";

import { useState } from "react";
import { motion, PanInfo } from "framer-motion";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="comparison" className="py-20 bg-[#07080c] relative">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">تصحيح الألوان (Color Grading)</h2>
        <p className="text-slate-400 mb-10">استخدم الشريط للمقارنة بين اللقطة الخام واللقطة النهائية.</p>

        <div className="relative w-full h-[500px] overflow-hidden rounded-3xl border border-white/10 select-none touch-none" style={{ touchAction: "pan-y" }}>
          {/* After Image */}
          <img 
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200" 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">بعد (Graded)</span>
          
          {/* Before Image */}
          <motion.div 
            className="absolute inset-0 w-full h-full overflow-hidden border-r-2 border-white" 
            style={{ width: `${sliderPos}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&grayscale=true" 
              alt="Before" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white border border-white/10">قبل (Raw)</span>
          </motion.div>

          {/* Draggable Handle */}
          <motion.div 
            className="absolute top-0 bottom-0 z-20 flex items-center justify-center cursor-ew-resize"
            style={{ left: `${sliderPos}%` }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0}
            onDrag={(_, info: PanInfo) => {
              const containerWidth = 800; // approximation
              const newPos = sliderPos + (info.delta.x / containerWidth) * 100;
              setSliderPos(Math.min(Math.max(newPos, 0), 100));
            }}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-2xl">
              <div className="flex gap-1">
                  <div className="w-1 h-4 bg-violet-600 rounded-full"></div>
                  <div className="w-1 h-4 bg-violet-600 rounded-full"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
