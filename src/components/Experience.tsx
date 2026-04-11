import { Landmark, Scale, FileSignature, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Experience() {
  const experiences = [
    {
      icon: <Landmark className="w-6 h-6 text-white" />,
      text: "Ex-Funcionario Público (Defensoría del Pueblo)"
    },
    {
      icon: <FileSignature className="w-6 h-6 text-white" />,
      text: "Ex-Secretario Notarial en Satipo y Huancayo"
    },
    {
      icon: <Scale className="w-6 h-6 text-white" />,
      text: "Ex-Trabajador del Poder Judicial"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-white" />,
      text: "Conciliador Extrajudicial"
    }
  ];

  const gallery = [
    "https://firebasestorage.googleapis.com/v0/b/magistralc.firebasestorage.app/o/abogado-magistral%2Fzhehypg3n8ffi5e5ch32.webp?alt=media&token=53a26681-bc5e-4707-8134-d1a6143a27ac",
    "https://firebasestorage.googleapis.com/v0/b/magistralc.firebasestorage.app/o/abogado-magistral%2Fnynjfp0uiedgkes2to0t.webp?alt=media&token=a03858e2-64dc-4247-9028-ed1350b435f5",
    "https://firebasestorage.googleapis.com/v0/b/magistralc.firebasestorage.app/o/abogado-magistral%2Fbrt3vhdwz10qdkidxtm3.webp?alt=media&token=c2bccb98-0799-4206-89e2-e632b634d21b",
    "https://firebasestorage.googleapis.com/v0/b/magistralc.firebasestorage.app/o/abogado-magistral%2Fajcmjclecwwhvxldmcjl.webp?alt=media&token=e7fe5934-8407-4360-809a-b8a7e46b104a"
  ];

  return (
    <section className="py-24 bg-white" id="experiencia">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-primary)] font-bold mb-8 leading-tight">
              ¿Por qué elegir nuestra <span className="text-[var(--color-secondary)]">defensa?</span>
            </h2>
            <p className="text-xl text-slate-700 mb-10 leading-relaxed font-light">
              Nuestra diferencia radica en el <strong>conocimiento profundo del sistema desde adentro</strong>. 
              Con 4 años de experiencia en el Poder Judicial de Satipo y Huancayo, y habiendo trabajado en la Defensoría del Pueblo, entendemos los mecanismos legales que otros ignoran.
            </p>

            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="group flex items-center gap-5 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="p-4 bg-[var(--color-primary)] rounded-xl group-hover:bg-[var(--color-secondary)] transition-colors duration-300">
                    {exp.icon}
                  </div>
                  <span className="font-semibold text-slate-800 text-lg group-hover:text-[var(--color-primary)] transition-colors">{exp.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 sm:gap-6 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-secondary)]/10 to-[var(--color-primary)]/5 rounded-[3rem] -m-6 -z-10 blur-3xl"></div>
            {gallery.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:z-10 group ${
                  idx === 0 ? 'h-56 sm:h-72 mt-8 sm:mt-12' : 
                  idx === 1 ? 'h-64 sm:h-80' : 
                  idx === 2 ? 'h-64 sm:h-80 -mt-8 sm:-mt-12' : 
                  'h-56 sm:h-72'
                }`}
              >
                <Image 
                  src={img} 
                  alt={`Conoce al Abogado - Imagen ${idx + 1}`} 
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
