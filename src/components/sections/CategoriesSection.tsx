'use client';

import { Sparkles, Tag, Droplets, ArrowRight } from 'lucide-react';
import { perfumesByCategory } from '@/data/products';
import { generateCatalogWhatsAppLink } from '@/utils/whatsapp';

const CategoriesSection = () => {
  const categories = [
    {
      id: 'perfumes',
      title: 'Perfumes Completos',
      description: 'Fragancias originales en presentación completa con caja y todos los accesorios.',
      icon: Sparkles,
      count: perfumesByCategory.perfumes.length,
      color: 'from-gold-400 to-gold-600',
      bgColor: 'bg-gold-50',
      borderColor: 'border-gold-200',
      textColor: 'text-gold-700'
    },
    {
      id: 'testers',
      title: 'Testers',
      description: 'La misma fragancia original a precio más accesible. Perfectos para descubrir nuevos aromas.',
      icon: Tag,
      count: perfumesByCategory.testers.length,
      color: 'from-navy-400 to-navy-600',
      bgColor: 'bg-navy-50',
      borderColor: 'border-navy-200',
      textColor: 'text-navy-700'
    },
    {
      id: 'decants',
      title: 'Decants',
      description: 'Pequeñas porciones de fragancias premium para probar antes de la compra completa.',
      icon: Droplets,
      count: perfumesByCategory.decants.length || 0,
      color: 'from-gray-400 to-gray-600',
      bgColor: 'bg-gray-50',
      borderColor: 'border-gray-200',
      textColor: 'text-gray-700',
      comingSoon: true
    }
  ];

  const scrollToSection = (categoryId: string) => {
    if (categoryId === 'testers') {
      const testersSection = document.querySelector('#testers');
      testersSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Open WhatsApp for other categories
      window.open(generateCatalogWhatsAppLink(), '_blank');
    }
  };

  return (
    <section className="section-padding bg-gray-25">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
            Nuestras Categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explora nuestras diferentes opciones de fragancias. Cada categoría está diseñada 
            para diferentes necesidades y presupuestos.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <div
                key={category.id}
                className={`relative ${category.bgColor} ${category.borderColor} border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer ${category.comingSoon ? 'opacity-75' : ''}`}
                onClick={() => !category.comingSoon && scrollToSection(category.id)}
              >
                {/* Coming Soon Badge */}
                {category.comingSoon && (
                  <div className="absolute top-4 right-4 bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Próximamente
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-navy-800 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between">
                    <div className={`${category.textColor} font-semibold`}>
                      {category.comingSoon ? 'Disponible pronto' : `${category.count} productos`}
                    </div>
                    
                    {!category.comingSoon && (
                      <ArrowRight className={`h-5 w-5 ${category.textColor} group-hover:translate-x-1 transition-transform duration-300`} />
                    )}
                  </div>
                </div>

                {/* Hover effect */}
                {!category.comingSoon && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center space-y-6 bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <h3 className="text-2xl font-serif font-bold text-navy-800">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Contamos con más de 50 fragancias diferentes. Contáctanos por WhatsApp 
            y te ayudamos a encontrar el perfume perfecto para ti.
          </p>
          <a
            href={generateCatalogWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 btn-primary text-lg px-8 py-4"
          >
            <span>Ver catálogo completo</span>
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;