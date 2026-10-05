"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import BeforeAfterSlider from "./components/BeforeAfterSlider";
import Stack from "./components/Stack";
import Contact from "./components/Contact";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  const handleShowreel = () => console.log("Open Showreel");
  const handleContact = () => {
      const element = document.getElementById('contact');
      element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#07080c] text-slate-100">
      <Navbar onOpenShowreel={handleShowreel} onOpenContact={handleContact} />
      <Hero onOpenShowreel={handleShowreel} onOpenContact={handleContact} />
      <Portfolio />
      <BeforeAfterSlider />
      <Stack />
      <Contact />
      <FloatingWhatsApp />
    </main>
  );
}
