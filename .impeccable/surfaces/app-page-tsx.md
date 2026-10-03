---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface brief: sitio de Nova Solutions (`/home/user/nova-landing/app/page.tsx`)

Alcance: home del sitio de la empresa (novasolutions.ar). Modo: Persuade. Audiencia principal desde octubre de 2026 (decisión del dueño): decisores de empresas grandes y de rubros complejos (petróleo y gas, minería, energía, logística, agroindustria, construcción) que evalúan si Nova puede hacer el sistema que su operación necesita; secundaria: dueños de negocios (gastronomía, hotelería, comercio) y clientes actuales. Acción: contacto por formulario (`/api/contact`) o WhatsApp, idealmente con el resumen del diagnóstico. Prueba real: NovaERP y su familia en producción, clientes con nombre, pantallas reales. Restricciones: sin clientes inventados de los rubros nuevos (se dice para quién está pensado, no dónde opera); sin métricas ni testimonios; mundo visual compartido con NovaERP; Bricolage Grotesque + Geist; un acento índigo.

## Direction contract

THESIS: "Aplicamos IA en tu empresa, con un sistema hecho a medida." Vende la capacidad de diseñar el sistema sobre los requerimientos de la empresa y potenciarlo con IA; prueba con lo que ya construyó. Refusa el sitio de agencia (sin stack, sin "innovación", sin promesas sin respaldo).

OWN-WORLD: el mismo de NovaERP y del brief anterior: #070714, resplandor índigo estático y grilla al 3 %, partículas y cursor de anillo sólo en desktop con mouse, superficies al 6 % con borde al 12 %, tinta #F1F5F9 / #B4BFD3 / #8B97AD, acento índigo #6366F1 (texto #A5B4FC), Bricolage Grotesque + Geist, nav pill con glass, marca NS, mocks planos de tema claro enmarcados en oscuro. El verde y el rojo siguen reservados a éxito y error: en el diagnóstico las desventajas van en tinta apagada con un guion y las ventajas en índigo con un check.

STORY: el visitante lee el h1, responde siete preguntas de sí o no sobre su operación y ve, en cada una, qué le cuesta seguir así y qué cambia con un sistema a medida con IA; termina con un resumen de áreas con margen de mejora que se lleva al formulario; cree por las pantallas reales y los clientes con nombre; actúa escribiendo.

FIRST VIEWPORT: desktop: nav pill (Diagnóstico · Productos · Por qué Nova · Clientes · Contacto · "Hablemos"); h1 "Aplicamos IA en tu empresa, con un sistema hecho a medida." con "hecho a medida" subrayado en índigo; lead que nombra operaciones complejas y rubros; CTA primario "Hacé el diagnóstico" (#diagnostico) + link "Hablemos de tu operación" (#contacto); línea de clientes; a la derecha el mock "Tu sistema · a medida": requerimientos de una operación industrial convertidos en módulos, con la IA marcada donde entra, etiquetado como ejemplo. Mobile: h1 36 px, lead, CTA full-width + link, mock debajo. Nada se anima al cargar.

FORM: página de una columna con bandas alternadas: hero · **Diagnóstico** (banda) · Lo que ya construimos · **Por qué Nova** (banda) · Clientes · **Nosotros** (banda) · Contacto · pie. El diagnóstico es un riel de siete pasos (segmentos en celular) junto a un panel con una pregunta por vez, dos botones Sí / No de 56 px, el despliegue de la respuesta en dos columnas (lo que te está costando hoy / lo que cambia con un sistema a medida con IA; con "no": lo que suma la IA igual), Anterior / Siguiente, y un resumen final con las áreas marcadas y el CTA "Hablemos de tu operación", que deja el resumen en el mensaje del formulario sin pisar lo escrito. Movimiento: entrada del panel de 8 px por pregunta (200 ms), despliegue de la respuesta con grid-template-rows (320 ms) y fundido del contenido; en reduced-motion sólo opacidad.

FINISH: unreviewed and undocumented until the shipped finish reviewer and documenter run over the built surface; verdict reported under their disposition words.
