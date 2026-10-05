import type { Metadata } from "next";
import { Cairo, Geist_Mono } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "حسين | صناعة الفيديو والموشن جرافيكس - Hussein Portfolio",
  description: "معرض أعمال حسين - صانع محتوى، محرر فيديو، ومصمم موشن جرافيكس محترف. مونتاج سينمائي، تعديل ألوان، وتأثيرات بصرية VFX.",
  keywords: ["Hussein", "Video Editor", "Motion Graphics", "After Effects", "Premiere Pro", "Color Grading", "VFX", "موشن جرافيكس", "محرر فيديو", "مونتاج"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#07080c] text-slate-100 font-sans selection:bg-violet-500 selection:text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

