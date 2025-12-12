import { motion } from "motion/react";
import {
  productosAutomatizacion,
  desarrolloAMedida,
} from "../../../data/automatizaciones";
import {
  ShoppingCart,
  Eye,
  Bell,
  RefreshCw,
  Package,
  User,
  Mail,
  Clock,
  Send,
  Database,
  Filter,
  UserPlus,
  FileText,
  Calendar,
  MessageSquare,
  MessageCircle,
  Hash,
  Brain,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Zap,
  ArrowRight,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "../../ui/carousel";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Función para resaltar palabras importantes en el título
function highlightTitle(title: string) {
  const importantWords = ["Pro", "Sync", "Saver", "Boost", "Scan"];

  // Buscar si alguna palabra importante está en el título
  for (const word of importantWords) {
    if (title.includes(word)) {
      const parts = title.split(word);
      return (
        <>
          {parts[0]}
          <span style={{ color: "var(--neon-red)" }}>{word}</span>
          {parts[1]}
        </>
      );
    }
  }

  return title;
}

// Función para obtener icono según el contenido del paso
function getIconForStep(paso: string, index: number) {
  const pasoLower = paso.toLowerCase();

  // Mapeo de palabras clave a iconos
  if (
    pasoLower.includes("compra") ||
    pasoLower.includes("venta") ||
    pasoLower.includes("carrito")
  ) {
    return ShoppingCart;
  }
  if (
    pasoLower.includes("detecta") ||
    pasoLower.includes("analiza") ||
    pasoLower.includes("verifica")
  ) {
    return Eye;
  }
  if (
    pasoLower.includes("notificación") ||
    pasoLower.includes("notifica") ||
    pasoLower.includes("envía") ||
    pasoLower.includes("envia")
  ) {
    return Bell;
  }
  if (
    pasoLower.includes("actualización") ||
    pasoLower.includes("actualiza") ||
    pasoLower.includes("cambio")
  ) {
    return RefreshCw;
  }
  if (
    pasoLower.includes("cliente") ||
    pasoLower.includes("usuario") ||
    pasoLower.includes("comprador")
  ) {
    return User;
  }
  if (
    pasoLower.includes("email") ||
    pasoLower.includes("mensaje") ||
    pasoLower.includes("whatsapp")
  ) {
    return Mail;
  }
  if (
    pasoLower.includes("espera") ||
    pasoLower.includes("tiempo") ||
    pasoLower.includes("hora")
  ) {
    return Clock;
  }
  if (
    pasoLower.includes("envía") ||
    pasoLower.includes("envia") ||
    pasoLower.includes("envío") ||
    pasoLower.includes("envio")
  ) {
    return Send;
  }
  if (
    pasoLower.includes("registra") ||
    pasoLower.includes("captura") ||
    pasoLower.includes("sistema")
  ) {
    return Database;
  }
  if (
    pasoLower.includes("clasifica") ||
    pasoLower.includes("asigna") ||
    pasoLower.includes("filtra")
  ) {
    return Filter;
  }
  if (pasoLower.includes("lead") || pasoLower.includes("contacta")) {
    return UserPlus;
  }
  if (
    pasoLower.includes("reporte") ||
    pasoLower.includes("informe") ||
    pasoLower.includes("genera")
  ) {
    return FileText;
  }
  if (
    pasoLower.includes("reserva") ||
    pasoLower.includes("disponibilidad") ||
    pasoLower.includes("fecha")
  ) {
    return Calendar;
  }
  if (
    pasoLower.includes("consulta") ||
    pasoLower.includes("pregunta") ||
    pasoLower.includes("respuesta")
  ) {
    return MessageSquare;
  }
  if (
    pasoLower.includes("ia") ||
    pasoLower.includes("inteligencia") ||
    pasoLower.includes("aprende")
  ) {
    return Brain;
  }
  if (
    pasoLower.includes("confirma") ||
    pasoLower.includes("completa") ||
    pasoLower.includes("entrega")
  ) {
    return CheckCircle;
  }
  if (pasoLower.includes("procesa") || pasoLower.includes("consolida")) {
    return RefreshCw;
  }

  // Iconos por posición si no hay coincidencia
  const defaultIcons = [
    ShoppingCart,
    Eye,
    Bell,
    RefreshCw,
    Package,
    CheckCircle,
  ];
  return defaultIcons[index % defaultIcons.length];
}

export function Automatizaciones() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

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
                  Automatización Inteligente
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
                  Productos{" "}
                  <span style={{ color: "var(--neon-red)" }}>AUTO</span>
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
                  Soluciones que trabajan por ti, las 24 horas del día.
                </p>
                <div className="flex items-center gap-4 text-white/60 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--neon-red)]" />
                    <span>6 Productos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[var(--neon-red)]" />
                    <span>100% Automatizado</span>
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

      {/* Productos - Slider */}
      <section
        className="relative bg-black overflow-hidden w-full flex flex-col justify-center"
        style={{ minHeight: "100vh" }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            slidesToScroll: 1,
            containScroll: "trimSnaps",
            dragFree: false,
          }}
          className="w-full flex-1 flex items-center"
        >
          <CarouselContent className="h-full [&>div]:h-full [&>div]:flex [&>div]:w-full [&>div]:-ml-0">
            {productosAutomatizacion.map((producto, index) => (
              <CarouselItem
                key={index}
                className="pl-0 pr-0 h-full"
                style={{
                  flex: "0 0 100%",
                  width: "100%",
                  minWidth: "100%",
                  maxWidth: "100%",
                }}
              >
                <div className="relative h-full w-full flex flex-col justify-between py-8 md:py-12">
                  {/* Background decorative elements */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--neon-red)] rounded-full blur-3xl" />
                  </div>

                  <div className="container mx-auto px-6 relative z-10 h-full flex flex-col">
                    {/* Título y Descripción - Ancho completo */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="mb-6 md:mb-12"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-6">
                          <h2
                            className="text-white flex-1"
                            style={{
                              fontFamily: "var(--font-heading)",
                              fontWeight: 900,
                              lineHeight: 1.2,
                              fontSize: "clamp(2.5rem, 6vw, 5rem)",
                            }}
                          >
                            {highlightTitle(producto.titulo)}
                          </h2>
                          {/* Controles de Navegación - Flechas */}
                          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
                            <button
                              onClick={() => api?.scrollPrev()}
                              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-[var(--neon-red)]/50 transition-all group"
                              aria-label="Producto anterior"
                            >
                              <ChevronLeft
                                size={20}
                                className="text-white/70 group-hover:text-[var(--neon-red)] transition-colors"
                              />
                            </button>
                            <button
                              onClick={() => api?.scrollNext()}
                              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1a1a1a] border border-white/10 hover:border-[var(--neon-red)]/50 transition-all group"
                              aria-label="Producto siguiente"
                            >
                              <ChevronRight
                                size={20}
                                className="text-white/70 group-hover:text-[var(--neon-red)] transition-colors"
                              />
                            </button>
                          </div>
                        </div>
                        <p
                          className="text-white/80 text-lg md:text-xl leading-relaxed mb-8"
                          style={{
                            fontFamily: "var(--font-heading)",
                            fontWeight: 100,
                          }}
                        >
                          {producto.descripcionBreve}
                        </p>
                        <div className="border-b border-white/10 pt-4 mt-6"></div>
                      </div>
                    </motion.div>

                    {/* Sección de Flujo - Ancho completo */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="w-full flex-1 flex flex-col justify-center min-h-0 mb-20 md:mb-24"
                    >
                      <div className="relative w-full">
                        <div className="relative z-10">
                          {/* Animación SVG para NotifyPro - Solo Desktop */}
                          {producto.titulo === "NotifyPro" ? (
                            <>
                              {/* Vista Móvil - Timeline Vertical (igual que otros productos) */}
                              <div className="md:hidden space-y-6">
                                {producto.diagramaFlujo.map((paso, idx) => {
                                  const Icon = getIconForStep(paso, idx);
                                  return (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-4"
                                    >
                                      <div className="flex-shrink-0 relative">
                                        <div className="w-12 h-12 rounded-full bg-black border-2 border-[var(--neon-red)] flex items-center justify-center">
                                          <Icon
                                            size={20}
                                            style={{ color: "#ffffff" }}
                                            strokeWidth={1.5}
                                          />
                                        </div>
                                        {idx <
                                          producto.diagramaFlujo.length - 1 && (
                                          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-0.5 h-8 bg-white/20"></div>
                                        )}
                                      </div>
                                      <div className="flex-1 pt-2">
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                          <span
                                            className="text-[var(--neon-red)] text-lg font-bold mr-2"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                            }}
                                          >
                                            {String(idx + 1).padStart(2, "0")}
                                          </span>
                                          <p
                                            className="text-white/90 text-sm leading-relaxed inline"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                              fontWeight: 300,
                                            }}
                                          >
                                            {paso}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              {/* Animación SVG - Solo Desktop */}
                              <div className="hidden md:flex w-full items-center justify-center py-8 px-4">
                                <svg
                                  viewBox="0 0 1000 300"
                                  className="h-auto w-full"
                                  style={{ minHeight: "300px" }}
                                  preserveAspectRatio="xMidYMid meet"
                                >
                                  {/* Evento en el sistema - Izquierda */}
                                  <motion.rect
                                    x="50"
                                    y="80"
                                    width="100"
                                    height="80"
                                    rx="4"
                                    fill="none"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    opacity="0.2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.2, 0.2] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.circle
                                    cx="100"
                                    cy="120"
                                    r="15"
                                    fill="var(--neon-red)"
                                    opacity="0.3"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{
                                      scale: [0, 1.2, 1, 1.2, 1],
                                      opacity: [0, 0.3, 0.3, 0.3, 0.3],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 0.1,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="85"
                                    y="105"
                                    width="30"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0.7, 1, 0.7],
                                      scale: [0.9, 1.1, 0.9],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 0.2,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Zap
                                        className="w-6 h-6 md:w-6 md:h-6"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  {/* Texto: Evento */}
                                  <motion.text
                                    x="100"
                                    y="180"
                                    fill="var(--neon-red)"
                                    fontSize="14"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.3,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Evento
                                  </motion.text>

                                  {/* Detección automática */}
                                  <motion.rect
                                    x="200"
                                    y="90"
                                    width="120"
                                    height="60"
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
                                      delay: 0.5,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="240"
                                    y="100"
                                    width="40"
                                    height="40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      rotate: [0, 360, 360],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 0.6,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Eye
                                        className="w-7 h-7 md:w-8 md:h-8"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  {/* Texto: Detección */}
                                  <motion.text
                                    x="260"
                                    y="170"
                                    fill="var(--neon-red)"
                                    fontSize="14"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.7,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Detecta
                                  </motion.text>

                                  {/* Preparación del mensaje */}
                                  <motion.rect
                                    x="370"
                                    y="85"
                                    width="100"
                                    height="70"
                                    rx="4"
                                    fill="none"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    opacity="0.2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.2, 0.2] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 1,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Líneas de texto del mensaje */}
                                  {[100, 115, 130].map((y, i) => (
                                    <motion.line
                                      key={i}
                                      x1="385"
                                      y1={y}
                                      x2={i === 2 ? "420" : "440"}
                                      y2={y}
                                      stroke="var(--neon-red)"
                                      strokeWidth="2"
                                      opacity="0.3"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: [0, 1, 1] }}
                                      transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: 1.2 + i * 0.2,
                                        repeatDelay: 1,
                                      }}
                                    />
                                  ))}
                                  {/* Texto: Prepara */}
                                  <motion.text
                                    x="420"
                                    y="170"
                                    fill="var(--neon-red)"
                                    fontSize="14"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 1.4,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Prepara
                                  </motion.text>

                                  {/* Selección de canal - WhatsApp, Email, Slack */}
                                  <motion.rect
                                    x="520"
                                    y="70"
                                    width="200"
                                    height="100"
                                    rx="4"
                                    fill="none"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    opacity="0.15"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.15, 0.15] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 1.6,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Canales de notificación */}
                                  {[
                                    {
                                      x: 540,
                                      icon: MessageCircle,
                                    },
                                    { x: 620, icon: Mail },
                                    {
                                      x: 700,
                                      icon: Hash,
                                    },
                                  ].map((canal, i) => (
                                    <g key={i}>
                                      <motion.circle
                                        cx={canal.x}
                                        cy="120"
                                        r="16"
                                        fill="var(--neon-red)"
                                        opacity="0.15"
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{
                                          scale: [0, 1, 1.1, 1],
                                          opacity: [0, 0.15, 0.25, 0.15],
                                        }}
                                        transition={{
                                          duration: 1.5,
                                          repeat: Infinity,
                                          delay: 1.8 + i * 0.2,
                                          repeatDelay: 1,
                                        }}
                                      />
                                      <motion.foreignObject
                                        x={canal.x - 10}
                                        y="110"
                                        width="20"
                                        height="20"
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{
                                          opacity: [0, 1, 1],
                                          scale: [0, 1.2, 1],
                                        }}
                                        transition={{
                                          duration: 1.5,
                                          repeat: Infinity,
                                          delay: 1.9 + i * 0.2,
                                          repeatDelay: 1,
                                        }}
                                      >
                                        <div className="flex items-center justify-center w-full h-full">
                                          <canal.icon
                                            className="w-4 h-4 md:w-4 md:h-4"
                                            style={{ color: "var(--neon-red)" }}
                                          />
                                        </div>
                                      </motion.foreignObject>
                                    </g>
                                  ))}
                                  {/* Texto general: Selecciona */}
                                  <motion.text
                                    x="620"
                                    y="65"
                                    fill="var(--neon-red)"
                                    fontSize="13"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 1.7,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-xs md:text-sm"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Selecciona Canal
                                  </motion.text>

                                  {/* Envío de notificación */}
                                  <motion.rect
                                    x="780"
                                    y="90"
                                    width="100"
                                    height="60"
                                    rx="4"
                                    fill="var(--neon-red)"
                                    opacity="0.2"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{
                                      opacity: [0, 0.2, 0.3, 0.2],
                                      scale: [0.9, 1.05, 1, 0.9],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 2.5,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="810"
                                    y="105"
                                    width="40"
                                    height="40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0.7, 1, 0.7],
                                      x: [810, 820, 810],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 2.6,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Send
                                        className="w-7 h-7 md:w-8 md:h-8"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  {/* Texto: Envía */}
                                  <motion.text
                                    x="830"
                                    y="170"
                                    fill="var(--neon-red)"
                                    fontSize="14"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2.7,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Envía
                                  </motion.text>
                                  {/* Notificaciones volando */}
                                  {[0, 1, 2].map((i) => (
                                    <motion.circle
                                      key={i}
                                      cx="830"
                                      cy="120"
                                      r="4"
                                      fill="var(--neon-red)"
                                      opacity="0.6"
                                      initial={{ scale: 0, opacity: 0 }}
                                      animate={{
                                        cx: [830, 860 + i * 10, 860 + i * 10],
                                        cy: [120, 100 - i * 15, 100 - i * 15],
                                        scale: [0, 1, 1],
                                        opacity: [0, 0.6, 0.6, 0],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 2.8 + i * 0.2,
                                        repeatDelay: 1,
                                        ease: "easeOut",
                                        times: [0, 0.7, 0.9, 1],
                                      }}
                                    />
                                  ))}

                                  {/* Historial - Abajo */}
                                  <motion.rect
                                    x="400"
                                    y="220"
                                    width="200"
                                    height="50"
                                    rx="4"
                                    fill="var(--neon-red)"
                                    opacity="0.08"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.08, 0.08] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 3.2,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="485"
                                    y="235"
                                    width="30"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [0, 1.2, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 3.3,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Database
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  {/* Texto: Historial */}
                                  <motion.text
                                    x="500"
                                    y="290"
                                    fill="var(--neon-red)"
                                    fontSize="14"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 3.4,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Historial
                                  </motion.text>
                                  {/* Registros en historial */}
                                  {[235, 245, 255].map((y, i) => (
                                    <motion.line
                                      key={i}
                                      x1="420"
                                      y1={y}
                                      x2="580"
                                      y2={y}
                                      stroke="var(--neon-red)"
                                      strokeWidth="1.5"
                                      opacity="0.2"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: [0, 1, 1] }}
                                      transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: 3.5 + i * 0.2,
                                        repeatDelay: 1,
                                      }}
                                    />
                                  ))}

                                  {/* Líneas de conexión */}
                                  {[
                                    { x1: 150, y1: 120, x2: 200, y2: 120 },
                                    { x1: 320, y1: 120, x2: 370, y2: 120 },
                                    { x1: 470, y1: 120, x2: 520, y2: 120 },
                                    { x1: 720, y1: 120, x2: 780, y2: 120 },
                                  ].map((line, i) => (
                                    <motion.line
                                      key={i}
                                      x1={line.x1}
                                      y1={line.y1}
                                      x2={line.x2}
                                      y2={line.y2}
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
                                        delay: 0.4 + i * 0.4,
                                        repeatDelay: 1,
                                        ease: "easeInOut",
                                        times: [0, 0.5, 0.8, 1],
                                      }}
                                    />
                                  ))}
                                  {/* Flecha hacia historial */}
                                  <motion.path
                                    d="M 500 150 Q 500 185 500 220"
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
                                      delay: 3,
                                      repeatDelay: 1,
                                      ease: "easeInOut",
                                      times: [0, 0.5, 0.8, 1],
                                    }}
                                  />
                                </svg>
                              </div>
                            </>
                          ) : producto.titulo === "SheetSync" ? (
                            <>
                              {/* Vista Móvil - Timeline Vertical (igual que otros productos) */}
                              <div className="md:hidden space-y-6">
                                {producto.diagramaFlujo.map((paso, idx) => {
                                  const Icon = getIconForStep(paso, idx);
                                  return (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-4"
                                    >
                                      <div className="flex-shrink-0 relative">
                                        <div className="w-12 h-12 rounded-full bg-black border-2 border-[var(--neon-red)] flex items-center justify-center">
                                          <Icon
                                            size={20}
                                            style={{ color: "#ffffff" }}
                                            strokeWidth={1.5}
                                          />
                                        </div>
                                        {idx <
                                          producto.diagramaFlujo.length - 1 && (
                                          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-0.5 h-8 bg-white/20"></div>
                                        )}
                                      </div>
                                      <div className="flex-1 pt-2">
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                          <span
                                            className="text-[var(--neon-red)] text-lg font-bold mr-2"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                            }}
                                          >
                                            {String(idx + 1).padStart(2, "0")}
                                          </span>
                                          <p
                                            className="text-white/90 text-sm leading-relaxed inline"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                              fontWeight: 300,
                                            }}
                                          >
                                            {paso}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              {/* Animación SVG - Solo Desktop */}
                              <div className="hidden md:flex w-full items-center justify-center py-8 px-4">
                                <svg
                                  viewBox="0 0 1000 300"
                                  className="h-auto w-full"
                                  style={{ minHeight: "300px" }}
                                  preserveAspectRatio="xMidYMid meet"
                                >
                                  {/* 1. Nuevo Evento */}
                                  <motion.rect
                                    x="50"
                                    y="100"
                                    width="100"
                                    height="70"
                                    rx="4"
                                    fill="none"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    opacity="0.2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.2, 0.2] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="75"
                                    y="115"
                                    width="50"
                                    height="40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [0, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.2,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Zap
                                        className="w-7 h-7 md:w-8 md:h-8"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="100"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="13"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.3,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Nuevo Evento
                                  </motion.text>

                                  {/* Flecha 1 -> 2 */}
                                  <motion.path
                                    d="M 150 135 L 185 135"
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
                                      delay: 0.5,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 2. Toma Información */}
                                  <motion.rect
                                    x="185"
                                    y="105"
                                    width="110"
                                    height="60"
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
                                      delay: 0.7,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="215"
                                    y="120"
                                    width="50"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 0.8,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Database
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="240"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="13"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.9,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Toma Info
                                  </motion.text>

                                  {/* Flecha 2 -> 3 */}
                                  <motion.path
                                    d="M 295 135 L 330 135"
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
                                      delay: 1,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 3. Verifica Datos */}
                                  <motion.rect
                                    x="330"
                                    y="105"
                                    width="110"
                                    height="60"
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
                                      delay: 1.2,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="360"
                                    y="120"
                                    width="50"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.3,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <CheckCircle
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="385"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="13"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 1.4,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Verifica
                                  </motion.text>

                                  {/* Flecha 3 -> 4 hacia abajo */}
                                  <motion.path
                                    d="M 385 165 Q 385 185 385 205"
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
                                      delay: 1.5,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 4. Conecta Google Sheets */}
                                  <motion.rect
                                    x="300"
                                    y="205"
                                    width="170"
                                    height="65"
                                    rx="4"
                                    fill="var(--neon-red)"
                                    opacity="0.08"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.08, 0.12, 0.08] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.7,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Icono de Google Sheets simulado con rectángulos verdes */}
                                  <motion.rect
                                    x="365"
                                    y="220"
                                    width="40"
                                    height="35"
                                    rx="2"
                                    fill="#0f9d58"
                                    opacity="0.8"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                      opacity: [0, 0.8, 0.8],
                                      scale: [0.8, 1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.8,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Líneas de tabla dentro del sheets */}
                                  {[228, 237, 246].map((y, i) => (
                                    <motion.line
                                      key={i}
                                      x1="368"
                                      y1={y}
                                      x2="402"
                                      y2={y}
                                      stroke="white"
                                      strokeWidth="1"
                                      opacity="0.6"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: [0, 0.6, 0.6] }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 1.9 + i * 0.1,
                                        repeatDelay: 0.5,
                                      }}
                                    />
                                  ))}
                                  <motion.text
                                    x="385"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="13"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Google Sheets
                                  </motion.text>

                                  {/* Flecha 4 -> 5 hacia la derecha */}
                                  <motion.path
                                    d="M 470 237 L 540 237"
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
                                      delay: 2.2,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 5. Agrega Fila */}
                                  <motion.rect
                                    x="540"
                                    y="205"
                                    width="130"
                                    height="65"
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
                                      delay: 2.4,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Filas siendo agregadas */}
                                  {[0, 1, 2].map((i) => (
                                    <motion.rect
                                      key={i}
                                      x="555"
                                      y={220 + i * 12}
                                      width="100"
                                      height="8"
                                      rx="1"
                                      fill="var(--neon-red)"
                                      opacity="0.4"
                                      initial={{ opacity: 0, scaleX: 0 }}
                                      animate={{
                                        opacity: [0, 0.4, 0.4],
                                        scaleX: [0, 1, 1],
                                      }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 2.5 + i * 0.15,
                                        repeatDelay: 0.5,
                                      }}
                                      style={{ transformOrigin: "left center" }}
                                    />
                                  ))}
                                  <motion.text
                                    x="605"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="13"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2.6,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Agrega Fila
                                  </motion.text>

                                  {/* Flecha 5 -> 6 hacia arriba */}
                                  <motion.path
                                    d="M 670 237 Q 730 237 730 165"
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
                                      delay: 2.8,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 6. Confirma */}
                                  <motion.rect
                                    x="680"
                                    y="105"
                                    width="100"
                                    height="60"
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
                                      delay: 3,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="705"
                                    y="120"
                                    width="50"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [0, 1.2, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 3.1,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <CheckCircle
                                        className="w-7 h-7 md:w-8 md:h-8"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="730"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="13"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 3.2,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Confirma
                                  </motion.text>
                                </svg>
                              </div>
                            </>
                          ) : producto.titulo === "CartSaver" ? (
                            <>
                              {/* Vista Móvil - Timeline Vertical (igual que otros productos) */}
                              <div className="md:hidden space-y-6">
                                {producto.diagramaFlujo.map((paso, idx) => {
                                  const Icon = getIconForStep(paso, idx);
                                  return (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-4"
                                    >
                                      <div className="flex-shrink-0 relative">
                                        <div className="w-12 h-12 rounded-full bg-black border-2 border-[var(--neon-red)] flex items-center justify-center">
                                          <Icon
                                            size={20}
                                            style={{ color: "#ffffff" }}
                                            strokeWidth={1.5}
                                          />
                                        </div>
                                        {idx <
                                          producto.diagramaFlujo.length - 1 && (
                                          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-0.5 h-8 bg-white/20"></div>
                                        )}
                                      </div>
                                      <div className="flex-1 pt-2">
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                          <span
                                            className="text-[var(--neon-red)] text-lg font-bold mr-2"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                            }}
                                          >
                                            {String(idx + 1).padStart(2, "0")}
                                          </span>
                                          <p
                                            className="text-white/90 text-sm leading-relaxed inline"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                              fontWeight: 300,
                                            }}
                                          >
                                            {paso}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              {/* Animación SVG - Solo Desktop */}
                              <div className="hidden md:flex w-full items-center justify-center py-8 px-4">
                                <svg
                                  viewBox="0 0 1000 300"
                                  className="h-auto w-full"
                                  style={{ minHeight: "300px" }}
                                  preserveAspectRatio="xMidYMid meet"
                                >
                                  {/* 1. Cliente agrega productos al carrito */}
                                  <motion.rect
                                    x="50"
                                    y="100"
                                    width="120"
                                    height="70"
                                    rx="4"
                                    fill="none"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    opacity="0.2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.2, 0.2] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="75"
                                    y="115"
                                    width="70"
                                    height="40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [0, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.2,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <ShoppingCart
                                        className="w-7 h-7 md:w-8 md:h-8"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="110"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.3,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Agrega al Carrito
                                  </motion.text>

                                  {/* Flecha 1 -> 2 */}
                                  <motion.path
                                    d="M 170 135 L 210 135"
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
                                      delay: 0.5,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 2. Cliente se va sin completar */}
                                  <motion.rect
                                    x="210"
                                    y="105"
                                    width="120"
                                    height="60"
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
                                      delay: 0.7,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="240"
                                    y="120"
                                    width="60"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      x: [0, -5, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 0.8,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <ArrowRight
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="270"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.9,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Abandona
                                  </motion.text>

                                  {/* Flecha 2 -> 3 hacia abajo */}
                                  <motion.path
                                    d="M 270 165 Q 270 185 270 205"
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
                                      delay: 1,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 3. Sistema espera tiempo configurado */}
                                  <motion.rect
                                    x="200"
                                    y="205"
                                    width="140"
                                    height="60"
                                    rx="4"
                                    fill="var(--neon-red)"
                                    opacity="0.08"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.08, 0.12, 0.08] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.2,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="250"
                                    y="220"
                                    width="40"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      rotate: [0, 360, 360],
                                    }}
                                    transition={{
                                      duration: 3,
                                      repeat: Infinity,
                                      delay: 1.3,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Clock
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="270"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 1.4,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Espera Tiempo
                                  </motion.text>

                                  {/* Flecha 3 -> 4 hacia la derecha */}
                                  <motion.path
                                    d="M 340 235 L 410 235"
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
                                      delay: 1.6,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 4. Verifica si ya compró */}
                                  <motion.rect
                                    x="410"
                                    y="205"
                                    width="130"
                                    height="60"
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
                                      delay: 1.8,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="445"
                                    y="220"
                                    width="60"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.9,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <CheckCircle
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="475"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Verifica Compra
                                  </motion.text>

                                  {/* Flecha 4 -> 5 hacia arriba */}
                                  <motion.path
                                    d="M 475 205 Q 475 185 475 165"
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
                                      delay: 2.2,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 5. Genera cupón de descuento */}
                                  <motion.rect
                                    x="400"
                                    y="105"
                                    width="150"
                                    height="60"
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
                                      delay: 2.4,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Cupón visual */}
                                  <motion.rect
                                    x="420"
                                    y="120"
                                    width="110"
                                    height="30"
                                    rx="2"
                                    fill="var(--neon-red)"
                                    opacity="0.2"
                                    stroke="var(--neon-red)"
                                    strokeWidth="1.5"
                                    strokeDasharray="3,3"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                      opacity: [0, 0.2, 0.2],
                                      scale: [0.8, 1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 2.5,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.text
                                    x="475"
                                    y="140"
                                    fill="var(--neon-red)"
                                    fontSize="10"
                                    fontWeight="700"
                                    textAnchor="middle"
                                    opacity="0.9"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.9, 0.9] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2.6,
                                      repeatDelay: 0.5,
                                    }}
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    DESCUENTO 20%
                                  </motion.text>
                                  <motion.text
                                    x="475"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2.7,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Genera Cupón
                                  </motion.text>

                                  {/* Flecha 5 -> 6 hacia la derecha */}
                                  <motion.path
                                    d="M 550 135 L 620 135"
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
                                      delay: 2.9,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 6. Envía mensaje para recuperar */}
                                  <motion.rect
                                    x="620"
                                    y="105"
                                    width="140"
                                    height="60"
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
                                      delay: 3.1,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="655"
                                    y="120"
                                    width="70"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      y: [0, -3, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 3.2,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Send
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="690"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 3.3,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Envía Mensaje
                                  </motion.text>
                                </svg>
                              </div>
                            </>
                          ) : producto.titulo === "ReviewBoost" ? (
                            <>
                              {/* Vista Móvil - Timeline Vertical (igual que otros productos) */}
                              <div className="md:hidden space-y-6">
                                {producto.diagramaFlujo.map((paso, idx) => {
                                  const Icon = getIconForStep(paso, idx);
                                  return (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-4"
                                    >
                                      <div className="flex-shrink-0 relative">
                                        <div className="w-12 h-12 rounded-full bg-black border-2 border-[var(--neon-red)] flex items-center justify-center">
                                          <Icon
                                            size={20}
                                            style={{ color: "#ffffff" }}
                                            strokeWidth={1.5}
                                          />
                                        </div>
                                        {idx <
                                          producto.diagramaFlujo.length - 1 && (
                                          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-0.5 h-8 bg-white/20"></div>
                                        )}
                                      </div>
                                      <div className="flex-1 pt-2">
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                          <span
                                            className="text-[var(--neon-red)] text-lg font-bold mr-2"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                            }}
                                          >
                                            {String(idx + 1).padStart(2, "0")}
                                          </span>
                                          <p
                                            className="text-white/90 text-sm leading-relaxed inline"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                              fontWeight: 300,
                                            }}
                                          >
                                            {paso}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              {/* Animación SVG - Solo Desktop */}
                              <div className="hidden md:flex w-full items-center justify-center py-8 px-4">
                                <svg
                                  viewBox="0 0 1000 300"
                                  className="h-auto w-full"
                                  style={{ minHeight: "300px" }}
                                  preserveAspectRatio="xMidYMid meet"
                                >
                                  {/* 1. Cliente completa una compra */}
                                  <motion.rect
                                    x="50"
                                    y="100"
                                    width="120"
                                    height="70"
                                    rx="4"
                                    fill="none"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    opacity="0.2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.2, 0.2] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="75"
                                    y="115"
                                    width="70"
                                    height="40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [0, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.2,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <CheckCircle
                                        className="w-7 h-7 md:w-8 md:h-8"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="110"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.3,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Completa Compra
                                  </motion.text>

                                  {/* Flecha 1 -> 2 */}
                                  <motion.path
                                    d="M 170 135 L 210 135"
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
                                      delay: 0.5,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 2. Sistema espera tiempo configurado */}
                                  <motion.rect
                                    x="210"
                                    y="105"
                                    width="130"
                                    height="60"
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
                                      delay: 0.7,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="245"
                                    y="120"
                                    width="60"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      rotate: [0, 360, 360],
                                    }}
                                    transition={{
                                      duration: 3,
                                      repeat: Infinity,
                                      delay: 0.8,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Clock
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="275"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.9,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Espera Tiempo
                                  </motion.text>

                                  {/* Flecha 2 -> 3 */}
                                  <motion.path
                                    d="M 340 135 L 380 135"
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
                                      delay: 1,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 3. Envía encuesta de satisfacción */}
                                  <motion.rect
                                    x="380"
                                    y="105"
                                    width="140"
                                    height="60"
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
                                      delay: 1.2,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="415"
                                    y="120"
                                    width="70"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      y: [0, -3, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.3,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Mail
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="450"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 1.4,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Envía Encuesta
                                  </motion.text>

                                  {/* Flecha 3 -> 4 hacia abajo */}
                                  <motion.path
                                    d="M 450 165 Q 450 185 450 205"
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
                                      delay: 1.6,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 4. Cliente responde la encuesta */}
                                  <motion.rect
                                    x="380"
                                    y="205"
                                    width="140"
                                    height="60"
                                    rx="4"
                                    fill="var(--neon-red)"
                                    opacity="0.08"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.08, 0.12, 0.08] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.8,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Estrellas de satisfacción */}
                                  {[0, 1, 2, 3, 4].map((i) => (
                                    <motion.text
                                      key={i}
                                      x={415 + i * 15}
                                      y="240"
                                      fill="var(--neon-red)"
                                      fontSize="16"
                                      initial={{ opacity: 0, scale: 0 }}
                                      animate={{
                                        opacity: [0, 1, 1],
                                        scale: [0, 1.2, 1],
                                      }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 1.9 + i * 0.1,
                                        repeatDelay: 0.5,
                                      }}
                                    >
                                      ★
                                    </motion.text>
                                  ))}
                                  <motion.text
                                    x="450"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Responde
                                  </motion.text>

                                  {/* Flecha 4 -> 5 hacia la derecha */}
                                  <motion.path
                                    d="M 520 235 L 590 235"
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
                                      delay: 2.2,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 5. Sistema analiza si está satisfecho */}
                                  <motion.rect
                                    x="590"
                                    y="205"
                                    width="150"
                                    height="60"
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
                                      delay: 2.4,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="630"
                                    y="220"
                                    width="70"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 2.5,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Brain
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="665"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2.6,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Analiza
                                  </motion.text>

                                  {/* Flecha 5 -> 6 hacia arriba */}
                                  <motion.path
                                    d="M 665 205 Q 665 185 665 165"
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
                                      delay: 2.8,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 6. Invita a Google Maps */}
                                  <motion.rect
                                    x="580"
                                    y="105"
                                    width="170"
                                    height="60"
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
                                      delay: 3,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Icono de Google Maps (pin de ubicación) */}
                                  <motion.circle
                                    cx="665"
                                    cy="135"
                                    r="12"
                                    fill="var(--neon-red)"
                                    opacity="0.3"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                      opacity: [0, 0.3, 0.3],
                                      scale: [0, 1.2, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 3.1,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.path
                                    d="M 665 123 L 665 135 L 657 135"
                                    fill="var(--neon-red)"
                                    opacity="0.8"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.8, 0.8] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 3.2,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.text
                                    x="665"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 3.3,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Invita a google
                                  </motion.text>
                                </svg>
                              </div>
                            </>
                          ) : producto.titulo === "InvoicePro" ? (
                            <>
                              {/* Vista Móvil - Timeline Vertical (igual que otros productos) */}
                              <div className="md:hidden space-y-6">
                                {producto.diagramaFlujo.map((paso, idx) => {
                                  const Icon = getIconForStep(paso, idx);
                                  return (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-4"
                                    >
                                      <div className="flex-shrink-0 relative">
                                        <div className="w-12 h-12 rounded-full bg-black border-2 border-[var(--neon-red)] flex items-center justify-center">
                                          <Icon
                                            size={20}
                                            style={{ color: "#ffffff" }}
                                            strokeWidth={1.5}
                                          />
                                        </div>
                                        {idx <
                                          producto.diagramaFlujo.length - 1 && (
                                          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-0.5 h-8 bg-white/20"></div>
                                        )}
                                      </div>
                                      <div className="flex-1 pt-2">
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                          <span
                                            className="text-[var(--neon-red)] text-lg font-bold mr-2"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                            }}
                                          >
                                            {String(idx + 1).padStart(2, "0")}
                                          </span>
                                          <p
                                            className="text-white/90 text-sm leading-relaxed inline"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                              fontWeight: 300,
                                            }}
                                          >
                                            {paso}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              {/* Animación SVG - Solo Desktop */}
                              <div className="hidden md:flex w-full items-center justify-center py-8 px-4">
                                <svg
                                  viewBox="0 0 1000 300"
                                  className="h-auto w-full"
                                  style={{ minHeight: "300px" }}
                                  preserveAspectRatio="xMidYMid meet"
                                >
                                  {/* 1. Se registra una nueva venta o pedido */}
                                  <motion.rect
                                    x="50"
                                    y="100"
                                    width="120"
                                    height="70"
                                    rx="4"
                                    fill="none"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    opacity="0.2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.2, 0.2] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="75"
                                    y="115"
                                    width="70"
                                    height="40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [0, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.2,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Package
                                        className="w-7 h-7 md:w-8 md:h-8"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="110"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.3,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Nueva Venta
                                  </motion.text>

                                  {/* Flecha 1 -> 2 */}
                                  <motion.path
                                    d="M 170 135 L 210 135"
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
                                      delay: 0.5,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 2. El sistema toma todos los datos necesarios */}
                                  <motion.rect
                                    x="210"
                                    y="105"
                                    width="130"
                                    height="60"
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
                                      delay: 0.7,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="245"
                                    y="120"
                                    width="60"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 0.8,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Database
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="275"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.9,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Toma Datos
                                  </motion.text>

                                  {/* Flecha 2 -> 3 */}
                                  <motion.path
                                    d="M 340 135 L 380 135"
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
                                      delay: 1,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 3. Aplica el diseño de factura personalizado */}
                                  <motion.rect
                                    x="380"
                                    y="105"
                                    width="150"
                                    height="60"
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
                                      delay: 1.2,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Documento con diseño */}
                                  <motion.rect
                                    x="420"
                                    y="120"
                                    width="70"
                                    height="30"
                                    rx="2"
                                    fill="var(--neon-red)"
                                    opacity="0.2"
                                    stroke="var(--neon-red)"
                                    strokeWidth="1.5"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                      opacity: [0, 0.2, 0.2],
                                      scale: [0.8, 1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.3,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Líneas del documento */}
                                  {[128, 135, 142].map((y, i) => (
                                    <motion.line
                                      key={i}
                                      x1="425"
                                      y1={y}
                                      x2="485"
                                      y2={y}
                                      stroke="var(--neon-red)"
                                      strokeWidth="1"
                                      opacity="0.5"
                                      initial={{ opacity: 0, pathLength: 0 }}
                                      animate={{
                                        opacity: [0, 0.5, 0.5],
                                        pathLength: [0, 1, 1],
                                      }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 1.4 + i * 0.1,
                                        repeatDelay: 0.5,
                                      }}
                                    />
                                  ))}
                                  <motion.text
                                    x="455"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 1.5,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Aplica Diseño
                                  </motion.text>

                                  {/* Flecha 3 -> 4 */}
                                  <motion.path
                                    d="M 530 135 L 570 135"
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
                                      delay: 1.7,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 4. Crea el PDF profesional */}
                                  <motion.rect
                                    x="570"
                                    y="105"
                                    width="120"
                                    height="60"
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
                                      delay: 1.9,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="595"
                                    y="120"
                                    width="70"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [0.8, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 2,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <FileText
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="630"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2.1,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Crea PDF
                                  </motion.text>

                                  {/* Flecha 4 -> 5 hacia abajo */}
                                  <motion.path
                                    d="M 630 165 Q 630 185 630 205"
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
                                      delay: 2.3,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 5. Busca o crea la carpeta del cliente */}
                                  <motion.rect
                                    x="550"
                                    y="205"
                                    width="160"
                                    height="60"
                                    rx="4"
                                    fill="var(--neon-red)"
                                    opacity="0.08"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.08, 0.12, 0.08] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 2.5,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Icono de carpeta */}
                                  <motion.path
                                    d="M 600 220 L 600 240 L 680 240 L 680 225 L 665 220 Z"
                                    fill="var(--neon-red)"
                                    opacity="0.3"
                                    stroke="var(--neon-red)"
                                    strokeWidth="1.5"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                      opacity: [0, 0.3, 0.3],
                                      scale: [0.8, 1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 2.6,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.text
                                    x="630"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2.7,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Busca Carpeta
                                  </motion.text>

                                  {/* Flecha 5 -> 6 hacia la derecha */}
                                  <motion.path
                                    d="M 710 235 L 780 235"
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
                                      delay: 2.9,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 6. Guarda el documento con nombre automático */}
                                  <motion.rect
                                    x="780"
                                    y="205"
                                    width="150"
                                    height="60"
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
                                      delay: 3.1,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="820"
                                    y="220"
                                    width="70"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [0, 1.2, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 3.2,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <CheckCircle
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="855"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 3.3,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Guarda PDF
                                  </motion.text>
                                </svg>
                              </div>
                            </>
                          ) : producto.titulo === "SmartScan" ? (
                            <>
                              {/* Vista Móvil - Timeline Vertical (igual que otros productos) */}
                              <div className="md:hidden space-y-6">
                                {producto.diagramaFlujo.map((paso, idx) => {
                                  const Icon = getIconForStep(paso, idx);
                                  return (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-4"
                                    >
                                      <div className="flex-shrink-0 relative">
                                        <div className="w-12 h-12 rounded-full bg-black border-2 border-[var(--neon-red)] flex items-center justify-center">
                                          <Icon
                                            size={20}
                                            style={{ color: "#ffffff" }}
                                            strokeWidth={1.5}
                                          />
                                        </div>
                                        {idx <
                                          producto.diagramaFlujo.length - 1 && (
                                          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-0.5 h-8 bg-white/20"></div>
                                        )}
                                      </div>
                                      <div className="flex-1 pt-2">
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                          <span
                                            className="text-[var(--neon-red)] text-lg font-bold mr-2"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                            }}
                                          >
                                            {String(idx + 1).padStart(2, "0")}
                                          </span>
                                          <p
                                            className="text-white/90 text-sm leading-relaxed inline"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                              fontWeight: 300,
                                            }}
                                          >
                                            {paso}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              {/* Animación SVG - Solo Desktop */}
                              <div className="hidden md:flex w-full items-center justify-center py-8 px-4">
                                <svg
                                  viewBox="0 0 1000 300"
                                  className="h-auto w-full"
                                  style={{ minHeight: "300px" }}
                                  preserveAspectRatio="xMidYMid meet"
                                >
                                  {/* 1. Documento llega por email o WhatsApp */}
                                  <motion.rect
                                    x="50"
                                    y="100"
                                    width="130"
                                    height="70"
                                    rx="4"
                                    fill="none"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    opacity="0.2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.2, 0.2] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="75"
                                    y="115"
                                    width="80"
                                    height="40"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [0, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.2,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full gap-2">
                                      <Mail
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                      <MessageCircle
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="115"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.3,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Recibe Documento
                                  </motion.text>

                                  {/* Flecha 1 -> 2 */}
                                  <motion.path
                                    d="M 180 135 L 220 135"
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
                                      delay: 0.5,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 2. El sistema detecta y descarga el archivo */}
                                  <motion.rect
                                    x="220"
                                    y="105"
                                    width="140"
                                    height="60"
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
                                      delay: 0.7,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="255"
                                    y="120"
                                    width="70"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      y: [0, -3, 0],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 0.8,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Eye
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="290"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 0.9,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Detecta y Descarga
                                  </motion.text>

                                  {/* Flecha 2 -> 3 */}
                                  <motion.path
                                    d="M 360 135 L 400 135"
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
                                      delay: 1,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 3. Lo envía al procesador de inteligencia artificial */}
                                  <motion.rect
                                    x="400"
                                    y="105"
                                    width="160"
                                    height="60"
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
                                      delay: 1.2,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="440"
                                    y="120"
                                    width="80"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.3,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Brain
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="480"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 1.4,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Procesador IA
                                  </motion.text>

                                  {/* Flecha 3 -> 4 hacia abajo */}
                                  <motion.path
                                    d="M 480 165 Q 480 185 480 205"
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
                                      delay: 1.6,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 4. La IA lee y extrae la información */}
                                  <motion.rect
                                    x="400"
                                    y="205"
                                    width="160"
                                    height="60"
                                    rx="4"
                                    fill="var(--neon-red)"
                                    opacity="0.08"
                                    stroke="var(--neon-red)"
                                    strokeWidth="2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.08, 0.12, 0.08] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.8,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Ondas de lectura */}
                                  {[0, 1, 2].map((i) => (
                                    <motion.circle
                                      key={i}
                                      cx="480"
                                      cy="235"
                                      r={15 + i * 8}
                                      fill="none"
                                      stroke="var(--neon-red)"
                                      strokeWidth="1.5"
                                      opacity="0.3"
                                      initial={{ opacity: 0, scale: 0 }}
                                      animate={{
                                        opacity: [0, 0.3, 0],
                                        scale: [0, 1.5, 1.5],
                                      }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: 1.9 + i * 0.2,
                                        repeatDelay: 0.5,
                                      }}
                                    />
                                  ))}
                                  <motion.foreignObject
                                    x="450"
                                    y="220"
                                    width="60"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 2,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <FileText
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="480"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2.1,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Lee y Extrae
                                  </motion.text>

                                  {/* Flecha 4 -> 5 hacia la derecha */}
                                  <motion.path
                                    d="M 560 235 L 630 235"
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
                                      delay: 2.3,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 5. Organiza los datos de forma clara */}
                                  <motion.rect
                                    x="630"
                                    y="205"
                                    width="150"
                                    height="60"
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
                                      delay: 2.5,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  <motion.foreignObject
                                    x="670"
                                    y="220"
                                    width="70"
                                    height="30"
                                    initial={{ opacity: 0 }}
                                    animate={{
                                      opacity: [0, 1, 1],
                                      scale: [1, 1.1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 2.6,
                                      repeatDelay: 0.5,
                                    }}
                                  >
                                    <div className="flex items-center justify-center w-full h-full">
                                      <Filter
                                        className="w-6 h-6 md:w-7 md:h-7"
                                        style={{ color: "var(--neon-red)" }}
                                      />
                                    </div>
                                  </motion.foreignObject>
                                  <motion.text
                                    x="705"
                                    y="285"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 2.7,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Organiza Datos
                                  </motion.text>

                                  {/* Flecha 5 -> 6 hacia arriba */}
                                  <motion.path
                                    d="M 705 205 Q 705 185 705 165"
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
                                      delay: 2.9,
                                      repeatDelay: 0.5,
                                      ease: "easeInOut",
                                    }}
                                  />

                                  {/* 6. Los guarda en Google Sheets o tu sistema */}
                                  <motion.rect
                                    x="620"
                                    y="105"
                                    width="170"
                                    height="60"
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
                                      delay: 3.1,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Icono de Google Sheets (rectángulo verde) */}
                                  <motion.rect
                                    x="680"
                                    y="120"
                                    width="50"
                                    height="30"
                                    rx="2"
                                    fill="#0f9d58"
                                    opacity="0.8"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                      opacity: [0, 0.8, 0.8],
                                      scale: [0.8, 1, 1],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 3.2,
                                      repeatDelay: 0.5,
                                    }}
                                  />
                                  {/* Líneas de tabla */}
                                  {[128, 135, 142].map((y, i) => (
                                    <motion.line
                                      key={i}
                                      x1="685"
                                      y1={y}
                                      x2="725"
                                      y2={y}
                                      stroke="white"
                                      strokeWidth="1"
                                      opacity="0.6"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: [0, 0.6, 0.6] }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        delay: 3.3 + i * 0.1,
                                        repeatDelay: 0.5,
                                      }}
                                    />
                                  ))}
                                  <motion.text
                                    x="705"
                                    y="195"
                                    fill="var(--neon-red)"
                                    fontSize="12"
                                    fontWeight="600"
                                    textAnchor="middle"
                                    opacity="0.7"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: [0, 0.7, 0.7] }}
                                    transition={{
                                      duration: 1.5,
                                      repeat: Infinity,
                                      delay: 3.4,
                                      repeatDelay: 0.5,
                                    }}
                                    className="text-sm md:text-base"
                                    style={{
                                      fontFamily: "var(--font-heading)",
                                    }}
                                  >
                                    Guarda en Sheets
                                  </motion.text>
                                </svg>
                              </div>
                            </>
                          ) : (
                            <>
                              {/* Vista Móvil - Vertical */}
                              <div className="md:hidden space-y-6">
                                {producto.diagramaFlujo.map((paso, idx) => {
                                  const Icon = getIconForStep(paso, idx);
                                  return (
                                    <motion.div
                                      key={idx}
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-4"
                                    >
                                      <div className="flex-shrink-0 relative">
                                        <div className="w-12 h-12 rounded-full bg-black border-2 border-[var(--neon-red)] flex items-center justify-center">
                                          <Icon
                                            size={20}
                                            style={{ color: "#ffffff" }}
                                            strokeWidth={1.5}
                                          />
                                        </div>
                                        {idx <
                                          producto.diagramaFlujo.length - 1 && (
                                          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-0.5 h-8 bg-white/20"></div>
                                        )}
                                      </div>
                                      <div className="flex-1 pt-2">
                                        <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                                          <span
                                            className="text-[var(--neon-red)] text-lg font-bold mr-2"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                            }}
                                          >
                                            {String(idx + 1).padStart(2, "0")}
                                          </span>
                                          <p
                                            className="text-white/90 text-sm leading-relaxed inline"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                              fontWeight: 300,
                                            }}
                                          >
                                            {paso}
                                          </p>
                                        </div>
                                      </div>
                                    </motion.div>
                                  );
                                })}
                              </div>

                              {/* Vista Desktop - Timeline Horizontal Ancho Completo */}
                              <div
                                className="hidden md:block relative w-full"
                                style={{ minHeight: "300px", height: "300px" }}
                              >
                                {/* Horizontal Timeline Bar - Línea punteada central */}
                                <div
                                  className="absolute left-0 right-0"
                                  style={{
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    height: "2px",
                                    borderTop:
                                      "2px dashed rgba(255, 255, 255, 0.3)",
                                    zIndex: 0,
                                  }}
                                />

                                {/* Timeline Steps Grid */}
                                <div
                                  className="grid relative gap-4 w-full"
                                  style={{
                                    gridTemplateColumns: `repeat(${producto.diagramaFlujo.length}, minmax(0, 1fr))`,
                                    height: "300px",
                                    zIndex: 10,
                                  }}
                                >
                                  {producto.diagramaFlujo.map((paso, idx) => {
                                    const isAbove = idx % 2 === 0; // Alterna arriba/abajo
                                    const Icon = getIconForStep(paso, idx);

                                    return (
                                      <div
                                        key={idx}
                                        className="relative flex flex-col items-center justify-center"
                                      >
                                        {/* Content Box */}
                                        <div
                                          className="flex flex-col items-center text-center space-y-2 px-2"
                                          style={{
                                            position: "absolute",
                                            top: isAbove ? "0" : "auto",
                                            bottom: isAbove ? "auto" : "0",
                                            width: "100%",
                                            maxWidth: "250px",
                                          }}
                                        >
                                          {/* Número del paso */}
                                          <span
                                            className="text-3xl md:text-4xl text-white tabular-nums"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                              fontWeight: 900,
                                              color: "var(--neon-red)",
                                            }}
                                          >
                                            {String(idx + 1).padStart(2, "0")}
                                          </span>
                                          {/* Texto del paso */}
                                          <p
                                            className="text-xs md:text-sm text-white/90 leading-relaxed"
                                            style={{
                                              fontFamily: "var(--font-heading)",
                                              fontWeight: 300,
                                            }}
                                          >
                                            {paso}
                                          </p>
                                        </div>

                                        {/* Vertical Line connecting to center */}
                                        <div
                                          className="absolute left-1/2 w-px bg-white/20"
                                          style={{
                                            top: isAbove ? "90px" : "50%",
                                            bottom: isAbove ? "50%" : "90px",
                                            transform: "translateX(-50%)",
                                            zIndex: 5,
                                          }}
                                        />

                                        {/* Circle on center line with Icon */}
                                        <div
                                          className="absolute left-1/2 flex items-center justify-center w-12 h-12 md:w-12 md:h-12 rounded-full bg-black border-2"
                                          style={{
                                            top: "50%",
                                            transform: "translate(-50%, -50%)",
                                            borderColor: "var(--neon-red)",
                                            zIndex: 20,
                                            backgroundColor: "oklch(0.145 0 0)",
                                          }}
                                        >
                                          <Icon
                                            size={18}
                                            style={{ color: "#ffffff" }}
                                            strokeWidth={1.5}
                                          />
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicadores numéricos - Debajo del slider */}
        <div
          className="flex items-center justify-center"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <div className="flex items-center gap-3 bg-black/90 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 shadow-2xl">
            {productosAutomatizacion.map((_, index) => (
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
                aria-label={`Ir al producto ${index + 1}`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de Desarrollo a Medida - Título Fullscreen */}
      <section
        className="relative bg-gradient-to-br from-black via-[#0a0a0a] to-black overflow-hidden flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[var(--neon-red)]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[var(--neon-red)]/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            {/* Título Gigante */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2
                className="text-white uppercase tracking-tighter leading-none"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  fontSize: "clamp(3rem, 12vw, 10rem)",
                }}
              >
                {desarrolloAMedida.titulo}{" "}
                <span style={{ color: "var(--neon-red)" }}>
                  {desarrolloAMedida.tituloDestacado}
                </span>
              </h2>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Descripción y Cierre - Fullscreen */}
      <section
        className="relative bg-black overflow-hidden flex items-center justify-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Background effect */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--neon-red)]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[var(--neon-red)]/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-6 relative z-10 mb-8">
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
              {desarrolloAMedida.descripcion}
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
                Tu equipo de{" "}
                <span style={{ color: "var(--neon-red)" }}>IA</span> está listo.
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
