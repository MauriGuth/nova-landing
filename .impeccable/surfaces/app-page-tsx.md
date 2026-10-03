---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface brief: sitio de Nova Solutions (`/home/user/nova-landing/app/page.tsx`)

Alcance: home del sitio de la empresa (novasolutions.ar). Modo: Persuade. Audiencia: dueños de negocios de Argentina (hoy gastronomía y hotelería) que evalúan un proveedor local; gerentes desde la PC. Acción: pedir una demo (formulario `/api/contact` con name/company/email/message + honeypot `_website`) o pasar a novaerp.com.ar. Prueba real: clientes nombrables, productos en producción. Restricciones: nombres NovaERP (POS adentro), NovaStay, NovaPoints, Jarvis; empresa Nova Solutions, Neuquén; mundo visual propio (oscuro, índigo) limpiado; tipografía Bricolage Grotesque + Geist; sin stats inventadas, sin marquee de tecnologías, sin lenguaje de agencia.

## Direction contract

THESIS: "Software de gestión hecho en Neuquén para tu local, por la gente que lo programa." Vende un producto (NovaERP y su familia), no horas de consultoría; refusa el sitio de agencia: sin "innovación/calidad/soporte", sin stack tecnológico, sin "no somos una agencia más".

OWN-WORLD: el mismo del brief de NovaERP: #070714, resplandor índigo estático y grilla al 3 %, más el campo de partículas índigo liviano y el cursor de anillo que el dueño pidió conservar ("aplicá las dos cosas para las dos páginas"), sólo en desktop con mouse y apagados en celular y con reduced-motion, superficies al 6 % con borde al 12 %, tinta #F1F5F9 / #B4BFD3 / #8B97AD, un acento índigo #6366F1, Bricolage Grotesque + Geist, nav pill con glass, marca NS actual a 28 px, mocks planos de tema claro enmarcados en oscuro.

STORY: el visitante entiende que Nova Solutions es la empresa de Neuquén que hace NovaERP; cree porque ve el producto y clientes reales con nombre; actúa pidiendo una demo o entrando a NovaERP.

FIRST VIEWPORT: desktop: nav pill; h1 alineado a la izquierda "Software de gestión hecho en Neuquén para tu negocio." (sin palabra rotativa; a 56/36 px junto al mock cae en tres líneas en desktop y en celular: adaptación aceptada, la escala compartida con NovaERP vale más que la cuenta de líneas; "hecho en Neuquén" lleva el mismo subrayado índigo que "un solo sistema" en NovaERP), lead de tres líneas que nombra NovaERP y lo que incluye, CTA primario "Pedí una demo" (#contacto) + link "Ver NovaERP" (novaerp.com.ar), línea de clientes; a la derecha el mock compacto del dashboard de NovaERP. Mobile: h1 36 px, lead, CTA full-width + link, mock debajo; todo visible sin scroll salvo el mock. Nada se anima al cargar; sin PageTransition.

FORM: página de una columna con bandas alternadas, primera de mi lista: 1) bandas con producto y familia (elegida), 2) manifiesto de empresa, 3) catálogo de productos, 4) caso de cliente largo, 5) comparación. Seed: no se corrió concept-seed; mundo y modo pinneados por el dueño. Secciones: hero · Productos (NovaERP grande con 6 funciones; NovaStay, NovaPoints y Jarvis como tres filas) · Por qué Nova (4 filas en lenguaje del local: un dato se carga una vez; Jarvis por WhatsApp; soporte directo con quien lo programó; hotel y restaurante con una sola caja) · Clientes · Nosotros (dos párrafos, Neuquén) · Contacto (dos columnas) · footer.

FINISH: unreviewed and undocumented until the shipped finish reviewer and documenter run over the built surface; verdict reported under their disposition words.
