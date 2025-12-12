export interface ServicioDesarrolloWeb {
  id: string;
  titulo: string;
  descripcionBreve: string;
  diagramaFlujo: string[];
  versionCorta: string;
}

export const serviciosDesarrolloWeb: ServicioDesarrolloWeb[] = [
  {
    id: "sitios-corporativos",
    titulo: "Sitios Corporativos",
    descripcionBreve:
      "Creamos sitios web profesionales que reflejan la identidad de tu marca y convierten visitantes en clientes. Diseño moderno, responsive y optimizado para buscadores. Contáctanos para más información.",
    diagramaFlujo: [
      "Analizamos tu marca y objetivos de negocio",
      "Diseñamos la estructura y experiencia de usuario",
      "Desarrollamos el sitio con las últimas tecnologías",
      "Optimizamos para SEO y velocidad de carga",
      "Probamos en todos los dispositivos",
      "Lanzamos y te enseñamos a gestionarlo",
    ],
    versionCorta:
      "Sitios web corporativos profesionales que reflejan tu marca y convierten visitantes en clientes.",
  },
  {
    id: "ecommerce",
    titulo: "Ecommerce",
    descripcionBreve:
      "Tiendas online completas con pasarelas de pago integradas, gestión de inventario y pedidos automática. Desde productos físicos hasta servicios digitales, creamos la tienda perfecta para tu negocio. Contáctanos para más información.",
    diagramaFlujo: [
      "Configuramos tu catálogo de productos",
      "Integramos pasarelas de pago seguras",
      "Conectamos con sistemas de inventario",
      "Configuramos envíos y facturación",
      "Optimizamos la experiencia de compra",
      "Lanzamos y monitoreamos las ventas",
    ],
    versionCorta:
      "Tiendas online completas con pasarelas de pago, gestión de inventario y experiencia de compra optimizada.",
  },
  {
    id: "landing-pages",
    titulo: "Landing Pages",
    descripcionBreve:
      "Páginas de aterrizaje de alto impacto diseñadas para convertir visitantes en leads o ventas. Diseño enfocado en conversión, formularios optimizados y integración con tus herramientas de marketing. Contáctanos para más información.",
    diagramaFlujo: [
      "Definimos el objetivo de conversión",
      "Diseñamos la página enfocada en resultados",
      "Creamos formularios y llamados a la acción",
      "Integramos con CRM y herramientas de email",
      "Optimizamos para máxima conversión",
      "Lanzamos y analizamos el rendimiento",
    ],
    versionCorta:
      "Páginas de aterrizaje optimizadas para convertir visitantes en leads o ventas con diseño enfocado en resultados.",
  },
  {
    id: "rediseño-web",
    titulo: "Rediseño Web",
    descripcionBreve:
      "Modernizamos tu sitio web existente mejorando diseño, velocidad, SEO y experiencia de usuario. Mantenemos tu contenido pero lo llevamos al siguiente nivel con las últimas tecnologías y mejores prácticas. Contáctanos para más información.",
    diagramaFlujo: [
      "Analizamos tu sitio actual y métricas",
      "Identificamos oportunidades de mejora",
      "Rediseñamos manteniendo tu identidad",
      "Optimizamos velocidad y SEO",
      "Migramos contenido y funcionalidades",
      "Lanzamos el nuevo sitio mejorado",
    ],
    versionCorta:
      "Modernizamos tu sitio web mejorando diseño, velocidad, SEO y experiencia de usuario con las últimas tecnologías.",
  },
];

export const desarrolloWebAMedida = {
  titulo: "Sistemas Web a",
  tituloDestacado: "Medida",
  descripcion:
    "Cuando necesitas algo más complejo que una web tradicional, creamos soluciones personalizadas para tu negocio. Desarrollamos portales con funcionalidades avanzadas, aplicaciones web que funcionan como apps y sistemas escalables que crecen contigo.",
  servicios: [
    {
      titulo: "Portales Web",
      descripcion:
        "Plataformas web complejas con múltiples funcionalidades, áreas de miembros, dashboards personalizados y sistemas de gestión de contenido avanzados. Soluciones escalables para empresas en crecimiento.",
    },
    {
      titulo: "Web Apps",
      descripcion:
        "Aplicaciones web progresivas que funcionan como apps nativas. Acceso rápido, funcionamiento offline y notificaciones push. Perfectas para mejorar la experiencia de tus usuarios en cualquier dispositivo.",
    },
  ],
  cierre: "Tu solución web personalizada está lista. Hablemos de tu proyecto.",
};
