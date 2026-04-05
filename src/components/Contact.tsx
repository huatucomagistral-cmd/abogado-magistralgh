"use client";

import { MapPin, Phone, Mail, Globe, Scale } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-24 bg-slate-50" id="contacto">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 flex flex-col md:flex-row">
          
          {/* Left Side: Brand info */}
          <div className="md:w-5/12 p-10 lg:p-16 bg-[var(--color-primary)] text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-secondary)]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4"></div>
            
            <div className="relative z-10">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Estudio <br/> Jurídico
              </h2>
              <h3 className="font-serif text-2xl text-[var(--color-secondary)] mb-8">Ratio Legis</h3>
              
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/10 rounded-xl border border-white/20 mb-8 backdrop-blur-sm">
                <Scale className="w-5 h-5 text-[var(--color-secondary)]" />
                <span className="font-semibold text-sm">ABOGADO REG. C.A.J. N° 4937</span>
              </div>
              
              <p className="text-slate-300 text-lg leading-relaxed font-light">
                Su libertad y sus derechos son nuestra prioridad. Visite nuestras oficinas o póngase en contacto directo para una defensa penal eficaz y con valores.
              </p>
            </div>
          </div>

          {/* Right Side: Contact info */}
          <div className="md:w-7/12 p-10 lg:p-16 flex flex-col justify-center">
            <h3 className="font-serif text-3xl font-bold text-[var(--color-primary)] mb-10">
              Información de Contacto
            </h3>
            
            <div className="space-y-8">
              {/* Dirección */}
              <div className="flex gap-5 group">
                <div className="p-4 bg-[var(--color-primary)]/5 rounded-2xl group-hover:bg-[var(--color-primary)] transition-colors duration-300 shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Oficina Principal</h4>
                  <p className="font-medium text-slate-800 text-lg">Jr. Gregorio Albarracín Mz R2 Lt8</p>
                  <p className="text-slate-600">Chorrillos - Lima</p>
                  <p className="text-[var(--color-secondary)] text-sm font-medium mt-1">(REF. PENAL DE SANTA MÓNICA)</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex gap-5 group">
                <div className="p-4 bg-[var(--color-primary)]/5 rounded-2xl group-hover:bg-[var(--color-primary)] transition-colors duration-300 shrink-0">
                  <Phone className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="text-slate-500 text-sm font-semibold mb-1 uppercase tracking-wider">Llamadas y WhatsApp</h4>
                  <p className="font-medium text-slate-800 text-xl tracking-wide">923 855 410</p>
                </div>
              </div>

              {/* Correo y Web */}
              <div className="grid sm:grid-cols-2 gap-8 pt-4">
                <div className="flex gap-4 group">
                  <div className="p-3 bg-[var(--color-secondary)]/10 rounded-xl group-hover:bg-[var(--color-secondary)] transition-colors duration-300 shrink-0">
                    <Mail className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Correo</h4>
                    <p className="font-medium text-[var(--color-primary)] truncate">Ratiolegis4937@gmail.com</p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="p-3 bg-[var(--color-secondary)]/10 rounded-xl group-hover:bg-[var(--color-secondary)] transition-colors duration-300 shrink-0">
                    <Globe className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-slate-500 text-xs font-semibold mb-1 uppercase tracking-wider">Sitio Web</h4>
                    <p className="font-medium text-[var(--color-primary)]">Abogados.magistral.pe</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
