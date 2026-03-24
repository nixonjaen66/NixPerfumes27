import { Testimonial, FAQ } from '@/types';

export const testimonials: Testimonial[] = [];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: '¿Los perfumes son 100% originales?',
    answer: 'Sí, todos nuestros perfumes son completamente originales. Trabajamos directamente con distribuidores autorizados y cada producto cuenta con su código de autenticidad.',
    category: 'productos'
  },
  {
    id: '2',
    question: '¿Qué diferencia hay entre un perfume completo y un tester?',
    answer: 'Los testers contienen exactamente la misma fragancia que el perfume completo. La única diferencia es que vienen sin caja y a veces sin tapa decorativa, por eso tienen un precio más accesible.',
    category: 'productos'
  },
  {
    id: '3',
    question: '¿Hacen envíos a toda Costa Rica?',
    answer: 'Sí, realizamos envíos a todo el país. Los tiempos de entrega varían según la ubicación: en San José generalmente 1-2 días hábiles, otras provincias 2-4 días hábiles.',
    category: 'envios'
  },
  {
    id: '4',
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias bancarias, SINPE Móvil y pago contra entrega en San José. Para otras provincias, requerimos pago adelantado.',
    category: 'pagos'
  },
  {
    id: '6',
    question: '¿Cómo sé si un perfume me va a gustar?',
    answer: 'Por eso ofrecemos testers a precios más accesibles. También puedes consultarnos por WhatsApp sobre las notas de cada fragancia para encontrar la perfecta para ti.',
    category: 'productos'
  }
];

export const brandInfo = {
  name: 'Nix Perfumes 27',
  tagline: 'Tu esencia, tu estilo',
  description: 'Fragancias originales con el lujo que mereces, a precios accesibles.',
  whatsapp: '50672140221',
  email: 'nixonjaen00@gmail.com',
  social: {
    instagram: 'nix27_perfumes',
    facebook: 'NixPerfumes27',
    tiktok: '@nixperfumes27'
  },
  benefits: [
    {
      icon: 'shield-check',
      title: '100% Originales',
      description: 'Garantía de autenticidad en cada producto'
    },
    {
      icon: 'truck',
      title: 'Entregas Confiables',
      description: 'Envíos seguros a toda Costa Rica'
    },
    {
      icon: 'message-circle',
      title: 'Atención Personalizada',
      description: 'Asesoría experta por WhatsApp'
    },
    {
      icon: 'credit-card',
      title: 'Pagos Seguros',
      description: 'Múltiples métodos de pago disponibles'
    }
  ]
};