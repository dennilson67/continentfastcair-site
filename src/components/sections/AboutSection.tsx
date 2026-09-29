import React from 'react';
import { Shield, Sparkles, Building2, Wrench } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="relative py-28 sm:py-36 bg-[#08090B] border-t border-b border-white/[0.06]">
      {/* Background Accent */}
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#E10600]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual with Image and Metal Border */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0D0F12] shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/src/assets/images/luxury_car_finish_1790632929410.jpg"
                  alt="Acabamento automotivo impecável Continent Fast Repair"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter brightness-95"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Bottom Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <div className="font-mono-tech text-xs uppercase text-[#E10600]">
                    Localização da Oficina
                  </div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    Jardim Eldorado · Palhoça / SC
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono-tech text-xs uppercase text-[#9CA3AA]">
                    Atendimento
                  </div>
                  <div className="text-sm font-mono-tech text-white mt-0.5">
                    Segunda a Sábado
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600]">
              07 — Institucional
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Mais que reparar. <br />
              <span className="text-chrome">Restaurar.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#D9DDE2] leading-relaxed">
              A <strong className="text-white font-semibold">Continent Fast Repair</strong> é uma empresa especializada em funilaria e pintura automotiva, sediada em Palhoça, Santa Catarina.
            </p>

            <p className="text-sm sm:text-base text-[#9CA3AA] leading-relaxed">
              Nascemos com o propósito de transformar a percepção do serviço de reparação automotiva na Grande Florianópolis. Combinamos equipamentos modernos, materiais de alto padrão e uma metodologia transparente em cada atendimento.
            </p>

            {/* 4 Pillars of About (História, Filosofia, Estrutura, Equipe) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-lg bg-[#0D0F12] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase text-[#E10600] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Nossa Filosofia
                </div>
                <div className="text-xs text-[#D7DADF] leading-relaxed">
                  Excelência estética e respeito à integridade mecânica de cada modelo.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0D0F12] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase text-[#E10600] mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  Nossa Estrutura
                </div>
                <div className="text-xs text-[#D7DADF] leading-relaxed">
                  Cabine de pintura pressurizada, iluminação técnica e área de preparação limpa.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0D0F12] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase text-[#E10600] mb-1">
                  <Wrench className="w-3.5 h-3.5" />
                  Nossa Técnica
                </div>
                <div className="text-xs text-[#D7DADF] leading-relaxed">
                  Colorimetria computadorizada e técnicas avançadas de repuxo capacitivo.
                </div>
              </div>

              <div className="p-4 rounded-lg bg-[#0D0F12] border border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase text-[#E10600] mb-1">
                  <Shield className="w-3.5 h-3.5" />
                  Compromisso
                </div>
                <div className="text-xs text-[#D7DADF] leading-relaxed">
                  Atendimento consultivo com clareza em prazos e procedimentos.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
