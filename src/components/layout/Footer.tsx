import React from 'react';
import { Logo } from '../common/Logo';
import { INITIAL_COMPANY_CONFIG } from '../../data/initialData';
import { Phone, MapPin, Clock, Instagram, Shield, Lock } from 'lucide-react';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdmin }) => {
  return (
    <footer className="bg-[#050505] border-t border-white/[0.08] pt-20 pb-12 text-[#9CA3AA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Presentation */}
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="navbar" />
            <p className="text-xs sm:text-sm text-[#D7DADF] leading-relaxed max-w-sm font-light">
              Empresa de funilaria e pintura automotiva especializada em alta precisão, alinhamento milimétrico e acabamento em cabine pressurizada.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INITIAL_COMPANY_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white hover:text-[#E10600] hover:border-[#E10600]/40 transition-colors"
                aria-label="Instagram da Continent Fast Repair"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`tel:${INITIAL_COMPANY_CONFIG.phone}`}
                className="w-9 h-9 rounded-lg bg-[#0D0F12] border border-white/10 flex items-center justify-center text-white hover:text-[#E10600] hover:border-[#E10600]/40 transition-colors"
                aria-label="Ligar para a Continent Fast Repair"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono-tech uppercase tracking-widest text-white">
              Navegação
            </div>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Início</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-white transition-colors">Nossos Serviços</a>
              </li>
              <li>
                <a href="#processo" className="hover:text-white transition-colors">Processo em 6 Etapas</a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-white transition-colors">Antes e Depois</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Trabalhos Realizados</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">Sobre a Oficina</a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">Localização em Palhoça</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">Solicitar Orçamento</a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="lg:col-span-2 space-y-4">
            <div className="text-xs font-mono-tech uppercase tracking-widest text-white">
              Horários
            </div>
            <div className="space-y-2 text-xs font-mono-tech">
              <div>
                <span className="block text-white">Segunda a Sexta</span>
                <span className="text-[#9CA3AA]">{INITIAL_COMPANY_CONFIG.hours.weekdays}</span>
              </div>
              <div>
                <span className="block text-white">Sábado</span>
                <span className="text-[#9CA3AA]">{INITIAL_COMPANY_CONFIG.hours.saturday}</span>
              </div>
              <div>
                <span className="block text-white">Domingo</span>
                <span className="text-[#E10600]">{INITIAL_COMPANY_CONFIG.hours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <div className="text-xs font-mono-tech uppercase tracking-widest text-white">
              Endereço & Contato
            </div>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E10600] shrink-0 mt-0.5" />
                <span className="text-[#D7DADF]">
                  {INITIAL_COMPANY_CONFIG.address.street}, {INITIAL_COMPANY_CONFIG.address.complement}<br />
                  {INITIAL_COMPANY_CONFIG.address.neighborhood} — {INITIAL_COMPANY_CONFIG.address.city} / {INITIAL_COMPANY_CONFIG.address.state}<br />
                  CEP: {INITIAL_COMPANY_CONFIG.address.zipCode}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#E10600] shrink-0" />
                <a
                  href={`tel:${INITIAL_COMPANY_CONFIG.phone}`}
                  className="font-mono-tech text-white hover:text-[#E10600] transition-colors"
                >
                  {INITIAL_COMPANY_CONFIG.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#9CA3AA]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} CONTINENT FAST REPAIR.</span>
            <span>Todos os direitos reservados.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#privacidade" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <span className="text-white/20">·</span>
            <a href="#termos" className="hover:text-white transition-colors">
              Termos de Garantia
            </a>
            {onOpenAdmin && (
              <>
                <span className="text-white/20">·</span>
                <button
                  onClick={onOpenAdmin}
                  className="inline-flex items-center gap-1.5 text-neutral-500 hover:text-white transition-colors cursor-pointer"
                  title="Painel Interno de Gestão de Leads e Conteúdo"
                >
                  <Lock className="w-3 h-3" />
                  <span>Painel</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
