import { motion } from "motion/react";
import { servicios } from "../../data/servicios";
import { Code, Zap, Cpu, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const iconMap = {
  code: Code,
  zap: Zap,
  cpu: Cpu,
};

export default function Servicios() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0a0a0a" }}>
      {/* Hero Banner */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--neon-red)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-[var(--neon-red)]/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 items-center">
            {/* Título - 70% */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="mb-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-[var(--neon-red)] text-sm md:text-base uppercase tracking-widest mb-4"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 300 }}
                >
                  Soluciones Digitales
                </motion.div>
                <h1
                  className="text-white uppercase tracking-tighter"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    lineHeight: 0.95,
                    fontSize: "clamp(2.5rem, 10vw, 9rem)",
                  }}
                >
                  Nuestros{" "}
                  <span style={{ color: "var(--neon-red)" }}>Servicios</span>
                </h1>
              </div>
            </motion.div>

            {/* Descripción - 30% */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="space-y-6">
                <p
                  className="text-white/80 text-base md:text-lg leading-relaxed"
                  style={{ fontFamily: "var(--font-heading)", fontWeight: 100 }}
                >
                  Impulsamos tu transformación digital con soluciones que
                  combinan diseño, tecnología e inteligencia artificial.
                </p>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--neon-red)]" />
                    <span>3 Servicios</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--neon-red)]" />
                    <span>100% Personalizado</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span
              className="text-white/40 text-xs uppercase tracking-wider"
              style={{ fontFamily: "var(--font-heading)", fontWeight: 300 }}
            >
              Explora
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-[var(--neon-red)] rounded-full" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Servicios Grid */}
      <section
        className="relative py-24 md:py-32"
        style={{ backgroundColor: "#0a0a0a" }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {servicios.map((servicio, index) => {
              const IconComponent =
                iconMap[servicio.icono as keyof typeof iconMap];

              return (
                <motion.div
                  key={servicio.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group flex"
                >
                  {/* Card */}
                  <div className="w-full bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-4 md:p-8 overflow-hidden transition-all duration-500 hover:border-[var(--neon-red)]/50 hover:shadow-2xl hover:shadow-[var(--neon-red)]/10">
                    {/* Efecto hover */}
                    <div className="inset-0 bg-gradient-to-br from-[var(--neon-red)]/0 to-[var(--neon-red)]/0 group-hover:from-[var(--neon-red)]/5 group-hover:to-transparent transition-all duration-500" />

                    {/* Contenido */}
                    <div className="z-10">
                      {/* Icono */}
                      <div className="mb-6">
                        <div className="w-16 h-16 rounded-xl bg-[var(--neon-red)]/10 border border-[var(--neon-red)]/20 flex items-center justify-center group-hover:bg-[var(--neon-red)]/20 group-hover:scale-110 transition-all duration-500">
                          <IconComponent
                            className="w-8 h-8"
                            style={{ color: "var(--neon-red)" }}
                          />
                        </div>
                      </div>

                      {/* Título */}
                      <h3
                        className="text-white uppercase tracking-tight mb-4 break-words"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 900,
                          fontSize: "clamp(1.5rem, 3vw, 2rem)",
                          lineHeight: 1.2,
                          wordBreak: "break-word",
                        }}
                      >
                        {servicio.titulo}{" "}
                        {servicio.tituloDestacado && (
                          <span style={{ color: "var(--neon-red)" }}>
                            {servicio.tituloDestacado}
                          </span>
                        )}
                      </h3>

                      {/* Descripción */}
                      <p
                        className="text-white/70 mb-6 leading-relaxed"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 300,
                          fontSize: "1rem",
                        }}
                      >
                        {servicio.descripcion}
                      </p>

                      {/* Características */}
                      <ul
                        className="space-y-3"
                        style={{ marginBottom: "100px" }}
                      >
                        {servicio.caracteristicas.map((caracteristica, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-white/60 text-sm"
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontWeight: 300,
                            }}
                          >
                            <span
                              className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: "var(--neon-red)" }}
                            />
                            <span>{caracteristica}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Botón */}
                      <Link
                        to={servicio.enlace}
                        className="absolute left-8 right-8 inline-flex items-center gap-2 px-6 py-3 bg-[var(--neon-red)]/10 border border-[var(--neon-red)]/30 rounded-lg text-white hover:bg-[var(--neon-red)]/20 hover:border-[var(--neon-red)] transition-all duration-300 group"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 700,
                          bottom: "20px",
                        }}
                      >
                        <span className="relative inline-block">
                          Más información
                          <span
                            className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                            style={{ backgroundColor: "var(--neon-red)" }}
                          />
                        </span>
                        <ArrowRight
                          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                          style={{ color: "var(--neon-red)" }}
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
