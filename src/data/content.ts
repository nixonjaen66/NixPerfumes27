import { Testimonial, FAQ } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'María González',
    location: 'San José',
    rating: 5,
    comment: 'Excelente calidad y servicio. Los testers son originales y llegaron súper rápido.',
    product: 'Chanel No. 5 (Tester)'
  },
  {
    id: '2',
    name: 'Carlos Ramírez',
    location: 'Cartago',
    rating: 5,
    comment: 'Muy recomendado. Precios justos y atención por WhatsApp muy profesional.',
    product: 'Dior Sauvage'
  },
  {
    id: '3',
    name: 'Ana Vargas',
    location: 'Heredia',
    rating: 5,
    comment: 'Me encanta la variedad de testers. Perfectos para probar fragancias nuevas sin gastar tanto.',
  }
];

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
    answer: 'Sí, realizamos envíos a todo el país. Los envíos en San José suelen llegar el mismo día o al día siguiente. Para otras provincias, el tiempo de entrega es de 2-3 días.',
    category: 'envios'
  },
  {
    id: '4',
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos transferencias bancarias, SINPE Móvil y pago contra entrega en San José. Para otras provincias, requerimos pago adelantado.',
    category: 'pagos'
  },
  {
    id: '5',
    question: '¿Puedo cambiar o devolver un producto?',
    answer: 'Aceptamos devoluciones únicamente si el producto llega dañado o defectuoso. Los perfumes no pueden devolverse por razones de higiene una vez abiertos.',
    category: 'general'
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
  whatsapp: '50612345678', // Cambia por tu número real
  email: 'info@nixperfumes27.com',
  social: {
    instagram: '@nixperfumes27',
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
      title: 'Envíos en Costa Rica',
      description: 'Entrega rápida y segura a todo el país'
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