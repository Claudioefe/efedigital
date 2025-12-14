import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <>
      <motion.button
        className="fixed top-4 right-4 text-white p-4 bg-black/50 backdrop-blur-sm rounded-lg transition-colors"
        style={{ zIndex: 9999 }}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </motion.button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menú de navegación"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0"
            style={{ zIndex: 9998, backgroundColor: "#000000" }}
          >
            <div className="h-full flex flex-col justify-between px-4 py-8 md:p-16">
              {/* Logo */}
              <Link to="/" onClick={handleLinkClick}>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-white text-4xl md:text-6xl tracking-wider cursor-pointer hover:opacity-80 transition-opacity mt-8 md:mt-0"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    lineHeight: 0.9,
                  }}
                >
                  <div style={{ color: "#ffffff" }}>EFE</div>
                  <div>
                    <span style={{ color: "#ffffff" }}>DIGITAL</span>
                    <span style={{ color: "var(--neon-red)" }}>.</span>
                  </div>
                </motion.div>
              </Link>

              {/* Menu Items */}
              <nav className="flex-1 flex flex-col justify-center space-y-8 md:space-y-12">
                <motion.button
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => {
                    navigate("/");
                    setMobileMenuOpen(false);
                    setTimeout(
                      () => window.scrollTo({ top: 0, behavior: "smooth" }),
                      100
                    );
                  }}
                  aria-label="Ir a inicio"
                  className="group transition-colors text-left md:text-7xl lg:text-8xl menu-link-mobile"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 900,
                    lineHeight: 1,
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#ff0000";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                  }}
                >
                  Inicio
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Link
                    to="/servicios"
                    onClick={handleLinkClick}
                    className="group transition-colors text-left md:text-7xl lg:text-8xl block menu-link-mobile"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 900,
                      lineHeight: 1,
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff0000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    Servicios
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Link
                    to="/servicios/desarrollo-web"
                    onClick={handleLinkClick}
                    className="group transition-colors text-left md:text-7xl lg:text-8xl block menu-link-mobile"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 900,
                      lineHeight: 1,
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff0000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    Desarrollo Web
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Link
                    to="/servicios/automatizaciones"
                    onClick={handleLinkClick}
                    className="group transition-colors text-left md:text-7xl lg:text-8xl block menu-link-mobile"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 900,
                      lineHeight: 1,
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff0000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    Automatizaciones
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    to="/contacto"
                    onClick={handleLinkClick}
                    className="group transition-colors text-left md:text-7xl lg:text-8xl block menu-link-mobile"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 900,
                      lineHeight: 1,
                      color: "#ffffff",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff0000";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ffffff";
                    }}
                  >
                    Contacto
                  </Link>
                </motion.div>
              </nav>

              {/* CTA Button */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
