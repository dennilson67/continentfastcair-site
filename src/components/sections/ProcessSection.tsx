import React, { useState } from 'react';
import { PROCESS_STEPS } from '../../data/initialData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = PROCESS_STEPS[activeStepIndex];

  return (
    <section id="processo" className="relative py-28 sm:py-36 bg-[#08090B] border-t border-b border-white/[0.06]">
      {/* Background Subtle Red Ambience */}
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-[#E10600]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600] mb-3">
            03 — Linha de Produção
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white">
            Do impacto <br />
            <span className="text-chrome">ao acabamento.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AA] leading-relaxed">
            Metodologia transparente e padronizada. Cada veículo percorre 6 etapas estritas com controle de qualidade em cada transição.
          </p>
        </div>

        {/* Interactive Step Navigator Bar */}
        <div className="relative mb-12">
          {/* Progress Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/[0.08] -translate-y-1/2 z-0" />
          <div
            className="hidden md:block absolute top-1/2 left-0 h-[2px] bg-[#E10600] -translate-y-1/2 transition-all duration-500 z-0"
            style={{ width: `${(activeStepIndex / (PROCESS_STEPS.length - 1)) * 100}%` }}
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isPast = idx < activeStepIndex;
              return (
                <button
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-3 sm:p-4 rounded-xl text-left transition-all duration-300 relative border cursor-pointer ${
                    isActive
                      ? 'bg-[#121417] border-[#E10600] shadow-[0_0_20px_-5px_rgba(225,6,0,0.4)]'
                      : isPast
                      ? 'bg-[#0D0F12] border-white/20 text-[#D7DADF]'
                      : 'bg-[#0D0F12]/80 border-white/[0.07] text-[#9CA3AA] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-mono-tech text-xs uppercase font-bold ${
                      isActive ? 'text-[#E10600]' : 'text-neutral-500'
                    }`}>
                      {step.number}
                    </span>
                    {isActive ? (
                      <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
                    ) : isPast ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#E10600]" />
                    ) : null}
                  </div>
                  <div className="font-display text-xs sm:text-sm font-bold uppercase text-white truncate">
                    {step.title.split('&')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Feature Box */}
        <div className="bg-[#0D0F12] border border-white/[0.1] rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          {/* Subtle Red Light Ray inside card */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#E10600]/15 via-transparent to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono-tech text-sm uppercase tracking-widest text-[#E10600] font-bold">
                  Etapa {activeStep.number} de 06
                </span>
                <span className="text-white/20">·</span>
                <span className="text-xs font-mono-tech text-[#9CA3AA] uppercase">
                  {activeStep.subtitle}
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase text-white mb-4">
                {activeStep.title}
              </h3>

              <p className="text-base sm:text-lg text-[#D9DDE2] leading-relaxed mb-6">
                {activeStep.description}
              </p>

              <div className="p-4 rounded-lg bg-black/40 border border-white/[0.08] inline-flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#E10600] mt-1.5 shrink-0" />
                <div>
                  <div className="text-[11px] font-mono-tech uppercase text-[#9CA3AA] tracking-wider">
                    Controle de Qualidade Continent
                  </div>
                  <div className="text-xs sm:text-sm text-white mt-0.5">
                    {activeStep.technicalDetail}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Navigation Buttons */}
            <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="text-xs font-mono-tech text-[#9CA3AA] uppercase">
                Sequência Operacional
              </div>
              <div className="flex items-center gap-2">
                <button
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded border border-white/10 text-xs font-mono-tech uppercase text-[#D7DADF] hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                >
                  Anterior
                </button>
                <button
                  disabled={activeStepIndex === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="px-5 py-2 rounded bg-[#E10600] hover:bg-[#FF2018] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span>Próximo</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
