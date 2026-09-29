import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { ImpactSection } from './components/sections/ImpactSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { BeforeAfterSection } from './components/sections/BeforeAfterSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { DifferentialsSection } from './components/sections/DifferentialsSection';
import { AboutSection } from './components/sections/AboutSection';
import { LocationSection } from './components/sections/LocationSection';
import { EstimateSection } from './components/sections/EstimateSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { AdminModal } from './components/admin/AdminModal';
import {
  INITIAL_COMPANY_CONFIG,
  INITIAL_LEADS,
  INITIAL_PORTFOLIO_ITEMS
} from './data/initialData';
import { CompanyConfig, Lead, PortfolioItem } from './types';

export default function App() {
  const [companyConfig, setCompanyConfig] = useState<CompanyConfig>(() => {
    try {
      const stored = localStorage.getItem('continent_company_config');
      return stored ? JSON.parse(stored) : INITIAL_COMPANY_CONFIG;
    } catch {
      return INITIAL_COMPANY_CONFIG;
    }
  });

  const [leads, setLeads] = useState<Lead[]>(() => {
    try {
      const stored = localStorage.getItem('continent_leads');
      return stored ? JSON.parse(stored) : INITIAL_LEADS;
    } catch {
      return INITIAL_LEADS;
    }
  });

  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>(() => {
    try {
      const stored = localStorage.getItem('continent_portfolio');
      return stored ? JSON.parse(stored) : INITIAL_PORTFOLIO_ITEMS;
    } catch {
      return INITIAL_PORTFOLIO_ITEMS;
    }
  });

  const [selectedServiceForEstimate, setSelectedServiceForEstimate] = useState<string>('');
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleOpenEstimate = () => {
    const el = document.getElementById('contato');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceForEstimate = (serviceTitle: string) => {
    setSelectedServiceForEstimate(serviceTitle);
    handleOpenEstimate();
  };

  const handleUpdateCompanyConfig = (newConfig: CompanyConfig) => {
    setCompanyConfig(newConfig);
    try {
      localStorage.setItem('continent_company_config', JSON.stringify(newConfig));
    } catch {
      // ignore
    }
  };

  const handleAddLead = (newLead: Lead) => {
    setLeads((prev) => [newLead, ...prev]);
  };

  const handleUpdateLeadStatus = (leadId: string, status: Lead['status']) => {
    setLeads((prev) => {
      const updated = prev.map((l) => (l.id === leadId ? { ...l, status } : l));
      try {
        localStorage.setItem('continent_leads', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleDeleteLead = (leadId: string) => {
    setLeads((prev) => {
      const updated = prev.filter((l) => l.id !== leadId);
      try {
        localStorage.setItem('continent_leads', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleAddPortfolioItem = (item: PortfolioItem) => {
    setPortfolioItems((prev) => {
      const updated = [item, ...prev];
      try {
        localStorage.setItem('continent_portfolio', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  const handleDeletePortfolioItem = (id: string) => {
    setPortfolioItems((prev) => {
      const updated = prev.filter((item) => item.id !== id);
      try {
        localStorage.setItem('continent_portfolio', JSON.stringify(updated));
      } catch {
        // ignore
      }
      return updated;
    });
  };

  // Keyboard shortcut Ctrl+Shift+A or Cmd+Shift+A to toggle Admin modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key.toLowerCase() === 'a') {
        e.preventDefault();
        setIsAdminOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F4F5F6] selection:bg-[#E10600] selection:text-white">
      {/* 3-Zone Top Navigation */}
      <Navbar
        onOpenEstimate={handleOpenEstimate}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Flow: Proposition -> Mechanism -> Proof -> Conversion */}
      <main>
        {/* 1. Cinematic Hero */}
        <Hero onOpenEstimate={handleOpenEstimate} />

        {/* 2. Philosophy & Core Pillars */}
        <ImpactSection />

        {/* 3. Services with Technical Specs */}
        <ServicesSection
          onSelectServiceForEstimate={handleSelectServiceForEstimate}
        />

        {/* 4. Production Process (6 Steps) */}
        <ProcessSection />

        {/* 5. Interactive Before & After Comparison Slider */}
        <BeforeAfterSection />

        {/* 6. Asymmetric Editorial Portfolio */}
        <PortfolioSection />

        {/* 7. Differentials & Quality Standards */}
        <DifferentialsSection />

        {/* 8. Institutional Storytelling */}
        <AboutSection />

        {/* 9. Physical Workshop Location & Hours in Palhoça */}
        <LocationSection />

        {/* 10. Quote Estimation & Multi-Photo Upload */}
        <EstimateSection
          initialService={selectedServiceForEstimate}
          onAddLead={handleAddLead}
        />

        {/* 11. Customer Experiences & Proof */}
        <TestimonialsSection />

        {/* 12. Final Cinematic CTA */}
        <FinalCtaSection onOpenEstimate={handleOpenEstimate} />
      </main>

      {/* Footer with Legal & Admin Trigger */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* Floating WhatsApp CTA */}
      <FloatingWhatsApp />

      {/* Administrative Management Modal */}
      <AdminModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        companyConfig={companyConfig}
        onUpdateCompanyConfig={handleUpdateCompanyConfig}
        leads={leads}
        onUpdateLeadStatus={handleUpdateLeadStatus}
        onDeleteLead={handleDeleteLead}
        portfolioItems={portfolioItems}
        onAddPortfolioItem={handleAddPortfolioItem}
        onDeletePortfolioItem={handleDeletePortfolioItem}
      />
    </div>
  );
}
