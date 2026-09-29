import React, { useState, useEffect } from 'react';
import { CompanyConfig, Lead, PortfolioItem } from '../../types';
import {
  X,
  Users,
  Briefcase,
  Settings,
  Plus,
  Trash2,
  ExternalLink,
  Save,
  CheckCircle2,
  Filter,
  Phone,
  Clock,
  MapPin,
  Calendar,
  MessageSquare
} from 'lucide-react';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  companyConfig: CompanyConfig;
  onUpdateCompanyConfig: (config: CompanyConfig) => void;
  leads: Lead[];
  onUpdateLeadStatus: (leadId: string, status: Lead['status']) => void;
  onDeleteLead: (leadId: string) => void;
  portfolioItems: PortfolioItem[];
  onAddPortfolioItem: (item: PortfolioItem) => void;
  onDeletePortfolioItem: (id: string) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  companyConfig,
  onUpdateCompanyConfig,
  leads,
  onUpdateLeadStatus,
  onDeleteLead,
  portfolioItems,
  onAddPortfolioItem,
  onDeletePortfolioItem
}) => {
  const [activeTab, setActiveTab] = useState<'leads' | 'portfolio' | 'config'>('leads');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('TODOS');
  const [configForm, setConfigForm] = useState<CompanyConfig>(companyConfig);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // New portfolio form
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Funilaria' | 'Pintura' | 'Fast Repair' | 'Restauração'>('Funilaria');
  const [newVehicle, setNewVehicle] = useState('');
  const [newYear, setNewYear] = useState('2026');
  const [newDesc, setNewDesc] = useState('');
  const [newSummary, setNewSummary] = useState('');

  useEffect(() => {
    setConfigForm(companyConfig);
  }, [companyConfig]);

  if (!isOpen) return null;

  const filteredLeads = leadStatusFilter === 'TODOS'
    ? leads
    : leads.filter((l) => l.status === leadStatusFilter);

  const handleConfigSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateCompanyConfig(configForm);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2500);
  };

  const handleCreatePortfolio = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newVehicle.trim()) return;

    const newItem: PortfolioItem = {
      id: `job-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      vehicle: newVehicle,
      year: newYear,
      image: '/src/assets/images/body_repair_craft_1790632912968.jpg',
      span: 'normal',
      description: newDesc || 'Reparação de alta precisão.',
      processSummary: newSummary || 'Avaliação dimensional · Execução técnica'
    };

    onAddPortfolioItem(newItem);
    setNewTitle('');
    setNewVehicle('');
    setNewDesc('');
    setNewSummary('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-5xl h-[88vh] bg-[#0A0C0E] border border-white/20 rounded-2xl flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0D0F12]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E10600] animate-pulse" />
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold uppercase text-white tracking-wide">
                Painel Administrativo da Continent
              </h3>
              <p className="text-[11px] font-mono-tech text-[#9CA3AA]">
                Gestão de Leads, Portfólio e Configurações · Palhoça / SC
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center px-6 border-b border-white/10 bg-[#08090B]">
          <button
            onClick={() => setActiveTab('leads')}
            className={`py-3.5 px-4 text-xs font-mono-tech uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'leads'
                ? 'border-[#E10600] text-white font-bold bg-white/[0.02]'
                : 'border-transparent text-[#9CA3AA] hover:text-white'
            }`}
          >
            <Users className="w-4 h-4 text-[#E10600]" />
            <span>Leads & Orçamentos ({leads.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('portfolio')}
            className={`py-3.5 px-4 text-xs font-mono-tech uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'portfolio'
                ? 'border-[#E10600] text-white font-bold bg-white/[0.02]'
                : 'border-transparent text-[#9CA3AA] hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4 text-[#E10600]" />
            <span>Trabalhos & Portfólio ({portfolioItems.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('config')}
            className={`py-3.5 px-4 text-xs font-mono-tech uppercase tracking-wider flex items-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'config'
                ? 'border-[#E10600] text-white font-bold bg-white/[0.02]'
                : 'border-transparent text-[#9CA3AA] hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4 text-[#E10600]" />
            <span>Configurações da Empresa</span>
          </button>
        </div>

        {/* Tab Body Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-[#08090B]">
          {/* TAB 1: LEADS */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              {/* Filter controls */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#9CA3AA]" />
                  <span className="text-xs font-mono-tech uppercase text-[#9CA3AA]">
                    Filtrar por Status:
                  </span>
                </div>
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
                  {['TODOS', 'NOVO', 'EM CONTATO', 'ORÇAMENTO', 'APROVADO', 'CONCLUÍDO', 'PERDIDO'].map(
                    (status) => (
                      <button
                        key={status}
                        onClick={() => setLeadStatusFilter(status)}
                        className={`px-2.5 py-1 rounded text-[11px] font-mono-tech uppercase tracking-wider transition-colors ${
                          leadStatusFilter === status
                            ? 'bg-[#E10600] text-white font-bold'
                            : 'bg-[#0D0F12] text-[#9CA3AA] hover:text-white border border-white/10'
                        }`}
                      >
                        {status}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Leads list */}
              {filteredLeads.length === 0 ? (
                <div className="text-center py-16 text-neutral-500 font-mono-tech text-xs">
                  Nenhum lead encontrado com o status selecionado.
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="bg-[#0D0F12] border border-white/10 rounded-xl p-5 hover:border-white/20 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/[0.06]">
                        <div className="flex items-center gap-3">
                          <span className="font-display text-base font-bold uppercase text-white">
                            {lead.name}
                          </span>
                          <span className="text-xs font-mono-tech text-[#E10600]">
                            {lead.vehicleModel} ({lead.vehicleYear || 'N/I'})
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-mono-tech text-[#9CA3AA]">
                            {new Date(lead.createdAt).toLocaleDateString('pt-BR')} {new Date(lead.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                          </span>
                          <button
                            onClick={() => onDeleteLead(lead.id)}
                            className="p-1 text-neutral-500 hover:text-red-400 rounded transition-colors"
                            title="Remover Lead"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-3 text-xs">
                        <div>
                          <div className="text-[#9CA3AA] font-mono-tech uppercase text-[10px]">
                            WhatsApp
                          </div>
                          <a
                            href={`https://wa.me/55${lead.whatsapp.replace(/\D/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#25D366] hover:underline flex items-center gap-1 font-mono-tech mt-0.5"
                          >
                            <MessageSquare className="w-3 h-3" />
                            <span>{lead.whatsapp}</span>
                          </a>
                        </div>

                        <div>
                          <div className="text-[#9CA3AA] font-mono-tech uppercase text-[10px]">
                            Serviço Desejado
                          </div>
                          <div className="text-white mt-0.5">{lead.serviceType}</div>
                        </div>

                        <div>
                          <div className="text-[#9CA3AA] font-mono-tech uppercase text-[10px]">
                            Status Atual
                          </div>
                          <select
                            value={lead.status}
                            onChange={(e) =>
                              onUpdateLeadStatus(lead.id, e.target.value as Lead['status'])
                            }
                            className="mt-0.5 px-2 py-1 rounded bg-[#050505] border border-white/20 text-xs text-white focus:border-[#E10600] font-mono-tech uppercase"
                          >
                            <option value="NOVO">NOVO</option>
                            <option value="EM CONTATO">EM CONTATO</option>
                            <option value="ORÇAMENTO">ORÇAMENTO</option>
                            <option value="APROVADO">APROVADO</option>
                            <option value="CONCLUÍDO">CONCLUÍDO</option>
                            <option value="PERDIDO">PERDIDO</option>
                          </select>
                        </div>
                      </div>

                      {lead.message && (
                        <div className="mt-3 pt-2 text-xs text-[#D9DDE2] bg-black/40 p-2.5 rounded border border-white/[0.04]">
                          <span className="text-[#9CA3AA] font-mono-tech uppercase text-[10px] block mb-0.5">
                            Mensagem do Cliente:
                          </span>
                          {lead.message}
                        </div>
                      )}

                      {lead.photos && lead.photos.length > 0 && (
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-[10px] font-mono-tech text-[#9CA3AA] uppercase">
                            Fotos Anexadas ({lead.photos.length}):
                          </span>
                          <div className="flex gap-2">
                            {lead.photos.map((p, idx) => (
                              <img
                                key={idx}
                                src={p}
                                alt="Foto do veículo avariado"
                                className="w-10 h-10 object-cover rounded border border-white/20"
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: PORTFÓLIO */}
          {activeTab === 'portfolio' && (
            <div className="space-y-8">
              {/* Form to add new project */}
              <div className="bg-[#0D0F12] border border-white/10 rounded-xl p-6">
                <h4 className="font-display text-sm font-bold uppercase text-white mb-4 flex items-center gap-2">
                  <Plus className="w-4 h-4 text-[#E10600]" />
                  <span>Cadastrar Novo Trabalho Realizado</span>
                </h4>

                <form onSubmit={handleCreatePortfolio} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                        Título do Projeto
                      </label>
                      <input
                        type="text"
                        required
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Ex: Pintura Completa Para-choque"
                        className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                        Categoria
                      </label>
                      <select
                        value={newCategory}
                        onChange={(e) =>
                          setNewCategory(
                            e.target.value as 'Funilaria' | 'Pintura' | 'Fast Repair' | 'Restauração'
                          )
                        }
                        className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                      >
                        <option value="Funilaria">Funilaria</option>
                        <option value="Pintura">Pintura em Estufa</option>
                        <option value="Fast Repair">Fast Repair</option>
                        <option value="Restauração">Restauração</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                        Veículo / Modelo
                      </label>
                      <input
                        type="text"
                        required
                        value={newVehicle}
                        onChange={(e) => setNewVehicle(e.target.value)}
                        placeholder="Ex: Porsche Macan GTS"
                        className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                        Ano
                      </label>
                      <input
                        type="text"
                        value={newYear}
                        onChange={(e) => setNewYear(e.target.value)}
                        className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                      Resumo do Procedimento
                    </label>
                    <input
                      type="text"
                      value={newSummary}
                      onChange={(e) => setNewSummary(e.target.value)}
                      placeholder="Ex: Alinhamento milimétrico · Verniz UHS · Polimento espelhado"
                      className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                    />
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded bg-[#E10600] hover:bg-[#FF2018] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Adicionar Trabalho ao Site</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Existing items list */}
              <div className="space-y-3">
                <div className="text-xs font-mono-tech uppercase text-[#9CA3AA]">
                  Trabalhos Atuais no Portfólio ({portfolioItems.length}):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {portfolioItems.map((item) => (
                    <div
                      key={item.id}
                      className="p-4 rounded-xl bg-[#0D0F12] border border-white/10 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 rounded object-cover border border-white/15"
                        />
                        <div>
                          <div className="text-xs font-bold text-white uppercase truncate max-w-[200px]">
                            {item.title}
                          </div>
                          <div className="text-[11px] font-mono-tech text-[#E10600]">
                            {item.vehicle} · {item.category}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onDeletePortfolioItem(item.id)}
                        className="p-2 text-neutral-500 hover:text-red-400 transition-colors"
                        title="Excluir trabalho"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CONFIGURAÇÕES */}
          {activeTab === 'config' && (
            <form onSubmit={handleConfigSave} className="space-y-6 max-w-3xl">
              {saveSuccess && (
                <div className="p-3.5 rounded bg-green-950/60 border border-green-500/50 text-green-200 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Configurações salvas e aplicadas com sucesso no site!</span>
                </div>
              )}

              <div className="bg-[#0D0F12] border border-white/10 rounded-xl p-6 space-y-4">
                <h4 className="font-display text-sm font-bold uppercase text-white mb-2">
                  Dados de Contato & WhatsApp
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                      Telefone de Exibição
                    </label>
                    <input
                      type="text"
                      value={configForm.phoneDisplay}
                      onChange={(e) =>
                        setConfigForm({ ...configForm, phoneDisplay: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                      WhatsApp (Número para Link)
                    </label>
                    <input
                      type="text"
                      value={configForm.whatsapp}
                      onChange={(e) =>
                        setConfigForm({ ...configForm, whatsapp: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                    Mensagem Padrão do WhatsApp
                  </label>
                  <textarea
                    rows={2}
                    value={configForm.whatsappDefaultMessage}
                    onChange={(e) =>
                      setConfigForm({
                        ...configForm,
                        whatsappDefaultMessage: e.target.value
                      })
                    }
                    className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white resize-none"
                  />
                </div>
              </div>

              <div className="bg-[#0D0F12] border border-white/10 rounded-xl p-6 space-y-4">
                <h4 className="font-display text-sm font-bold uppercase text-white mb-2">
                  Endereço & Horários de Funcionamento
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                      Rua & Galpão
                    </label>
                    <input
                      type="text"
                      value={configForm.address.street}
                      onChange={(e) =>
                        setConfigForm({
                          ...configForm,
                          address: { ...configForm.address, street: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                      Bairro, Cidade / UF
                    </label>
                    <input
                      type="text"
                      value={`${configForm.address.neighborhood} - ${configForm.address.city}/${configForm.address.state}`}
                      disabled
                      className="w-full px-3 py-2 rounded bg-[#050505] border border-white/10 text-xs text-neutral-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                      Segunda a Sexta
                    </label>
                    <input
                      type="text"
                      value={configForm.hours.weekdays}
                      onChange={(e) =>
                        setConfigForm({
                          ...configForm,
                          hours: { ...configForm.hours, weekdays: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                      Sábado
                    </label>
                    <input
                      type="text"
                      value={configForm.hours.saturday}
                      onChange={(e) =>
                        setConfigForm({
                          ...configForm,
                          hours: { ...configForm.hours, saturday: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono-tech uppercase text-[#9CA3AA] mb-1">
                      Domingo
                    </label>
                    <input
                      type="text"
                      value={configForm.hours.sunday}
                      onChange={(e) =>
                        setConfigForm({
                          ...configForm,
                          hours: { ...configForm.hours, sunday: e.target.value }
                        })
                      }
                      className="w-full px-3 py-2 rounded bg-[#050505] border border-white/15 text-xs text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="px-6 py-3 rounded bg-[#E10600] hover:bg-[#FF2018] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[0_0_20px_-3px_rgba(225,6,0,0.5)]"
                >
                  <Save className="w-4 h-4" />
                  <span>Salvar Alterações no Site</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
