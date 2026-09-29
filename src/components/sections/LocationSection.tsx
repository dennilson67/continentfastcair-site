import React, { useState } from 'react';
import { INITIAL_COMPANY_CONFIG } from '../../data/initialData';
import { MapPin, Phone, Clock, ExternalLink, Copy, Check, Navigation } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const fullAddress = `${INITIAL_COMPANY_CONFIG.address.street}, ${INITIAL_COMPANY_CONFIG.address.complement}, ${INITIAL_COMPANY_CONFIG.address.neighborhood}, ${INITIAL_COMPANY_CONFIG.address.city} – ${INITIAL_COMPANY_CONFIG.address.state}, CEP: ${INITIAL_COMPANY_CONFIG.address.zipCode}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="relative py-28 sm:py-36 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600] mb-3">
            08 — Base Operacional
          </div>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-white leading-tight">
            Encontre a <br />
            <span className="text-chrome">Continent.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AA]">
            Galpão estruturado no bairro Jardim Eldorado em Palhoça – SC. Fácil acesso pela BR-101 e via expressa da região continental.
          </p>
        </div>

        {/* Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Workshop Details & Hours */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-[#0D0F12] border border-white/10 p-8 sm:p-10 rounded-2xl">
            <div className="space-y-6">
              {/* Address block */}
              <div>
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#E10600] mb-2">
                  <MapPin className="w-4 h-4" />
                  Endereço Físico
                </div>
                <div className="font-display text-xl font-bold uppercase text-white">
                  Continent Fast Repair
                </div>
                <div className="text-sm text-[#D7DADF] mt-1 space-y-0.5 font-light">
                  <p>{INITIAL_COMPANY_CONFIG.address.street} · {INITIAL_COMPANY_CONFIG.address.complement}</p>
                  <p>{INITIAL_COMPANY_CONFIG.address.neighborhood}</p>
                  <p>{INITIAL_COMPANY_CONFIG.address.city} – {INITIAL_COMPANY_CONFIG.address.state} · CEP {INITIAL_COMPANY_CONFIG.address.zipCode}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white/5 hover:bg-white/10 text-xs font-mono-tech text-[#D7DADF] hover:text-white border border-white/10 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#25D366]" />
                        <span>Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Endereço</span>
                      </>
                    )}
                  </button>

                  <a
                    href={INITIAL_COMPANY_CONFIG.address.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#E10600] hover:bg-[#FF2018] text-xs font-mono-tech uppercase font-bold text-white transition-all shadow-[0_0_15px_-3px_rgba(225,6,0,0.5)]"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Abrir no Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Contact telephone */}
              <div className="pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#E10600] mb-2">
                  <Phone className="w-4 h-4" />
                  Contato Direto
                </div>
                <a
                  href={`tel:${INITIAL_COMPANY_CONFIG.phone}`}
                  className="font-mono-tech text-lg font-bold text-white hover:text-[#E10600] transition-colors"
                >
                  {INITIAL_COMPANY_CONFIG.phoneDisplay}
                </a>
                <div className="text-xs text-[#9CA3AA] mt-0.5">
                  Atendimento por ligação ou mensagem no WhatsApp
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-[#E10600] mb-3">
                  <Clock className="w-4 h-4" />
                  Horário de Funcionamento
                </div>
                <div className="space-y-2 text-xs font-mono-tech">
                  <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-[#9CA3AA]">Segunda a Sexta</span>
                    <span className="text-white font-medium">{INITIAL_COMPANY_CONFIG.hours.weekdays}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-[#9CA3AA]">Sábado</span>
                    <span className="text-white font-medium">{INITIAL_COMPANY_CONFIG.hours.saturday}</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-[#9CA3AA]">Domingo</span>
                    <span className="text-[#E10600] font-medium">{INITIAL_COMPANY_CONFIG.hours.sunday}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 text-xs font-mono-tech text-[#9CA3AA]">
              Estacionamento próprio para recepção e vistoria prévia.
            </div>
          </div>

          {/* Right Column: Interactive Embedded Map */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/10 relative min-h-[380px] bg-[#08090B]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3534.8879669528994!2d-48.669812!3d-27.645013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9527376e1a49f7b1%3A0x7d6a54f0a2fa5b7b!2sR.+Visconde+Silveira+-+Jardim+Eldorado%2C+Palho%C3%A7a+-+SC!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1) brightness(0.85)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Continent Fast Repair no Google Maps"
              className="w-full h-full min-h-[380px]"
            />

            {/* Overlay card on the map */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-4 rounded-xl bg-[#050505]/95 backdrop-blur-md border border-white/15 shadow-2xl">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E10600] animate-pulse"></span>
                <span className="text-xs font-mono-tech uppercase text-white font-bold">
                  Continent Fast Repair
                </span>
              </div>
              <p className="text-[11px] text-[#9CA3AA] mt-1">
                Jardim Eldorado, Palhoça – SC. A 3 minutos do trevo principal.
              </p>
              <a
                href={INITIAL_COMPANY_CONFIG.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-[#E10600] hover:text-[#FF2018] font-mono-tech uppercase"
              >
                <span>Como chegar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
