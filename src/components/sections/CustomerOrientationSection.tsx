'use client';

import { useState } from 'react';
import { MessageCircle, Search, DollarSign, Filter } from 'lucide-react';
import { generateCatalogWhatsAppLink } from '@/utils/whatsapp';

interface CustomerOrientationSectionProps {
  onFilterChange?: (filters: { gender: string; type: string; budget: string }) => void;
}

const CustomerOrientationSection = ({ onFilterChange }: CustomerOrientationSectionProps) => {
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [budget, setBudget] = useState<string>('');
  const [showResults, setShowResults] = useState(false);

  const handleBudgetFilter = () => {
    if (budget && selectedGender && selectedType && onFilterChange) {
      onFilterChange({ gender: selectedGender, type: selectedType, budget });
      setShowResults(true);
    }
  };

  const resetFilters = () => {
    setSelectedGender('');
    setSelectedType('');
    setBudget('');
    setShowResults(false);
  };

  const getBudgetMessage = () => {
    const filters = [];
    if (selectedGender) filters.push(selectedGender === 'hombre' ? 'fragancias masculinas' : 'fragancias femeninas');
    if (selectedType) filters.push(selectedType);
    if (budget) filters.push(`presupuesto de ₡${parseInt(budget).toLocaleString()}`);
    
    return `Hola! Estoy buscando ${filters.join(', ')}. ¿Podrían mostrarme las opciones disponibles en mi presupuesto?`;
  };

  return (
    <section id="orientacion" className="section-padding bg-gradient-to-b from-white to-gray-25">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
            Encuentra Tu Fragancia Perfecta
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Responde estas preguntas para recibir recomendaciones personalizadas que se adapten a tu estilo y presupuesto.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Question Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Gender Selection */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className="text-center space-y-6">
                <div className="inline-flex p-3 rounded-full bg-purple-100 text-purple-600">
                  <Search className="h-6 w-6" />
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-800 mb-2">
                    ¿Para quién es?
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Selecciona la categoría que prefieres
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedGender('hombre')}
                    className={`w-full py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      selectedGender === 'hombre'
                        ? 'bg-navy-600 text-white border-navy-600 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-navy-300 hover:shadow-md'
                    }`}
                  >
                    Fragancias Masculinas
                  </button>
                  
                  <button
                    onClick={() => setSelectedGender('mujer')}
                    className={`w-full py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      selectedGender === 'mujer'
                        ? 'bg-navy-600 text-white border-navy-600 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-navy-300 hover:shadow-md'
                    }`}
                  >
                    Fragancias Femeninas
                  </button>
                </div>
              </div>
            </div>

            {/* Product Type Selection */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className="text-center space-y-6">
                <div className="inline-flex p-3 rounded-full bg-gold-100 text-gold-600">
                  <Filter className="h-6 w-6" />
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-800 mb-2">
                    ¿Qué prefieres?
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Elige el tipo de producto
                  </p>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setSelectedType('perfumes completos')}
                    className={`w-full py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      selectedType === 'perfumes completos'
                        ? 'bg-gold-500 text-white border-gold-500 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gold-300 hover:shadow-md'
                    }`}
                  >
                    Perfumes Completos
                  </button>
                  
                  <button
                    onClick={() => setSelectedType('testers')}
                    className={`w-full py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      selectedType === 'testers'
                        ? 'bg-gold-500 text-white border-gold-500 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gold-300 hover:shadow-md'
                    }`}
                  >
                    Testers
                  </button>

                  <button
                    onClick={() => setSelectedType('decants')}
                    className={`w-full py-3 px-4 rounded-lg border text-sm font-medium transition-all ${
                      selectedType === 'decants'
                        ? 'bg-gold-500 text-white border-gold-500 shadow-lg'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-gold-300 hover:shadow-md'
                    }`}
                  >
                    Decants
                  </button>
                </div>
              </div>
            </div>

            {/* Budget Selection */}
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg">
              <div className="text-center space-y-6">
                <div className="inline-flex p-3 rounded-full bg-green-100 text-green-600">
                  <DollarSign className="h-6 w-6" />
                </div>
                
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy-800 mb-2">
                    Tu Presupuesto
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    Indica cuánto quieres invertir
                  </p>
                </div>

                <div className="space-y-4">
                  <input
                    type="number"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    placeholder="Ej: 50000"
                    className="w-full py-3 px-4 rounded-lg border border-gray-200 text-center text-lg font-medium focus:outline-none focus:border-green-400 focus:ring-2 focus:ring-green-100"
                  />
                  
                  <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                    <button
                      onClick={() => setBudget('25000')}
                      className="py-2 px-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      ₡25,000
                    </button>
                    <button
                      onClick={() => setBudget('50000')}
                      className="py-2 px-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      ₡50,000
                    </button>
                    <button
                      onClick={() => setBudget('75000')}
                      className="py-2 px-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      ₡75,000
                    </button>
                    <button
                      onClick={() => setBudget('100000')}
                      className="py-2 px-3 rounded bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      ₡100,000
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-y-6">
            {selectedGender && selectedType && budget ? (
              <div className="space-y-4">
                <button
                  onClick={handleBudgetFilter}
                  className="inline-flex items-center justify-center space-x-3 btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Filter className="h-5 w-5" />
                  <span>Filtrar Productos</span>
                </button>
                
                <div className="text-sm text-gray-500">
                  Ver {selectedType} {selectedGender === 'hombre' ? 'masculinos' : 'femeninos'} 
                  hasta ₡{parseInt(budget).toLocaleString()}
                </div>
              </div>
            ) : (
              <div className="text-gray-500">
                <p className="mb-4">Completa las tres preguntas para recibir recomendaciones personalizadas</p>
                <div className="flex justify-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${selectedGender ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                  <div className={`w-3 h-3 rounded-full ${selectedType ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                  <div className={`w-3 h-3 rounded-full ${budget ? 'bg-green-400' : 'bg-gray-200'}`}></div>
                </div>
              </div>
            )}

            {(selectedGender || selectedType || budget) && (
              <button
                onClick={resetFilters}
                className="text-gray-400 hover:text-gray-600 text-sm underline transition-colors"
              >
                Limpiar filtros
              </button>
            )}
          </div>

          {/* Quick Access */}
          <div className="mt-16 bg-gradient-to-r from-navy-50 to-gold-50 rounded-2xl p-8">
            <div className="text-center space-y-4">
              <h4 className="text-lg font-serif font-bold text-navy-800">
                ¿Prefieres explorar por tu cuenta?
              </h4>
              <p className="text-gray-600">
                Visita nuestros catálogos organizados por categorías
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <button
                  onClick={() => {
                    const catalogSection = document.querySelector('#catalogo-masculino');
                    catalogSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Catálogo Masculino
                </button>
                <button
                  onClick={() => {
                    const catalogSection = document.querySelector('#catalogo-femenino');
                    catalogSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Catálogo Femenino
                </button>
                <button
                  onClick={() => {
                    const catalogSection = document.querySelector('#catalogo-testers');
                    catalogSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Testers
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerOrientationSection;