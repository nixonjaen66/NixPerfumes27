'use client';

import { products } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FemeninaPage = () => {
  const feminineProducts = products.filter(product => product.gender === 'mujer');

  return (
    <div className="min-h-screen bg-gray-25">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="flex items-center space-x-4 mb-8">
              <Link href="/" className="text-navy-600 hover:text-gold-500 transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </Link>
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-navy-800">
                Perfumería Femenina
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-4xl mb-12 leading-relaxed">
              Fragancias femeninas que realzan tu elegancia. Desde florales delicados hasta orientales seductores.
            </p>

            {/* Featured Badge */}
            <div className="inline-flex items-center space-x-2 bg-gold-50 text-gold-700 px-4 py-2 rounded-full border border-gold-200 mb-12">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Fragancias 100% Originales</span>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {feminineProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {feminineProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500 text-lg">
                  Próximamente agregaremos más productos para esta categoría.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FemeninaPage;