'use client';

import { useState } from 'react';
import { Star, ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import { testimonials, faqs } from '@/data/content';
import { generateCatalogWhatsAppLink } from '@/utils/whatsapp';

const TestimonialsAndFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const faqCategories = [
    { id: 'productos', name: 'Productos', icon: '🧴' },
    { id: 'envios', name: 'Envíos', icon: '📦' },
    { id: 'pagos', name: 'Pagos', icon: '💳' },
    { id: 'general', name: 'General', icon: '❓' }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string>('productos');
  const filteredFAQs = faqs.filter(faq => faq.category === selectedCategory);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Testimonials Section */}
        {/* Customer Reviews Invitation Section */}
        <div className="mb-20">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
              Comparte tu experiencia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ¿Ya probaste alguno de nuestros perfumes? Nos encantaría conocer tu opinión
            </p>
          </div>

          <div className="bg-gradient-to-br from-navy-50 to-gold-50 rounded-3xl p-8 md:p-12 border border-gray-200 text-center space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-bold text-navy-800">
                Tu opinión es importante para nosotros
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Ayúdanos a mejorar nuestro servicio contándonos sobre tu experiencia con nuestros perfumes.
              </p>
            </div>
            <a
              href={generateCatalogWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gold-500 hover:bg-gold-600 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Déjanos tu comentario</span>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Resolvemos las dudas más comunes sobre nuestros productos y servicios
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {faqCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full border transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-navy-800 text-white border-navy-800'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-navy-400'
                }`}
              >
                <span>{category.icon}</span>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredFAQs.map((faq) => (
              <div 
                key={faq.id}
                className="bg-gray-25 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="text-lg font-semibold text-navy-800 pr-4">
                    {faq.question}
                  </h3>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gold-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                
                {openFAQ === faq.id && (
                  <div className="px-8 pb-6 animate-fade-in">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center space-y-6 bg-gradient-to-br from-navy-50 to-gold-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-800">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              ¿Aún tienes dudas? Contáctanos para recibir asesoría personalizada.
            </p>
            <a
              href={generateCatalogWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-navy-600 hover:bg-navy-700 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Consultar ahora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndFAQSection;