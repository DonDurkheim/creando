import HeroImg from "./../assets/HeroImg.png"

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Tu negocio, <span className="block">formalizado con éxito</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                Formalizamos tus ideas y proyectos para llevarlos al siguiente nivel. Confía en nosotros para hacer
                crecer tu negocio con seguridad y éxito.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Comenzar
              </button>
              
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Orange circular background */}
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] bg-gradient-to-br from-orange-400 to-orange-600 rounded-full shadow-2xl">
                {/* Image container */}
                <div className="absolute inset-4 rounded-full overflow-hidden bg-white shadow-inner">
                  <img src={HeroImg} className="w-full h-full object-cover" alt="Business professionals working together" />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-300 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-200 rounded-full opacity-40"></div>
              <div className="absolute top-1/2 -right-8 w-6 h-6 bg-orange-400 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
