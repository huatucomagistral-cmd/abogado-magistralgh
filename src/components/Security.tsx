import { Award, Briefcase, MapPin, ShieldCheck } from "lucide-react";

export default function Security() {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-white" />,
      value: "8 Años",
      label: "Experiencia como Abogado"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-white" />,
      value: "4 Años",
      label: "Experiencia en el Poder Judicial"
    },
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      value: "Regional",
      label: "Experiencia en Lima, Satipo y Huancayo"
    }
  ];

  return (
    <section className="py-24 bg-[var(--color-primary)] text-white relative overflow-hidden" id="credibilidad">
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[var(--color-secondary)]/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 mix-blend-screen pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-20 border-b border-white/10 pb-16">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/20 mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-[var(--color-secondary)]" />
              <span className="font-semibold tracking-wide text-slate-100 text-sm">Colegiado C.A.J. - Registro N° 4937</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Credibilidad, Confianza y <span className="text-[var(--color-secondary)]">Trayectoria</span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed font-light">
              Un historial comprobado de excelencia legal. Nuestra práctica está respaldada por resultados consistentes y un conocimiento integral del sistema de justicia peruano a nivel nacional.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-6 w-full md:w-auto">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-center flex flex-col items-center hover:-translate-y-1 hover:bg-white/10 transition-all duration-300 shadow-xl shadow-black/20">
                <div className="mb-4 p-4 bg-[var(--color-secondary)]/20 rounded-2xl">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold font-serif mb-2 text-white">{stat.value}</h3>
                <p className="text-sm text-slate-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Valores Section */}
        <div className="max-w-4xl mx-auto text-center relative px-6 md:px-0">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl text-white/5 font-serif leading-none select-none">"</div>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8 relative z-10 pt-8 tracking-wide">
            Valores <span className="text-[var(--color-secondary)]">Inquebrantables</span>
          </h3>
          <p className="text-xl md:text-3xl text-slate-200 leading-relaxed italic relative z-10 font-light">
            "Lima necesita hoy abogados con valores. No solo ofrecemos defensa técnica, sino una ética inquebrantable para proteger lo que más importa: su libertad y sus derechos."
          </p>
        </div>

      </div>
    </section>
  );
}
