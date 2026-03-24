'use client';

import { useState } from 'react';
import { MessageCircle, Filter, Search } from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { generateWhatsAppLink } from '@/utils/whatsapp';

interface MasculineCatalogSectionProps {
  filters?: { gender: string; type: string; budget: string } | null;
}

const MasculineCatalogSection = ({ filters }: MasculineCatalogSectionProps) => {
  const [priceFilter, setPriceFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const masculineProducts = products.filter(product => product.gender === 'hombre');

  const filterProductsByPrice = (products: typeof masculineProducts) => {
    // Si hay filtros externos, usar el presupuesto de ahí
    if (filters && filters.budget && filters.gender === 'hombre') {
      const budget = parseInt(filters.budget);
      return products.filter(product => product.price <= budget);
    }
    
    if (priceFilter === 'all') return products;
    
    const price = parseInt(priceFilter);
    return products.filter(product => product.price <= price);
  };

  const filterProductsBySearch = (products: typeof masculineProducts) => {
    if (!searchTerm) return products;
    
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filterByExternalFilters = (products: typeof masculineProducts) => {
    if (!filters) return products;
    
    // Solo mostrar si es la categoría correcta
    if (filters.gender !== 'hombre') return [];
    
    // Filtrar por tipo si es necesario
    if (filters.type && filters.type !== 'perfumes') return [];
    
    return products;
  };

  const filteredProducts = filterProductsByPrice(
    filterProductsBySearch(
      filterByExternalFilters(masculineProducts)
    )
  );

  const priceRanges = [
    { value: 'all', label: 'Todos los precios' },
    { value: '50000', label: 'Hasta ₡50,000' },
    { value: '75000', label: 'Hasta ₡75,000' },
    { value: '100000', label: 'Hasta ₡100,000' },
  ];

  return (
    <section id="catalogo-masculino" className="section-padding bg-gradient-to-b from-navy-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-navy-100 text-navy-700 px-4 py-2 rounded-full">
            <span className="text-2xl">👨</span>
            <span className="text-sm font-medium">Catálogo Masculino</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
            Fragancias para Hombre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestra colección de fragancias masculinas. Desde frescas y deportivas 
            hasta elegantes y sofisticadas.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Buscar por marca o nombre..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-100"
              />
            </div>
          </div>
          
          <div className="md:w-64">
            <select
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-100"
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
              No se encontraron productos
            </h3>
            <p className="text-gray-500 mb-8">
              Intenta ajustar los filtros o buscar con otros términos
            </p>
            <button
              onClick={() => {
                setPriceFilter('all');
                setSearchTerm('');
              }}
              className="btn-secondary px-6 py-3"
            >
              Limpiar filtros
            </button>
          </div>
        )}

        {/* Quick Contact */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-navy-600 to-navy-800 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-serif font-bold mb-4">
              ¿Necesitas ayuda para elegir?
            </h3>
            <p className="mb-6 text-navy-100">
              Nuestro equipo te puede recomendar la fragancia perfecta según tu estilo y ocasión
            </p>
            <a
              href="https://wa.me/50672140221?text=Hola! Me gustaría recibir asesoría para elegir una fragancia masculina"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Recibir Asesoría Personalizada</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasculineCatalogSection;