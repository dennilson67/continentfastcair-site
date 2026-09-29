import React, { useState, useRef } from 'react';
import { INITIAL_COMPANY_CONFIG } from '../../data/initialData';
import { Lead } from '../../types';
import { UploadCloud, CheckCircle2, MessageSquare, ArrowRight, X, AlertCircle } from 'lucide-react';

interface EstimateSectionProps {
  initialService?: string;
  onAddLead?: (lead: Lead) => void;
}

export const EstimateSection: React.FC<EstimateSectionProps> = ({
  initialService = '',
  onAddLead
}) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [vehicleYear, setVehicleYear] = useState('');
  const [serviceType, setServiceType] = useState(initialService || 'Funilaria e Pintura');
  const [message, setMessage] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; preview: string }[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update when prop changes
  React.useEffect(() => {
    if (initialService) {
      setServiceType(initialService);
    }
  }, [initialService]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newFiles: { name: string; preview: string }[] = [];
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUploadedFiles((prev) => [
            ...prev,
            { name: file.name, preview: event.target!.result as string }
          ]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim() || !vehicleModel.trim()) {
      setErrorMsg('Por favor, preencha seu nome, WhatsApp e modelo do veículo.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);

    const newLead: Lead = {
      id: `lead-${Date.now()}`,
      createdAt: new Date().toISOString(),
      name,
      whatsapp,
      vehicleModel,
      vehicleYear,
      serviceType,
      message,
      photos: uploadedFiles.map((f) => f.preview),
      status: 'NOVO'
    };

    // Save lead to local storage and state
    if (onAddLead) {
      onAddLead(newLead);
    }

    try {
      const stored = localStorage.getItem('continent_leads');
      const leads = stored ? JSON.parse(stored) : [];
      leads.unshift(newLead);
      localStorage.setItem('continent_leads', JSON.stringify(leads));
    } catch {
      // fallback
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const sendDirectViaWhatsApp = () => {
    const cleanPhone = whatsapp.replace(/\D/g, '');
    const text = `*NOVA SOLICITAÇÃO DE ORÇAMENTO - CONTINENT FAST REPAIR*\n\n` +
      `👤 *Cliente:* ${name || 'Não informado'}\n` +
      `📱 *WhatsApp:* ${whatsapp || 'Não informado'}\n` +
      `🚗 *Veículo:* ${vehicleModel || 'Não informado'} (${vehicleYear || 'Ano N/I'})\n` +
      `🛠️ *Serviço:* ${serviceType}\n` +
      `📝 *Descrição:* ${message || 'Solicito contato para avaliação'}\n` +
      `📸 *Fotos:* ${uploadedFiles.length > 0 ? `${uploadedFiles.length} foto(s) anexadas pelo cliente` : 'Sem fotos'}`;

    const url = `https://wa.me/${INITIAL_COMPANY_CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="relative py-28 sm:py-36 bg-[#08090B] border-t border-white/[0.06]">
      {/* Background glow */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#E10600]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Proposition and Fast WhatsApp channel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-mono-tech uppercase tracking-[0.25em] text-[#E10600]">
              09 — Orçamento & Avaliação
            </div>

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight">
              Seu carro merece <br />
              <span className="text-chrome">um novo acabamento.</span>
            </h2>

            <p className="text-base text-[#D9DDE2] leading-relaxed">
              Envie fotos dos detalhes danificados para que nossa equipe técnica faça uma pré-avaliação ágil de funilaria, pintura ou martelinho.
            </p>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-start gap-3 text-sm text-[#9CA3AA]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2 shrink-0" />
                <span>Avaliação dimensional sob luz técnica na oficina em Palhoça.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#9CA3AA]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2 shrink-0" />
                <span>Orçamento discriminado por etapas sem custos ocultos.</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-[#9CA3AA]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E10600] mt-2 shrink-0" />
                <span>Atendimento humanizado direto com os técnicos responsáveis.</span>
              </div>
            </div>

            {/* Direct WhatsApp Callout Card */}
            <div className="p-6 rounded-xl bg-[#0D0F12] border border-white/10 mt-8">
              <div className="flex items-center gap-2 text-xs font-mono-tech uppercase text-[#25D366] font-bold">
                <MessageSquare className="w-4 h-4" />
                Preferência por Agilidade?
              </div>
              <p className="text-xs text-[#9CA3AA] mt-1.5">
                Você pode enviar as fotos diretamente pelo WhatsApp comercial da Continent:
              </p>
              <a
                href={`https://wa.me/${INITIAL_COMPANY_CONFIG.whatsapp}?text=${encodeURIComponent(
                  INITIAL_COMPANY_CONFIG.whatsappDefaultMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-mono-tech text-white hover:text-[#25D366] transition-colors"
              >
                <span>Falar com o WhatsApp da Oficina</span>
                <span className="text-xs">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-[#0D0F12] border border-white/10 p-8 sm:p-10 rounded-2xl shadow-2xl relative">
            {submitted ? (
              <div className="text-center py-12 space-y-5">
                <div className="w-16 h-16 rounded-full bg-[#E10600]/20 border border-[#E10600] text-[#E10600] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(225,6,0,0.4)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white">
                  Solicitação Recebida com Sucesso!
                </h3>
                <p className="text-sm text-[#9CA3AA] max-w-md mx-auto">
                  Nossa equipe técnica em Palhoça analisará os detalhes de {vehicleModel || 'seu veículo'} e entrará em contato pelo WhatsApp <strong className="text-white">{whatsapp}</strong> em breve.
                </p>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={sendDirectViaWhatsApp}
                    className="px-6 py-3 rounded-md bg-[#25D366] hover:bg-[#20ba59] text-black text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Abrir Conversa no WhatsApp com estes dados</span>
                  </button>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setWhatsapp('');
                      setVehicleModel('');
                      setVehicleYear('');
                      setMessage('');
                      setUploadedFiles([]);
                    }}
                    className="px-5 py-3 rounded-md border border-white/15 text-white text-xs font-mono-tech uppercase hover:bg-white/5 transition-colors"
                  >
                    Enviar Outro Veículo
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="p-3.5 rounded bg-red-950/60 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#9CA3AA] mb-1.5">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Roberto Silva"
                      className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#E10600] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#9CA3AA] mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                      placeholder="(48) 99999-9999"
                      className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#E10600] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-mono-tech uppercase text-[#9CA3AA] mb-1.5">
                      Modelo do Veículo *
                    </label>
                    <input
                      type="text"
                      required
                      value={vehicleModel}
                      onChange={(e) => setVehicleModel(e.target.value)}
                      placeholder="Ex: BMW Série 3, Nivus, Hilux"
                      className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#E10600] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-tech uppercase text-[#9CA3AA] mb-1.5">
                      Ano de Fabricação
                    </label>
                    <input
                      type="text"
                      value={vehicleYear}
                      onChange={(e) => setVehicleYear(e.target.value)}
                      placeholder="Ex: 2024"
                      className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#E10600] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-[#9CA3AA] mb-1.5">
                    Serviço Desejado
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white text-sm focus:outline-none focus:border-[#E10600] transition-colors cursor-pointer"
                  >
                    <option value="Funilaria Estrutural">Funilaria Estrutural & Chaparia</option>
                    <option value="Pintura em Estufa">Pintura Automotiva em Estufa Climatizada</option>
                    <option value="Fast Repair Express">Fast Repair & Micro Pintura</option>
                    <option value="Recuperação de Para-choque">Recuperação de Para-choque</option>
                    <option value="Polimento Técnico">Polimento Técnico & Nivelamento</option>
                    <option value="Avaliação Geral">Avaliação Geral de Danos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-tech uppercase text-[#9CA3AA] mb-1.5">
                    Descrição do Dano / Detalhes
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte como aconteceu ou as peças que precisam de reparo..."
                    className="w-full px-4 py-3 rounded-lg bg-[#050505] border border-white/10 text-white placeholder-neutral-600 text-sm focus:outline-none focus:border-[#E10600] transition-colors resize-none"
                  />
                </div>

                {/* Multiple Photo Upload Box */}
                <div>
                  <label className="block text-xs font-mono-tech uppercase text-[#9CA3AA] mb-1.5">
                    Fotos do Veículo (Opcional, porém recomendado)
                  </label>
                  <p className="text-[11px] text-[#9CA3AA] mb-2">
                    Envie algumas imagens do veículo para facilitar uma primeira avaliação técnica.
                  </p>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-white/15 hover:border-[#E10600]/50 rounded-xl p-6 text-center cursor-pointer transition-colors bg-[#050505]/50 group"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                    <UploadCloud className="w-8 h-8 text-[#9CA3AA] group-hover:text-[#E10600] mx-auto mb-2 transition-colors" />
                    <div className="text-xs text-white font-medium">
                      Clique para selecionar ou arraste as fotos aqui
                    </div>
                    <div className="text-[10px] font-mono-tech text-[#9CA3AA] mt-1">
                      JPG, PNG até 10MB por foto
                    </div>
                  </div>

                  {/* Uploaded thumbnails */}
                  {uploadedFiles.length > 0 && (
                    <div className="flex flex-wrap gap-2.5 mt-3">
                      {uploadedFiles.map((file, i) => (
                        <div key={i} className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/20 group">
                          <img
                            src={file.preview}
                            alt={file.name}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeFile(i);
                            }}
                            className="absolute top-0.5 right-0.5 w-5 h-5 rounded-full bg-black/80 text-white flex items-center justify-center text-xs hover:bg-[#E10600] transition-colors"
                          >
                            <X className="w-3 h-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-lg bg-[#E10600] hover:bg-[#FF2018] text-white text-xs sm:text-sm font-bold uppercase tracking-widest transition-all duration-200 shadow-[0_0_25px_-3px_rgba(225,6,0,0.6)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Processando envio...' : 'Solicitar Orçamento'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
