import { motion } from "motion/react";
import { Search, Layers, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Entendemos cómo funciona tu negocio para encontrar dónde podemos ahorrarte tiempo y trabajo.",
    icon: Search,
  },
  {
    number: "02",
    title: "Arquitectura",
    description:
      "Planeamos cómo funcionará todo y cómo se verá, antes de empezar a construir.",
    icon: Layers,
  },
  {
    number: "03",
    title: "Desarrollo Ágil",
    description:
      "Desarrollamos de forma ágil, probamos con vos y vamos ajustando hasta que funcione perfectamente.",
    icon: Code,
  },
  {
    number: "04",
    title: "Despegue",
    description:
      "Te enseñamos a usar todo lo que construimos y te entregamos las llaves de tu sistema.",
    icon: Rocket,
  },
];

export function ProcessSection() {
  return (
    <section className="relative bg-black">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="min-h-screen flex flex-col justify-center py-16 md:py-8">
          <motion.div
            className="mb-12 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-white uppercase tracking-tighter mb-4 break-words"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
                lineHeight: 1,
                fontSize: "clamp(2rem, 6vw, 6rem)",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              <span style={{ color: "var(--neon-red)" }}>CÓMO</span> TRABAJAMOS
            </h2>
            <p
              className="text-sm md:text-base lg:text-lg text-white/80 max-w-3xl break-words"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 100,
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              Un proceso claro que te mantiene informado en cada paso y entrega
              resultados que podés medir.
            </p>
          </motion.div>

          {/* Timeline - Horizontal with Alternating Steps */}
          {/* Mobile View */}
          <div className="md:hidden w-full mx-auto px-0 mt-8">
            <div className="flex flex-col gap-12">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center text-center space-y-4"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                  >
                    <span
                      className="text-4xl text-white tabular-nums"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 900,
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="text-lg md:text-xl text-white break-words"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 600,
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-sm text-white/80 leading-relaxed break-words"
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 100,
                        wordBreak: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {step.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Desktop View - SVG Animation */}
          <div className="hidden md:flex w-full items-center justify-center py-8 px-4 mt-14">
            <svg
              viewBox="0 0 1100 450"
              className="h-auto w-full"
              style={{ minHeight: "450px", maxWidth: "1100px" }}
              preserveAspectRatio="xMidYMid meet"
            >
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isAbove = index % 2 === 0;
                const x = 120 + index * 260;
                const yBox = isAbove ? 50 : 250;
                const yCenter = 180; // Todos los iconos a la misma altura
                const delay = index * 0.3;

                return (
                  <g key={index}>
                    {/* Rectángulo del paso */}
                    <motion.rect
                      x={x - 90}
                      y={yBox}
                      width="180"
                      height="90"
                      rx="4"
                      fill="var(--neon-red)"
                      opacity="0.1"
                      stroke="var(--neon-red)"
                      strokeWidth="2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{
                        opacity: [0, 0.1, 0.15, 0.1],
                        scale: [0.9, 1, 1, 0.9],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.5 + delay,
                        repeatDelay: 0.5,
                      }}
                    />

                    {/* Número del paso - DENTRO DEL CUADRO ROJO, CENTRADO */}
                    <motion.text
                      x={x}
                      y={yBox + 55}
                      fill="var(--neon-red)"
                      fontSize="42"
                      fontWeight="900"
                      textAnchor="middle"
                      opacity="0.7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.8 + delay,
                      }}
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {step.number}
                    </motion.text>

                    {/* Icono en el centro - TODOS A LA MISMA ALTURA */}
                    <motion.foreignObject
                      x={x - 15}
                      y={yCenter - 15}
                      width="30"
                      height="30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.6 + delay,
                      }}
                    >
                      <div className="flex items-center justify-center w-full h-full">
                        <Icon
                          className="w-6 h-6 md:w-7 md:h-7"
                          style={{ color: "var(--neon-red)" }}
                          strokeWidth={1.5}
                        />
                      </div>
                    </motion.foreignObject>

                    {/* Línea vertical conectando al centro */}
                    <motion.line
                      x1={x}
                      y1={isAbove ? yBox + 90 : yBox}
                      x2={x}
                      y2={yCenter}
                      stroke="var(--neon-red)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: [0, 1, 1, 0],
                        opacity: [0, 0.3, 0.3, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: 0.7 + delay,
                        repeatDelay: 0.5,
                        ease: "easeInOut",
                      }}
                    />

                    {/* Título - NO PARPADEA */}
                    <motion.text
                      x={x}
                      y={isAbove ? yBox + 160 : yBox + 115}
                      fill="var(--neon-red)"
                      fontSize="16"
                      fontWeight="600"
                      textAnchor="middle"
                      opacity="0.7"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.9 + delay,
                      }}
                      className="text-sm md:text-base"
                      style={{
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {step.title}
                    </motion.text>

                    {/* Descripción - NO PARPADEA, MÁS ESPACIO */}
                    <motion.foreignObject
                      x={x - 110}
                      y={isAbove ? yBox + 175 : yBox + 130}
                      width="220"
                      height="80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0.7 }}
                      transition={{
                        duration: 0.5,
                        delay: 1 + delay,
                      }}
                    >
                      <div className="text-center">
                        <p
                          className="text-xs text-white/70 leading-relaxed"
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 100,
                          }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </motion.foreignObject>

                    {/* Flecha hacia el siguiente paso (excepto el último) */}
                    {index < steps.length - 1 && (
                      <motion.path
                        d={`M ${x + 90} ${yCenter} L ${x + 170} ${yCenter}`}
                        fill="none"
                        stroke="var(--neon-red)"
                        strokeWidth="2"
                        strokeDasharray="5,5"
                        opacity="0.3"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                          pathLength: [0, 1, 1, 0],
                          opacity: [0, 0.3, 0.3, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: 1.2 + delay,
                          repeatDelay: 0.5,
                          ease: "easeInOut",
                        }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
