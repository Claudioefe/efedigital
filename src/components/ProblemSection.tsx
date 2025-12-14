import { motion } from "motion/react";
import { X, Check } from "lucide-react";

export function ProblemSection() {
  return (
    <section className="relative bg-black">
      {/* Content Sections */}
      <div className="relative z-10">
        {/* Section 1: Title */}
        <div className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-0">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-white uppercase tracking-tighter mb-6 md:mb-12 break-words"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  lineHeight: 1,
                  fontSize: "clamp(2rem, 10vw, 12rem)",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                <div style={{ color: "var(--neon-red)" }}>EL</div>
                <div style={{ color: "var(--neon-red)" }}>PROBLEMA</div>
              </h2>
              <p
                className="text-base md:text-xl lg:text-2xl text-white max-w-3xl break-words"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 100,
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                Tu web puede hacer mucho más que solo mostrar tu empresa.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Section 2: Antes y Después */}
        <div className="min-h-screen flex">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Antes - Fondo Rojo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="px-4 md:px-12 py-16 md:py-20 flex items-start md:items-center"
              style={{ backgroundColor: "#ff0000" }}
            >
              <div className="w-full max-w-2xl mx-auto space-y-6">
                <h3
                  className="mb-6 break-words"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    color: "#ffffff",
                    fontSize: "clamp(2rem, 5vw, 6rem)",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  ANTES
                </h3>
                <div className="space-y-1 mb-8">
                  {[
                    "Procesos manuales lentos y tediosos",
                    "Leads perdidos por falta de seguimiento",
                    "Datos desconectados entre plataformas",
                    "Tiempo perdido en tareas repetitivas",
                    "Errores humanos que cuestan dinero",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="border-b py-2 flex items-start gap-3 min-h-[2.5rem]"
                      style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <X
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "#ffffff" }}
                      />
                      <span
                        className="text-base flex-1 break-words"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 300,
                          color: "#ffffff",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Narrativa Antes */}
                <div
                  className="border p-6 space-y-4"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <div
                    className="text-xs uppercase tracking-[0.4em]"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 300,
                      color: "#ffffff",
                    }}
                  >
                    CONSECUENCIA
                  </div>
                  <p
                    className="text-base"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 300,
                      color: "rgba(255, 255, 255, 0.8)",
                    }}
                  >
                    Muchas agencias te entregan una web y luego te dejan solo.
                    Lo que pasa:
                  </p>
                  <p
                    className="text-lg leading-relaxed"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 300,
                      color: "#ffffff",
                    }}
                  >
                    Tenés una web bonita, pero seguís haciendo todo manual:
                    facturas, correos repetitivos y perdiendo clientes porque no
                    respondés a tiempo.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Después - Fondo Negro */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-black px-4 md:px-12 py-16 md:py-20 flex items-start md:items-center"
            >
              <div className="w-full max-w-2xl mx-auto space-y-6">
                <h3
                  className="mb-6 break-words"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    color: "#ffffff",
                    fontSize: "clamp(2rem, 5vw, 6rem)",
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  DESPUÉS
                </h3>
                <div className="space-y-1 mb-8">
                  {[
                    "Automatización 24/7 sin intervención",
                    "Captura y seguimiento automático de leads",
                    "Sincronización en tiempo real",
                    "Menos tiempo perdido en tareas repetitivas",
                    "Menos errores, mayor eficiencia",
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      className="border-b py-2 flex items-start gap-3 min-h-[2.5rem]"
                      style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Check
                        size={16}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: "#ffffff" }}
                      />
                      <span
                        className="text-base flex-1 break-words"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 300,
                          color: "#ffffff",
                          wordBreak: "break-word",
                          overflowWrap: "break-word",
                        }}
                      >
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Narrativa Después */}
                <div
                  className="border p-6 space-y-4"
                  style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
                >
                  <div
                    className="text-xs uppercase tracking-[0.4em]"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 300,
                      color: "#ffffff",
                    }}
                  >
                    SOLUCIÓN
                  </div>
                  <p
                    className="text-base break-words"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 300,
                      color: "rgba(255, 255, 255, 0.8)",
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                    }}
                  >
                    No solo hacemos tu web; te regalamos tiempo. Convertimos lo
                    que hacés manualmente todos los días en procesos automáticos
                    que funcionan solos.
                  </p>
                  <p
                    className="text-lg leading-relaxed break-words"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 300,
                      color: "#ffffff",
                    }}
                  >
                    Tu web empieza a trabajar para vos las 24 horas: capturá
                    clientes potenciales, organizá información y dejá que tu
                    equipo se enfoque en lo importante.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 4: Final Statement */}
        <div className="min-h-screen flex items-center justify-center px-4 md:px-6 py-20 md:py-20">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3
                className="text-white uppercase tracking-tighter mb-6 md:mb-12 break-words"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  lineHeight: 1,
                  fontSize: "clamp(1.75rem, 4.5vw, 4.5rem)",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                No hacemos solo{" "}
                <span className="text-white/30">«páginas web»</span>
              </h3>
              <p
                className="text-white uppercase tracking-tighter mb-12 md:mb-16 break-words"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  lineHeight: 1,
                  fontSize: "clamp(2rem, 6vw, 6rem)",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                }}
              >
                <span style={{ color: "var(--neon-red)" }}>
                  Construimos sistemas que trabajan por vos.
                </span>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
