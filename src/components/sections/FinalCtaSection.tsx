import React from 'react';
import { ArrowUpRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { INITIAL_COMPANY_CONFIG } from '../../data/initialData';

interface FinalCtaSectionProps {
  onOpenEstimate: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenEstimate }) => {
  const whatsappUrl = `https://wa.me/${INITIAL_COMPANY_CONFIG.whatsapp}?text=${encodeURIComponent(
    INITIAL_COMPANY_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative py-32 sm:py-44 bg-[#050505] overflow-hidden">
      {/* Background Cinematic Automotive Visual */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/paint_booth_process_1790632898682.jpg"
          alt="Processo técnico de acabamento automotivo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/60" />
        <div className="absolute inset-0 red-reflection-beam opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600] mb-6 border-b border-[#E10600]/30 pb-1.5">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Palhoça · Atendimento Consultivo</span>
        </div>

        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight text-white leading-[1.05] max-w-3xl">
          Seu carro.{' '}
          <span className="block text-chrome">
            Nossa precisão.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-[#D9DDE2] max-w-xl font-normal leading-relaxed">
          Fale com a nossa equipe técnica e solicite uma avaliação presencial ou via fotos no WhatsApp.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto">
          <button
            onClick={onOpenEstimate}
            className="w-full sm:w-auto px-8 sm:px-10 py-4 rounded-md bg-[#E10600] hover:bg-[#FF2018] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 shadow-[0_0_35px_-5px_rgba(225,6,0,0.7)] flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>Solicitar Orçamento</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 sm:px-9 py-4 rounded-md bg-[#0D0F12]/90 hover:bg-[#121417] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider border border-white/15 hover:border-white/30 transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-md"
          >
            <MessageSquare className="w-4 h-4 text-[#25D366]" />
            <span>Abrir WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
