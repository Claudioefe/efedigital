import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Sparkles, ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

// Estilos CSS para el select personalizado
const selectItemStyles = `
  [data-slot="select-item"] {
    color: white !important;
  }
  [data-slot="select-item"]:hover,
  [data-slot="select-item"][data-highlighted] {
    color: #ff0000 !important;
  }
  [data-slot="select-item"]:hover *,
  [data-slot="select-item"][data-highlighted] * {
    color: #ff0000 !important;
  }
`;

// WhatsApp Icon Component
const WhatsAppIcon = ({
  size = 20,
  color = "var(--neon-red)",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      fill={color}
    />
  </svg>
);

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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleServicioChange = (value: string) => {
    setFormData({
      ...formData,
      servicio: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación del servicio
    if (!formData.servicio) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Crear FormData para Netlify Forms
      const formDataToSend = new FormData(e.currentTarget);

      // Enviar formulario a Netlify
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formDataToSend as any).toString(),
      });

      if (!response.ok) {
        throw new Error("Error al enviar el formulario");
      }

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ nombre: "", email: "", servicio: "", mensaje: "" });

      // Reset status después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      setIsSubmitting(false);
      setSubmitStatus("error");

      // Reset status después de 5 segundos
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-black py-20 md:py-32 px-4"
      style={{
        fontFamily: "var(--font-heading)",
      }}
    >
      <style>{selectItemStyles}</style>
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
              Contanos que necesitás y te armamos una propuesta personalizada.
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
                <p className="text-white" style={{ fontWeight: 100 }}>
                  hola@efedigital.com.ar
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <WhatsAppIcon size={20} color="var(--neon-red)" />
                <p className="text-white" style={{ fontWeight: 100 }}>
                  +54 9 376 4279444
                </p>
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
            <form
              name="contacto"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Campo oculto para Netlify Forms */}
              <input type="hidden" name="form-name" value="contacto" />

              {/* Campo honeypot para protección contra spam */}
              <input type="hidden" name="bot-field" />

              {/* Campo oculto para el servicio (se actualiza cuando cambia el select) */}
              <input type="hidden" name="servicio" value={formData.servicio} />

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
                  htmlFor="servicio-select"
                  className="block text-white mb-2 text-sm"
                  style={{ fontWeight: 600 }}
                >
                  ¿Qué servicio te interesa?
                </label>
                <Select
                  value={formData.servicio}
                  onValueChange={handleServicioChange}
                >
                  <SelectTrigger
                    id="servicio-select"
                    className="w-full rounded-lg px-4 py-3 transition-colors cursor-pointer border-white/10 bg-white/5 text-white hover:border-white/20 focus:border-[var(--neon-red)] focus:ring-1 focus:ring-[var(--neon-red)] [&>span[data-slot=select-value]]:text-white [&>span[data-slot=select-value][data-placeholder]]:text-white/40 [&_svg]:text-white/60"
                    style={{
                      fontWeight: 100,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                    }}
                  >
                    <SelectValue placeholder="Seleccioná un servicio" />
                  </SelectTrigger>
                  <SelectContent
                    className="bg-[#1a1a1a] border-white/10 shadow-lg z-50 rounded-lg"
                    position="popper"
                    sideOffset={4}
                    style={{
                      backgroundColor: "#1a1a1a",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                      width: "var(--radix-select-trigger-width)",
                      minWidth: "var(--radix-select-trigger-width)",
                      maxWidth: "var(--radix-select-trigger-width)",
                    }}
                  >
                    {servicios.map((servicio) => (
                      <SelectItem
                        key={servicio}
                        value={servicio}
                        className="cursor-pointer py-3 px-4 rounded-md mx-1 my-0.5 transition-colors text-white"
                        style={{
                          fontWeight: 100,
                          backgroundColor: "transparent",
                          color: "white",
                        }}
                      >
                        {servicio}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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
                aria-label={
                  isSubmitting
                    ? "Enviando mensaje"
                    : "Enviar formulario de contacto"
                }
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

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 text-sm"
                  style={{ fontWeight: 100 }}
                >
                  Hubo un error al enviar el mensaje. Por favor intentá
                  nuevamente.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
