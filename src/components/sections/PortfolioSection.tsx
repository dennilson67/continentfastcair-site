import React, { useState } from 'react';
import { INITIAL_PORTFOLIO_ITEMS } from '../../data/initialData';
import { PortfolioItem } from '../../types';
import { Maximize2, X, ArrowUpRight } from 'lucide-react';

export const PortfolioSection: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);

  const filters = ['Todos', 'Funilaria', 'Pintura', 'Fast Repair', 'Restauração'];

  const filteredItems = selectedFilter === 'Todos'
    ? INITIAL_PORTFOLIO_ITEMS
    : INITIAL_PORTFOLIO_ITEMS.filter((item) => item.category === selectedFilter);

  return (
    <section id="portfolio" className="relative py-28 sm:py-36 bg-[#08090B] border-t border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header and Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-white/[0.08]">
          <div>
            <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600] mb-3">
              05 — Acervo de Projetos
            </div>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white">
              Trabalhos Realizados
            </h2>
          </div>

          {/* Interactive Filter Tabs (Zero-pill compliant) */}
          <div className="mt-6 md:mt-0 flex items-center gap-1.5 p-1 bg-[#0D0F12] border border-white/10 rounded-lg overflow-x-auto">
            {filters.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-3.5 py-1.5 text-xs font-mono-tech uppercase tracking-wider rounded transition-colors whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#181B20] text-white shadow-sm font-semibold border-b-2 border-[#E10600]'
                      : 'text-[#9CA3AA] hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {filteredItems.map((item, index) => {
            // Asymmetric layout span
            let colSpan = 'md:col-span-6';
            let aspectClass = 'aspect-[16/10]';

            if (item.span === 'wide') {
              colSpan = 'md:col-span-12';
              aspectClass = 'aspect-[21/9] sm:aspect-[24/9]';
            } else if (item.span === 'tall') {
              colSpan = 'md:col-span-6';
              aspectClass = 'aspect-[4/3] sm:aspect-[1/1]';
            }

            return (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className={`group relative rounded-xl overflow-hidden bg-[#0D0F12] border border-white/[0.08] hover:border-[#E10600]/50 transition-all duration-500 cursor-pointer ${colSpan}`}
              >
                <div className={`w-full ${aspectClass} overflow-hidden`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                  />
                </div>

                {/* Dark Vignette & Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

                {/* Top Corner Project Meta */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="font-mono-tech text-[11px] uppercase tracking-wider text-[#D9DDE2] bg-black/60 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {item.category} · {item.year}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Bottom Content Bar */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="font-mono-tech text-xs text-[#E10600] uppercase tracking-widest mb-1">
                    {item.vehicle}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-bold uppercase text-white group-hover:text-chrome transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#9CA3AA] mt-1 font-mono-tech opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.processSummary}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-[#0D0F12] border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setLightboxItem(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/20 text-white hover:bg-black/90 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="aspect-[16/9] w-full overflow-hidden bg-black">
              <img
                src={lightboxItem.image}
                alt={lightboxItem.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 bg-[#0D0F12] border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span className="font-mono-tech text-xs text-[#E10600] uppercase tracking-wider">
                  {lightboxItem.category} · {lightboxItem.vehicle}
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-white mt-0.5">
                  {lightboxItem.title}
                </h3>
                <p className="text-sm text-[#9CA3AA] mt-1">
                  {lightboxItem.description}
                </p>
              </div>

              <a
                href="#contato"
                onClick={() => setLightboxItem(null)}
                className="px-5 py-2.5 rounded bg-[#E10600] hover:bg-[#FF2018] text-white text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2"
              >
                <span>Solicitar Avaliação Similar</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
