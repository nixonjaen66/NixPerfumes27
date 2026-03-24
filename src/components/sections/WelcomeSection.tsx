'use client';

const WelcomeSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-navy-50 to-white overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23f3f4f6' fillOpacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container-custom section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 animate-slide-up">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-800 leading-tight">
                Bienvenido al
                <span className="block text-gold-500">Catálogo Nix27 Perfumes</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Tu guía completa para descubrir fragancias excepcionales. Explora, aprende y encuentra 
                el perfume perfecto que refleje tu personalidad única.
              </p>
            </div>

            {/* Knowledge Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <div className="text-gray-700">
                <div className="font-semibold text-sm">Guías de Fragancias</div>
                <div className="text-xs text-gray-500">Aprende sobre notas y familias olfativas</div>
              </div>

              <div className="text-gray-700">
                <div className="font-semibold text-sm">Asesoría Personalizada</div>
                <div className="text-xs text-gray-500">Te ayudamos a elegir tu fragancia ideal</div>
              </div>

              <div className="text-gray-700">
                <div className="font-semibold text-sm">Productos Auténticos</div>
                <div className="text-xs text-gray-500">100% originales verificados</div>
              </div>

              <div className="text-gray-700">
                <div className="font-semibold text-sm">Precios Justos</div>
                <div className="text-xs text-gray-500">Lujo accesible para todos</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">              
              <button
                onClick={() => {
                  const orientationSection = document.querySelector('#orientacion');
                  orientationSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Encontrar Mi Perfume
              </button>

              <button
                onClick={() => {
                  const knowledgeSection = document.querySelector('#conocimiento');
                  knowledgeSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-secondary text-lg px-8 py-4 hover:shadow-lg transition-all duration-300"
              >
                Aprende sobre Perfumes
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in">
            <div className="relative max-w-lg mx-auto">
              {/* Main image placeholder */}
              <div className="aspect-square bg-gradient-to-br from-gold-50 to-navy-50 rounded-3xl border border-gray-200 flex items-center justify-center shadow-2xl">
                <div className="text-center space-y-4">
                  <div className="w-32 h-40 bg-gradient-to-b from-navy-600 to-navy-800 rounded-lg mx-auto shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold-400/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-gold-400 rounded-sm"></div>
                  </div>
                  <p className="text-gray-500 font-medium">Catálogo Digital</p>
                  <p className="text-gray-400 text-sm">Nix27 Perfumes</p>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center shadow-lg animate-float">
                <div className="w-8 h-10 bg-gold-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;