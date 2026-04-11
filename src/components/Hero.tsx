import { Shield, ArrowRight, Gavel, Scale } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-28 pb-16 overflow-hidden text-white">
      {/* Background styling effects */}
      <div className="absolute inset-0 bg-[url('https://firebasestorage.googleapis.com/v0/b/magistralc.firebasestorage.app/o/abogado-magistral%2Fbrt3vhdwz10qdkidxtm3.webp?alt=media&token=c2bccb98-0799-4206-89e2-e632b634d21b')] bg-cover bg-center opacity-10 mix-blend-overlay border-none"></div>

      <div className="w-full max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="max-w-2xl order-2 lg:order-1 pt-10 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-[var(--color-secondary)] text-sm font-semibold tracking-wide mb-8 uppercase">
              <Shield className="w-4 h-4" />
              <span>Experiencia en el Poder Judicial</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Defensa Penal Eficaz con <span className="text-[var(--color-secondary)]">Valores y Justicia.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-200 mb-6 font-light leading-relaxed">
              Dr. <strong>Melvin Rusbel Huatuco Rojas</strong>
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md font-medium text-white border border-white/10"><Gavel className="w-4 h-4"/> Defensor Legal</span>
              <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-md font-medium text-white border border-white/10"><Scale className="w-4 h-4"/> Litigante</span>
            </div>

            <p className="text-lg text-slate-300 mb-10 max-w-xl leading-relaxed">
              Más de 8 años de trayectoria comprobada. Especialista en delitos complejos y defensa inquebrantable de los derechos fundamentales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://wa.me/51923855410"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25d366] hover:bg-[#20b858] text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-[#25d366]/30"
              >
                Agendar Consulta Gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center items-center relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-[var(--color-secondary)]/10 rounded-full blur-[100px] transform scale-110"></div>
            
            {/* Elegant, professional framed image presentation */}
            <div className="relative w-full max-w-[220px] md:max-w-[250px] lg:max-w-[280px] bg-white p-3 md:p-4 rounded-2xl shadow-2xl border-2 border-white/50 group">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-inner bg-slate-100">
                <Image 
                  src="https://firebasestorage.googleapis.com/v0/b/magistralc.firebasestorage.app/o/abogado-magistral%2Fbtqcum6esmuflwr6kdyj.webp?alt=media&token=d8e0029b-1a53-4b48-b26c-bf061cc86567" 
                  alt="Dr. Melvin Rusbel Huatuco Rojas" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 320px"
                  priority
                />
              </div>
              
              {/* Information written below the photo directly on the white frame */}
              <div className="mt-4 md:mt-5 text-center px-2 pb-2">
                <p className="text-[var(--color-primary)] font-serif text-lg md:text-xl font-bold mb-1 leading-tight">Dr. Melvin Huatuco</p>
                <div className="mx-auto h-0.5 w-8 bg-[var(--color-primary)]/40 mb-2 rounded-full"></div>
                <p className="text-slate-500 font-sans text-xs md:text-sm font-semibold tracking-widest uppercase">C.A.J. N° 4937</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
