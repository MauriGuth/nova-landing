---
name: Nova Solutions — sitio
description: Mundo oscuro índigo compartido con la home de NovaERP; el producto se muestra como mock plano de tema claro enmarcado en oscuro.
colors:
  accent: "#6366f1"
  accent-hover: "#4f46e5"
  accent-ink: "#a5b4fc"
  accent-soft: "rgba(99, 102, 241, 0.14)"
  ok: "#34d399"
  ok-soft: "rgba(52, 211, 153, 0.14)"
  warn: "#fbbf24"
  danger: "#f87171"
  bg: "#070714"
  bg-raise: "#0c0c1f"
  surface: "rgba(255, 255, 255, 0.06)"
  surface-2: "rgba(255, 255, 255, 0.09)"
  line: "rgba(255, 255, 255, 0.12)"
  line-strong: "rgba(255, 255, 255, 0.2)"
  ink: "#f1f5f9"
  ink-2: "#b4bfd3"
  ink-3: "#8b97ad"
  on-accent: "#ffffff"
  nav-glass: "rgba(12, 12, 31, 0.72)"
  mark-bg: "#0e1116"
  mark-ink: "#faf8f4"
  mark-accent: "oklch(0.62 0.18 265)"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "36px (56px desde 768px)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.01em (-0.02em desde 768px)"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "30px (40px desde 768px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.01em (-0.02em desde 768px)"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "18px (20px desde 768px)"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "normal"
  wordmark:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1
  lead:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "17px (19px desde 768px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.6
  caption:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
  control:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1
  numeric:
    fontFamily: "Geist, system-ui, sans-serif"
    fontFeature: "tnum"
rounded:
  hairline: "2px"
  xs: "6px"
  sm: "8px"
  control: "12px"
  panel: "16px"
  pill: "999px"
spacing:
  "1": "4px"
  "2": "8px"
  "3": "12px"
  "4": "16px"
  "5": "20px"
  "6": "24px"
  "7": "28px"
  "8": "32px"
  "10": "40px"
  "12": "48px"
  "16": "64px"
  section-sm: "64px"
  section-lg: "96px"
  container: "1120px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-primary-hero:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "56px (48px desde 640px)"
  button-primary-nav:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.control}"
    padding: "0 20px"
    height: "48px"
  button-secondary-hover:
    backgroundColor: "{colors.surface}"
  link-arrow:
    backgroundColor: "transparent"
    textColor: "{colors.accent-ink}"
    typography: "{typography.body}"
    height: "44px"
  link-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    height: "44px"
  link-quiet-hover:
    textColor: "{colors.ink}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.sm}"
    padding: "0 12px"
    height: "44px"
  nav-link-hover:
    textColor: "{colors.ink}"
  nav-pill:
    backgroundColor: "{colors.nav-glass}"
    rounded: "{rounded.panel}"
    padding: "0 8px 0 12px"
    height: "56px"
  menu-mobile:
    backgroundColor: "{colors.bg-raise}"
    rounded: "{rounded.panel}"
    padding: "8px"
  menu-mobile-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "48px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
  input-focus:
    backgroundColor: "{colors.surface-2}"
  panel:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "20px (32px desde 640px)"
  panel-product:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.panel}"
    padding: "24px (40px desde 768px)"
  row:
    backgroundColor: "transparent"
    padding: "28px 0"
  mock-frame:
    backgroundColor: "{colors.bg-raise}"
    rounded: "{rounded.panel}"
    padding: "8px"
  success-badge:
    backgroundColor: "{colors.ok-soft}"
    textColor: "{colors.ok}"
    rounded: "{rounded.pill}"
    size: "56px"
  brand-mark:
    backgroundColor: "{colors.mark-bg}"
    textColor: "{colors.mark-ink}"
    size: "28px"
---

# Design System: Nova Solutions — sitio

## Overview

**Creative North Star: "La vidriera de noche"**

Un local cerrado, de noche, con la luz prendida adentro: el fondo es navy casi negro (no negro puro) con un único resplandor índigo que baja desde el borde superior (elipse de 70 % × 60 vh, índigo al 18 %) y una grilla fija de 64 px al 3 %. Sobre eso, el producto aparece iluminado: un mock plano de tema claro del dashboard de NovaERP dentro de un marco oscuro con borde al 12 % y una sola sombra larga. La página muestra la empresa a través de su producto; la jerarquía la llevan Bricolage Grotesque 700 balanceada, un subrayado índigo de 3 px en el h1 y un solo acento.

La densidad es editorial, no de catálogo: una columna, bandas alternas de fondo, filas con hairline en lugar de cards iguales y un solo panel por sección (la tarjeta de NovaERP, el formulario). El movimiento es casi nulo: nada se anima al cargar, el primer viewport se sirve ya visible, las entradas por scroll son de 8 px y una sola vez, y las únicas animaciones con nombre son la entrada del menú móvil y el pulso del check de éxito.

Este es el mismo sistema que usa la home pública de NovaERP (`/home/user/Nova/apps/web/src/app/(landing)/DESIGN.md`): mismos tokens de color, tipografía, radios, movimiento y componentes. Acá se documenta su expresión en el sitio de Nova Solutions (Tailwind 3, tokens en `:root` de `app/globals.css`). Reemplaza por completo al mundo anterior del sitio (violeta oscuro con partículas, Poppins/Inter y gradientes), del que no queda nada en el build.

**Key Characteristics:**
- Fondo navy casi negro con un solo resplandor índigo estático arriba y grilla de 64 px al 3 %.
- Un acento (índigo) para CTA, links, foco, selección y el subrayado del h1; verde sólo para éxito, rojo sólo para error.
- Bricolage Grotesque 700 con tracking negativo y `text-wrap: balance` en títulos; Geist a 16 px / 1.6 en cuerpo.
- El producto se muestra como mock plano de tema claro dentro de un marco oscuro con borde al 12 %, siempre con nota "Datos de ejemplo".
- Filas con hairline y paneles al 6 % en lugar de cards iguales; nav pill flotante con glass.
- Nada se anima al cargar; reveal de 8 px una sola vez debajo del fold; hover sólo con puntero fino; press a scale(0.97).

## Colors

Un navy profundo con tintas frías y un único índigo que hace todo el trabajo de acento; verde, ámbar y rojo existen sólo para hablar de estados.

### Primary
- **Índigo** (`accent`): botón primario, outline de foco, subrayado de 3 px bajo "hecho en Neuquén" en el h1, la línea de 2 px bajo los links de la nav, el skip-link, la selección de texto (con texto blanco) y `accent-color` de los inputs.
- **Índigo profundo** (`accent-hover`): hover del botón primario, sólo bajo puntero fino.
- **Índigo claro** (`accent-ink`): el índigo cuando es texto o trazo sobre el fondo: link con flecha, íconos de las funciones de NovaERP y del contacto, viñetas de 4 px, link del mail en el aviso de error, caret de los inputs.
- **Índigo velado** (`accent-soft`): anillo de foco de 3 px en inputs.

### Secondary (estados)
- **Verde** (`ok`) y **verde velado** (`ok-soft`): confirmación de envío del formulario (círculo de 56 px con check y anillo que se expande una vez). Nunca decorativo.
- **Rojo** (`danger`): borde del input inválido y texto del error por campo. El aviso de error de envío usa el mismo rojo al 40 % en borde y al 10 % en fondo, escrito literal en el componente (no está tokenizado).
- **Ámbar** (`warn`): declarado como parte del sistema compartido; el sitio hoy no lo usa fuera del mock.

### Neutral
- **Navy de noche** (`bg`): fondo de la página, `theme-color`, pista del scrollbar y borde del pulgar del scrollbar.
- **Navy elevado** (`bg-raise`): bandas alternas (Productos, Clientes, Contacto), menú móvil sólido y el marco oscuro del mock.
- **Superficie 6 %** (`surface`) y **Superficie 9 %** (`surface-2`): paneles, inputs en reposo y la barra de URL del mock; `surface-2` es el input en foco. `surface` es también el hover del botón secundario.
- **Hairline 12 %** (`line`) y **Hairline 20 %** (`line-strong`): bordes de paneles, filas, nav, menú, mock y pie; `line-strong` para el botón secundario y los tres puntos del marco del mock.
- **Tinta** (`ink`), **Tinta 2** (`ink-2`), **Tinta 3** (`ink-3`): títulos, wordmark y cuerpo principal / lead, descripciones, labels y links quietos / notas al pie, placeholders, copyright y metadatos. `ink-3` es el gris más apagado para texto que informa.
- **Blanco** (`on-accent`): texto sobre índigo.
- **Glass de nav** (`nav-glass`): fondo de la nav pill, navy elevado al 72 % con blur de 12 px; sin soporte de `backdrop-filter` cae a `bg-raise` sólido.
- **Marca** (`mark-bg`, `mark-ink`, `mark-accent`): la "NS" inline (`components/nova-logo.tsx`, misma que `branding/logo-dark.svg`): cuadrado casi negro con borde blanco al 12 %, "N" en blanco cálido y "S" en índigo OKLCH. Es el único lugar donde entra `#faf8f4`.

### Named Rules
**The One Indigo Rule.** Hay un solo acento. Índigo para acción, foco y énfasis; verde y rojo sólo describen estados. No hay violeta, esmeralda ni naranja decorativos, ni gradientes de texto ni de fondo más allá del resplandor.

**The Lit Mock Rule.** El producto se muestra en tema claro dentro de un marco oscuro. El mock tiene su propia paleta interna (`#f4f5fa` de fondo, `#111827` de tinta, `#6b7280` de meta, `#e5e7eb` de borde, `#047857` para el delta positivo, barras `#c7d2fe` con la de hoy en `#6366f1`, aviso ámbar `#fffbeb` / `#fde68a` / `#92400e`) y esa paleta no sale del mock.

## Typography

**Display Font:** Bricolage Grotesque (con system-ui, sans-serif), cargada con `next/font/google` como `--font-display`, variable con eje óptico.
**Body Font:** Geist (con system-ui, sans-serif), `--font-body`, variable.

**Character:** Bricolage apretada y pesada (700, -0.02em en desktop) da voz a los títulos; Geist a 16 px con interlínea 1.6 hace el cuerpo neutro y legible. Las cifras del mock usan numerales tabulares. `strong` pesa 600.

### Hierarchy
- **Display** (700, 36 px móvil / 56 px desde 768 px, 1.05, -0.01 / -0.02em): el h1 del hero, balanceado; una frase subrayada con una línea índigo de 3 px al 92 % de la altura. Cae en tres líneas en desktop y en celular: adaptación aceptada, la escala compartida con NovaERP vale más que la cuenta de líneas.
- **Headline** (700, 30 / 40 px, 1.1, -0.01 / -0.02em): h2 de cada sección, sin eyebrow encima.
- **Title** (600, 18 / 20 px, 1.3): h3 de filas (familia de productos, razones, clientes) y del estado de éxito. El título de la tarjeta de NovaERP sube a 28 / 32 px (600, 1.1, -0.01em) como único caso.
- **Wordmark** (600, 17 px, Bricolage): "Nova Solutions" junto a la marca en nav y pie.
- **Lead** (400, 17 / 19 px, 1.55, color `ink-2`): el párrafo bajo cada título, con `max-width` entre 34 rem y 62 ch; también los dos párrafos de Nosotros (17 px, 1.625).
- **Body** (400, 16 px, 1.6): base del documento, descripciones de filas, inputs (16 px siempre, para que iOS no haga zoom), link con flecha del hero, mail de contacto.
- **Body small** (400, 15 px): viñetas de la familia de productos, links de la nav (500).
- **Label** (500, 14 px, color `ink-2`): labels de formulario; a 14 px también van la línea de clientes, los links del pie, las notas y el copyright en `ink-3`, y el CTA compacto de la nav (600).
- **Caption** (400, 12 px, `ink-3`): "Datos de ejemplo." bajo el mock; adentro del mock los textos van de 11 a 17 px con `tabular-nums`.
- **Control** (600, 15 px, 1): botones; 16 px en el botón del hero.

### Named Rules
**The Balanced Title Rule.** Todo título lleva Bricolage con `text-wrap: balance` y, cuando hace falta, un `max-width` en `ch` o `rem`; se acepta que el h1 caiga en tres líneas antes que achicarlo.

**The No-Kicker Rule.** No hay eyebrows ni kickers encima de los títulos, ni mayúsculas con tracking, ni peso 800. El título entra directo.

## Layout

Página larga de una sola columna. El contenedor (`.container-site`) es de 1120 px máximo, centrado, con 16 px de margen lateral en móvil y 24 px desde 640 px. Las secciones llevan 64 px de padding vertical en móvil y 96 px desde 768 px; se alternan fondo (`bg`) y banda elevada (`bg-raise`): hero · **Productos** · Por qué Nova · **Clientes** · Nosotros · **Contacto** · pie (con hairline arriba, 48 / 64 px de padding).

El hero usa padding en vez de altura de viewport (112 px arriba en móvil, 160 px desde 768 px, más `safe-area-inset-top`); desde 1024 px ocupa `min-height: 100svh` con el contenido centrado verticalmente y 96 px de padding superior. Es una grilla 1.1 / 0.9 con 64 px de gap entre el texto y el mock (560 px máximo, alineado a la derecha); en móvil, una columna con 48 px de gap, el CTA a ancho completo y 56 px de alto, y el mock inmediatamente debajo. El primer viewport se renderiza en su estado final desde el servidor; `.reveal` sólo aparece a partir de Productos.

Las listas de contenido son filas con hairline: borde superior en la lista, borde inferior en cada fila, 28 px de padding vertical; en desktop pasan a grilla de 180 px + 1fr + 1fr (familia de productos, con 32 px de gap) o 5 / 7 (razones, con 40 px de gap). Los clientes son tres columnas separadas por hairlines verticales (`divide-x`) con 32 px de padding lateral desde 768 px, y 32 px de gap vertical en móvil. Contacto es 5 / 7 con 48 / 64 px de gap; Nosotros es 4 / 8 con 24 / 40 px. El pie es 1.4fr + 3 × 1fr con 40 px de gap.

Ritmo de espaciado observado: 4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 40 / 48 / 64 px entre elementos; 16 a 32 px entre título, lead y acciones. Breakpoints usados: 640, 768, 1024 px. Toda ancla lleva `scroll-margin-top` de 96 px (112 px en las filas de producto) para asomar bajo la nav fija. El ambiente son dos capas con `pointer-events: none`: el resplandor absoluto de 90 vh y la grilla fija a toda la pantalla.

## Elevation & Depth

Casi plano, con capas tonales: el fondo, la banda elevada y las superficies al 6 / 9 % se distinguen por tono y hairline, no por sombra. Hay una sola sombra en el sistema, larga, muy difusa y negra, y aparece en dos lugares: el menú móvil y el marco del mock. La nav pill flota por su glass y su hairline, sin sombra. No hay sombra en reposo en botones, paneles ni filas, y ninguna sombra se anima en hover.

### Shadow Vocabulary
- **Flotante** (`box-shadow: 0 8px 24px -12px rgba(0, 0, 0, 0.6)`, `--shadow-2`): menú móvil y marco oscuro del mock del dashboard.
- **Anillo de foco** (`box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.14)`): inputs en foco, junto al borde índigo.
- **Glass** (`backdrop-filter: blur(12px)` sobre `nav-glass`, con borde `line`): sólo la nav.
- **Dentro del mock** (`0 8px 24px -12px rgba(17, 24, 39, 0.35)`): el toast "Mesa 7 · Cobrada"; pertenece a la paleta interna del mock.

### Named Rules
**The Glass Only Floats Rule.** El desenfoque existe únicamente en la nav fija. Paneles, mock y menú son sólidos o al 6 %.

**The Hairline Rule.** Las filas, las columnas de clientes y el pie se separan con 1 px al 12 %, nunca con cards ni con sombra.

## Shapes

Esquinas suavemente redondeadas en una escala corta: 12 px para controles (botones, inputs, hamburguesa, ítems del menú, aviso de error, pantalla interna del mock), 16 px para contenedores (nav pill, menú móvil, paneles, marco del mock, formulario), 8 px para elementos chicos (link de la marca, links de la nav, KPIs y tarjetas dentro del mock) y 6 px para la barra de URL del mock. Círculo completo (999 px) para viñetas de 4 px, los puntos del marco, el pulgar del scrollbar y el check de éxito. La marca "NS" es un cuadrado con radio de 118 / 512 (23 %) a 28 px. Los bordes son hairlines de 1 px al 12 % o 20 %; no hay bordes gruesos ni dobles, salvo el anillo de 2 px verde que se expande en el éxito. Los íconos son Lucide a 20 px (16 px en el pie, 24 px en la hamburguesa) con trazo 1.75.

## Components

### Buttons
- **Carácter:** sólidos y quietos; el feedback está en el press, no en el hover.
- **Shape:** 12 px de radio, 48 px de alto, padding 0 20 px, 600 a 15 px, `inline-flex` con gap de 8 px para el ícono. En el hero sube a 56 px y 16 px en móvil (48 px desde 640 px); en la nav baja a 44 px, 0 16 px y 14 px; en el menú móvil y el envío del formulario va a ancho completo (el envío, 176 px desde 640 px).
- **Primary:** fondo `accent`, texto blanco. Hover a `accent-hover` sólo bajo `(hover: hover) and (pointer: fine)` y no deshabilitado. Deshabilitado a opacidad 0.7 con cursor por defecto (estado "Enviando…" con spinner de 20 px).
- **Secondary:** fondo transparente, texto `ink`, borde `line-strong`; hover a fondo `surface`. En contacto lleva el ícono de WhatsApp en `accent-ink` a la izquierda.
- **Press / Focus:** todo `a`, `button` y `[role="button"]` hace `scale(0.97)` en `:active` con transición de 120 ms `ease-out` (sólo `transform`, `color`, `background-color` y `border-color`); `focus-visible` con outline de 2 px `accent` a 2 px de offset y sin transición; `touch-action: manipulation`, sin tap highlight, sin selección de texto.
- **Link con flecha** (`.link-arrow`): `accent-ink` 500 a 16 px, 44 px de alto táctil, gap de 6 px, flecha Lucide de 20 px; en hover la flecha se mueve 2 px a la derecha en 120 ms.
- **Link quieto** (`.link-quiet`): `ink-2` a `ink` en hover; es el link del mail (seleccionable y copiable), los del pie (44 px mínimos) y los ítems del menú móvil.

### Cards / Containers
- **Panel:** fondo `surface`, borde `line`, 16 px de radio, sin sombra; padding 20 px (32 px desde 640 px) en el formulario, 24 px (40 px desde 768 px) en la tarjeta de NovaERP, 32 / 40 px en el estado de éxito. Uno por sección como mucho.
- **Fila:** sin fondo, 28 px de padding vertical, hairline inferior (y superior en la lista); es la estructura por defecto para la familia de productos y las razones.
- **Mock enmarcado** (`components/dashboard-mock.tsx`): `figure` de 560 px máximo; marco `bg-raise` con borde `line`, 16 px de radio, 8 px de padding y sombra flotante; barra de navegador con tres puntos `line-strong` y URL en `surface` a 12 px `ink-3`; adentro, pantalla clara a 12 px de radio con la paleta propia del mock. Siempre con `figcaption` "Datos de ejemplo." a 12 px `ink-3`. Nada se anima.

### Inputs / Fields
- **Style** (`.field`): fondo `surface`, borde `line`, 12 px de radio, padding 14 px 16 px, 16 px de fuente heredando Geist, 1.5 de interlínea; placeholder en `ink-3`; label de 14 px 500 en `ink-2` con 6 px de separación; textarea de 4 filas redimensionable en vertical. Campos a dos columnas desde 640 px con 20 px de gap.
- **Focus:** sin outline; borde `accent`, fondo `surface-2` y anillo de 3 px `accent-soft`, en 120 ms.
- **Error:** `aria-invalid` pinta el borde en `danger`; mensaje por campo de 14 px en `danger` con `role="alert"` a 6 px bajo el campo; sin globo nativo. El error de envío es una caja de 12 px de radio con borde rojo al 40 %, fondo rojo al 10 %, texto `ink` a 14 px y link del mail en `accent-ink` subrayado.
- **Éxito:** panel centrado que entra con `fade-up` (200 ms); círculo de 56 px `ok-soft` con check `ok` de 28 px y un anillo de 2 px `ok` que se expande de 1 a 1.8 mientras se apaga en 600 ms, una sola vez; título h3, texto `ink-2` a 36 ch y botón secundario "Enviar otro mensaje".

### Navigation
- **Pill flotante** (`.nav-fixed` + `.glass`): `position: fixed` a 16 px del borde superior más `safe-area-inset-top`, 16 px de margen lateral, 1120 px máximo, 56 px de alto, 16 px de radio, borde `line`, fondo `nav-glass` con blur 12 px, sin sombra; padding izquierdo 12 px (16 px desde 640 px) y derecho 8 px. Marca "NS" de 28 px + wordmark Bricolage 17 px 600 en un link de 44 px; links centrados desde 768 px; a la derecha "Pedí una demo" (primario compacto de 44 px) desde 768 px; hamburguesa de 44 px con radio 12 px por debajo.
- **Links:** 15 px 500 en `ink-2`, 44 px de alto, padding 0 12 px, radio 8 px; hover a `ink` con una línea índigo de 2 px (radio 2 px, a 8 px del piso, 12 px de margen por lado) que crece desde la izquierda (`scaleX` 0 → 1 en 200 ms `ease-out`).
- **Menú móvil:** panel sólido `bg-raise` 8 px bajo la nav, borde `line`, 16 px de radio, 8 px de padding, sombra flotante; entra con `fade-up` (opacidad y 8 px en 200 ms), sin stagger; ítems de 48 px, 16 px 500, radio 12 px; CTA primario de 48 px a ancho completo; cierra con Escape y al navegar.
- **Skip link:** "Ir al contenido", visible sólo en foco, fijo a 16 px de la esquina, fondo `accent`, texto blanco, 12 px de radio.

### Brand mark
La "NS" (`components/nova-logo.tsx`) es un SVG inline de 28 px: cuadrado `mark-bg` con radio 118 / 512 y borde blanco al 12 %, "N" en `mark-ink` y "S" en `mark-accent`, ambas en Bricolage 700 con tracking -20 / 512. Toma la fuente display del sitio y no depende de fuentes instaladas; es la misma marca que `branding/logo-dark.svg` y el favicon.

### Reveal (entrada por scroll)
`.reveal` (o cada hijo directo de `.reveal-group`) parte en opacidad 0 y 8 px abajo y pasa a su estado final en 320 ms `ease-out` cuando entra al 10 % del viewport (con `rootMargin` -8 % abajo), una sola vez. En `.reveal-group` los hijos 2 a 5 retrasan 40 ms por índice y del sexto en adelante 200 ms (la única "historia" de la página: las tres filas de la familia de productos). Sólo se usa debajo del fold. Sin IntersectionObserver o sin scripting, todo se muestra de entrada.

### Motion tokens
120 ms (`--d-fast`: press, color, flecha, foco del input), 200 ms (`--d-base`: menú móvil, éxito, subrayado de nav), 320 ms (`--d-slow`: reveal), 600 ms (`--d-story`: anillo de éxito), con `cubic-bezier(0.23, 1, 0.32, 1)` (`--ease-out`) para todo; `--ease-in-out` (`cubic-bezier(0.77, 0, 0.175, 1)`) está declarado por el sistema compartido y este sitio no lo usa. Con `prefers-reduced-motion: reduce` el reveal queda sin desplazamiento y pasa a opacidad en 160 ms sin retraso, `fade-up` y `pulse-once` se apagan, y la flecha y el subrayado de nav pierden la transición; el `scroll-behavior: smooth` sólo existe con `no-preference`. El scrollbar es de 12 px con pista `bg` y pulgar blanco al 18 % (30 % en hover) con 3 px de borde `bg`.

## Do's and Don'ts

### Do:
- **Do** usar un solo acento índigo (`accent`) para acción, foco, selección y énfasis, y reservar verde y rojo para estados.
- **Do** renderizar el primer viewport en su estado final desde el servidor; `.reveal` sólo debajo del fold, una vez, 8 px y 320 ms.
- **Do** mostrar el producto como mock plano de tema claro dentro de un marco oscuro (`bg-raise`, borde `line`, 16 px, 8 px de padding, sombra flotante) con nota "Datos de ejemplo." en 12 px `ink-3`.
- **Do** estructurar listas como filas con hairline al 12 % (28 px de padding vertical) o columnas con `divide-x`, y limitar a un panel al 6 % por sección.
- **Do** dar feedback de press a todo lo pulsable (`scale(0.97)` en 120 ms, 44-48 px de alto táctil) y foco visible con outline índigo de 2 px a 2 px de offset.
- **Do** poner hover sólo bajo `(hover: hover) and (pointer: fine)` y un efecto por elemento (cambio de fondo, de color de texto, o 2 px de flecha).
- **Do** mantener inputs a 16 px con fondo `surface`, borde `line`, radio 12 px y foco con borde índigo + anillo `accent-soft`; errores por campo en texto, no en globo nativo.
- **Do** usar Lucide a 20 px con trazo 1.75 en `accent-ink` para íconos de contenido, y `ink-3` para íconos de metadatos.

### Don't:
- **Don't** animar al cargar, ni con loops: sin typewriter, texto rotativo, marquee, contadores, partículas, canvas, orbes ni spotlight; el ambiente es una capa estática.
- **Don't** usar `transition-all` ni animar sombra, ancho, alto, `max-height` o posición; sólo `transform`, `opacity`, color de fondo, de texto y de borde.
- **Don't** poner eyebrows o kickers sobre títulos, mayúsculas con tracking, peso 800 ni gradientes de texto.
- **Don't** usar glass fuera de la nav fija, ni sombras en reposo en botones, paneles o filas; la nav no lleva sombra.
- **Don't** armar grillas de cards iguales ni más de un panel por sección; tampoco cursor custom ni 3D.
- **Don't** sacar la paleta interna del mock (`#f4f5fa`, `#111827`, `#6b7280`, `#e5e7eb`, `#047857`, ámbar) al resto de la página, ni usar `#faf8f4` fuera de la marca.
- **Don't** usar Poppins, Inter ni ningún gradiente violeta: el mundo anterior del sitio no existe más.
- **Don't** escribir "Nova ERP" ni "NovaSolutions": es NovaERP y Nova Solutions, con la "NS" a 28 px.
