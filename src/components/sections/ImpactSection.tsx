import React from 'react';
import { Target, Sparkles, Shield } from 'lucide-react';

export const ImpactSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Precisão',
      subtitle: 'Alinhamento & Geometria',
      description: 'Gabaritagem milimétrica para que cada vão, vinco e ponto de junção entre painéis respeite a geometria de fábrica do automóvel.',
      icon: Target
    },
    {
      number: '02',
      title: 'Acabamento',
      subtitle: 'Colorimetria & Brilho Espelhado',
      description: 'Correspondência rigorosa de cor sob luz UV e formulação com vernizes de alta dureza, garantindo profundidade óptica sem casca de laranja.',
      icon: Sparkles
    },
    {
      number: '03',
      title: 'Cuidado',
      subtitle: 'Integridade & Proteção Integral',
      description: 'Tratamento de cada veículo como um projeto singular. Proteção de partes não afetadas, interiores limpos e desmontagem técnica sem danos.',
      icon: Shield
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 bg-[#08090B] border-t border-b border-white/[0.06] overflow-hidden">
      {/* Subtle red reflection streak */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E10600]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600] mb-3">
            01 — Filosofia Construtiva
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white leading-[1.08]">
            Reparar é apenas <br />
            <span className="text-chrome">o começo.</span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-[#9CA3AA] leading-relaxed max-w-xl">
            Cada etapa importa quando o objetivo é devolver ao veículo um acabamento que realmente impressiona e preserva o valor de mercado.
          </p>
        </div>

        {/* 3 Large Pillars with Giant Background Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative bg-[#0D0F12] border border-white/[0.08] hover:border-[#E10600]/40 p-8 sm:p-10 rounded-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                {/* Giant Background Number */}
                <span className="absolute -right-2 -bottom-6 font-display text-8xl sm:text-9xl font-black text-white/[0.03] group-hover:text-[#E10600]/[0.08] transition-colors select-none pointer-events-none">
                  {pillar.number}
                </span>

                {/* Card Top: Number & Accent line */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-[#E10600]">
                    Pilar {pillar.number}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-white group-hover:text-[#E10600] group-hover:border-[#E10600]/30 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white group-hover:text-chrome transition-colors">
                  {pillar.title}
                </h3>
                <div className="text-xs font-mono-tech text-[#9CA3AA] uppercase tracking-wider mt-1 mb-4">
                  {pillar.subtitle}
                </div>
                <p className="text-sm text-[#D9DDE2] leading-relaxed relative z-10">
                  {pillar.description}
                </p>

                {/* Bottom Highlight Accent */}
                <div className="mt-8 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-xs font-mono-tech text-[#9CA3AA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
                  <span>Padrão Continent Fast Repair</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
