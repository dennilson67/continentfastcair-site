import React, { useState } from 'react';
import { INITIAL_SERVICES } from '../../data/initialData';
import { ServiceItem } from '../../types';
import { ArrowUpRight, CheckCircle2, Cpu, Clock, X } from 'lucide-react';

interface ServicesSectionProps {
  onSelectServiceForEstimate: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForEstimate
}) => {
  const [activeService, setActiveService] = useState<ServiceItem>(INITIAL_SERVICES[0]);
  const [modalService, setModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="servicos" className="relative py-28 sm:py-36 bg-[#050505]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-[#E10600]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600] mb-3">
              02 — Especialidades
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white">
              Nossos Serviços
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-sm sm:text-base text-[#9CA3AA] max-w-md">
            Processos calibrados para devolver a originalidade estrutural e o padrão óptico estético de fábrica.
          </p>
        </div>

        {/* Large Editorial Showcase for Active Service */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-16">
          {/* Left Column: Image with Subtle Glow and Badge */}
          <div className="lg:col-span-7 relative group rounded-2xl overflow-hidden border border-white/10 bg-[#0D0F12]">
            <div className="aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
              <img
                src={activeService.image}
                alt={activeService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

            {/* In-image Metadata */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <span className="font-mono-tech text-xs uppercase tracking-widest text-[#E10600]">
                  Área Especializada
                </span>
                <div className="font-display text-xl sm:text-2xl font-bold uppercase text-white mt-0.5">
                  {activeService.title}
                </div>
              </div>
              <button
                onClick={() => setModalService(activeService)}
                className="px-4 py-2 rounded bg-white/10 hover:bg-white/20 text-white text-xs font-mono-tech uppercase tracking-wider backdrop-blur-md transition-colors"
              >
                Ver Detalhes Técnicos
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="font-display text-5xl sm:text-7xl font-black text-white/10 mb-2 select-none">
                {activeService.number}
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold uppercase text-white tracking-tight">
                {activeService.title}
              </h3>
              <p className="mt-4 text-base text-[#D9DDE2] leading-relaxed">
                {activeService.fullDescription}
              </p>
            </div>

            {/* Highlights Checklist */}
            <div className="space-y-3 pt-2">
              {activeService.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#E10600] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#D7DADF]">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Equipment & Fast CTA */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div>
                <div className="text-[11px] font-mono-tech uppercase text-[#9CA3AA]">
                  Equipamento em operação
                </div>
                <div className="text-xs font-medium text-white mt-0.5">
                  {activeService.equipment}
                </div>
              </div>

              <button
                onClick={() => onSelectServiceForEstimate(activeService.title)}
                className="px-5 py-3 rounded-md bg-[#E10600] hover:bg-[#FF2018] text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_-3px_rgba(225,6,0,0.5)] shrink-0 cursor-pointer"
              >
                <span>Solicitar Este Serviço</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tab/Card Selector for Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {INITIAL_SERVICES.map((service) => {
            const isSelected = activeService.id === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service)}
                className={`p-6 sm:p-7 rounded-xl text-left transition-all duration-300 relative border cursor-pointer ${
                  isSelected
                    ? 'bg-[#121417] border-[#E10600]/60 shadow-[0_0_30px_-8px_rgba(225,6,0,0.25)]'
                    : 'bg-[#0D0F12] border-white/[0.08] hover:border-white/20 hover:bg-[#101216]'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono-tech text-xs uppercase tracking-widest ${
                    isSelected ? 'text-[#E10600] font-bold' : 'text-[#9CA3AA]'
                  }`}>
                    {service.number} / 03
                  </span>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-[#E10600] animate-pulse" />
                  )}
                </div>
                <h4 className="font-display text-lg sm:text-xl font-bold uppercase text-white mb-2">
                  {service.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#9CA3AA] line-clamp-2">
                  {service.shortDescription}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Modal for Service Deep Details */}
      {modalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#0D0F12] border border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setModalService(null)}
              className="absolute top-5 right-5 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="font-mono-tech text-xs uppercase tracking-widest text-[#E10600] mb-2">
              Especificação Técnica · {modalService.number}
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white mb-4">
              {modalService.title}
            </h3>

            <p className="text-sm sm:text-base text-[#D9DDE2] leading-relaxed mb-6">
              {modalService.fullDescription}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-lg bg-black/40 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#E10600] uppercase mb-1">
                  <Cpu className="w-3.5 h-3.5" />
                  Maquinário
                </div>
                <div className="text-xs text-white">
                  {modalService.equipment}
                </div>
              </div>

              <div className="p-4 rounded-lg bg-black/40 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono-tech text-[#E10600] uppercase mb-1">
                  <Clock className="w-3.5 h-3.5" />
                  Tempo Estimado
                </div>
                <div className="text-xs text-white">
                  {modalService.turnaroundTime}
                </div>
              </div>
            </div>

            <div className="space-y-2 mb-8">
              <div className="text-xs font-mono-tech uppercase text-[#9CA3AA] tracking-wider mb-2">
                Destaques do Procedimento:
              </div>
              {modalService.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-[#D7DADF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E10600]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setModalService(null)}
                className="px-4 py-2.5 rounded-md text-xs font-mono-tech uppercase text-[#9CA3AA] hover:text-white"
              >
                Fechar
              </button>
              <button
                onClick={() => {
                  const title = modalService.title;
                  setModalService(null);
                  onSelectServiceForEstimate(title);
                }}
                className="px-6 py-2.5 rounded-md bg-[#E10600] hover:bg-[#FF2018] text-white text-xs font-bold uppercase tracking-wider"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
