'use client';

import { perfumesByCategory } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import Header from '@/components/sections/Header';
import Footer from '@/components/sections/Footer';
import { ArrowLeft, Sparkles, DollarSign, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const TestersPage = () => {
  const testerProducts = perfumesByCategory.testers;

  const benefits = [
    {
      icon: Sparkles,
      title: 'Misma Fragancia',
      description: '100% idéntico al original',
    },
    {
      icon: DollarSign,
      title: 'Precio Accesible',
      description: 'Ahorro del 25-30%',
    },
    {
      icon: CheckCircle,
      title: 'Sin Caja Decorativa',
      description: 'Presentación más simple',
    }
  ];

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
                Catálogo de Testers
              </h1>
            </div>
            
            <p className="text-xl text-gray-600 max-w-4xl mb-12 leading-relaxed">
              Descubre nuestros testers: la misma fragancia original con la mejor relación calidad-precio.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="text-center p-6 bg-gray-25 rounded-xl">
                    <IconComponent className={`h-8 w-8 mx-auto mb-3 text-gold-500`} />
                    <h3 className="font-semibold text-navy-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {testerProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TestersPage;