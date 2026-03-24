'use client';

import { useState } from 'react';
import Header from '@/components/sections/Header';
import WelcomeSection from '@/components/sections/WelcomeSection';
import CustomerOrientationSection from '@/components/sections/CustomerOrientationSection';
import PerfumeKnowledgeSection from '@/components/sections/PerfumeKnowledgeSection';
import MasculineCatalogSection from '@/components/sections/MasculineCatalogSection';
import FeminineCatalogSection from '@/components/sections/FeminineCatalogSection';
import TestersCatalogSection from '@/components/sections/TestersCatalogSection';
import TrustSection from '@/components/sections/TrustSection';
import ImprovedFAQAndReviews from '@/components/sections/ImprovedFAQAndReviews';
import Footer from '@/components/sections/Footer';

export default function Home() {
  const [activeFilters, setActiveFilters] = useState<{ gender: string; type: string; budget: string } | null>(null);

  const handleFilterChange = (filters: { gender: string; type: string; budget: string }) => {
    setActiveFilters(filters);
    
    // Scroll to the appropriate catalog section
    const sectionId = filters.gender === 'hombre' ? 'catalogo-masculino' : 
                      filters.gender === 'mujer' ? 'catalogo-femenino' : 
                      filters.type === 'testers' ? 'catalogo-testers' : 'catalogo-masculino';
    
    const targetSection = document.querySelector(`#${sectionId}`);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <>
      <Header />
      <main>
        <WelcomeSection />
        <CustomerOrientationSection onFilterChange={handleFilterChange} />
        <PerfumeKnowledgeSection />
        <MasculineCatalogSection filters={activeFilters} />
        <FeminineCatalogSection filters={activeFilters} />
        <TestersCatalogSection filters={activeFilters} />
        <TrustSection />
        <ImprovedFAQAndReviews />
      </main>
      <Footer />
    </>
  );
}