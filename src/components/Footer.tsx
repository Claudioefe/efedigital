import { motion } from "motion/react";
import { useState } from "react";
import { Mail, Phone, MapPin, Instagram, Bot } from "lucide-react";
import { AnimatedButton } from "./AnimatedButton";
import { Link, useLocation } from "react-router-dom";

export function Footer() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contacto";
  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/efedigital/",
      label: "Instagram",
    },
  ];

  return (
    <footer id="contact" className="bg-black border-t border-white/10 relative">
      {/* CTA Section */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <motion.div
          className="text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-2xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-10 uppercase tracking-tighter break-words"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              lineHeight: 1,
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {isContactPage ? (
              <>
                Llegaste hasta acá.{" "}
                <span style={{ color: "var(--neon-red)" }}>
                  Estás a un paso
                </span>{" "}
                de transformar tu negocio.
              </>
            ) : (
              <>
                ¿Listo para dejar de hacer{" "}
                <span style={{ color: "var(--neon-red)" }}>
                  tareas repetitivas?
                </span>
              </>
            )}
          </h2>
          <p
            className="text-base md:text-xl lg:text-2xl text-white/80 mb-8 md:mb-10 break-words"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 100,
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {isContactPage
              ? "Completa el formulario y te contactamos en menos de 24 horas para empezar a automatizar tu negocio."
              : "Agendá una consultoría de 15 minutos y descubrí cómo automatizar tu negocio"}
          </p>
          {!isContactPage && (
            <div className="mt-8 md:mt-10">
              <Link to="/contacto">
                <AnimatedButton
                  gradientId="footer-cta"
                  gradientColors={{
                    start: "var(--neon-red)",
                    middle: "var(--neon-red)",
                    end: "var(--neon-red)",
                  }}
                >
                  Agendá una consultoría de 15 min
                </AnimatedButton>
              </Link>
            </div>
          )}
        </motion.div>
      </div>

      {/* Divider */}
      <div className="h-px bg-white/10"></div>

      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/"
              className="inline-block cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div
                className="text-white text-2xl mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                }}
              >
                <span>EFE</span>
                <br />
                <span>DIGITAL</span>
                <span style={{ color: "var(--neon-red)" }}>.</span>
              </div>
            </Link>
            <p
              className="text-white/80 mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 100,
              }}
            >
              Sistemas que trabajan solos. Desarrollo, automatización e IA para
              tu negocio.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                const [isHovered, setIsHovered] = useState(false);

                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg flex items-center justify-center relative"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    aria-label={social.label}
                  >
                    <svg
                      className="absolute inset-0 w-full h-full"
                      style={{ borderRadius: "0.5rem" }}
                    >
                      <rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="6"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.2)"
                        strokeWidth="1"
                        style={{
                          opacity: isHovered ? 0 : 1,
                          transition: "opacity 0.3s",
                        }}
                      />
                      <rect
                        x="1"
                        y="1"
                        width="calc(100% - 2px)"
                        height="calc(100% - 2px)"
                        rx="6"
                        fill="none"
                        stroke="var(--neon-red)"
                        strokeWidth="2"
                        strokeDasharray="200"
                        strokeDashoffset="200"
                        style={{
                          opacity: isHovered ? 1 : 0,
                          animation: isHovered
                            ? "draw-border 0.6s ease-in-out forwards"
                            : "none",
                        }}
                      />
                    </svg>
                    <Icon
                      size={18}
                      className="relative z-10 text-white/60 transition-colors duration-300"
                      style={{
                        color: isHovered
                          ? "var(--neon-red)"
                          : "rgba(255, 255, 255, 0.6)",
                      }}
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
              }}
            >
              Productos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/servicios"
                  className="text-white/80 hover:text-[#ff0000] transition-colors duration-300 relative group inline-block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 100,
                  }}
                >
                  Servicios
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#ff0000" }}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/desarrollo-web"
                  className="text-white/80 hover:text-[#ff0000] transition-colors duration-300 relative group inline-block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 100,
                  }}
                >
                  Desarrollo Web
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#ff0000" }}
                  ></span>
                </Link>
              </li>
              <li>
                <Link
                  to="/servicios/desarrollo-web"
                  className="text-white/80 hover:text-[#ff0000] transition-colors duration-300 relative group inline-block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 100,
                  }}
                >
                  E-commerce
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#ff0000" }}
                  ></span>
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Link
                  to="/servicios/automatizaciones"
                  className="text-white/80 hover:text-[#ff0000] transition-colors duration-300 relative group inline-block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 100,
                  }}
                >
                  Automatizaciones y IA
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#ff0000" }}
                  ></span>
                </Link>
                <Bot
                  size={16}
                  className="text-[var(--neon-red)] flex-shrink-0"
                  style={{ color: "var(--neon-red)" }}
                />
              </li>
              <li>
                <Link
                  to="/contacto"
                  className="text-white/80 hover:text-[#ff0000] transition-colors duration-300 relative group inline-block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 100,
                  }}
                >
                  Contacto
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#ff0000" }}
                  ></span>
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Philosophy Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
              }}
            >
              Filosofía
            </h3>
            <p
              className="text-white/80 leading-relaxed"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 100,
              }}
            >
              No construimos solo código. Construimos sistemas que piensan,
              aprenden y trabajan mientras vos dormís. Cada automatización es un
              empleado que nunca se cansa.
            </p>
          </motion.div>

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3
              className="text-white mb-4"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
              }}
            >
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail
                  size={20}
                  className="flex-shrink-0"
                  style={{ color: "var(--neon-red)" }}
                />
                <a
                  href="mailto:hola@efedigital.com.ar"
                  className="text-white/80 hover:text-[#ff0000] transition-colors duration-300 relative group inline-block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 100,
                  }}
                >
                  hola@efedigital.com.ar
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#ff0000" }}
                  ></span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone
                  size={20}
                  className="flex-shrink-0"
                  style={{ color: "var(--neon-red)" }}
                />
                <a
                  href="tel:+543764279444"
                  className="text-white/80 hover:text-[#ff0000] transition-colors duration-300 relative group inline-block"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 100,
                  }}
                >
                  +54 3764279444
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "#ff0000" }}
                  ></span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="flex-shrink-0"
                  style={{ color: "var(--neon-red)" }}
                />
                <span
                  className="text-white/80"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 100,
                  }}
                >
                  Misiones Argentina
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Stack and Status Section */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex justify-between w-full gap-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-white/40 text-xs uppercase tracking-widest mb-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 200 }}
              >
                Stack
              </h3>
              <p
                className="text-white text-lg"
                style={{
                  fontWeight: 100,
                  fontFamily: "var(--font-heading)",
                }}
              >
                sitios / e-commerce / automatizaciones
              </p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-right"
            >
              <h3
                className="text-white/40 text-xs uppercase tracking-widest mb-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 200 }}
              >
                Status
              </h3>
              <p
                className="text-white text-md flex items-center justify-end gap-2"
                style={{ fontFamily: "var(--font-heading)", fontWeight: 300 }}
              >
                <span className="w-2 h-2 bg-[var(--neon-green)] rounded-full animate-pulse"></span>
                Online
              </p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-white/40 text-sm"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 100,
              }}
            >
              Hecho con inteligencia (humana y artificial) © 2025
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-white/40 hover:text-[#ff0000] transition-colors duration-300 text-sm relative group inline-block"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 100,
                }}
              >
                Privacidad
                <span
                  className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#ff0000" }}
                ></span>
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-[#ff0000] transition-colors duration-300 text-sm relative group inline-block"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 100,
                }}
              >
                Términos
                <span
                  className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#ff0000" }}
                ></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
