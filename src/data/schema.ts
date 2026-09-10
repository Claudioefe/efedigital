import { homeServicios } from "./home-servicios";
import { herramientas } from "./home-herramientas";

const SITE_URL = "https://efedigital.com.ar";
const SOCIAL_IMAGE = `${SITE_URL}/efedigital-social-og.png`;

// Netlify sirve las rutas como directorio y redirige /blog -> /blog/, así que las URLs
// del schema tienen que usar la forma con barra para coincidir con los canonical.
export const pageUrl = (path: string) =>
  new URL(path.endsWith("/") ? path : `${path}/`, SITE_URL).toString();

// Derivado de los datos reales del home, para que el schema nunca quede
// desactualizado respecto de lo que el sitio muestra.
const knowsAboutFromStack = herramientas.flatMap((h) => h.items.split(",").map((s) => s.trim()));
const knowsAbout = Array.from(new Set([...homeServicios.map((s) => s.titulo), ...knowsAboutFromStack]));

const serviciosOfferCatalog = {
  "@type": "OfferCatalog",
  name: "Servicios",
  itemListElement: homeServicios.map((s) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: s.titulo,
      description: s.desc,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
    },
  })),
};

export const organizationSchema = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Efe Digital",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon.png`,
    width: 1024,
    height: 1024,
  },
  image: SOCIAL_IMAGE,
  description:
    "Sistemas que trabajan solos. Desarrollo web, automatización e inteligencia artificial para tu negocio. E-commerce, integraciones API y soluciones a medida.",
  email: "claudioefe@icloud.com",
  telephone: "+5493764279444",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Posadas",
    addressRegion: "Misiones",
    addressCountry: "AR",
  },
  areaServed: "Worldwide",
  sameAs: ["https://www.instagram.com/efedigital/"],
  priceRange: "$$",
  knowsAbout,
  hasOfferCatalog: serviciosOfferCatalog,
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Efe Digital",
  description:
    "Sistemas que trabajan solos. Desarrollo web, automatización e inteligencia artificial para tu negocio.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "es-AR",
};

// Usados solo en /servicios/* (noindex, sin enlazar desde la navegación).
// Describen el detalle de esas páginas puntuales, no el contenido del home.
export const desarrolloWebServiceSchema = {
  "@type": "Service",
  "@id": `${SITE_URL}/servicios/desarrollo-web/#service`,
  name: "Desarrollo Web & Ecommerce",
  description:
    "Creamos sitios web profesionales y tiendas online que convierten visitantes en clientes. Diseño responsivo, SEO optimizado y panel de administración fácil de usar.",
  url: pageUrl("/servicios/desarrollo-web"),
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: "Worldwide",
  serviceType: ["Web Development", "E-commerce", "Web Design", "Landing Pages"],
  offers: [
    {
      "@type": "Offer",
      name: "Sitios Corporativos",
      description:
        "Sitios web profesionales que reflejan la identidad de tu marca y convierten visitantes en clientes.",
    },
    {
      "@type": "Offer",
      name: "Ecommerce",
      description:
        "Tiendas online completas con pasarelas de pago integradas y gestión de inventario.",
    },
    {
      "@type": "Offer",
      name: "Landing Pages",
      description:
        "Páginas de alto impacto diseñadas para convertir visitantes en clientes o ventas.",
    },
    {
      "@type": "Offer",
      name: "Rediseño Web",
      description:
        "Modernizamos tu sitio web mejorando diseño, velocidad, SEO y experiencia de usuario.",
    },
  ],
};

export const automatizacionesServiceSchema = {
  "@type": "Service",
  "@id": `${SITE_URL}/servicios/automatizaciones/#service`,
  name: "Automatización Inteligente & IA",
  description:
    "Liberá tiempo y recursos automatizando tareas repetitivas. Flujos de trabajo inteligentes que funcionan 24/7 sin intervención humana. Agentes de IA, asistentes virtuales y procesamiento inteligente de documentos.",
  url: pageUrl("/servicios/automatizaciones"),
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: "Worldwide",
  serviceType: ["Business Automation", "Artificial Intelligence", "Workflow Automation", "AI Agents"],
  offers: [
    {
      "@type": "Offer",
      name: "NotifyPro",
      description:
        "Notificaciones automáticas por WhatsApp, Email o Slack cada vez que algo importante pasa en tu negocio.",
    },
    {
      "@type": "Offer",
      name: "SheetSync",
      description:
        "Sincronización automática de datos en Google Sheets, manteniendo tus registros actualizados.",
    },
    {
      "@type": "Offer",
      name: "CartSaver",
      description: "Recuperación de carritos abandonados con mensajes automáticos y descuentos.",
    },
    {
      "@type": "Offer",
      name: "ReviewBoost",
      description: "Sistema automático de encuestas y gestión de reseñas en Google Maps.",
    },
    {
      "@type": "Offer",
      name: "InvoicePro",
      description:
        "Generación automática de facturas y remitos en PDF con organización en Google Drive.",
    },
    {
      "@type": "Offer",
      name: "SmartScan",
      description: "Lectura automática de documentos con IA y extracción inteligente de información.",
    },
    {
      "@type": "Offer",
      name: "Desarrollo a Medida con IA",
      description:
        "Agentes de IA personalizados, asistentes inteligentes y sistemas que escalan tu equipo sin contratar más personal.",
    },
  ],
};

export const contactPageSchema = {
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contacto/#page`,
  url: pageUrl("/contacto"),
  name: "Contacto - Efe Digital",
  description:
    "Contactanos para automatizar tu negocio. Desarrollo web, e-commerce, automatización e inteligencia artificial.",
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export function buildGraph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

const stripHtml = (html: string) => html.replace(/<[^>]+>/g, "").trim();

export function buildFaqPageSchema(faqs: { pregunta: string; respuesta: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(f.respuesta),
      },
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: pageUrl(item.path),
    })),
  };
}

export { SOCIAL_IMAGE };
