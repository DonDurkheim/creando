import TeamMeeting from "./../assets/TeamMeeting.png"

export default function Contact() {
  return (
    <section id="contact" className="w-full min-h-screen bg-white">
      <div className="grid lg:grid-cols-5 min-h-screen">
        {/* Image Section */}
        <div className="lg:col-span-3 relative">
          <div className="absolute inset-0">
            <img
              src={TeamMeeting || "/placeholder.svg"}
              alt="Professional team meeting discussing user needs"
              className="w-full h-full object-cover"
            />
            {/* Overlay for better text readability on mobile */}
            <div className="absolute inset-0 bg-black bg-opacity-20 lg:hidden"></div>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="lg:col-span-2 bg-gradient-to-br from-teal-800 to-teal-900 flex items-center justify-center p-6 lg:p-8">
          <div className="w-full max-w-md space-y-8">
            {/* Header */}
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">Contáctanos</h2>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-sm flex-shrink-0 mt-1 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Ubicación</h3>
                  <p className="text-teal-200 text-base leading-relaxed">Villa Mella, Santo Domingo Norte</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-sm flex-shrink-0 mt-1 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Llamar</h3>
                  <a
                    href="tel:+18498852282"
                    className="text-teal-200 hover:text-white text-base transition-colors duration-200"
                  >
                    +1 (849) 885-2282
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-orange-500 rounded-sm flex-shrink-0 mt-1 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:creandonegociosrd@gmail.com"
                    className="text-teal-200 hover:text-white text-base transition-colors duration-200 break-all"
                  >
                    creandonegociosrd@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <p className="text-teal-200 text-center lg:text-left text-sm leading-relaxed">
                Estamos aquí para ayudarte a formalizar y hacer crecer tu negocio. ¡Contáctanos hoy mismo!
              </p>
            </div>

            {/* Business Hours */}
            <div className="border-t border-teal-700 pt-6">
              <h4 className="text-white font-semibold text-base mb-3">Horarios de Atención</h4>
              <div className="space-y-1 text-teal-200 text-sm">
                <p>Lunes - Viernes: 8:00 AM - 6:00 PM</p>
                <p>Sábados: 9:00 AM - 2:00 PM</p>
                <p>Domingos: Cerrado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
