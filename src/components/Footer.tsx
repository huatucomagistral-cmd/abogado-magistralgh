import { Scale } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#04015c] text-slate-400 py-12 border-t border-[var(--color-secondary)]/20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
            <div className="bg-white p-1 rounded-lg overflow-hidden flex items-center justify-center">
              <div className="relative w-[30px] h-[30px]">
                <Image 
                  src="https://firebasestorage.googleapis.com/v0/b/magistralc.firebasestorage.app/o/abogado-magistral%2Flogo%20abogado-magistral.jpg?alt=media&token=5b44f3a7-5bd5-4751-ab8b-3ccf794dc5fa" 
                  alt="Logo Abogado Magistral" 
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div className="font-serif text-lg font-bold text-white tracking-wide leading-tight">
              Ratio <span className="text-[var(--color-secondary)]">Legis</span>
              <div className="text-[9px] font-sans text-slate-300 font-normal tracking-widest uppercase">Estudio Jurídico</div>
            </div>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} Estudio Jurídico Ratio Legis. Dr. Melvin Rusbel Huatuco Rojas.</p>
            <p className="mt-1">Todos los derechos reservados.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
