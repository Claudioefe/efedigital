import { homeServicios, type HomeServicio } from "./home-servicios";
import { herramientas } from "./home-herramientas";

const SITE_URL = "https://efedigital.com.ar";
const SOCIAL_IMAGE = `${SITE_URL}/efedigital-social-og.png`;

// Misma frase que la meta description del home: una sola versión en todo el sitio.
export const SITE_DESCRIPTION =
  "Desarrollo web, e-commerce y automatización a medida. Sitios rápidos, sistemas que ahorran tiempo y presupuesto cerrado desde la primera charla.";

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
      url: pageUrl(s.href),
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: "Worldwide",
    },
  })),
};

export const organizationSchema = {
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#organization`,
  name: "Efe Digital",
  alternateName: "efedigital",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon.png`,
    width: 1024,
    height: 1024,
  },
  image: SOCIAL_IMAGE,
  description: SITE_DESCRIPTION,
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
  alternateName: "efedigital",
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "es-AR",
};

// Un Service por página de servicio, generado desde la misma fuente que las tarjetas
// del home y el menú (home-servicios.ts), así nombre, descripción y precio "desde"
// nunca se desalinean de lo que dice la página.
export function buildServiceSchema(s: HomeServicio) {
  const url = pageUrl(s.href);
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    name: s.titulo,
    description: s.desc,
    url,
    serviceType: s.tipoServicio,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: "Worldwide",
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        minPrice: s.desde,
        ...(s.unidad === "mes" ? { unitCode: "MON", unitText: "mes" } : {}),
      },
    },
  };
}

export const CONTACT_DESCRIPTION =
  "Escribinos por formulario, mail o WhatsApp y contanos tu caso de desarrollo web, e-commerce o automatización. Te respondemos en menos de 24 horas.";

export const contactPageSchema = {
  "@type": "ContactPage",
  "@id": `${SITE_URL}/contacto/#page`,
  url: pageUrl("/contacto"),
  name: "Contacto - Efe Digital",
  description: CONTACT_DESCRIPTION,
  mainEntity: { "@id": `${SITE_URL}/#organization` },
};

export function buildGraph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

const stripHtml = (html: string) => html.replace(/<[^>]+>/g, "").trim();

// El @id lleva la URL de la página: con uno solo (/#faq) para todas, el home y cada
// servicio declaraban "la misma" entidad con preguntas distintas.
export function buildFaqPageSchema(faqs: { pregunta: string; respuesta: string }[], path = "/") {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl(path)}#faq`,
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
