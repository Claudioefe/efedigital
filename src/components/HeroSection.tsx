import { motion } from "motion/react";
import { ChevronDown, Rocket } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";

export function HeroSection() {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] pt-32">
      
      {/* Binary Background Pattern - Color similar al fondo (#1a1a1a sobre #0a0a0a) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ctext x='5' y='25' font-family='monospace' font-size='16' fill='%231a1a1a'%3E01%3C/text%3E%3Ctext x='40' y='60' font-family='monospace' font-size='16' fill='%231a1a1a'%3E10%3C/text%3E%3Ctext x='70' y='90' font-family='monospace' font-size='16' fill='%231a1a1a'%3E11%3C/text%3E%3C/svg%3E\")",
          backgroundSize: "100px 100px"
        }}></div>
      </div>

      {/* Animated Grid - Ultra sutil */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full" style={{
          backgroundImage: "linear-gradient(rgba(0, 255, 136, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 136, 0.15) 1px, transparent 1px)",
          backgroundSize: "120px 120px"
        }}></div>
      </div>

      {/* Solo 2 Cuadrados Flotantes - Ultra sutiles */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 border"
        style={{ 
          borderColor: "rgba(0, 255, 136, 0.08)",
          boxShadow: "0 0 30px rgba(0, 255, 136, 0.05)"
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 border"
        style={{ 
          borderColor: "rgba(0, 128, 255, 0.08)",
          boxShadow: "0 0 30px rgba(0, 128, 255, 0.05)"
        }}
        animate={{
          y: [0, 20, 0],
          rotate: [0, -90, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge - Paleta unificada verde */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-green)]/30 bg-[var(--neon-green)]/5 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Rocket size={16} className="text-[var(--neon-green)]" />
            <span className="text-[var(--neon-green)] text-sm">Expertos en WordPress, WooCommerce & Automatizaciones</span>
          </motion.div>

          {/* Main Title - Colores reducidos: blanco + degradado sutil verde→azul */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-4">
              No solo construimos <span className="text-white/90">Webs</span>.
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-[var(--neon-green)] via-[rgba(0,200,150,1)] to-[var(--neon-blue)] bg-clip-text text-transparent">
                Construimos Sistemas que Trabajan Solos
              </span>.
            </h1>
          </div>

          {/* Subtitle - Degradado suave y unificado */}
          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Fusionamos <span className="text-white/80">Desarrollo Web</span>, <span className="text-white/80">Automatización</span> e <span className="text-white/80">Inteligencia Artificial</span> para que tu negocio venda, gestione y escale mientras tú te ocupas de lo importante.
          </motion.p>

          {/* CTA Buttons - Paleta unificada */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <AnimatedButton 
              gradientId="hero-btn-1"
              gradientColors={{
                start: "var(--neon-green)",
                middle: "rgba(0, 200, 150, 1)",
                end: "var(--neon-blue)"
              }}
            >
              Ver Soluciones
            </AnimatedButton>

            <AnimatedButton 
              gradientId="hero-btn-2"
              gradientColors={{
                start: "var(--neon-blue)",
                middle: "rgba(0, 200, 150, 1)",
                end: "var(--neon-green)"
              }}
            >
              Hablemos
            </AnimatedButton>
          </motion.div>

          {/* Tech Stack Icons - Más abajo para dar espacio */}
          <motion.div
            className="mt-20 flex flex-wrap gap-8 justify-center items-center opacity-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 1, duration: 1 }}
          >
            {["WordPress", "WooCommerce", "n8n", "AI/LLM", "React"].map((tech) => (
              <motion.div
                key={tech}
                className="text-white/50 text-sm tracking-widest"
                whileHover={{ scale: 1.1, color: "rgba(0, 255, 136, 0.8)" }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-white/30" size={32} />
        </motion.div>
      </div>

      {/* Scan Line Effect - Más sutil */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-full h-px bg-gradient-to-r from-transparent via-[var(--neon-green)] to-transparent opacity-20"
          animate={{
            y: ["-100%", "100vh"]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </section>
  );
}