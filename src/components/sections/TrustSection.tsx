import { ShieldCheck, Truck, MessageCircle, CreditCard } from 'lucide-react';
import { brandInfo } from '@/data/content';

const TrustSection = () => {
  return (
    <section className="section-padding bg-gray-25">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
            ¿Por qué elegir Nix Perfumes 27?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos comprometemos con la calidad, autenticidad y tu satisfacción. 
            Tu confianza es nuestra prioridad.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brandInfo.benefits.map((benefit, index) => {
            let IconComponent;
            
            switch (benefit.icon) {
              case 'shield-check':
                IconComponent = ShieldCheck;
                break;
              case 'truck':
                IconComponent = Truck;
                break;
              case 'message-circle':
                IconComponent = MessageCircle;
                break;
              case 'credit-card':
                IconComponent = CreditCard;
                break;
              default:
                IconComponent = ShieldCheck;
            }

            return (
              <div 
                key={index}
                className="text-center space-y-6 p-6 bg-white rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-navy-100 to-navy-200 text-navy-600 group-hover:from-gold-100 group-hover:to-gold-200 group-hover:text-gold-600 transition-all duration-300">
                  <IconComponent className="h-8 w-8" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-serif font-bold text-navy-800">
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

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="text-center space-y-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-800">
              Garantía de Calidad
            </h3>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-3xl md:text-4xl font-bold text-gold-500">100%</div>
                <div className="text-gray-700">
                  <div className="font-semibold">Productos Originales</div>
                  <div className="text-sm text-gray-500">Garantizamos autenticidad</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-3xl md:text-4xl font-bold text-navy-600">🚚</div>
                <div className="text-gray-700">
                  <div className="font-semibold">Envío Seguro</div>
                  <div className="text-sm text-gray-500">A toda Costa Rica</div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-3xl md:text-4xl font-bold text-green-500">5⭐</div>
                <div className="text-gray-700">
                  <div className="font-semibold">Atención Premium</div>
                  <div className="text-sm text-gray-500">Asesoría personalizada</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm text-gray-500 mb-4">Trabajamos con distribuidores autorizados:</p>
              <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span>Importadores oficiales</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-gold-400 rounded-full"></div>
                  <span>Productos inspeccionados</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;