import { motion } from "motion/react";
import { useState } from "react";
import { Mail, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    servicio: "",
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const servicios = [
    "Desarrollo Web",
    "E-commerce",
    "Automatizaciones",
    "Desarrollo a Medida",
    "Rediseño Web",
    "Consultoría",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío (aquí iría la llamada a tu backend o servicio de email)
    setTimeout(() => {
      console.log("Form data:", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ nombre: "", email: "", servicio: "", mensaje: "" });

      // Reset status después de 3 segundos
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black py-20 md:py-32 px-4"
      style={{
        fontFamily: "var(--font-heading)",
      }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--neon-red)]/30 bg-[var(--neon-red)]/5 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles size={16} className="text-[var(--neon-red)]" />
              <span
                className="text-[var(--neon-red)] text-sm"
                style={{ fontWeight: 100 }}
              >
                Empecemos tu proyecto
              </span>
            </motion.div>

            <h2
              className="text-white mb-6"
              style={{
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                fontWeight: 900,
                lineHeight: 0.9,
              }}
            >
              Hablemos de tu{" "}
              <span style={{ color: "var(--neon-red)" }}>proyecto</span>
            </h2>

            <p
              className="text-white/60 text-lg md:text-xl mb-8 leading-relaxed"
              style={{ fontWeight: 100 }}
            >
              Contanos qué necesitas y te armamos una propuesta personalizada.
              Sin compromisos, sin letra chica.
            </p>

            <div className="space-y-6">
              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Mail size={20} style={{ color: "var(--neon-red)" }} />
                <div>
                  <h3
                    className="text-white mb-1"
                    style={{ fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    Email
                  </h3>
                  <p className="text-white/60" style={{ fontWeight: 100 }}>
                    hola@efedigital.com.ar
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <MessageSquare size={20} style={{ color: "var(--neon-red)" }} />
                <div>
                  <h3
                    className="text-white mb-1"
                    style={{ fontWeight: 600, fontSize: "1.1rem" }}
                  >
                    WhatsApp
                  </h3>
                  <p className="text-white/60" style={{ fontWeight: 100 }}>
                    +54 3764279444
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-white mb-2 text-sm"
                  style={{ fontWeight: 600 }}
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--neon-red)] transition-colors"
                  style={{ fontWeight: 100 }}
                  placeholder="Juan Pérez"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-white mb-2 text-sm"
                  style={{ fontWeight: 600 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--neon-red)] transition-colors"
                  style={{ fontWeight: 100 }}
                  placeholder="juan@ejemplo.com"
                />
              </div>

              {/* Servicio */}
              <div>
                <label
                  htmlFor="servicio"
                  className="block text-white mb-2 text-sm"
                  style={{ fontWeight: 600 }}
                >
                  ¿Qué servicio te interesa?
                </label>
                <select
                  id="servicio"
                  name="servicio"
                  value={formData.servicio}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--neon-red)] transition-colors appearance-none cursor-pointer"
                  style={{ fontWeight: 100 }}
                >
                  <option value="" disabled>
                    Seleccioná un servicio
                  </option>
                  {servicios.map((servicio) => (
                    <option
                      key={servicio}
                      value={servicio}
                      className="bg-black text-white"
                    >
                      {servicio}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-white mb-2 text-sm"
                  style={{ fontWeight: 600 }}
                >
                  Contanos sobre tu proyecto
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-[var(--neon-red)] transition-colors resize-none"
                  style={{ fontWeight: 100 }}
                  placeholder="Describí brevemente qué necesitas..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--neon-red)]/10 border border-[var(--neon-red)]/30 rounded-lg text-white hover:bg-[var(--neon-red)]/20 hover:border-[var(--neon-red)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                }}
              >
                <span className="relative inline-block">
                  {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "var(--neon-red)" }}
                  />
                </span>
                {!isSubmitting && (
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                    style={{ color: "var(--neon-red)" }}
                  />
                )}
              </button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-green-400 text-sm"
                  style={{ fontWeight: 100 }}
                >
                  ¡Mensaje enviado! Te contactaremos pronto.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
