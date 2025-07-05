import BusinessMeeting from "./../assets/BusinessMeeting.png"
import LegalIcon from "./../assets/LegalIcon.png"
import SupportIcon from "./../assets/SupportIcon.png"
import HandshakeIcon from "./../assets/HandshakeIcon.png"

const AboutUs = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Circular image container */}
              <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden shadow-2xl">
                <img
                  src={BusinessMeeting || "/placeholder.svg"}
                  alt="Business professionals in meeting discussing growth strategies"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-orange-200 rounded-full opacity-40"></div>
              <div className="absolute top-1/4 -right-8 w-6 h-6 bg-green-300 rounded-full opacity-50"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <p className="text-orange-500 font-semibold text-sm uppercase tracking-wider">ABOUT US</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                La Forma Inteligente de Formalizar y Hacer Crecer Tu Negocio
              </h2>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <img
                    src={LegalIcon || "/placeholder.svg"}
                    alt="Legal compliance icon"
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Cumplimiento</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Legal Completo</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <img
                    src={SupportIcon || "/placeholder.svg"}
                    alt="24/7 support icon"
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Soporte</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Personalizado 24/7</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="text-center space-y-3">
                <div className="flex justify-center">
                  <img
                    src={HandshakeIcon || "/placeholder.svg"}
                    alt="Trust and partnership icon"
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">Confiado por</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Emprendedores en Todo el País</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Disfruta la tranquilidad de contar con asesoría experta y resultados comprobados — tu éxito es nuestro
              compromiso.
            </p>

            {/* CTA Button */}
            <div>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                Leer más
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
