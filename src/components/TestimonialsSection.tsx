import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Laura Pérez",
    role: "CEO, Tienda Artesanal",
    content: "Antes tenía que pasar los pedidos de la web a un Excel manualmente. El equipo no solo renovó la tienda, sino que ahora todo se hace solo. Me ahorran 10 horas a la semana.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
  },
  {
    name: "Roberto Silva",
    role: "Director, Consultoría Legal",
    content: "La automatización con n8n transformó completamente nuestro flujo de trabajo. Los leads se distribuyen automáticamente y reciben respuestas instantáneas. Cerramos 40% más casos.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop"
  },
  {
    name: "Carmen Vega",
    role: "Fundadora, E-commerce Moda",
    content: "Integraron mi tienda con mi sistema de facturación y WhatsApp. Cada venta genera factura automática y notifica al cliente. Es magia pura.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      const next = prev + newDirection;
      if (next < 0) return testimonials.length - 1;
      if (next >= testimonials.length) return 0;
      return next;
    });
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--neon-pink)] rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--neon-blue)] rounded-full filter blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl text-white mb-4">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-[var(--neon-green)] to-[var(--neon-pink)] bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Testimonios reales de clientes satisfechos con nuestro trabajo
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <div className="bg-[#1a1a1a] border border-white/10 rounded-lg p-8 md:p-12 h-full relative overflow-hidden group">
                  {/* Glitch Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                    boxShadow: "0 0 20px var(--neon-green), 0 0 40px var(--neon-green)"
                  }}></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          fill="var(--neon-green)"
                          stroke="var(--neon-green)"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-white/90 text-lg md:text-xl mb-8 flex-grow italic">
                      "{testimonials[currentIndex].content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[var(--neon-green)]">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-full h-full object-cover"
                        />
                        {/* Glitch overlay on image */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-r from-[var(--neon-pink)] to-[var(--neon-blue)] mix-blend-screen"></div>
                      </div>
                      <div>
                        <div className="text-white">{testimonials[currentIndex].name}</div>
                        <div className="text-white/50 text-sm">{testimonials[currentIndex].role}</div>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Quote Mark */}
                  <div className="absolute top-4 right-4 text-[var(--neon-green)] opacity-10 text-8xl leading-none">
                    "
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            {/* Previous Button */}
            <motion.button
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[var(--neon-green)] hover:text-[var(--neon-green)] transition-all duration-300"
              onClick={() => paginate(-1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft size={24} />
            </motion.button>

            {/* Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-[var(--neon-green)]' : 'w-2 bg-white/20'
                  }`}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                />
              ))}
            </div>

            {/* Next Button */}
            <motion.button
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[var(--neon-green)] hover:text-[var(--neon-green)] transition-all duration-300"
              onClick={() => paginate(1)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}