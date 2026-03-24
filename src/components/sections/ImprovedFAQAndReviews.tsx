'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare, Send, Star, Bell } from 'lucide-react';

// Simulación de sistema de notificaciones (en un proyecto real usarías un servicio como Firebase)
const sendNotification = async (comment: { name: string; message: string; rating: number }) => {
  // Aquí conectarías con tu sistema de notificaciones
  console.log('Nueva reseña recibida:', comment);
  
  // Ejemplo de notificación por WhatsApp (usando tu número)
  const notification = `🔔 Nueva reseña en Nix27 Perfumes\n\n👤 Cliente: ${comment.name}\n⭐ Calificación: ${comment.rating}/5\n💬 Comentario: ${comment.message}`;
  
  // En producción, aquí harías una llamada a tu API para enviar la notificación
  return notification;
};

const ImprovedFAQAndReviews = () => {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    message: '',
    rating: 0,
    product: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // FAQs reorganizadas y menos repetitivas
  const faqs = [
    {
      id: 'authenticity',
      question: '¿Cómo puedo estar seguro de que los perfumes son originales?',
      answer: 'Trabajamos exclusivamente con distribuidores autorizados. Puedes consultar la autenticidad directamente con la marca.',
      category: 'Autenticidad'
    },
    {
      id: 'products',
      question: '¿Cuál es la diferencia entre perfumes completos, testers y decants?',
      answer: 'Los tres contienen la misma fragancia original. Perfumes completos vienen en caja original, testers sin caja a menor precio, y decants son porciones pequeñas perfectas para probar.',
      category: 'Productos'
    },
    {
      id: 'shipping',
      question: '¿Cuánto tiempo tarda la entrega y cuál es el costo?',
      answer: 'San José: 1-2 días hábiles (₡2,500). Otras provincias: 2-4 días hábiles (₡3,500). Envío gratis en compras mayores a ₡75,000.',
      category: 'Envíos'
    },
    {
      id: 'payment',
      question: '¿Qué formas de pago aceptan?',
      answer: 'SINPE Móvil, transferencia bancaria y pago contra entrega en San José. Para provincias requerimos pago adelantado por seguridad.',
      category: 'Pagos'
    },
    {
      id: 'advice',
      question: '¿Me pueden ayudar a elegir un perfume?',
      answer: 'Por supuesto. Nuestro equipo especializado te asesora por WhatsApp considerando tus gustos, ocasiones de uso y presupuesto para encontrar tu fragancia perfecta.',
      category: 'Asesoría'
    },
    {
      id: 'availability',
      question: '¿Cómo sé si un perfume está disponible?',
      answer: 'Nuestro inventario cambia constantemente. Consulta disponibilidad por WhatsApp antes de decidir tu compra para información en tiempo real.',
      category: 'Disponibilidad'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'María González',
      product: 'Chanel No. 5',
      rating: 5,
      comment: 'Excelente calidad y atención. El perfume llegó perfectamente empacado y es 100% original.',
      verified: true
    },
    {
      id: 2,
      name: 'Carlos Ramírez',
      product: 'Dior Sauvage',
      rating: 5,
      comment: 'Increíble servicio al cliente. Me ayudaron a elegir el perfume perfecto y el precio fue muy justo.',
      verified: true
    },
    {
      id: 3,
      name: 'Ana Sofía',
      product: 'Tom Ford Black Orchid',
      rating: 4,
      comment: 'Me encantó el tester que compré. Calidad original a un precio accesible. Definitivamente volveré a comprar.',
      verified: true
    }
  ];

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const handleStarClick = (rating: number) => {
    setReviewForm({ ...reviewForm, rating });
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name || !reviewForm.message || reviewForm.rating === 0) return;

    setIsSubmitting(true);
    
    try {
      // Enviar notificación
      await sendNotification(reviewForm);
      
      // Simular guardado (en un proyecto real usarías una base de datos)
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        setReviewForm({ name: '', message: '', rating: 0, product: '' });
      }, 1500);
    } catch (error) {
      console.error('Error sending notification:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-25 to-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* FAQ Section */}
          <div>
            <div className="text-center lg:text-left mb-12">
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
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-25 transition-colors rounded-xl"
                  >
                    <div className="flex items-center space-x-4">
                      <span className="text-xs bg-navy-100 text-navy-600 px-2 py-1 rounded-full font-medium">
                        {faq.category}
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

            {/* Contact for more questions */}
            <div className="mt-8 bg-gradient-to-r from-navy-50 to-gold-50 rounded-xl p-6">
              <div className="text-center space-y-4">
                <MessageSquare className="h-8 w-8 text-navy-600 mx-auto" />
                <h4 className="font-serif font-bold text-navy-800">¿No encontraste lo que buscabas?</h4>
                <p className="text-gray-600 text-sm">
                  Contáctanos por WhatsApp y te ayudaremos con cualquier consulta específica
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

          {/* Reviews Section */}
          <div>
            <div className="text-center lg:text-left mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800 mb-4">
                Reseñas de Clientes
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Conoce la experiencia de nuestros clientes y comparte la tuya.
              </p>
            </div>

            {/* Existing Reviews */}
            <div className="space-y-6 mb-12">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-navy-600 to-gold-500 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="font-semibold text-navy-800">{testimonial.name}</span>
                        {testimonial.verified && (
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                            Verificado
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < testimonial.rating 
                                  ? 'text-yellow-400 fill-current' 
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">• {testimonial.product}</span>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed">{testimonial.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Review Form */}
            <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-lg">
              <div className="flex items-center space-x-2 mb-6">
                <Bell className="h-5 w-5 text-gold-500" />
                <h4 className="font-serif font-bold text-navy-800">Déjanos tu reseña</h4>
                <span className="text-xs bg-gold-100 text-gold-600 px-2 py-1 rounded-full">
                  Te notificaremos
                </span>
              </div>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">✓</span>
                    </div>
                  </div>
                  <h4 className="font-semibold text-green-700">¡Gracias por tu reseña!</h4>
                  <p className="text-gray-600 text-sm">
                    Hemos recibido tu comentario y nos hemos notificado. Tu opinión es muy valiosa para nosotros.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-navy-600 hover:text-navy-800 text-sm underline"
                  >
                    Escribir otra reseña
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Tu nombre"
                      value={reviewForm.name}
                      onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-100"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Producto comprado (opcional)"
                      value={reviewForm.product}
                      onChange={(e) => setReviewForm({ ...reviewForm, product: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Calificación
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleStarClick(star)}
                          className="focus:outline-none"
                        >
                          <Star
                            className={`h-6 w-6 ${
                              star <= reviewForm.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300 hover:text-yellow-200'
                            } transition-colors`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <textarea
                    placeholder="Cuéntanos sobre tu experiencia con Nix27 Perfumes..."
                    value={reviewForm.message}
                    onChange={(e) => setReviewForm({ ...reviewForm, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-navy-400 focus:ring-2 focus:ring-navy-100"
                    required
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting || !reviewForm.name || !reviewForm.message || reviewForm.rating === 0}
                    className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Enviar Reseña</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImprovedFAQAndReviews;