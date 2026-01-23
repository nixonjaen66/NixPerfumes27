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
        <div className="mb-20">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              La satisfacción de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-gray-25 rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="h-4 w-4 text-gold-400 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 italic mb-6 leading-relaxed">
                  &quot;{testimonial.comment}&quot;
                </p>

                {/* Customer Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-navy-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                  {testimonial.product && (
                    <div className="text-sm text-gold-600 mt-1">
                      Compró: {testimonial.product}
                    </div>
                  )}
                </div>
              </div>
            ))}
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
              Nuestro equipo está disponible por WhatsApp para resolver todas tus dudas. 
              ¡No dudes en contactarnos!
            </p>
            <a
              href={generateCatalogWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Contactar por WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsAndFAQSection;