"use client";

import { Phone } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 ${
        isScrolled
          ? "bg-[var(--color-primary)]/95 backdrop-blur-md shadow-lg shadow-black/20 py-3"
          : "bg-[var(--color-primary)] py-4"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-lg shadow-md overflow-hidden flex items-center justify-center">
            <div className="relative w-[40px] h-[40px] sm:w-[50px] sm:h-[50px]">
              <Image 
                src="https://firebasestorage.googleapis.com/v0/b/magistralc.firebasestorage.app/o/abogado-magistral%2Flogo%20abogado-magistral.jpg?alt=media&token=5b44f3a7-5bd5-4751-ab8b-3ccf794dc5fa" 
                alt="Logo Abogado Magistral" 
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
          <div className="font-serif text-xl sm:text-2xl font-bold text-white tracking-wide leading-tight">
            Ratio <span className="text-[var(--color-secondary)]">Legis</span>
            <div className="text-[10px] sm:text-xs font-sans text-slate-300 font-normal tracking-widest uppercase">Estudio Jurídico</div>
          </div>
        </div>
        
        <Link
          href="https://wa.me/51923855410"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Link>
      </div>
    </nav>
  );
}
