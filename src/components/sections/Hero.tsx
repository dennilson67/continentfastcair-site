import React from 'react';
import { Logo } from '../common/Logo';
import { ArrowUpRight, MessageSquare, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { INITIAL_COMPANY_CONFIG } from '../../data/initialData';

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  const whatsappUrl = `https://wa.me/${INITIAL_COMPANY_CONFIG.whatsapp}?text=${encodeURIComponent(
    INITIAL_COMPANY_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#050505]"
    >
      {/* Background Cinematic Automotive Visual with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_automotive_dark_1790632889035.jpg"
          alt="Veículo esportivo premium em estúdio com reflexo de luz vermelha"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.15] scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Cinematic Vignette & Red Light Reflection Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
        <div className="absolute inset-0 red-reflection-beam opacity-70 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-tech opacity-30 pointer-events-none" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Unboxed Technical Trust Metadata */}
        <div className="inline-flex items-center gap-2.5 text-xs sm:text-[13px] font-mono-tech uppercase tracking-widest text-[#BFC4CA] mb-6 sm:mb-8 border-b border-white/10 pb-2">
          <span className="flex items-center gap-1.5 text-[#E10600]">
            <MapPin className="w-3.5 h-3.5" />
            Palhoça / SC
          </span>
          <span className="text-white/30">·</span>
          <span>Funilaria & Pintura Automotiva</span>
          <span className="text-white/30">·</span>
          <span className="hidden sm:inline text-white/70">Cabine Pressurizada</span>
        </div>

        {/* Official Brand Emblem Presentation */}
        <div className="w-full max-w-xl mx-auto mb-8 sm:mb-10 transform hover:scale-[1.01] transition-transform duration-500">
          <Logo variant="hero" showGuns={false} />
        </div>

        {/* Core Headline */}
        <h1 className="font-display text-[27px] sm:text-5xl md:text-6xl lg:text-[74px] font-extrabold uppercase leading-[1.1] sm:leading-[1.03] tracking-tight text-white max-w-4xl text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
          Seu carro.{' '}
          <span className="block text-chrome">
            Novamente
          </span>
          <span className="relative inline-block text-white">
            impecável.
            {/* Subtle red baseline laser light */}
            <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#E10600] to-transparent blur-[0.5px]"></span>
          </span>
        </h1>

        {/* Subheadline with Restraint */}
        <p className="mt-4 sm:mt-7 text-sm sm:text-base md:text-lg text-[#D9DDE2] max-w-2xl font-normal leading-relaxed text-balance px-2">
          Precisão industrial, cuidado artesanal e acabamento técnico para devolver ao seu veículo a integridade e o brilho que ele merece.
        </p>

        {/* Conversion Action Buttons */}
        <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none mx-auto">
          {/* Primary CTA */}
          <button
            onClick={onOpenEstimate}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg bg-[#E10600] hover:bg-[#FF2018] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_-5px_rgba(225,6,0,0.6)] hover:shadow-[0_0_35px_-2px_rgba(225,6,0,0.85)] flex items-center justify-center gap-2 group cursor-pointer active:scale-98"
          >
            <span>Solicitar Orçamento</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Secondary CTA: WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 rounded-lg bg-[#0D0F12]/85 hover:bg-[#15181C] text-[#F4F5F6] text-xs sm:text-sm font-semibold uppercase tracking-wider border border-white/15 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-sm group active:scale-98"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366] transition-transform duration-200 group-hover:scale-110" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Quiet Industrial Trust Metrics (Human Editorial, zero-pill) */}
        <div className="mt-14 sm:mt-18 pt-8 border-t border-white/[0.08] w-full max-w-3xl grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="font-mono-tech text-xl sm:text-2xl font-semibold text-white tabular-nums">
              100%
            </div>
            <div className="text-[11px] sm:text-xs text-[#9CA3AA] uppercase tracking-wider mt-0.5">
              Cabine Climatizada
            </div>
          </div>
          <div>
            <div className="font-mono-tech text-xl sm:text-2xl font-semibold text-white tabular-nums">
              Digital
            </div>
            <div className="text-[11px] sm:text-xs text-[#9CA3AA] uppercase tracking-wider mt-0.5">
              Colorimetria Exata
            </div>
          </div>
          <div>
            <div className="font-mono-tech text-xl sm:text-2xl font-semibold text-white tabular-nums">
              Express
            </div>
            <div className="text-[11px] sm:text-xs text-[#9CA3AA] uppercase tracking-wider mt-0.5">
              Fast Repair em 24h
            </div>
          </div>
          <div>
            <div className="font-mono-tech text-xl sm:text-2xl font-semibold text-white tabular-nums">
              Premium
            </div>
            <div className="text-[11px] sm:text-xs text-[#9CA3AA] uppercase tracking-wider mt-0.5">
              Verniz Alto Sólido
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
