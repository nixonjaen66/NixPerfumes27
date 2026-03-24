'use client';

import { Lightbulb, Palette, Clock, Heart, Star } from 'lucide-react';

const PerfumeKnowledgeSection = () => {
  const fragranceFamilies = [
    {
      name: 'Cítricos',
      description: 'Frescos y energizantes',
      notes: 'Limón, bergamota, naranja',
      personality: 'Dinámico, fresco, jovial',
      color: 'bg-yellow-100 text-yellow-700',
      icon: '🍋'
    },
    {
      name: 'Florales',
      description: 'Elegantes y románticos',
      notes: 'Rosa, jazmín, lirio',
      personality: 'Femenino, delicado, romántico',
      color: 'bg-pink-100 text-pink-700',
      icon: '🌸'
    },
    {
      name: 'Orientales',
      description: 'Sensuales y exóticos',
      notes: 'Vainilla, sándalo, incienso',
      personality: 'Misterioso, sensual, sofisticado',
      color: 'bg-orange-100 text-orange-700',
      icon: '🌶️'
    },
    {
      name: 'Amaderados',
      description: 'Cálidos y masculinos',
      notes: 'Cedro, patchouli, vetiver',
      personality: 'Masculino, natural, elegante',
      color: 'bg-amber-100 text-amber-700',
      icon: '🌳'
    }
  ];

  const perfumeTips = [
    {
      title: 'Notas de Salida',
      description: 'Primeras 15 minutos',
      detail: 'La primera impresión del perfume, generalmente cítrica o fresca',
      time: '0-15 min',
      intensity: 'Alta'
    },
    {
      title: 'Notas de Corazón',
      description: 'El alma del perfume',
      detail: 'Definen la personalidad principal de la fragancia',
      time: '15 min - 3 horas',
      intensity: 'Media'
    },
    {
      title: 'Notas de Fondo',
      description: 'La base persistente',
      detail: 'Lo que queda en la piel, crean la memoria olfativa',
      time: '3+ horas',
      intensity: 'Duradera'
    }
  ];

  const applicationTips = [
    'Aplica en puntos de pulso (muñecas, cuello, detrás de las orejas)',
    'No frotes después de aplicar, deja que se asiente naturalmente',
    'Aplica sobre piel hidratada para mayor duración',
    'Guarda tus perfumes alejados del calor y la luz directa',
    'Prueba el perfume en tu piel, no en papel, cada persona lo lleva diferente'
  ];

  return (
    <section id="conocimiento" className="section-padding bg-gradient-to-b from-gray-25 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-800">
            Todo sobre Perfumes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre el fascinante mundo de las fragancias. Aprende a elegir, aplicar y disfrutar 
            tus perfumes como un verdadero experto.
          </p>
        </div>

        <div className="space-y-20">
          {/* Fragrance Families */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-800 mb-4">
                Familias Olfativas
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Cada perfume pertenece a una familia olfativa que define su carácter y personalidad
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {fragranceFamilies.map((family, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="text-center space-y-4">
                    <div className="text-4xl mb-4">{family.icon}</div>
                    <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium ${family.color}`}>
                      {family.name}
                    </div>
                    <h4 className="font-serif font-bold text-navy-800">{family.description}</h4>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>
                        <span className="font-medium">Notas típicas:</span>
                        <p>{family.notes}</p>
                      </div>
                      <div>
                        <span className="font-medium">Personalidad:</span>
                        <p>{family.personality}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Perfume Structure */}
          <div className="bg-gradient-to-r from-navy-50 to-purple-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-800 mb-4">
                La Pirámide Olfativa
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Un perfume está construido en tres niveles que se desarrollan en el tiempo
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {perfumeTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg">
                  <div className="text-center space-y-4">
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-br from-navy-100 to-purple-100 text-navy-600">
                      <Clock className="h-6 w-6" />
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-serif font-bold text-navy-800 mb-2">
                        {tip.title}
                      </h4>
                      <p className="text-gold-600 font-medium text-sm mb-3">{tip.description}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{tip.detail}</p>
                    </div>

                    <div className="flex justify-between text-xs text-gray-500 pt-4 border-t border-gray-100">
                      <span>⏱️ {tip.time}</span>
                      <span>📈 {tip.intensity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Application Tips */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-800 mb-4">
                Consejos de Aplicación
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Saca el máximo provecho de tus fragancias con estos consejos de experto
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-12 border border-gray-100 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="space-y-4">
                    {applicationTips.map((tip, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-gold-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <Star className="h-3 w-3 text-gold-600" />
                        </div>
                        <p className="text-gray-700 leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gold-50 to-navy-50 rounded-xl p-8 text-center">
                  <div className="space-y-4">
                    <Lightbulb className="h-12 w-12 text-gold-500 mx-auto" />
                    <h4 className="text-lg font-serif font-bold text-navy-800">
                      ¿Sabías que...?
                    </h4>
                    <div className="space-y-3 text-sm text-gray-600">
                      <p>Un perfume puede oler diferente en cada persona debido al pH de la piel</p>
                      <p>Los perfumes duran más en pieles grasas que en pieles secas</p>
                      <p>El clima afecta cómo percibimos las fragancias</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Difference Between Products */}
          <div className="bg-gradient-to-r from-gold-50 to-amber-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-navy-800 mb-4">
                Perfumes vs Testers vs Decants
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Entiende las diferencias para tomar la mejor decisión
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-center space-y-4">
                  <div className="w-16 h-20 bg-gradient-to-b from-navy-600 to-navy-800 rounded-lg mx-auto shadow-lg relative">
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-gold-400 rounded-sm"></div>
                  </div>
                  <h4 className="text-lg font-serif font-bold text-navy-800">Perfumes Completos</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p><span className="font-medium">✨ Presentación:</span> Caja original con tapa decorativa</p>
                    <p><span className="font-medium">🎁 Ideal para:</span> Regalar o coleccionar</p>
                    <p><span className="font-medium">💰 Precio:</span> Completo</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-center space-y-4">
                  <div className="w-16 h-20 bg-gradient-to-b from-gold-500 to-gold-700 rounded-lg mx-auto shadow-lg"></div>
                  <h4 className="text-lg font-serif font-bold text-navy-800">Testers</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p><span className="font-medium">✨ Presentación:</span> Sin caja, tapa simple</p>
                    <p><span className="font-medium">🎁 Ideal para:</span> Uso personal</p>
                    <p><span className="font-medium">💰 Precio:</span> 20-30% menos</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-center space-y-4">
                  <div className="w-12 h-16 bg-gradient-to-b from-purple-500 to-purple-700 rounded-lg mx-auto shadow-lg"></div>
                  <h4 className="text-lg font-serif font-bold text-navy-800">Decants</h4>
                  <div className="text-sm text-gray-600 space-y-2">
                    <p><span className="font-medium">✨ Presentación:</span> Frasco pequeño (5-10ml)</p>
                    <p><span className="font-medium">🎁 Ideal para:</span> Probar fragancias</p>
                    <p><span className="font-medium">💰 Precio:</span> Muy accesible</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-white rounded-xl p-6 border-l-4 border-gold-400">
                <p className="text-gray-700">
                  <span className="font-semibold text-navy-800">Importante:</span> 
                  Todos contienen la misma fragancia original. La diferencia está solo en la presentación, 
                  no en la calidad del perfume.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfumeKnowledgeSection;