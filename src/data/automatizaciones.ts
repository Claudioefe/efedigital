export interface ProductoAutomatizacion {
  titulo: string;
  descripcionBreve: string;
  queHace: string[];
  queIncluye: string[];
  diagramaFlujo: string[];
  versionCorta: string;
  precio?: string;
  proceso?: string;
  noIncluye?: string[];
}

export const productosAutomatizacion: ProductoAutomatizacion[] = [
  {
    titulo: "NotifyPro",
    descripcionBreve:
      "Recibe notificaciones automáticas por WhatsApp, Email o Slack cada vez que algo importante pasa en tu negocio. Tu equipo y clientes siempre estarán informados al instante. Contáctanos para más información.",
    queHace: [
      "Envía notificaciones instantáneas por WhatsApp, Email o Slack",
      "Se activa automáticamente cuando ocurre un evento en tu sistema",
      "Usa plantillas de mensajes que puedes personalizar",
      "Funciona con varias plataformas al mismo tiempo",
      "Guarda un historial de todas las notificaciones enviadas",
    ],
    queIncluye: [
      "Conexión con WhatsApp configurada (según tu proveedor)",
      "Plantillas de mensajes personalizadas",
      "Sistema de conexión automática configurado",
      "Pruebas completas para asegurar que funciona",
      "Video tutorial para que sepas cómo usarlo",
    ],
    diagramaFlujo: [
      "Algo importante pasa en tu sistema",
      "El sistema detecta el evento automáticamente",
      "Prepara el mensaje con la información",
      "Elige el canal correcto (WhatsApp, Email o Slack)",
      "Envía la notificación al instante",
      "Guarda el registro en el historial",
    ],
    versionCorta:
      "Sistema que envía notificaciones automáticas por WhatsApp, Email o Slack cada vez que algo importante pasa en tu negocio, manteniendo a todos informados.",
    precio: "$130",
    proceso:
      "Revisamos tus necesidades → creamos las plantillas → conectamos todo → probamos → te enseñamos cómo funciona (1-3 horas)",
    noIncluye: [
      "Costos de servicios de WhatsApp",
      "Números de teléfono o cuentas externas",
      "Cambios en las plantillas sin recotizar",
    ],
  },
  {
    titulo: "SheetSync",
    descripcionBreve:
      "Cada venta, pedido o registro importante se anota automáticamente en Google Sheets. El sistema organiza todo en las columnas correctas y mantiene un historial completo. Contáctanos para más información.",
    queHace: [
      "Anota información automáticamente en Google Sheets",
      "Agrega nuevas filas cuando ocurre algo nuevo",
      "Organiza la información en las columnas correctas",
      "Verifica que los datos estén bien antes de guardarlos",
      "Mantiene todo organizado y con historial completo",
    ],
    queIncluye: [
      "Configuración de cómo se organizan los datos",
      "Sistema que añade filas automáticamente",
      "Validación para asegurar datos correctos",
      "Formato y estructura personalizados",
      "Video para aprender a usarlo",
    ],
    diagramaFlujo: [
      "Ocurre algo nuevo en tu negocio",
      "El sistema toma la información",
      "Verifica que todo esté correcto",
      "Se conecta con tu Google Sheets",
      "Agrega la nueva fila automáticamente",
      "Confirma que se guardó correctamente",
    ],
    versionCorta:
      "Sistema que anota automáticamente todo en Google Sheets, agregando filas nuevas y manteniendo tus registros actualizados sin que tengas que escribir nada.",
    precio: "$100",
    proceso:
      "Configuramos las columnas → conectamos todo → probamos → te enseñamos con un video (1-2 horas)",
  },
  {
    titulo: "CartSaver",
    descripcionBreve:
      "¿Sabías que la mayoría de clientes abandonan el carrito sin comprar? Este sistema detecta carritos abandonados y envía automáticamente un mensaje con descuento para recuperar la venta. Contáctanos para más información.",
    queHace: [
      "Detecta cuando alguien abandona su carrito de compras",
      "Espera el tiempo que configures antes de enviar el mensaje",
      "Verifica si el cliente ya compró antes de enviar",
      "Crea cupones de descuento automáticamente",
      "Envía mensajes por email o WhatsApp",
      "Te muestra qué tan bien funcionan las campañas",
    ],
    queIncluye: [
      "Configuración de tiempos de espera",
      "Verificación del estado del pedido",
      "Generación automática de cupones de descuento",
      "Envío por email y WhatsApp",
      "Plantillas de mensajes personalizables",
      "Pruebas opcionales para mejorar resultados",
    ],
    diagramaFlujo: [
      "Cliente agrega productos al carrito",
      "Cliente se va sin completar la compra",
      "El sistema espera el tiempo configurado",
      "Verifica si el cliente ya compró",
      "Genera un cupón de descuento",
      "Envía mensaje para recuperar la venta",
    ],
    versionCorta:
      "Sistema que detecta carritos abandonados y envía mensajes automáticos con descuentos para recuperar ventas que se estaban perdiendo.",
    precio: "$200",
    proceso:
      "Configuramos los tiempos → creamos las plantillas → probamos todo (3-6 horas)",
  },
  {
    titulo: "ReviewBoost",
    descripcionBreve:
      "Después de cada venta, tus clientes reciben automáticamente una encuesta. Si están contentos, el sistema los invita a dejar una reseña en Google Maps mejorando tu reputación online. Contáctanos para más información.",
    queHace: [
      "Envía encuestas automáticas después de cada venta",
      "Espera el tiempo perfecto antes de enviar",
      "Analiza si el cliente está satisfecho o no",
      "Si está contento, lo invita a dejar reseña en Google Maps",
      "Gestiona casos de clientes no satisfechos",
      "Recopila todas las respuestas organizadas",
    ],
    queIncluye: [
      "Configuración de cuándo enviar la encuesta",
      "Filtro que detecta el nivel de satisfacción",
      "Envío automático de invitación a reseña",
      "Redirección a Google Maps para dejar reseña",
      "Plantillas de encuesta personalizables",
      "Panel donde ves todos los resultados",
    ],
    diagramaFlujo: [
      "Cliente completa una compra",
      "El sistema espera el tiempo configurado",
      "Envía encuesta de satisfacción",
      "Cliente responde la encuesta",
      "Sistema analiza si está satisfecho",
      "Si está contento, lo invita a Google Maps",
    ],
    versionCorta:
      "Sistema que envía encuestas automáticas después de cada venta y gestiona reseñas en Google Maps, mejorando tu reputación online automáticamente.",
    precio: "$125",
  },
  {
    titulo: "InvoicePro",
    descripcionBreve:
      "Cada venta genera automáticamente su factura o remito en PDF con diseño profesional. Los documentos se guardan organizados en Google Drive, cada cliente en su carpeta. Contáctanos para más información.",
    queHace: [
      "Crea facturas y remitos en PDF automáticamente",
      "Usa un diseño profesional personalizable",
      "Guarda los documentos en Google Drive",
      "Organiza cada cliente en su propia carpeta",
      "Les pone nombres automáticos fáciles de encontrar",
      "Mantiene un historial completo de todos los documentos",
    ],
    queIncluye: [
      "Diseño de factura personalizable",
      "Guardado automático en Google Drive",
      "Nombres automáticos para los archivos",
      "Carpeta separada por cada cliente",
      "Organización inteligente de documentos",
      "Formato profesional que puedes editar",
    ],
    diagramaFlujo: [
      "Se registra una nueva venta o pedido",
      "El sistema toma todos los datos necesarios",
      "Aplica el diseño de factura personalizado",
      "Crea el PDF profesional",
      "Busca o crea la carpeta del cliente",
      "Guarda el documento con nombre automático",
    ],
    versionCorta:
      "Sistema que crea facturas y remitos en PDF automáticamente y los guarda organizados en Google Drive, cada cliente en su carpeta.",
    precio: "$180",
  },
  {
    titulo: "SmartScan",
    descripcionBreve:
      "Recibe documentos por email o WhatsApp y el sistema los lee automáticamente con IA. Extrae información importante y la guarda organizada en Google Sheets o tu sistema de gestión. Contáctanos para más información.",
    queHace: [
      "Recibe documentos que te envían por email o WhatsApp",
      "Lee el documento usando inteligencia artificial",
      "Extrae la información importante automáticamente",
      "Organiza los datos de forma estructurada",
      "Los guarda en Google Sheets o tu sistema de gestión",
      "Verifica y corrige la información extraída",
    ],
    queIncluye: [
      "Proceso completo de lectura automática",
      "Recepción por email o WhatsApp",
      "Procesamiento con inteligencia artificial",
      "Lectura de texto en imágenes (OCR)",
      "Organización de datos extraídos",
      "Sincronización con Google Sheets o tu sistema",
    ],
    diagramaFlujo: [
      "Documento llega por email o WhatsApp",
      "El sistema detecta y descarga el archivo",
      "Lo envía al procesador de inteligencia artificial",
      "La IA lee y extrae la información",
      "Organiza los datos de forma clara",
      "Los guarda en Google Sheets o tu sistema",
    ],
    versionCorta:
      "Sistema que lee documentos automáticamente con inteligencia artificial, extrae la información importante y la guarda en Google Sheets o tu sistema de gestión.",
    precio: "$250",
  },
];

export const desarrolloAMedida = {
  titulo: "Potenciá tu Negocio con",
  tituloDestacado: "IA",
  descripcion:
    "Más allá de nuestros productos listos para usar, contamos con un equipo especializado para desarrollar soluciones a medida. Creamos agentes inteligentes, asistentes personalizados y sistemas que piensan por vos. Desde automatización con inteligencia artificial hasta procesamiento masivo de datos, diseñamos soluciones que escalan tu equipo sin contratar más personal. Si necesitas más recursos, también podemos asignarte un equipo tech dedicado que se enfoque completamente en tu proyecto.",
  cierre: "Tu equipo de IA está listo. Hablemos de tu proyecto.",
};
