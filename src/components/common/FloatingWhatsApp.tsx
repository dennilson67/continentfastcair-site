import React from 'react';
import { INITIAL_COMPANY_CONFIG } from '../../data/initialData';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${INITIAL_COMPANY_CONFIG.whatsapp}?text=${encodeURIComponent(
    INITIAL_COMPANY_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-5 sm:right-6 z-40">
      {/* Direct WhatsApp CTA Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center gap-2.5 p-3.5 sm:px-5 sm:py-3.5 rounded-full bg-[#25D366] hover:bg-[#22bf5b] text-black font-bold uppercase tracking-wider text-xs shadow-[0_4px_30px_rgba(37,211,102,0.45)] hover:shadow-[0_4px_35px_rgba(37,211,102,0.75)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white select-none"
        aria-label="Falar diretamente no WhatsApp da Continent Fast Repair"
      >
        <span className="relative z-10 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 fill-black" />
        </span>
        <span className="hidden sm:inline font-mono-tech font-bold text-[11px] tracking-wider pr-0.5">
          WhatsApp Oficina
        </span>

        {/* Subtle Pulse Radar Ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-25 animate-ping pointer-events-none" />
      </a>
    </div>
  );
};

