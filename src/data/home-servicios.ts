export interface HomeServicio {
  num: string;
  titulo: string;
  desc: string;
  nota?: string;
  href: string;
  // Precio de referencia en USD ("desde"). Es la misma cifra que figura en el FAQ
  // de cada página de servicio y en el FAQ de la home.
  desde: number;
  unidad?: "mes";
  // Para el schema Service de cada página.
  tipoServicio: string[];
}

export const homeServicios: HomeServicio[] = [
  {
    num: "01",
    titulo: "Desarrollo web & e-commerce",
    desc: "Sitios y tiendas online hechas para vender, con temas propios basados en bloques (Gutenberg): catálogo, checkout y pagos que funcionan bien en cualquier dispositivo.",
    href: "/servicios/desarrollo-web/",
    desde: 300,
    tipoServicio: ["Desarrollo web", "E-commerce", "WordPress"],
  },
  {
    num: "02",
    titulo: "Mantenimiento & soporte técnico",
    desc: "Actualizaciones de WordPress y plugins, backups, monitoreo y seguridad, y ajustes a medida. Tu sitio actualizado, seguro y sin sorpresas.",
    href: "/servicios/mantenimiento/",
    desde: 100,
    unidad: "mes",
    tipoServicio: ["Mantenimiento web", "Soporte técnico", "Seguridad web"],
  },
  {
    num: "03",
    titulo: "Optimización",
    desc: "Optimización profunda de velocidad, estrategias de caché a medida y limpieza de código innecesario para cumplir con las Core Web Vitals que Google mide.",
    href: "/servicios/optimizacion/",
    desde: 300,
    tipoServicio: ["Optimización de velocidad", "Core Web Vitals"],
  },
  {
    num: "04",
    titulo: "Auditoría técnica de SEO, GEO & AEO",
    desc: "Datos estructurados, rastreabilidad, indexación y arquitectura del sitio alineados con Google y con los motores de IA: ChatGPT, Gemini, Claude y Perplexity.",
    nota: "Te entregamos la auditoría con todo lo detectado para que tu equipo lo corrija. Si preferís que lo hagamos nosotros, te confirmamos un precio cerrado por esas mejoras.",
    href: "/servicios/auditoria-tecnica/",
    desde: 100,
    tipoServicio: ["Auditoría SEO técnica", "GEO", "AEO"],
  },
  {
    num: "05",
    titulo: "Automatización con n8n",
    desc: "Flujos a medida que conectan APIs, herramientas de analítica y tu backend para sacarte las tareas manuales de encima.",
    href: "/servicios/automatizaciones/",
    desde: 300,
    tipoServicio: ["Automatización de procesos", "Integraciones por API"],
  },
];
