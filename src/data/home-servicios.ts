export interface HomeServicio {
  num: string;
  titulo: string;
  desc: string;
  nota?: string;
}

export const homeServicios: HomeServicio[] = [
  {
    num: "01",
    titulo: "Desarrollo web & e-commerce",
    desc: "Sitios y tiendas online hechas para vender, con temas propios basados en bloques (Gutenberg): catálogo, checkout y pagos que funcionan bien en cualquier dispositivo.",
  },
  {
    num: "02",
    titulo: "Mantenimiento & soporte técnico",
    desc: "Plugins personalizados, integraciones de API, optimización de base de datos y migraciones de servidor sin caídas. Tu sitio actualizado, seguro y sin sorpresas.",
  },
  {
    num: "03",
    titulo: "Optimización",
    desc: "Optimización profunda de velocidad, estrategias de caché a medida y limpieza de código innecesario para cumplir con las Core Web Vitals que Google mide.",
  },
  {
    num: "04",
    titulo: "Auditoría técnica de SEO, GEO & AEO",
    desc: "Datos estructurados, rastreabilidad, indexación y arquitectura del sitio alineados con Google y con los motores de IA: ChatGPT, Gemini, Claude y Perplexity.",
    nota: "Te entregamos la auditoría con todo lo detectado para que tu equipo lo corrija. Si preferís que lo hagamos nosotros, te pasamos un presupuesto por esas mejoras.",
  },
  {
    num: "05",
    titulo: "Automatización con n8n",
    desc: "Flujos a medida que conectan APIs, herramientas de analítica y tu backend para sacarte las tareas manuales de encima.",
  },
];
