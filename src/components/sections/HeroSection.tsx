'use client';

import { MessageCircle, Sparkles } from 'lucide-react';
import { generateCatalogWhatsAppLink } from '@/utils/whatsapp';
import { brandInfo } from '@/data/content';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-25 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-gold-50 text-gold-700 px-4 py-2 rounded-full border border-gold-200">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Fragancias Originales</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-800 leading-tight">
                Fragancias originales.
                <span className="block text-gold-500">Lujo accesible.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Descubre perfumes auténticos de las mejores marcas mundiales. 
                Calidad premium, precios justos, y la comodidad de comprar por WhatsApp.
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                <span>100% Originales</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                <span>Envíos a toda Costa Rica</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                <span>Atención personalizada</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={generateCatalogWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Comprar por WhatsApp</span>
              </a>
              
              <button
                onClick={() => {
                  const catalogSection = document.querySelector('#catalogo');
                  catalogSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary text-lg px-8 py-4 hover:shadow-lg transition-all duration-300"
              >
                Ver Catálogo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">Marcas que trabajamos:</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-400">
                <span className="font-medium">Chanel</span>
                <span className="font-medium">Dior</span>
                <span className="font-medium">Tom Ford</span>
                <span className="font-medium">Versace</span>
                <span className="font-medium">YSL</span>
                <span className="font-medium">+25 más</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative max-w-lg mx-auto">
              {/* Main image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gold-50 to-navy-50 rounded-3xl border border-gray-200 flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-32 h-40 bg-gradient-to-b from-navy-600 to-navy-800 rounded-lg mx-auto shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gold-400 rounded-sm"></div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-serif text-lg font-semibold text-navy-800">Perfumes Premium</p>
                    <p className="text-sm text-gray-600">Originales • Testers • Decants</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gold-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-gold-500" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-navy-100 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                <span className="text-navy-700 font-serif font-bold text-sm">27</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;