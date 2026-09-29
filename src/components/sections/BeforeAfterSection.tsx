import React, { useState, useRef, useCallback } from 'react';
import { INITIAL_BEFORE_AFTER_CASES } from '../../data/initialData';
import { BeforeAfterCase } from '../../types';
import { Sparkles, MoveHorizontal, CheckCircle2, ShieldAlert } from 'lucide-react';

export const BeforeAfterSection: React.FC = () => {
  const [activeCase, setActiveCase] = useState<BeforeAfterCase>(INITIAL_BEFORE_AFTER_CASES[0]);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage 0-100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <section id="resultados" className="relative py-28 sm:py-36 bg-[#050505]">
      {/* Background Red Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E10600]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600] mb-3">
            04 — Comprovação Visual
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Antes e Depois
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AA]">
            A prova do nosso acabamento está nos detalhes. Arraste o cursor para comparar a peça danificada com a restauração de precisão de fábrica.
          </p>
        </div>

        {/* Case Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {INITIAL_BEFORE_AFTER_CASES.map((item) => {
            const isSelected = item.id === activeCase.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveCase(item);
                  setSliderPosition(50);
                }}
                className={`px-5 py-3 rounded-lg text-xs font-mono-tech uppercase tracking-wider transition-all whitespace-nowrap border cursor-pointer ${
                  isSelected
                    ? 'bg-[#181B20] text-white border-[#E10600] shadow-[0_0_15px_-3px_rgba(225,6,0,0.4)]'
                    : 'bg-[#0D0F12] text-[#9CA3AA] border-white/10 hover:border-white/25 hover:text-white'
                }`}
              >
                {item.title}
              </button>
            );
          })}
        </div>

        {/* Main Comparison Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Comparison Slider */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              tabIndex={0}
              role="slider"
              aria-label="Controle deslizante de comparação antes e depois"
              aria-valuenow={Math.round(sliderPosition)}
              aria-valuemin={0}
              aria-valuemax={100}
              onKeyDown={handleKeyDown}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-white/15 bg-black shadow-2xl group focus:outline-none focus:ring-2 focus:ring-[#E10600]"
            >
              {/* Image "DEPOIS" (Base Layer) */}
              <img
                src={activeCase.afterImage}
                alt={`${activeCase.title} - Depois da reparação`}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Image "ANTES" (Top Layer with Clip) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src={activeCase.beforeImage}
                  alt={`${activeCase.title} - Antes da reparação`}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center filter contrast-[1.05]"
                />
              </div>

              {/* Top Floating Badge: ANTES */}
              <div className="absolute top-5 left-5 z-20 px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono-tech uppercase tracking-wider text-[#FF2018] flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Antes · Avaria</span>
              </div>

              {/* Top Floating Badge: DEPOIS */}
              <div className="absolute top-5 right-5 z-20 px-3 py-1.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono-tech uppercase tracking-wider text-white flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#E10600]" />
                <span>Depois · Restaurado</span>
              </div>

              {/* Vertical Drag Handle Line */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-white z-30 cursor-ew-resize shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Central Draggable Knob */}
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#050505] border-2 border-white shadow-[0_0_20px_rgba(225,6,0,0.6)] flex items-center justify-center text-white">
                  <MoveHorizontal className="w-4 h-4 text-[#E10600]" />
                </div>
              </div>

              {/* Bottom Instruction Ribbon */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-mono-tech uppercase tracking-widest text-[#BFC4CA] pointer-events-none flex items-center gap-2">
                <span>Arraste para comparar</span>
              </div>
            </div>
          </div>

          {/* Technical Case Information */}
          <div className="lg:col-span-4 bg-[#0D0F12] border border-white/10 p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono-tech uppercase tracking-widest text-[#E10600] mb-1">
                {activeCase.repairType}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white mb-2">
                {activeCase.title}
              </h3>
              <div className="text-xs font-mono-tech text-[#9CA3AA] mb-4">
                Veículo: <span className="text-white">{activeCase.vehicle}</span>
              </div>

              <p className="text-sm text-[#D9DDE2] leading-relaxed mb-6">
                {activeCase.description}
              </p>

              {/* Specific Technical Procedures */}
              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                <div className="text-xs font-mono-tech uppercase text-[#9CA3AA] tracking-wider mb-2">
                  Procedimento Executado:
                </div>
                {activeCase.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-[#D7DADF]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E10600] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <div className="text-[11px] font-mono-tech text-[#9CA3AA] uppercase">
                Garantia e Acabamento
              </div>
              <div className="text-xs text-white mt-1">
                Pintura protegida com verniz de cura estéril e fidelidade de cor 100%.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
