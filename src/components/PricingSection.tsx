import { motion } from "motion/react";
import { AnimatedButton } from "./AnimatedButton";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "PRESENCIA DIGITAL",
    tagline: "Tu presencia digital.",
    description:
      "Perfecto si estás empezando o necesitas renovar tu imagen. Creamos tu sitio web profesional o tienda online que puedes manejar tú mismo, sin depender de nadie más.",
    features: [
      "Sitio web profesional autogestionable",
      "Diseño UX/UI personalizado",
      "Responsive mobile-first",
      "SEO básico optimizado",
      "Hosting incluido (1 año)",
      "Capacitación de uso",
    ],
    color: "var(--neon-blue)",
    popular: false,
    buttonText: "Cotizar Web",
  },
  {
    name: "AUTOMATIZACIÓN",
    tagline: "Ahorra tiempo, crece más.",
    description:
      "Ya tienes una web, pero pasas demasiado tiempo haciendo tareas repetitivas. Automatizamos tus procesos para que tu negocio funcione solo mientras tú te enfocas en lo importante.",
    features: [
      "Todo del plan anterior incluido",
      "Flujos de automatización personalizados",
      "Integración con tus sistemas de gestión",
      "Notificaciones automáticas",
      "Sincronización de datos en tiempo real",
      "Notificaciones por múltiples canales",
      "Reportes automatizados",
      "Soporte prioritario",
    ],
    color: "var(--neon-yellow)",
    popular: true,
    buttonText: "Automatizar mi Negocio",
  },
  {
    name: "PARTNER INNOVATION",
    tagline: "Tu departamento tech.",
    description:
      "Cuando necesitas soluciones complejas que no existen en el mercado. Desarrollamos software a medida, implementamos IA y te asignamos un equipo tech dedicado que trabaja exclusivamente en tu proyecto.",
    features: [
      "Desarrollo de software a medida",
      "Implementación de IA (LLM/GPT)",
      "Arquitectura de datos escalable",
      "API personalizada REST/GraphQL",
      "Consultoría técnica continua",
      "Soporte 24/7 dedicado",
      "Mantenimiento incluido",
    ],
    color: "var(--neon-pink)",
    popular: false,
    buttonText: "Consultar Proyecto",
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="relative bg-black">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="min-h-screen flex flex-col justify-center py-16 md:py-8">
          {/* Section Title */}
          <motion.div
            className="mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-white uppercase tracking-tighter mb-6 md:mb-8 break-words"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                lineHeight: 1,
                fontSize: "clamp(2.5rem, 6vw, 6rem)",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              ELIGE TU <span style={{ color: "var(--neon-red)" }}>PLAN</span>
            </h2>
            <p
              className="text-base md:text-xl lg:text-2xl text-white/80 max-w-3xl break-words"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 100,
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              Elige el nivel que necesitas según dónde esté tu negocio
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12  mx-auto">
            {plans.map((plan, index) => {
              const isPopular = plan.popular;

              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  {/* Card */}
                  <div className="relative border-white/10 pb-8 h-full transition-all duration-300 hover:border-white/30">
                    {/* Content */}
                    <div className="space-y-6">
                      {/* Plan Name */}
                      <h3
                        className="text-xl md:text-2xl lg:text-3xl text-white uppercase break-words"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 600,
                          color: isPopular ? "var(--neon-red)" : "white",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {plan.name}
                      </h3>

                      {/* Tagline */}
                      <p
                        className="text-base md:text-lg text-white/60 break-words"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 100,
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {plan.tagline}
                      </p>

                      {/* Description */}
                      <p
                        className="text-sm md:text-base text-white/80 leading-relaxed break-words"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 100,
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {plan.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Botón General - Conocer Más */}
          <motion.div
            className="flex justify-center mt-16 md:mt-24"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Link to="/servicios">
              <AnimatedButton
                className="px-12 py-4"
                gradientId="pricing-main-btn"
                gradientColors={{
                  start: "var(--neon-red)",
                  middle: "var(--neon-red)",
                  end: "var(--neon-red)",
                }}
              >
                Conocer Más
              </AnimatedButton>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
