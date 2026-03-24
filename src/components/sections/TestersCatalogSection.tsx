'use client';

import { useState } from 'react';
import { MessageCircle, Filter, Search, Info } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { generateWhatsAppLink } from '@/utils/whatsapp';

interface TestersCatalogSectionProps {
  filters?: { gender: string; type: string; budget: string } | null;
}

const TestersCatalogSection = ({ filters }: TestersCatalogSectionProps) => {
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [genderFilter, setGenderFilter] = useState<string>('all');

  const testersProducts = products.filter(product => product.category === 'tester');

  const filterProductsByPrice = (products: typeof testersProducts) => {
    // Si hay filtros externos, usar el presupuesto de ahí
    if (filters && filters.budget && filters.type === 'testers') {
      const budget = parseInt(filters.budget);
      return products.filter(product => product.price <= budget);
    }
    
    if (priceFilter === 'all') return products;
    
    const price = parseInt(priceFilter);
    return products.filter(product => product.price <= price);
  };

  const filterProductsBySearch = (products: typeof testersProducts) => {
    if (!searchTerm) return products;
    
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterProductsByGender = (products: typeof testersProducts) => {
    // Si hay filtros externos y especifica género
    if (filters && filters.gender && filters.type === 'testers') {
      return products.filter(product => product.gender === filters.gender);
    }
    
    if (genderFilter === 'all') return products;
    
    return products.filter(product => product.gender === genderFilter);
  };

  const filterByExternalFilters = (products: typeof testersProducts) => {
    if (!filters) return products;
    
    // Solo mostrar si es la categoría correcta
    if (filters.type !== 'testers') return [];
    
    return products;
  };

  const filteredProducts = filterProductsByPrice(
    filterProductsBySearch(
      filterProductsByGender(
        filterByExternalFilters(testersProducts)
      )
    )
  );

  const priceRanges = [
    { value: 'all', label: 'Todos los precios' },
    { value: '30000', label: 'Hasta ₡30,000' },
    { value: '50000', label: 'Hasta ₡50,000' },
    { value: '70000', label: 'Hasta ₡70,000' },
  ];

  const genderOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'hombre', label: 'Masculinos' },
    { value: 'mujer', label: 'Femeninos' },
  ];

  return (
    <section id="catalogo-testers" className="section-padding bg-gradient-to-b from-amber-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full">
            <span className="text-2xl">🧪</span>
            <span className="text-sm font-medium">Testers</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
            Testers - Misma Calidad, Mejor Precio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Disfruta de tus fragancias favoritas en formato tester. La misma fragancia original 
            sin caja decorativa, a precios más accesibles.
          </p>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 mb-12 border border-amber-200">
          <div className="flex items-start space-x-4">
            <div className="bg-amber-200 rounded-full p-2 flex-shrink-0">
              <Info className="h-6 w-6 text-amber-600" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-amber-800 mb-2">
                ¿Qué son los testers?
              </h4>
              <p className="text-amber-700 text-sm leading-relaxed">
                Los testers contienen exactamente la misma fragancia que los perfumes completos. 
                La única diferencia es que vienen sin caja original y a veces sin tapa decorativa, 
                lo que nos permite ofrecerte precios hasta 30% más económicos.
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-12 bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar por marca o nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
              />
            </div>
          </div>
          
          <div className="md:w-48">
            <select
              value={genderFilter}
              onChange={(e) => setGenderFilter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            >
              {genderOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="md:w-48">
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100"
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWhatsAppClick={() => {
                  window.open(generateWhatsAppLink(product), '_blank');
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Filter className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="text-xl font-serif font-bold text-gray-600 mb-4">
              No se encontraron testers
            </h3>
            <p className="text-gray-500 mb-8">
              Intenta ajustar los filtros o buscar con otros términos
            </p>
            <button
              onClick={() => {
                setPriceFilter('all');
                setSearchTerm('');
                setGenderFilter('all');
              }}
              className="btn-secondary px-6 py-3"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 border border-amber-100 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h4 className="font-serif font-bold text-navy-800 mb-2">Ahorro Garantizado</h4>
            <p className="text-gray-600 text-sm">
              Hasta 30% menos que el precio del perfume completo
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-amber-100 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h4 className="font-serif font-bold text-navy-800 mb-2">Misma Calidad</h4>
            <p className="text-gray-600 text-sm">
              Fragancia 100% original, solo cambia la presentación
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-amber-100 text-center">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-serif font-bold text-navy-800 mb-2">Uso Personal</h4>
            <p className="text-gray-600 text-sm">
              Perfect para uso diario sin comprometer tu presupuesto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestersCatalogSection;