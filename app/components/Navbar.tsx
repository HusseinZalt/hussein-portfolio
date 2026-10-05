"use client";

import { useState, useEffect } from "react";
import { Film, Sparkles, Menu, X, Play, ArrowLeft } from "lucide-react";

interface NavbarProps {
  onOpenShowreel: () => void;
  onOpenContact: () => void;
}

export default function Navbar({ onOpenShowreel, onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "معرض الأعمال", href: "#portfolio" },
    { name: "تعديل الألوان", href: "#comparison" },
    { name: "خطوات العمل", href: "#workflow" },
    { name: "البرامج", href: "#stack" },
    { name: "الآراء", href: "#testimonials" },
  ];

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#07080c]/90 backdrop-blur-xl border-b border-violet-500/15 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 p-[1px]">
            <div className="w-full h-full bg-[#0d0e15] rounded-[11px] flex items-center justify-center">
              <Film className="w-5 h-5 text-cyan-400" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white flex items-center gap-1.5">
              حسين <span className="text-violet-400 text-xs px-1.5 py-0.5 rounded bg-violet-500/10 border border-violet-500/20 font-mono">EDIT</span>
            </span>
            <span className="text-[10px] text-slate-400">فيديو ايديتور & موشن جرافيكس</span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-violet-600/15 rounded-full transition-all">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-3">
          <button onClick={onOpenShowreel} className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-violet-500/30 bg-violet-950/30 text-violet-200 hover:bg-violet-900/40">
            <Play className="w-3.5 h-3.5 fill-violet-400 text-violet-400" />
            <span>عرض الشوريل</span>
          </button>
          <button onClick={onOpenContact} className="relative group overflow-hidden rounded-full p-[1px]">
            <span className="absolute inset-0 bg-gradient-to-r from-violet-600 via-cyan-500 to-indigo-600 rounded-full animate-pulse"></span>
            <span className="relative flex items-center gap-2 px-5 py-2 rounded-full bg-[#0d0e15] text-xs font-bold text-white">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>احجز مشروعك</span>
              <ArrowLeft className="w-3.5 h-3.5 text-slate-300 group-hover:-translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0d0e15]/95 backdrop-blur-2xl border-b border-violet-500/20 p-6 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setMobileOpen(false)} className="px-4 py-3 text-sm font-medium text-slate-200 hover:bg-violet-600/20 rounded-xl">
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <button onClick={() => { setMobileOpen(false); onOpenShowreel(); }} className="flex items-center justify-center gap-2 py-3 rounded-xl border border-violet-500/30 bg-violet-950/40 text-violet-200 font-semibold text-sm">
              <Play className="w-4 h-4 fill-violet-400 text-violet-400" />
              <span>مشاهدة الشوريل</span>
            </button>
            <button onClick={() => { setMobileOpen(false); onOpenContact(); }} className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>تواصل لبدء العمل</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
