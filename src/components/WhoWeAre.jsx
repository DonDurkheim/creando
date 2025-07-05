import ManStanding from "./../assets/ManStanding.png"

const WhoWeAre = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-teal-800 to-teal-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        {/* Video CTA */}
        <div className="mb-8 lg:mb-12">
          <button className="flex items-center gap-3 text-white hover:text-orange-200 transition-colors duration-200 group">
            <div className="w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-200">
              <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <span className="text-lg font-medium">Mira nuestro video y conoce más sobre nosotros</span>
          </button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">¿Quienes Somos?</h2>
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
                En Creando negocios rd, nos especializamos en formalizar negocios con soluciones claras y efectivas.
                Nuestro equipo de expertos trabaja para ofrecerte el respaldo necesario en cada etapa, asegurando que tu
                proyecto crezca de manera sólida y segura. Con años de experiencia en la industria, estamos
                comprometidos a brindarte el soporte adecuado para que tu negocio alcance todo su potencial.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10">
                <img
                  src={ManStanding || "/placeholder.svg"}
                  alt="Professional businessman presenting"
                  className="w-80 md:w-96 lg:w-[420px] h-auto object-contain"
                />
              </div>

              {/* Decorative background elements */}
              <div className="absolute top-1/4 -right-4 w-32 h-32 bg-orange-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute bottom-1/4 -left-4 w-24 h-24 bg-teal-300 rounded-full opacity-30 blur-lg"></div>

              {/* Geometric accent */}
              <div className="absolute top-8 right-8 w-16 h-16 border-4 border-orange-400 rounded-lg rotate-12 opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
