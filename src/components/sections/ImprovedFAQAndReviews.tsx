'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

const ImprovedFAQAndReviews = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const faqs = [
    {
      id: 'authenticity',
      question: '¿Cómo puedo estar seguro de que los perfumes son originales?',
      answer:
        'Trabajamos exclusivamente con distribuidores autorizados. Puedes consultar la autenticidad directamente con la marca.',
     
    },
    {
      id: 'products',
      question: '¿Cuál es la diferencia entre perfumes completos, testers y decants?',
      answer:
        'Los tres contienen la misma fragancia original. Perfumes completos vienen en caja original, testers sin caja a menor precio, y decants son porciones pequeñas perfectas para probar.',
     
    },
    {
       id: 'shipping',
  question: '¿Cuánto tiempo tarda la entrega y cuál es el costo?',
  answer:
    'El tiempo de entrega puede variar. Nos ubicamos en Santa Cruz, Guanacaste. Por lo general, el pedido tarda alrededor de 4 a 5 días en llegar y luego se coordina la entrega. En caso de requerir envío por correo, la entrega podría tardar un poco más.',
  
    },
    {
      id: 'payment',
      question: '¿Qué formas de pago aceptan?',
      answer:
    'Aceptamos efectivo, SINPE Móvil y transferencia bancaria. La información para la transferencia se facilita una vez que se llegue a un acuerdo de compra por WhatsApp.',
  
    },
    {
      id: 'advice',
      question: '¿Me pueden ayudar a elegir un perfume?',
      answer:
        'Por supuesto. Nuestro equipo especializado te asesora por WhatsApp considerando tus gustos, ocasiones de uso y presupuesto para encontrar tu fragancia perfecta.',
      
    },
    {
      id: 'availability',
      question: '¿Cómo sé si un perfume está disponible?',
      answer:
        'Nuestro inventario cambia constantemente. Consulta disponibilidad por WhatsApp antes de decidir tu compra para información en tiempo real.',
      
    },
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-25 to-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Encuentra respuestas rápidas a las consultas más comunes sobre nuestros productos y servicios.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-xl border border-gray-100 shadow-sm">
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-25 transition-colors rounded-xl"
                >
                  <div className="flex items-center space-x-4">
                    <span className="text-xs bg-navy-100 text-navy-600 px-2 py-1 rounded-full font-medium">
                    </span>
                    <span className="font-serif font-semibold text-navy-800">
                      {faq.question}
                    </span>
                  </div>
                  {openFAQ === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>

                {openFAQ === faq.id && (
                  <div className="px-6 pb-6">
                    <div className="pl-16">
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 bg-gradient-to-r from-navy-50 to-gold-50 rounded-xl p-6">
            <div className="text-center space-y-4">
              <MessageSquare className="h-8 w-8 text-navy-600 mx-auto" />
              <h4 className="font-serif font-bold text-navy-800">
                ¿No encontraste lo que buscabas?
              </h4>
              <p className="text-gray-600 text-sm">
                Contáctanos por WhatsApp y te ayudaremos con cualquier consulta específica.
              </p>
              <a
                href="https://wa.me/50672140221?text=Hola! Tengo una consulta sobre los perfumes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Preguntar por WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovedFAQAndReviews;