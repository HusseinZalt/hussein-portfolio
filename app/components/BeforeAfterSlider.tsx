"use client";

import { useState } from "react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section id="comparison" className="py-20 bg-[#0c0d12]">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">قبل وبعد (Color Grading)</h2>
        <p className="text-slate-400 mb-10">حرك الشريط لمشاهدة الفرق في الألوان والإضاءة.</p>

        <div className="relative w-full h-96 overflow-hidden rounded-2xl border-2 border-violet-500/20 select-none group">
          {/* After Image */}
          <img 
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200" 
            alt="After" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Before Image (Clipping) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden" 
            style={{ width: `${sliderPos}%` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&grayscale=true" 
              alt="Before" 
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />
          
          {/* Divider */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white z-10 pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -left-3 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-1 h-4 bg-violet-600 rounded-full mx-0.5"></div>
                <div className="w-1 h-4 bg-violet-600 rounded-full mx-0.5"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
