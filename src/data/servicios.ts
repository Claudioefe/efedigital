export interface Servicio {
  id: string;
  titulo: string;
  tituloDestacado?: string;
  descripcion: string;
  caracteristicas: string[];
  enlace: string;
  icono: string;
}

export const servicios: Servicio[] = [
  {
    id: "desarrollo-web",
    titulo: "Desarrollo Web &",
    tituloDestacado: "Ecommerce",
    descripcion:
      "Creamos sitios web profesionales y tiendas online que convierten visitantes en clientes. Diseñamos experiencias digitales optimizadas que impulsan tu negocio.",
    caracteristicas: [
      "Sitios web corporativos y landing pages de alto impacto",
      "Tiendas online con pasarelas de pago integradas",
      "Diseño responsivo optimizado para todos los dispositivos",
      "SEO optimizado",
      "Panel de administración, fácil de usar",
      "Integración con sistemas de gestión y de análisis",
    ],
    enlace: "/servicios/desarrollo-web",
    icono: "code",
  },
  {
    id: "automatizaciones",
    titulo: "Automatización",
    tituloDestacado: "Inteligente",
    descripcion:
      "Liberá tiempo y recursos automatizando tareas repetitivas. Creamos flujos de trabajo inteligentes que funcionan 24/7 sin intervención humana.",
    caracteristicas: [
      "Notificaciones automáticas por WhatsApp, Email y otros canales",
      "Sincronización de datos entre múltiples plataformas",
      "Automatización de reportes y análisis de datos",
      "Gestión automática de inventarios y pedidos",
      "Flujos de trabajo personalizados para tu negocio",
      "Procesamiento inteligente de documentos con IA",
    ],
    enlace: "/servicios/automatizaciones",
    icono: "zap",
  },
  {
    id: "desarrollo-medida",
    titulo: "Desarrollo a",
    tituloDestacado: "Medida",
    descripcion:
      "Desarrollamos sistemas personalizados, agentes de IA y asistentes inteligentes que se adaptan a tu forma de trabajar y escalan con tu crecimiento.",
    caracteristicas: [
      "Agentes de IA que atienden consultas 24/7",
      "Asistentes inteligentes para análisis de datos masivos",
      "Sistemas personalizados para procesos específicos",
      "Integraciones complejas entre múltiples plataformas",
      "Procesamiento avanzado con inteligencia artificial",
      "Consultoría técnica y desarrollo de software a medida",
    ],
    enlace: "/servicios/automatizaciones",
    icono: "cpu",
  },
];
