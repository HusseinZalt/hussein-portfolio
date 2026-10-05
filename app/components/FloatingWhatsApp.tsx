"use client";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/966500000000"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-[90] flex items-center gap-3 bg-[#25D366] text-white p-4 rounded-full shadow-lg shadow-emerald-500/30 transition-all duration-300 hover:scale-110 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden md:block font-bold">تواصل عبر واتساب</span>
    </a>
  );
}
