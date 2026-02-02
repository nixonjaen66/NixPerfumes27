import { CheckCircle, DollarSign, Sparkles, MessageCircle } from 'lucide-react';
import { perfumesByCategory } from '@/data/products';
import ProductCard from '@/components/ui/ProductCard';
import { generateConsultationWhatsAppLink } from '@/utils/whatsapp';

const TestersSection = () => {
  const testerProducts = perfumesByCategory.testers.slice(0, 4); // Show first 4 testers

  const benefits = [
    {
      icon: Sparkles,
      title: 'Fragancia Idéntica',
      description: 'Los testers contienen exactamente el mismo perfume que la versión original. Cero diferencias en calidad.',
      color: 'text-gold-500'
    },
    {
      icon: DollarSign,
      title: 'Ahorro del 25-30%',
      description: 'Misma esencia, menor precio. Solo cambia la presentación, no la calidad del contenido.',
      color: 'text-green-500'
    },
    {
      icon: CheckCircle,
      title: 'Diferencias de Presentación',
      description: 'Sin caja decorativa y tapa más simple. El perfume por dentro es 100% idéntico al original.',
      color: 'text-navy-500'
    }
  ];

  return (
    <section id="testers" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
            Testers vs Originales
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ¿Cuál es la diferencia? Te explicamos todo para que tomes la mejor decisión. 
            Misma calidad, diferentes presentaciones.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            
            return (
              <div 
                key={index}
                className="text-center space-y-6 p-6 rounded-2xl bg-gray-25 border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className={`inline-flex p-4 rounded-full bg-white shadow-md ${benefit.color}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-serif font-bold text-navy-800">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="bg-gradient-to-br from-navy-50 to-gold-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-800 mb-4">
              Tester vs. Perfume Completo
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Conoce las diferencias para tomar la mejor decisión
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tester Column */}
            <div className="bg-white rounded-2xl p-8 border-2 border-navy-200 shadow-lg">
              <h4 className="text-xl font-serif font-bold text-navy-800 mb-6 text-center">
                🧪 Tester
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Misma fragancia original</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Hasta 30% más económico</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Sin caja (a veces sin tapa decorativa)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Perfecto para uso personal</span>
                </li>
              </ul>
            </div>

            {/* Complete Perfume Column */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gold-200 shadow-lg">
              <h4 className="text-xl font-serif font-bold text-navy-800 mb-6 text-center">
                💎 Perfume Completo
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Misma fragancia original</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Presentación completa con caja</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Tapa decorativa incluida</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-gold-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Ideal para regalar</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Featured Testers */}
        <div className="text-center space-y-6 mb-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-800">
            Testers Destacados
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestros testers más populares con hasta 30% de descuento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {testerProducts.map((product) => (
            <ProductCard key={product.id} product={product} className="animate-fade-in" />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 bg-navy-800 text-white rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-serif font-bold">
            ¿Necesitas ayuda para elegir?
          </h3>
          <p className="text-navy-100 max-w-2xl mx-auto text-lg">
            Nuestro equipo te ayuda a encontrar la fragancia perfecta según tus gustos, 
            ocasión y presupuesto. ¡Consulta sin compromiso!
          </p>
          <a
            href={generateConsultationWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white font-medium px-8 py-4 rounded-lg transition-colors duration-200 text-lg"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Recibir Asesoría Gratis</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestersSection;