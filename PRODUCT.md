# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Decisores de empresas grandes y de rubros complejos** (gerencia general,
  operaciones, administración, sistemas) en petróleo y gas, minería, energía,
  logística y transporte, agroindustria y construcción. Llegan al sitio desde
  un video, un contacto directo o una búsqueda, con poco tiempo y una pregunta
  concreta: "¿esta gente puede hacer el sistema que mi operación necesita?".
  Deciden con evidencia (pantallas reales, clientes con nombre, claridad sobre
  qué se puede hacer) y actúan por mail o WhatsApp. Es el usuario principal de
  la home desde octubre de 2026, por decisión del dueño.
- **Dueños y gerentes de negocios** (gastronomía, hotelería, comercio): el
  cliente histórico de NovaERP. Siguen llegando al sitio; encuentran NovaERP,
  NovaStay, NovaPoints y Jarvis en "Lo que ya construimos".
- **Clientes actuales** que entran a buscar el contacto o el link a NovaERP.

## Product Purpose

El sitio de Nova Solutions (novasolutions.ar) existe para que una empresa con
una operación compleja entienda en un minuto qué hace Nova (sistemas a medida,
sobre los requerimientos de cada empresa, potenciados con IA), vea evidencia de
que ya lo hizo (NovaERP y su familia, clientes reales) y se ponga en contacto.
Éxito: un mensaje por el formulario o por WhatsApp de una empresa grande o de
un rubro complejo, con contexto suficiente para proponerle un sistema.

## Positioning

1. **Aplicamos IA en tu empresa, con un sistema hecho a medida.** Nova diseña
   el sistema sobre los requerimientos de la empresa, lo integra con lo que ya
   usa y lo potencia con IA (alertas y predicciones, reportes con resumen
   ejecutivo, un asistente que responde con los datos de la empresa).
2. **Evidencia, no promesas.** Lo que se afirma se muestra: pantallas reales de
   los sistemas que Nova ya construyó y clientes con nombre.
3. **Hecho en Neuquén, Patagonia argentina**, con soporte directo de quienes
   programan el sistema.
4. **Multi-rubro de verdad.** Un mismo núcleo que hoy opera gastronomía,
   hotelería, comercio, supermercado y concesionaria, y que se adapta a
   operaciones más grandes.

## Operating Context

- **Empresa.** Nova Solutions, Neuquén, Argentina. Contacto:
  contacto@novasolutions.ar y WhatsApp +54 299 517 1364. Idioma: castellano
  rioplatense con voseo.
- **Productos existentes.** NovaERP (novaerp.com.ar; gestión integral: POS,
  stock multi-local, caja y cierres, facturación ARCA, personal y fichadas,
  logística, producción, reportes, Eventos IA, Chat Auditor), NovaStay (PMS
  hotelero), NovaPoints (fidelización con app propia), Jarvis (asistente por
  WhatsApp con datos reales), nova-print (impresión local).
- **Capacidades que respaldan la oferta a medida.** Stock por ubicación y
  envíos trazables entre depósito y locales; alertas por prioridad y Eventos IA
  (sugerencias de compra, pronósticos, patrones detectados, predicción de
  quiebre de stock, anomalías); reportes con análisis generado por IA; chat en
  lenguaje natural sobre los datos; fichadas con geolocalización, turnos y
  planilla de horas; roles y permisos por área; integraciones con ARCA,
  Mercado Pago, Payway y WhatsApp.
- **Lo que todavía no existe.** No hay un cliente de petróleo, gas, minería o
  energía: el sitio habla de para quién está pensado el sistema, no de dónde
  ya opera. No hay testimonios, métricas de resultados ni casos de estudio
  escritos; no se inventan.
- **Stack del sitio.** Next.js 15 (App Router), React 19, Tailwind 3.4,
  next/font (Bricolage Grotesque, Geist), lucide-react; deploy en Vercel al
  pushear a main. Formulario con /api/contact (nodemailer).

## Capabilities and Constraints

- **Secciones de la home.** Hero · Diagnóstico (preguntas de sí o no con
  ventajas y desventajas) · Lo que ya construimos (NovaERP y familia) · Por qué
  Nova · Clientes · Nosotros · Contacto · pie.
- **Diagnóstico.** Siete preguntas de sí o no sobre cómo opera la empresa hoy
  (bases y depósitos, reportes, órdenes de trabajo, alertas, personal,
  integraciones, preguntar a los datos). Cada respuesta muestra qué le está
  costando a la empresa seguir así (desventajas) y qué cambia con un sistema a
  medida con IA (ventajas). Termina con un resumen de áreas con margen de
  mejora que se puede llevar al formulario de contacto. No guarda datos en
  ningún servidor.
- **Reglas.** Nada se afirma sin respaldo en el producto o en la decisión del
  dueño; las cifras del mock van etiquetadas como ejemplo; los clientes se
  nombran con permiso (ver PRODUCT.md de NovaERP); el primer viewport se sirve
  ya visible desde el servidor; hover sólo con puntero fino.
- **Terminología.** "sistema a medida", "requerimientos", "operación",
  "bases" (para operaciones industriales; "local" para gastronomía), "turno",
  "fichada", "cierre de caja", "orden de trabajo", "reporte para la gerencia".

## Brand Commitments

- **Nombre: Nova Solutions**; marca "NS" (cuadrado casi negro, N blanca, S
  índigo). Productos: NovaERP, NovaStay, NovaPoints, Jarvis.
- **Slogans del dueño (octubre de 2026).** "Aplicamos IA en tu empresa" /
  "Aplicamos IA en tu negocio" / "Con Nova Solutions potenciamos tu empresa con
  un sistema a medida, con IA".
- **Voz.** Directa, concreta, sin jerga de marketing; voseo. Nombra lo que el
  sistema hace y lo que le cuesta a la empresa no tenerlo.
- **Plazo de respuesta publicado:** "Respondemos en horario laboral, por
  WhatsApp o por mail" hasta que el dueño fije un número.

## Evidence on Hand

- Clientes nombrables: La Posada del Dinosaurio (hotel y restaurante), The
  Coffee Store (cafetería), Dorado (restaurante con app NovaPoints).
- Pantallas reales de la demo de NovaERP (brag-output/capturas en el repo
  Nova): dashboard, mapa de mesas y comanda, cocina, cierre de caja, ARCA,
  stock, reportes (costos y márgenes, comparativo, análisis con IA), alertas y
  Eventos IA, logística con mapa de envíos, producción, locales, empleados.
- Tres videos de lanzamiento (negocio, empresa, sistema a medida) hechos en
  esta misma sesión.

## Product Principles

1. **Decir sólo lo que podemos mostrar.**
2. **El sistema se ajusta a la operación, no al revés.**
3. **Un dato se carga una vez y aparece en todos lados.**
4. **Cada pantalla para quien la usa; en el sitio, para quien decide.**

## Accessibility & Inclusion

- Contraste WCAG AA sobre fondo oscuro; foco visible; controles de 44 px o
  más; el diagnóstico se opera con teclado y anuncia cada respuesta; los
  estados no dependen sólo del color; `prefers-reduced-motion` reduce las
  animaciones a opacidad.
