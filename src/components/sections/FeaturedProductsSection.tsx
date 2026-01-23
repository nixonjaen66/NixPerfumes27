'use client';

import { featuredProducts } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { ArrowRight } from 'lucide-react';

const FeaturedProductsSection = () => {
  return (
    <section id="catalogo" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
            Productos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre nuestras fragancias más populares. Cada perfume es 100% original 
            y viene con garantía de autenticidad.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} className="animate-fade-in" />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            onClick={() => {
              const testersSection = document.querySelector('#testers');
              testersSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center space-x-2 btn-secondary text-lg px-8 py-4 hover:shadow-lg transition-all duration-300"
          >
            <span>Ver todos los productos</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProductsSection;