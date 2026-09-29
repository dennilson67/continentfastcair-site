import React, { useState, useEffect } from 'react';
import { Logo } from '../common/Logo';
import { Menu, X, Phone, ShieldCheck, ArrowRight, MessageSquare, MapPin } from 'lucide-react';
import { INITIAL_COMPANY_CONFIG } from '../../data/initialData';

interface NavbarProps {
  onOpenEstimate: () => void;
  onOpenAdmin?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Início', href: '#hero', num: '01' },
    { label: 'Serviços', href: '#servicos', num: '02' },
    { label: 'Processo', href: '#processo', num: '03' },
    { label: 'Resultados', href: '#resultados', num: '04' },
    { label: 'Sobre', href: '#sobre', num: '05' },
    { label: 'Localização', href: '#localizacao', num: '06' },
    { label: 'Contato', href: '#contato', num: '07' },
  ];

  const whatsappUrl = `https://wa.me/${INITIAL_COMPANY_CONFIG.whatsapp}?text=${encodeURIComponent(
    INITIAL_COMPANY_CONFIG.whatsappDefaultMessage
  )}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/[0.08] shadow-2xl py-3'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#hero"
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600]"
              aria-label="Continent Fast Repair - Início"
            >
              <Logo variant="navbar" />
            </a>

            {/* Zone 2: Desktop Nav Links */}
            <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#9CA3AA] hover:text-[#F4F5F6] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#E10600] hover:after:w-full after:transition-all after:duration-200 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Desktop quick call */}
              <a
                href="tel:+5548991678121"
                className="hidden lg:inline-flex items-center gap-2 text-xs font-mono-tech text-[#9CA3AA] hover:text-white transition-colors"
                title="Ligar para oficina"
              >
                <Phone className="w-3.5 h-3.5 text-[#E10600]" />
                <span>(48) 99167-8121</span>
              </a>

              {/* Desktop / Tablet CTA Button (HIDDEN on Mobile as requested) */}
              <button
                onClick={onOpenEstimate}
                className="hidden md:inline-flex relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-[#E10600] hover:bg-[#FF2018] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_-3px_rgba(225,6,0,0.5)] hover:shadow-[0_0_25px_-2px_rgba(225,6,0,0.8)] cursor-pointer whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  Solicitar Orçamento
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </button>

              {/* Mobile / Tablet Premium Menu Button in Top Right */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0D0F12] border border-white/15 text-[#F4F5F6] hover:border-[#E10600]/50 hover:bg-[#15181C] transition-all duration-200 active:scale-95 shadow-[0_2px_12px_rgba(0,0,0,0.6)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E10600] cursor-pointer"
                aria-label="Abrir menu de navegação"
                aria-expanded={mobileMenuOpen}
              >
                <span className="text-[11px] font-mono-tech uppercase font-bold tracking-widest text-[#D7DADF]">
                  Menu
                </span>
                <div className="w-6 h-6 rounded flex items-center justify-center bg-white/5 text-white">
                  <Menu className="w-4 h-4 text-[#E10600]" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Luxury Fullscreen Animated Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col">
          {/* Animated Background with Living Dark Red Gradient */}
          <div className="absolute inset-0 living-red-gradient" />

          {/* Animated Ambient Red Glow Radial Orbs */}
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#E10600]/25 rounded-full blur-[100px] glow-red-pulse pointer-events-none" />
          <div className="absolute bottom-10 left-0 w-72 h-72 bg-[#790000]/30 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-tech opacity-20 pointer-events-none" />

          {/* Foreground Menu Container */}
          <div className="relative z-10 flex flex-col h-full w-full max-w-full min-w-0 overflow-x-hidden overflow-y-auto px-4 sm:px-6 py-5 box-border">
            {/* Header: Brand & Close */}
            <div className="flex items-center justify-between gap-4 min-w-0 pb-4 border-b border-white/10">
              <div className="min-w-0 max-w-[75%] overflow-hidden">
  <Logo variant="navbar" />
</div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all duration-200 active:scale-95"
                aria-label="Fechar menu"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Micro Navigation Header */}
            <div className="flex items-center justify-between gap-3 min-w-0 pt-6 pb-2 text-[10px] font-mono-tech uppercase tracking-[0.2em] text-[#9CA3AA]">
              <span>Menu de Navegação</span>
              <span className="shrink-0 text-[#E10600] flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E10600] animate-pulse"></span>
                Palhoça / SC
              </span>
            </div>

            {/* Nav Links with Refined Typography and Numbers */}
            <nav className="flex flex-col py-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  classNamclassName="group flex w-full min-w-0 items-center justify-between gap-3 py-3 px-3 rounded-lg text-lg font-display uppercase font-bold text-white hover:text-white hover:bg-white/[0.06] border-b border-white/[0.04] transition-all duration-200 box-border"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="text-xs font-mono-tech text-[#E10600] opacity-80 group-hover:opacity-100">
                      {link.num}
                    </span>
                    <span className="min-w-0 truncate tracking-wide group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </div>
                  <span className="text-sm font-mono-tech text-[#9CA3AA] group-hover:text-[#E10600] transition-colors">
                    →
                  </span>
                </a>
              ))}
            </nav>

            {/* Prominent Primary CTA inside the Menu */}
            <div className="pt-6 pb-4 mt-auto">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full min-w-0 max-w-full box-border py-4 rounded-xl bg-gradient-to-r from-[#E10600] via-[#FF2018] to-[#E10600] text-white text-xs font-extrabold uppercase tracking-widest shadow-[0_0_30px_rgba(225,6,0,0.6)] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer border border-white/20"
              >
                <span>Solicitar Orçamento</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Direct WhatsApp Action Button inside Menu */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 w-full py-3.5 rounded-xl bg-[#25D366] text-black text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(37,211,102,0.3)] active:scale-98 transition-all"
              >
                <MessageSquare className="w-4 h-4 fill-black" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            {/* Footer Information inside Menu */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono-tech text-[#9CA3AA]">
              <a
                href="tel:+5548991678121"
                className="flex items-center gap-1.5 text-white hover:text-[#E10600] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#E10600]" />
                <span>(48) 99167-8121</span>
              </a>

              <div className="flex items-center gap-1 text-[11px] text-[#9CA3AA]">
                <MapPin className="w-3.5 h-3.5 text-[#E10600]" />
                <span>Jardim Eldorado</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
