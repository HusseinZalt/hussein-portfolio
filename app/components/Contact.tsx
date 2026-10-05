"use client";

import { Mail, Globe, Send } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.54a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#07080c] relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-violet-950/10 blur-3xl rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">لنبدأ مشروعك القادم!</h2>
            <p className="text-slate-400 mb-8">أنا مستعد لتحويل رؤيتك إلى واقع بصري مبهر. تواصل معي عبر النموذج أو عبر وسائل التواصل الاجتماعي.</p>
            
            <div className="flex flex-col gap-4">
              <a href="mailto:husseinzalt67@gmail.com" className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors">
                <Mail className="w-5 h-5" /> husseinzalt67@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/hussein-zalt-5a625b2b4/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors">
                <LinkedinIcon className="w-5 h-5" /> LinkedIn/hussein-zalt
              </a>
              <a href="https://www.behance.net/hussein_zalt" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-violet-400 transition-colors">
                <Globe className="w-5 h-5" /> Behance/hussein_zalt
              </a>
            </div>
          </div>

          <form className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-4">
            <input type="text" placeholder="اسمك" className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-violet-500" />
            <input type="email" placeholder="بريدك الإلكتروني" className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-violet-500" />
            <select defaultValue="" className="w-full p-4 rounded-xl bg-black/40 border border-white/10 text-white outline-none focus:border-violet-500 cursor-pointer [&>option]:bg-[#12131a] [&>option]:text-white">
              <option value="" disabled className="text-slate-500 bg-[#12131a]">نوع المشروع</option>
              <option value="motion" className="bg-[#12131a] text-white">موشن جرافيكس</option>
              <option value="editing" className="bg-[#12131a] text-white">مونتاج فيديو</option>
              <option value="other" className="bg-[#12131a] text-white">آخر</option>
            </select>
            <textarea placeholder="رسالتك" rows={4} className="w-full p-4 rounded-xl bg-black/20 border border-white/10 text-white outline-none focus:border-violet-500"></textarea>
            <button className="w-full flex items-center justify-center gap-2 bg-violet-600 py-4 rounded-xl text-white font-bold hover:bg-violet-700 transition-all">
              <Send className="w-4 h-4" /> إرسال الرسالة
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}