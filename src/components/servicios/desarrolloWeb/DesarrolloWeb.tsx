import { motion } from "motion/react";
import {
  serviciosDesarrolloWeb,
  desarrolloWebAMedida,
} from "../../../data/desarrolloWeb";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../ui/carousel";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  SitiosCorporativosAnimation,
  EcommerceAnimation,
  LandingPagesAnimation,
  RedisenoWebAnimation,
} from "./animations";

export default function DesarrolloWeb() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="bg-black text-white">
      {/* Banner Hero */}
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
                  Desarrollo Digital
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
                  Web &{" "}
                  <span style={{ color: "var(--neon-red)" }}>Ecommerce</span>
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
                  Creamos experiencias digitales que convierten visitantes en
                  clientes y escalan tu negocio online.
                </p>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--neon-red)]" />
                    <span>6 Servicios</span>
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
              <motion.div
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Servicios - Slider */}
      <section
        className="relative bg-black overflow-hidden w-full flex flex-col justify-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-full">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
              containScroll: "trimSnaps",
              dragFree: false,
            }}
            className="w-full"
          >
            <CarouselContent className="h-full [&>div]:h-full [&>div]:flex [&>div]:w-full [&>div]:-ml-0">
              {serviciosDesarrolloWeb.map((servicio) => {
                return (
                  <CarouselItem
                    key={servicio.id}
                    className="pl-0 pr-0 h-full w-full min-w-full max-w-full"
                    style={{
                      flex: "0 0 100%",
                      width: "100%",
                      minWidth: "100%",
                      maxWidth: "100%",
                    }}
                  >
                    <div className="container mx-auto px-6 py-12 h-full flex flex-col">
                      {/* Título y Navegación */}
                      <div className="flex items-center justify-between mb-8">
                        <h2
                          className="text-white uppercase tracking-tighter"
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 900,
                            fontSize: "clamp(2rem, 6vw, 5rem)",
                            lineHeight: 1.1,
                          }}
                        >
                          {servicio.titulo}
                        </h2>

                        {/* Navegación */}
                        <div className="hidden md:flex items-center gap-4">
                          <button
                            onClick={() => api?.scrollPrev()}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--neon-red)]/50 hover:bg-[var(--neon-red)]/10 transition-all duration-300"
                            aria-label="Anterior"
                          >
                            <ChevronLeft
                              className="w-6 h-6 text-white"
                              style={{ color: "var(--neon-red)" }}
                            />
                          </button>
                          <button
                            onClick={() => api?.scrollNext()}
                            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[var(--neon-red)]/50 hover:bg-[var(--neon-red)]/10 transition-all duration-300"
                            aria-label="Siguiente"
                          >
                            <ChevronRight
                              className="w-6 h-6 text-white"
                              style={{ color: "var(--neon-red)" }}
                            />
                          </button>
                        </div>
                      </div>

                      {/* Descripción */}
                      <p
                        className="text-white/80 text-lg md:text-xl lg:text-2xl leading-relaxed mb-24"
                        style={{
                          fontFamily: "var(--font-heading)",
                          fontWeight: 300,
                        }}
                      >
                        {servicio.descripcionBreve}
                      </p>

                      {/* Visualización SVG Animada - Horizontal */}
                      <div className="flex-1 flex items-center justify-center w-full">
                        <div className="w-full max-w-6xl mx-auto p-2 flex justify-center">
                          {/* Animaciones de servicios */}
                          <div className="relative flex justify-center items-center w-full">
                            {servicio.id === "sitios-corporativos" && (
                              <div className="hidden md:block w-full">
                                <SitiosCorporativosAnimation />
                              </div>
                            )}

                            {servicio.id === "ecommerce" && (
                              <div className="hidden md:block w-full">
                                <EcommerceAnimation />
                              </div>
                            )}

                            {servicio.id === "landing-pages" && (
                              <div className="hidden md:block w-full">
                                <LandingPagesAnimation />
                              </div>
                            )}

                            {servicio.id === "rediseño-web" && (
                              <div className="hidden md:block w-full">
                                <RedisenoWebAnimation />
                              </div>
                            )}

                            {/* Timeline móvil */}
                            <div className="md:hidden space-y-6">
                              {servicio.diagramaFlujo.map((paso, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.1 }}
                                  className="flex items-start gap-4"
                                >
                                  <div className="flex-shrink-0 relative">
                                    <div className="w-12 h-12 rounded-full bg-black border-2 border-[var(--neon-red)] flex items-center justify-center text-white font-bold">
                                      {String(index + 1).padStart(2, "0")}
                                    </div>
                                    {index <
                                      servicio.diagramaFlujo.length - 1 && (
                                      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-0.5 h-8 bg-white/20"></div>
                                    )}
                                  </div>
                                  <div className="flex-1 pt-2">
                                    <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                      <p
                                        className="text-white/90 text-sm leading-relaxed"
                                        style={{
                                          fontFamily: "var(--font-heading)",
                                          fontWeight: 400,
                                        }}
                                      >
                                        {paso}
                                      </p>
                                    </div>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Indicadores numéricos - Debajo del slider */}
        <div
          className="flex items-center justify-center"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div className="flex items-center gap-3 bg-black/90 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 shadow-2xl">
            {serviciosDesarrolloWeb.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className="transition-all font-bold tabular-nums hover:scale-110"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  fontSize: current === index + 1 ? "1.5rem" : "1.125rem",
                  color:
                    current === index + 1
                      ? "#ff0000"
                      : "rgba(255, 255, 255, 0.7)",
                }}
                aria-label={`Ir al servicio ${index + 1}`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Desarrollo Web a Medida - Título Fullscreen */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        {/* Background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--neon-red)]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white uppercase tracking-tighter text-center"
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: "clamp(3rem, 10vw, 12rem)",
              lineHeight: 0.9,
            }}
          >
            {desarrolloWebAMedida.titulo.split(" ").map((word, idx) =>
              word === "a" || word === "A" ? (
                <span key={idx} style={{ color: "var(--neon-red)" }}>
                  {word}{" "}
                </span>
              ) : (
                <span key={idx}>{word} </span>
              )
            )}
            <span style={{ color: "var(--neon-red)" }}>
              {desarrolloWebAMedida.tituloDestacado}
            </span>
          </motion.h2>
        </div>
      </section>

      {/* Sección de Desarrollo Web a Medida - Descripción */}
      <section
        className="relative bg-black overflow-hidden flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Background effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--neon-red)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--neon-red)]/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white/80 text-xl md:text-2xl lg:text-3xl leading-relaxed"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 300,
                marginBottom: "3rem",
              }}
            >
              {desarrolloWebAMedida.descripcion}
            </motion.p>

            {/* Separador visual */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-32 h-1 mx-auto"
              style={{
                backgroundColor: "var(--neon-red)",
                marginBottom: "3rem",
              }}
            />

            {/* Cierre */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white text-2xl md:text-3xl lg:text-5xl"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 900,
              }}
            >
              <p className="mb-4">
                ¿Listo para tu solución{" "}
                <span style={{ color: "var(--neon-red)" }}>
                  web personalizada?
                </span>
              </p>
              <Link
                to="/contacto"
                className="inline-block text-white group relative"
              >
                <span className="relative inline-block">
                  Hablemos de tu proyecto.
                  <span
                    className="absolute bottom-0 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "var(--neon-red)" }}
                  />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
