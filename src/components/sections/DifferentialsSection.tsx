import React from 'react';
import { Eye, Award, MessageSquare, ShieldCheck, Layers } from 'lucide-react';

export const DifferentialsSection: React.FC = () => {
  const differentials = [
    {
      number: '01',
      title: 'Atenção aos Detalhes',
      tag: 'Micro-acabamento',
      description: 'Cada etapa recebe atenção minuciosa. Desde a proteção de vedações de borracha até a conferência de micrômetro no verniz.',
      icon: Eye
    },
    {
      number: '02',
      title: 'Acabamento Superior',
      tag: 'Padrão Montadora',
      description: 'O resultado final importa. Não aceitamos marcas de lixa, ondulações de chapa ou diferença de tonalidade sob luz solar.',
      icon: Award
    },
    {
      number: '03',
      title: 'Transparência Total',
      tag: 'Acompanhamento',
      description: 'Comunicação clara e direta. Você recebe fotos e atualizações durante todo o processo de reparação do seu veículo.',
      icon: MessageSquare
    },
    {
      number: '04',
      title: 'Cuidado & Proteção',
      tag: 'Integridade',
      description: 'Seu veículo é manuseado com capas de proteção para volante, bancos e para-lamas. Sem poeira ou resíduos no interior.',
      icon: ShieldCheck
    },
    {
      number: '05',
      title: 'Profissionalismo Industrial',
      tag: 'Organização',
      description: 'Processo padronizado, cabine de pintura limpa e estéril, ferramental calibrado e compromisso rigoroso com os prazos acordados.',
      icon: Layers
    }
  ];

  return (
    <section className="relative py-28 sm:py-36 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600] mb-3">
            06 — Critérios de Excelência
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Por que a <br />
            <span className="text-chrome">Continent?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AA]">
            Construímos um ambiente de funilaria e pintura que foge do comum. Aqui a técnica automotiva encontra a disciplina de oficina de alto padrão.
          </p>
        </div>

        {/* 5 Distinct Cards in Modern Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, index) => {
            const Icon = item.icon;
            const isFullWidth = index === 0;

            return (
              <div
                key={item.number}
                className={`relative bg-[#0D0F12] border border-white/[0.08] hover:border-[#E10600]/40 p-8 rounded-xl transition-all duration-300 group hover:-translate-y-0.5 ${
                  isFullWidth ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Header of card */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono-tech text-xs uppercase tracking-widest text-[#E10600]">
                    {item.number} · {item.tag}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#9CA3AA] group-hover:text-[#E10600] transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white group-hover:text-chrome transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#D9DDE2] leading-relaxed">
                  {item.description}
                </p>

                <div className="mt-6 pt-4 border-t border-white/[0.05] flex items-center gap-2 text-[11px] font-mono-tech text-[#9CA3AA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]"></span>
                  <span>Compromisso Continent</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
