// Reglas de precio del cotizador. Todo sale de este archivo: las preguntas que se ven
// en pantalla y el cálculo. El precio de cada opción es horas × tarifa (USD por hora).
// Las horas no se muestran a quien cotiza, solo al equipo en el mail de aviso.
//
// Los primeros escalones coinciden con los "desde" publicados en efedigital.com.ar
// (sitio 300, tienda 500, optimización 300, auditoría 100, mantenimiento 100/mes).
// Si cambiás un "desde" en el sitio, cambialo acá también.

export type Opcion = {
  id: string;
  label: string;
  desc?: string;
  horas: number;
  // Si la opción se cobra a otra tarifa que la del servicio (el diseño).
  tarifa?: number;
  // Para escalones abiertos ("más de 100"): se pide una cantidad y se suman bloques.
  // `tarifa`: si cada bloque extra se cobra distinto que la base (el plan de "más de 10 horas").
  abierto?: { desde: number; bloque: number; horasPorBloque: number; unidad: string; tarifa?: number };
  // Planes de mantenimiento: horas que cubre el plan (el cotizador recomienda el más chico
  // que alcanza para las tareas marcadas) y horas al mes que estima cada tarea.
  capacidad?: number;
  horasMes?: number;
  // Precio fijo de la opción (USD). Si está, manda sobre horas × tarifa; `horas` queda solo
  // como dato interno del mail de aviso. En los escalones abiertos es el precio de la base.
  precio?: number;
  // Aparece en el resumen lateral aunque no sume horas (la opción de mantenimiento con descuento).
  resumen?: boolean;
};

export type Pregunta = {
  id: string;
  label: string;
  ayuda?: string;
  tipo: "una" | "varias" | "numero";
  opciones?: Opcion[];
  // tipo "numero": cada unidad suma estas horas (0 a max), a la tarifa del servicio salvo
  // que se indique `tarifa` acá.
  horasPorUnidad?: number;
  tarifa?: number;
  max?: number;
  unidadLabel?: string;
  concepto?: string;
  // Pregunta sin elección posible (una sola opción): se cobra siempre y se muestra
  // como dato, no como botón.
  fija?: boolean;
  // Prefijo del concepto en el detalle ("Páginas de la tienda: básico").
  prefijo?: string;
  // Pregunta "¿Querés sumar mantenimiento?": con "sí" se aplica PROMOS[promoMant] (ver calcular).
  promoMant?: "sitio" | "tienda";
  // Pregunta para entender qué necesita el cliente: no suma al precio, pero llega en el
  // mail de aviso y se repite en el resultado.
  informativa?: boolean;
  // Cómo se nombra la respuesta en el resultado y en el mail ("Tareas que marcaste: ...").
  etiqueta?: string;
  // Marca las preguntas de diseño (activan el aviso de bosquejo y 3 cambios).
  esDiseno?: boolean;
};

export type Servicio = {
  id: "institucional" | "landing" | "tienda" | "mantenimiento" | "optimizacion" | "auditoria" | "automatizacion";
  titulo: string;
  resumen: string;
  tarifa: number;
  mensual?: boolean;
  // Solo plazos que ya están publicados en el sitio.
  plazo?: string;
  preguntas: Pregunta[];
  aviso?: string;
};

// Sitio, landing o tienda con descuento si se contrata un plan de mantenimiento con
// permanencia mínima. El descuento se aplica a todo lo que se cobra una sola vez. El plan de
// la tienda es más grande: mismo precio que el paquete de "4 horas".
export const PROMOS = {
  sitio: { descuento: 0.5, mesesMinimos: 12, plan: 60, horas: 2, nombre: "Plan Esencial" },
  tienda: { descuento: 0.3, mesesMinimos: 12, plan: 120, horas: 4, nombre: "Plan Tienda" },
} as const;

export const RANGO_MAX = 1.3; // el rango mostrado va del precio calculado a +30%

const mantenimientoOpcional = (tipo: "sitio" | "tienda"): Pregunta => {
  const pr = PROMOS[tipo];
  const pct = Math.round(pr.descuento * 100);
  return {
    id: "mant",
    promoMant: tipo,
    label: "¿Querés sumar mantenimiento mensual?",
    ayuda: `Con el ${pr.nombre} (USD ${pr.plan} por mes, ${pr.mesesMinimos} meses como mínimo) ${
      tipo === "tienda" ? "la tienda" : "el sitio"
    } tiene ${pct}% de descuento. Incluye backups, actualizaciones y seguridad, más ${pr.horas} horas al mes para correcciones o cosas nuevas.`,
    tipo: "una",
    opciones: [
      { id: "no", label: "No, por ahora", horas: 0 },
      {
        id: "si",
        label: `Sí, con ${pct}% off`,
        desc: `${pr.nombre}, ${pr.mesesMinimos} meses mínimo`,
        horas: 0,
        resumen: true,
      },
    ],
  };
};

const DISENO: Pregunta = {
  id: "diseno",
  esDiseno: true,
  label: "¿Tenés el diseño?",
  ayuda:
    "Si lo armamos nosotros, se envía un primer bosquejo de la home, una página interna, la página de contacto y una entrada de blog, con hasta 3 rondas de cambios. Los cambios adicionales se cotizan aparte.",
  tipo: "una",
  opciones: [
    { id: "propio", label: "Me lo envían diseñado", desc: "Lo desarrollamos tal cual", horas: 0 },
    {
      id: "basico",
      label: "Diseño básico",
      desc: "Más estático y limpio",
      horas: 15,
      tarifa: 12,
    },
    {
      id: "premium",
      label: "Diseño premium",
      desc: "Más fluido, con transiciones y apariciones suaves, sin animaciones complejas",
      horas: 20,
      tarifa: 20,
    },
  ],
};

export const SERVICIOS: Servicio[] = [
  {
    id: "institucional",
    titulo: "Sitio web institucional",
    resumen: "Tu empresa o marca en la web",
    tarifa: 15,
    plazo: "2 a 8 semanas según el alcance del proyecto",
    aviso: "Los textos y las imágenes los aporta el cliente.",
    preguntas: [
      {
        id: "secciones",
        label: "¿Cuántas secciones o páginas?",
        tipo: "una",
        opciones: [
          { id: "hasta5", label: "Hasta 5", horas: 20 },
          { id: "hasta10", label: "De 6 a 10", horas: 32 },
          { id: "mas10", label: "Más de 10", horas: 48 },
        ],
      },
      DISENO,
      {
        id: "extras",
        label: "¿Algo más?",
        tipo: "varias",
        opciones: [{ id: "migracion", label: "Hay que migrar un sitio existente", horas: 6 }],
      },
      mantenimientoOpcional("sitio"),
    ],
  },
  {
    id: "landing",
    titulo: "Landing page",
    resumen: "Una sola página pensada para convertir",
    tarifa: 15,
    aviso:
      "La landing incluye un primer bosquejo y hasta 3 rondas de cambios; los cambios adicionales se cotizan aparte. Los textos y las imágenes los aporta el cliente.",
    preguntas: [
      {
        id: "nivel",
        label: "¿Qué nivel de diseño buscás?",
        tipo: "una",
        opciones: [
          { id: "simple", label: "Simple", desc: "Más estática y limpia", horas: 10 },
          {
            id: "premium",
            label: "Premium",
            desc: "Más fluida, con transiciones y apariciones suaves, sin animaciones complejas",
            horas: 20,
            tarifa: 17.5,
          },
        ],
      },
      mantenimientoOpcional("sitio"),
    ],
  },
  {
    id: "tienda",
    titulo: "Tienda online",
    resumen: "Catálogo, carrito y checkout",
    tarifa: 20,
    plazo: "2 a 8 semanas según el alcance del proyecto",
    aviso:
      "La carga de productos la hacemos nosotros, pero necesitamos que nos pasen la información: nombre, precio, descripción y fotos.",
    preguntas: [
      {
        id: "base",
        fija: true,
        label: "Desarrollo de la tienda",
        ayuda: "Catálogo, carrito y checkout sobre WooCommerce.",
        tipo: "una",
        opciones: [{ id: "tienda", label: "Tienda online completa", horas: 25 }],
      },
      DISENO,
      {
        id: "dis-tienda",
        esDiseno: true,
        prefijo: "Páginas de la tienda: ",
        label: "Diseño de las páginas de la tienda",
        ayuda: "Catálogo, ficha de producto, carrito y checkout. Solo si el diseño lo armamos nosotros.",
        tipo: "una",
        opciones: [
          { id: "no", label: "No hace falta", desc: "Ya viene diseñado", horas: 0 },
          { id: "basico", label: "Básico", horas: 10, tarifa: 12 },
          { id: "premium", label: "Premium", horas: 10, tarifa: 20 },
        ],
      },
      {
        id: "productos",
        label: "¿Cuántos productos hay que cargar?",
        tipo: "una",
        opciones: [
          { id: "ninguno", label: "Ninguno", desc: "Los cargan ellos", horas: 0 },
          { id: "hasta10", label: "Hasta 10", horas: 2 },
          { id: "hasta30", label: "Hasta 30", horas: 5 },
          { id: "hasta50", label: "Hasta 50", horas: 8 },
          { id: "hasta100", label: "Hasta 100", horas: 14 },
          {
            id: "mas100",
            label: "Más de 100",
            horas: 14,
            abierto: { desde: 100, bloque: 20, horasPorBloque: 3, unidad: "productos" },
          },
        ],
      },
      {
        id: "integraciones",
        label: "Integraciones",
        ayuda: "Según la API disponible en cada herramienta.",
        tipo: "varias",
        opciones: [
          { id: "pagos", label: "Medios de pago", horas: 4 },
          { id: "envios", label: "Métodos de envío", horas: 4 },
          { id: "crm", label: "CRM con API", horas: 8 },
        ],
      },
      mantenimientoOpcional("tienda"),
    ],
  },
  {
    id: "mantenimiento",
    titulo: "Mantenimiento y soporte",
    resumen: "Actualizaciones, backups, seguridad y cambios, mes a mes",
    tarifa: 25,
    mensual: true,
    plazo: "Mes a mes, sin contrato de permanencia",
    aviso:
      "Todos los planes incluyen backups, actualizaciones y monitoreo de seguridad, más un informe mensual con lo que se actualizó, los backups verificados, la disponibilidad del sitio y su velocidad. Las horas del plan se contratan por adelantado: se cobran se usen o no y no se acumulan para el mes siguiente. Lo que exceda las horas del plan se cotiza a USD 25 la hora.",
    preguntas: [
      {
        id: "tipo",
        informativa: true,
        etiqueta: "Tipo de sitio",
        label: "¿Qué tipo de sitio es?",
        tipo: "una",
        opciones: [
          { id: "sitio", label: "Sitio institucional", horas: 0 },
          { id: "landing", label: "Landing page", horas: 0 },
          { id: "tienda", label: "Tienda online", horas: 0 },
        ],
      },
      {
        id: "tareas",
        informativa: true,
        etiqueta: "Tareas que marcaste",
        label: "¿Con qué tareas necesitás ayuda?",
        ayuda:
          "Marcá lo que se te ocurra: con eso estimamos cuántas horas al mes vas a necesitar y te recomendamos un plan.",
        tipo: "varias",
        opciones: [
          { id: "textos", label: "Editar textos y contenido", horas: 0, horasMes: 1 },
          { id: "fotos", label: "Cambiar o editar fotos", horas: 0, horasMes: 1 },
          { id: "paginas", label: "Agregar páginas o secciones", horas: 0, horasMes: 2 },
          { id: "blog", label: "Publicar entradas o novedades", horas: 0, horasMes: 2 },
          { id: "productos", label: "Cargar o editar productos", horas: 0, horasMes: 3 },
          { id: "soporte", label: "Resolver problemas o consultas técnicas", horas: 0, horasMes: 2 },
          { id: "otro", label: "Otras tareas", horas: 0, horasMes: 1 },
        ],
      },
      {
        id: "plan",
        label: "¿Qué plan mensual necesitás?",
        tipo: "una",
        opciones: [
          {
            id: "esencial",
            label: "Esencial",
            desc: "Para sitios institucionales y landings: mantenimiento + 2 horas al mes",
            horas: 2,
            precio: 60,
            capacidad: 2,
          },
          {
            id: "h4",
            label: "4 horas al mes",
            desc: "Mantenimiento + 4 horas de cambios y tareas. Es el mínimo para tiendas online",
            horas: 4,
            precio: 120,
            capacidad: 4,
          },
          {
            id: "h10",
            label: "10 horas al mes",
            desc: "Mantenimiento + 10 horas de cambios y tareas",
            horas: 10,
            precio: 280,
            capacidad: 10,
          },
          {
            id: "mas10",
            label: "Más de 10 horas",
            desc: "USD 280 + USD 22 por cada hora adicional",
            horas: 10,
            precio: 280,
            capacidad: 999,
            abierto: { desde: 10, bloque: 1, horasPorBloque: 1, unidad: "horas al mes", tarifa: 22 },
          },
        ],
      },
      {
        id: "extra",
        label: "¿Cuántos sitios más querés sumar al plan?",
        tipo: "numero",
        horasPorUnidad: 4,
        tarifa: 30, // 4 h x 30 = USD 120, igual que el plan de 4 horas
        max: 20,
        unidadLabel: "sitio",
        concepto: "Sitios adicionales",
      },
    ],
  },
  {
    id: "optimizacion",
    titulo: "Optimización de velocidad",
    resumen: "Core Web Vitals y tiempos de carga",
    tarifa: 25,
    plazo: "Entre una y dos semanas",
    aviso:
      "Incluye un informe de antes y después con las métricas de velocidad y 30 días de seguimiento.",
    preguntas: [
      {
        id: "tipo",
        label: "¿Qué tipo de sitio?",
        tipo: "una",
        opciones: [
          { id: "chico", label: "Sitio chico", horas: 12, precio: 350 },
          { id: "grande", label: "Tienda o sitio con muchos plugins", horas: 20, precio: 650 },
        ],
      },
      {
        id: "extras",
        label: "¿Algo más?",
        tipo: "varias",
        opciones: [{ id: "servidor", label: "Ajustes de servidor o Cloudflare", horas: 4, precio: 150 }],
      },
    ],
  },
  {
    id: "auditoria",
    titulo: "Auditoría SEO, GEO y AEO",
    resumen: "Informe técnico priorizado por impacto",
    tarifa: 25,
    plazo: "Entre 24 y 72 horas, según el tamaño del sitio",
    aviso:
      "Incluye una llamada corta para repasar el informe. Si contratás la optimización dentro de los 30 días, el precio de la auditoría se descuenta.",
    preguntas: [
      {
        id: "paginas",
        label: "¿Cuántas páginas tiene el sitio?",
        tipo: "una",
        opciones: [
          { id: "hasta5", label: "Hasta 5", horas: 4, precio: 150 },
          { id: "hasta10", label: "Hasta 10", horas: 5, precio: 200 },
          { id: "hasta20", label: "Hasta 20", horas: 7, precio: 275 },
          { id: "hasta50", label: "Hasta 50", horas: 13, precio: 450 },
          {
            id: "mas50",
            label: "Más de 50",
            horas: 13,
            precio: 450,
            abierto: { desde: 50, bloque: 5, horasPorBloque: 1, unidad: "páginas", tarifa: 30 },
          },
        ],
      },
    ],
  },
  {
    id: "automatizacion",
    titulo: "Automatización",
    resumen: "Flujos que sacan tareas manuales",
    tarifa: 0,
    preguntas: [],
  },
];

export type Respuestas = Record<string, Record<string, string | string[] | number>>;

export type Linea = {
  servicio: string;
  concepto: string;
  usd: number;
  horas: number;
  mensual: boolean;
  diseno: boolean;
  // Línea de descuento por contratar mantenimiento (se muestra aparte, entre subtotal y total).
  descuento?: boolean;
};

export type Resultado = {
  lineas: Linea[];
  unico: number;
  mensual: number;
  horas: number;
  unicoMax: number;
  conAutomatizacion: boolean;
  pedidos: string[];
  promoMant: {
    descuentoPct: number;
    nombre: string;
    plan: number;
    horas: number;
    meses: number;
    paraTienda: boolean;
  } | null;
};

const redondear = (n: number, paso: number) => Math.round(n / paso) * paso;
const techo = (n: number, paso: number) => Math.ceil(n / paso) * paso;

export function calcular(seleccion: string[], respuestas: Respuestas): Resultado {
  const lineas: Linea[] = [];
  const pedidos: string[] = [];
  let promo: Resultado["promoMant"] = null;
  for (const id of seleccion) {
    const srv = SERVICIOS.find((s) => s.id === id);
    if (!srv || srv.id === "automatizacion") continue;
    const resp = respuestas[id] ?? {};
    const mensual = !!srv.mensual;
    const agregar = (concepto: string, horas: number, tarifa: number, diseno = false, usdDirecto?: number) => {
      if (horas <= 0) return;
      lineas.push({ servicio: srv.titulo, concepto, usd: usdDirecto !== undefined ? usdDirecto : redondear(horas * tarifa, 5), horas, mensual, diseno });
    };
    let promoTipo: "sitio" | "tienda" | null = null;
    // Horas al mes que estiman las tareas marcadas: un plan que no las cubre se sube al
    // más chico que sí alcanza (el formulario ya lo recomienda; esto cubre cualquier atajo).
    const estHoras = srv.preguntas
      .filter((q) => q.informativa)
      .flatMap((q) => {
        const v = resp[q.id];
        return (Array.isArray(v) ? v : v ? [String(v)] : []).map((id) => q.opciones?.find((o) => o.id === id)?.horasMes ?? 0);
      })
      .reduce((a, h) => a + h, 0);
    for (const preg of srv.preguntas) {
      const valor = preg.fija ? preg.opciones?.[0]?.id : resp[preg.id];
      if (preg.promoMant) {
        promoTipo = valor === "si" ? preg.promoMant : null;
        continue;
      }
      if (preg.tipo === "numero") {
        const n = Math.max(0, Math.min(preg.max ?? 99, Math.floor(Number(valor) || 0)));
        if (n > 0 && preg.horasPorUnidad)
          agregar(`${preg.concepto ?? preg.label}: ${n}`, n * preg.horasPorUnidad, preg.tarifa ?? srv.tarifa);
        continue;
      }
      const elegidas = Array.isArray(valor) ? valor : valor ? [String(valor)] : [];
      if (preg.informativa) {
        const nombres = elegidas.map((oid) => preg.opciones?.find((o) => o.id === oid)?.label).filter(Boolean);
        if (nombres.length) pedidos.push(`${srv.titulo} | ${preg.etiqueta ?? preg.label}: ${nombres.join(", ")}`);
        continue;
      }
      for (const oid of elegidas) {
        let op = preg.opciones?.find((o) => o.id === oid);
        if (!op) continue;
        if (estHoras > 0 && op.capacidad !== undefined && op.capacidad < estHoras)
          op = preg.opciones?.find((o) => (o.capacidad ?? 0) >= estHoras) ?? op;
        let horas = op.horas;
        let concepto = op.label;
        let usdDirecto: number | undefined = op.precio;
        const tar = op.tarifa ?? srv.tarifa;
        if (op.abierto) {
          const n = Math.max(
            op.abierto.desde,
            Math.floor(Number(resp[`${preg.id}__n`]) || op.abierto.desde),
            op.capacidad !== undefined ? Math.ceil(estHoras) : 0
          );
          const bloques = Math.ceil((n - op.abierto.desde) / op.abierto.bloque);
          horas += bloques * op.abierto.horasPorBloque;
          usdDirecto = (op.precio ?? op.horas * tar) + bloques * op.abierto.horasPorBloque * (op.abierto.tarifa ?? tar);
          concepto = `${op.label} (${n} ${op.abierto.unidad})`;
        }
        agregar(`${preg.prefijo ?? ""}${concepto}`, horas, tar, !!preg.esDiseno, usdDirecto);
      }
    }
    if (promoTipo) {
      const pr = PROMOS[promoTipo];
      const unaVez = lineas.filter((l) => l.servicio === srv.titulo && !l.mensual).reduce((a, l) => a + l.usd, 0);
      if (unaVez > 0) {
        lineas.push({
          servicio: srv.titulo,
          concepto: `Descuento ${Math.round(pr.descuento * 100)}% por contratar mantenimiento`,
          usd: -redondear(unaVez * pr.descuento, 5),
          horas: 0,
          mensual: false,
          diseno: false,
          descuento: true,
        });
      }
      lineas.push({
        servicio: "Mantenimiento y soporte",
        concepto: `${pr.nombre} (${pr.mesesMinimos} meses como mínimo)`,
        usd: pr.plan,
        horas: pr.horas,
        mensual: true,
        diseno: false,
      });
      promo = {
        descuentoPct: Math.round(pr.descuento * 100),
        nombre: pr.nombre,
        plan: pr.plan,
        horas: pr.horas,
        meses: pr.mesesMinimos,
        paraTienda: promoTipo === "tienda",
      };
    }
  }
  const suma = (m: boolean) => lineas.filter((l) => l.mensual === m).reduce((a, l) => a + l.usd, 0);
  const unico = suma(false);
  const mensual = suma(true);
  return {
    lineas,
    unico,
    mensual,
    horas: lineas.reduce((a, l) => a + l.horas, 0),
    unicoMax: techo(unico * RANGO_MAX, 10),
    conAutomatizacion: seleccion.includes("automatizacion"),
    pedidos,
    promoMant: promo,
  };
}
