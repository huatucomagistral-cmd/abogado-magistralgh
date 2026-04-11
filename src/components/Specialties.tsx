import { Gavel, Building2, Users, Star } from "lucide-react";

export default function Specialties() {
  const services = [
    {
      title: "Derecho Penal",
      description: "Defensa estratégica en delitos complejos y crimen organizado. Especialistas en instancias superiores.",
      icon: <Gavel className="w-8 h-8 text-white" />
    },
    {
      title: "Gestión Notarial y Civil",
      description: "Asesoría integral en trámites notariales, resolución de conflictos civiles y procesos conciliatorios.",
      icon: <Building2 className="w-8 h-8 text-white" />
    },
    {
      title: "Derechos Humanos",
      description: "Protección y defensa de derechos fundamentales, respaldada por experiencia en la Defensoría.",
      icon: <Users className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="especialidades">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)]/10 rounded-full blur-3xl -z-10"></div>
      
      <div className="w-full max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex justify-center items-center p-3 bg-[var(--color-secondary)]/20 rounded-full mb-4">
            <Star className="w-6 h-6 text-[var(--color-primary)]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-primary)] font-bold mb-6">
            Casos de Éxito y Especialidades
          </h2>
          <p className="text-xl text-[var(--color-primary)] font-medium">
            "Especialistas en la Sala Penal Nacional en Terrorismo y Crimen Organizado."
          </p>
          <p className="text-slate-600 mt-4 text-lg">
            Contamos con casos ganados de alta complejidad en las esferas más exigentes de la justicia peruana.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-[var(--color-primary)] rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-[var(--color-primary)]/20 group-hover:bg-[var(--color-secondary)] transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold font-serif text-[var(--color-primary)] mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
