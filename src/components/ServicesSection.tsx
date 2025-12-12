import { motion } from "motion/react";
import {
  Monitor,
  ShoppingCart,
  Zap,
  Brain,
  Plug,
  Settings,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Monitor,
    title: "Desarrollo Web & UX",
    description:
      "Sitios web rápidos y profesionales que convierten visitantes en clientes. Diseñados para que se vean bien en cualquier dispositivo.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Avanzado",
    description:
      "Tiendas online completas donde puedes vender tus productos. Gestiona inventarios, cobra de forma segura y administra todo desde un panel simple.",
  },
  {
    icon: Zap,
    title: "Automatización",
    description:
      "Automatizamos las tareas repetitivas de tu negocio. Tu web trabaja mientras duermes: captura leads, envía notificaciones y sincroniza información.",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Asistentes inteligentes que responden a tus clientes, analizan información y te ayudan a tomar mejores decisiones.",
  },
  {
    icon: Plug,
    title: "Integraciones API",
    description:
      "Conectamos tus herramientas favoritas para que trabajen juntas. Si tiene API disponible, lo hacemos funcionar.",
  },
  {
    icon: Settings,
    title: "Sistemas a Medida",
    description:
      "Desarrollamos software a medida cuando necesitas algo específico para tu negocio que no existe en el mercado.",
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="min-h-screen py-24 md:py-64 lg:py-80 bg-black relative overflow-hidden flex flex-col justify-center"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mx-auto">
          {/* Section Title */}
          <motion.div
            className="mb-16 md:mb-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white uppercase tracking-tighter mb-4 md:mb-12 break-words"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                lineHeight: 1,
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <span style={{ color: "var(--neon-red)" }}>Stack</span>
            </h2>
            <p
              className="text-base md:text-xl lg:text-2xl text-white/80 mb-12 md:mb-24 break-words"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 100,
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              Desde una web profesional hasta sistemas completos que automatizan
              tu negocio.
            </p>
          </motion.div>

          {/* Services Grid - Minimalist */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isHovered = hoveredIndex === index;

              return (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Minimalist Card */}
                  <div className="relative border-b border-white/10 pb-16 md:pb-20 h-full transition-all duration-300 hover:border-white/30">
                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon - Minimalist */}
                      <motion.div
                        className="mb-6"
                        animate={isHovered ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon
                          size={32}
                          className="text-white/60 group-hover:text-[var(--neon-red)] transition-colors duration-300"
                        />
                      </motion.div>

                      {/* Title */}
                      <h3
                        className="text-white text-xl md:text-2xl mb-4 group-hover:text-[var(--neon-red)] transition-colors duration-300 break-words"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 400,
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p
                        className="text-white/60 text-sm md:text-base leading-relaxed mb-8 break-words"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 100,
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
