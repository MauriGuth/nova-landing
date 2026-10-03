// Diagnóstico de sí o no para empresas de rubros complejos. Cada pregunta
// describe cómo opera la empresa hoy; "sí" significa que hay margen de mejora.
// Lo que "cambia con Nova" sale de capacidades que ya existen en NovaERP o de
// la oferta a medida del dueño; nada es una métrica ni un caso real.

export type Respuesta = "si" | "no";

export type Pregunta = {
  id: string;
  /** Etiqueta corta para el riel de progreso y el resumen. */
  area: string;
  texto: string;
  /** Sí: lo que le cuesta a la empresa seguir así y lo que cambia. */
  si: { costo: string[]; cambio: string[] };
  /** No: ya está resuelto; qué suma la IA sobre eso. */
  no: { nota: string; suma: string[] };
};

export const PREGUNTAS: Pregunta[] = [
  {
    id: "bases",
    area: "Bases y depósitos",
    texto:
      "¿Tu operación tiene varias bases, yacimientos o depósitos que hoy se controlan por separado?",
    si: {
      costo: [
        "Nadie sabe en tiempo real qué hay en cada base: sobra en una y falta en otra.",
        "Los traslados entre depósitos no dejan registro, o lo dejan en un papel.",
        "Cada base tiene su planilla y su versión del stock.",
      ],
      cambio: [
        "Stock por base y por ubicación, con envíos trazables entre el depósito y cada base.",
        "Alertas de stock crítico por ubicación, antes de que falte.",
        "Una sola vista para la gerencia: qué hay, dónde y qué está en camino.",
      ],
    },
    no: {
      nota: "Bien: una sola operación es más simple de ordenar.",
      suma: [
        "Predicción de quiebre de stock sobre el consumo real.",
        "Sugerencias de compra generadas por IA cada semana.",
      ],
    },
  },
  {
    id: "reportes",
    area: "Reportes",
    texto:
      "¿Los reportes para la gerencia se arman a mano, con planillas, cada semana o cada mes?",
    si: {
      costo: [
        "Llegan tarde y con errores de copia; cuando se leen, los datos ya cambiaron.",
        "Cada área tiene su número y la reunión se va en discutir cuál es el correcto.",
        "Horas de gente capacitada armando el reporte en vez de decidiendo con él.",
      ],
      cambio: [
        "Reportes al momento sobre los mismos datos que usa la operación.",
        "Resumen ejecutivo generado por IA: qué pasó, qué anomalías hay y qué conviene hacer.",
        "Comparativo entre bases, costos y márgenes por producto o servicio.",
      ],
    },
    no: {
      nota: "Bien: ya tenés reportes que salen del sistema.",
      suma: [
        "Un resumen ejecutivo que se escribe solo sobre esos mismos datos.",
        "Patrones y proyecciones detectados por IA, no sólo totales.",
      ],
    },
  },
  {
    id: "ordenes",
    area: "Órdenes de trabajo",
    texto:
      "¿Las órdenes de trabajo y los partes de campo se registran en papel o por WhatsApp?",
    si: {
      costo: [
        "Se pierden, llegan incompletos y no se pueden auditar después.",
        "El histórico de un equipo o de una cuadrilla no existe o está repartido en chats.",
        "Nadie sabe qué está en curso hasta que alguien pregunta.",
      ],
      cambio: [
        "Órdenes de trabajo en el celular, con fotos y estados, que dejan registro.",
        "Trazabilidad por equipo, por cuadrilla y por base.",
        "La gerencia ve en curso, demorado y terminado sin pedirle el dato a nadie.",
      ],
    },
    no: {
      nota: "Bien: ya tenés las órdenes de trabajo en un sistema.",
      suma: [
        "Detección de demoras y patrones por equipo con IA.",
        "Alertas cuando una orden se atrasa respecto de su histórico.",
      ],
    },
  },
  {
    id: "alertas",
    area: "Alertas",
    texto:
      "¿Te enterás de un faltante de stock o de un equipo parado cuando ya es tarde?",
    si: {
      costo: [
        "Compras de urgencia a sobreprecio y paradas que no estaban planificadas.",
        "Decisiones tomadas con datos de la semana pasada.",
        "El problema lo detecta una persona, si está y si se acuerda.",
      ],
      cambio: [
        "Alertas por prioridad: stock crítico, órdenes de pago, incidentes, por base.",
        "Eventos IA que detectan patrones y anomalías antes de que escalen.",
        "Predicción de quiebre de stock por producto, con días de anticipación.",
      ],
    },
    no: {
      nota: "Bien: ya tenés alertas que avisan a tiempo.",
      suma: [
        "Anomalías detectadas por IA sobre consumo y movimientos.",
        "Un reporte de incidentes que se genera solo.",
      ],
    },
  },
  {
    id: "personal",
    area: "Personal",
    texto:
      "¿Las fichadas, los turnos y las horas del personal se llevan en planillas o en varios sistemas?",
    si: {
      costo: [
        "Horas extra que se discuten a fin de mes y turnos que se superponen.",
        "Planillas que no cierran con lo que pasó en campo.",
        "Nadie sabe hoy quién está en qué base.",
      ],
      cambio: [
        "Fichadas con geolocalización, turnos y planilla mensual de horas en un solo lugar.",
        "Alertas de ausencias y de horas fuera de turno.",
        "Roles y permisos por área: cada uno ve y opera lo que le corresponde.",
      ],
    },
    no: {
      nota: "Bien: el control del personal ya está resuelto.",
      suma: [
        "Patrones de ausencias y horas extra detectados por IA, por base.",
        "Preguntarle al sistema quién faltó, por chat o por WhatsApp.",
      ],
    },
  },
  {
    id: "integraciones",
    area: "Integraciones",
    texto:
      "¿Facturación, pagos y proveedores viven en sistemas separados que no se hablan?",
    si: {
      costo: [
        "El mismo dato se carga dos y tres veces, y en alguna queda mal.",
        "Conciliaciones a mano entre facturación, bancos y pagos.",
        "Un cambio en un sistema rompe la planilla que lo unía con el otro.",
      ],
      cambio: [
        "Integraciones con ARCA, medios de pago y los sistemas que ya usás.",
        "Un dato se carga una vez y aparece en todos lados.",
        "Facturación y órdenes de pago desde la misma operación, con registro.",
      ],
    },
    no: {
      nota: "Bien: tus sistemas ya se hablan entre sí.",
      suma: [
        "Un asistente que consulta todos esos datos juntos, en lenguaje natural.",
        "Alertas cruzadas: una factura, un pago y un stock que no cierran.",
      ],
    },
  },
  {
    id: "datos",
    area: "Preguntar a los datos",
    texto:
      "¿Para saber cómo viene el mes tenés que pedirle el dato a alguien y esperar?",
    si: {
      costo: [
        "Dependés de una persona y de su planilla; el dato llega cuando puede.",
        "Las preguntas simples (cuánto, cuántos, quién) tardan horas.",
        "Las decisiones se posponen hasta la próxima reunión.",
      ],
      cambio: [
        "Le preguntás al sistema en lenguaje natural, por chat o por WhatsApp, y responde con tus datos.",
        "Si no tiene el dato, te lo dice: no inventa un número.",
        "Ventas, stock, caja y personal, al momento, desde el celular.",
      ],
    },
    no: {
      nota: "Bien: ya tenés los datos a mano.",
      suma: [
        "Un asistente que además analiza: tendencias, comparativos y anomalías.",
        "Respuestas por WhatsApp, con texto o audio, fuera del horario de oficina.",
      ],
    },
  },
];

/** Clave de sessionStorage y evento con el que el diagnóstico le pasa su resumen al formulario de contacto. */
export const DIAGNOSTICO_KEY = "nova-diagnostico";
export const DIAGNOSTICO_EVENT = "nova:diagnostico";

export function armarMensaje(areas: string[]): string {
  if (areas.length === 0) {
    return "Hice el diagnóstico en novasolutions.ar y mi operación está bien cubierta. Me interesa ver qué le suma un sistema a medida con IA.";
  }
  return `Hice el diagnóstico en novasolutions.ar. Tengo margen de mejora en: ${areas.join(", ")}. Me interesa un sistema a medida con IA para mi operación.`;
}
