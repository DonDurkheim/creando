import React, { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import carlosMartinez from '../assets/carlos-martinez.png';
import mariaLopez from '../assets/maria-lopez.jpg';
import backgroundImage from '../assets/office-meeting.png';

// --- Testimonial Data ---
const testimonialsData = [
  {
    id: 1,
    name: "Carlos Martínez",
    title: "Emprendedor",
    quote: "Gracias a Creaids de negocios.cl, pude formalizar mi empresa sin complicaciones. Su equipo me guio en cada paso y hoy mi negocio crece con seguridad y confianza.",
    image: carlosMartinez,
  },
  {
    id: 2,
    name: "María López",
    title: "Diseñadora Gráfica",
    quote: "La atención al cliente fue excepcional y el resultado superó mis expectativas. ¡Totalmente recomendados para cualquier proyecto creativo!",
    image: mariaLopez,
  },
];

// --- Testimonials Component ---
const Testimonials = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Carousel auto-advance
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Calculate next testimonial for preview
  const nextTestimonial = testimonialsData[(currentTestimonialIndex + 1) % testimonialsData.length];

  const currentTestimonial = testimonialsData[currentTestimonialIndex];

  return (
    <section className="w-full py-16 px-4 bg-gradient-to-br from-white to-gray-100 flex flex-col items-center">
      {/* Title and Subheading */}
      <div className="mb-25 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Testimonios de Clientes</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Descubre cómo hemos ayudado a emprendedores y profesionales a formalizar y hacer crecer sus negocios con éxito y confianza.</p>
      </div>
      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Testimonial Card */}
        <div className="relative bg-white rounded-2xl shadow-xl p-8 sm:p-10 lg:p-12 w-full md:w-1/2 flex flex-col items-center text-center overflow-visible">
          {/* Decorative Quote Icon */}
          <FaQuoteLeft className="absolute -top-8 left-1/2 -translate-x-1/2 text-orange-200 text-5xl opacity-70 z-0" />
          {/* Avatar */}
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-orange-400 bg-white flex justify-center items-center overflow-hidden -mt-20 md:-mt-24 shadow-lg z-10">
            <img
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              className="w-full h-full object-cover rounded-full"
              loading="lazy"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-6 z-10">
            {currentTestimonial.name}
          </h3>
          <p className="text-sm sm:text-base text-orange-500 mb-4 z-10">
            {currentTestimonial.title}
          </p>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8 z-10">
            "{currentTestimonial.quote}"
          </p>
          {/* Carousel Dots */}
          <div className="flex justify-center gap-3 mt-2 z-10">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full border-2 border-orange-400 transition-all duration-300 focus:outline-none ${index === currentTestimonialIndex ? 'bg-orange-400' : 'bg-transparent'}`}
                onClick={() => setCurrentTestimonialIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          {/* Next Testimonial Preview (Desktop only) */}
          <div className="hidden md:flex absolute right-[-110px] top-1/2 -translate-y-1/2 w-28 h-40 bg-white/80 border border-orange-100 rounded-xl shadow-md flex-col items-center justify-center p-3 z-20 cursor-pointer hover:scale-105 transition" onClick={() => setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonialsData.length)}>
            <img src={nextTestimonial.image} alt={nextTestimonial.name} className="w-12 h-12 rounded-full object-cover mb-2 border-2 border-orange-200" />
            <span className="text-xs font-semibold text-gray-700 mb-1">{nextTestimonial.name}</span>
            <span className="text-xs text-gray-400">Siguiente</span>
          </div>
        </div>
        {/* Background Image Panel with Gradient Overlay and Logo Strip */}
        <div
          className="hidden md:block md:w-1/2 h-80 md:h-[400px] lg:h-[480px] bg-cover bg-center rounded-2xl shadow-xl relative overflow-hidden"
          style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.9)), url(${backgroundImage})` }}
        >
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-100/60 to-transparent pointer-events-none" />
          {/* Example: Add a logo strip or call-to-action here if you want */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;