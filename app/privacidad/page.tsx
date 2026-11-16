import type { Metadata } from "next";
import { LEGAL, LegalPage, Section } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de privacidad | Nova Solutions",
  description:
    "Qué datos junta novasolutions.ar, para qué los usamos y cómo pedís verlos, corregirlos o borrarlos.",
  alternates: { canonical: "/privacidad" },
};

export default function PrivacidadPage() {
  return (
    <LegalPage title="Política de privacidad">
      <Section title="Quién es responsable de tus datos">
        <p>
          El responsable de los datos que se juntan en www.novasolutions.ar es{" "}
          {LEGAL.responsable}, CUIT {LEGAL.cuit}, con domicilio en {LEGAL.domicilio}.
          Para cualquier consulta sobre esta política escribinos a{" "}
          <a href={`mailto:${LEGAL.mail}`} className="underline underline-offset-4">
            {LEGAL.mail}
          </a>
          .
        </p>
      </Section>

      <Section title="Qué datos juntamos">
        <p>
          <strong>Formulario de contacto.</strong> Cuando nos escribís desde el
          formulario guardamos tu nombre, tu empresa (si la ponés), tu email y el
          mensaje. Los usamos solo para responderte y, si avanzamos, para preparar
          una propuesta.
        </p>
        <p>
          <strong>Diagnóstico.</strong> Las respuestas que elegís en el
          diagnóstico se procesan en tu navegador y no se guardan en ningún
          servidor. Si después nos escribís, el resumen se suma a tu mensaje y lo
          podés editar antes de enviarlo.
        </p>
        <p>
          <strong>Medición de anuncios.</strong> El sitio usa la etiqueta de
          Google (Google Ads) para saber si una visita llegó desde un anuncio
          nuestro y si después nos contactó. Google puede guardar cookies e
          identificadores en tu navegador para eso. Más información en{" "}
          <a
            href="https://policies.google.com/technologies/ads?hl=es-419"
            className="underline underline-offset-4"
            rel="noopener noreferrer"
            target="_blank"
          >
            cómo usa Google las cookies en publicidad
          </a>
          .
        </p>
        <p>
          <strong>Datos técnicos.</strong> Como cualquier sitio, el servidor
          registra datos técnicos de la visita (dirección IP, navegador, páginas
          pedidas) para que el sitio funcione y para detectar abusos.
        </p>
      </Section>

      <Section title="Con quién se comparten">
        <p>
          No vendemos ni alquilamos tus datos. Los procesan, por cuenta nuestra,
          los proveedores que hacen funcionar el sitio: Vercel (alojamiento), el
          servicio de correo con el que nos llega tu mensaje y Google (medición
          de anuncios). Algunos de esos servidores están fuera de la Argentina.
        </p>
      </Section>

      <Section title="Cuánto tiempo los guardamos">
        <p>
          Los mensajes del formulario los guardamos mientras dure la conversación
          con vos y hasta dos años después del último contacto, salvo que nos
          pidas borrarlos antes.
        </p>
      </Section>

      <Section title="Tus derechos">
        <p>
          Podés pedirnos gratis ver, corregir, actualizar o borrar tus datos,
          escribiendo a{" "}
          <a href={`mailto:${LEGAL.mail}`} className="underline underline-offset-4">
            {LEGAL.mail}
          </a>
          . Te respondemos dentro de los plazos de la Ley 25.326 (10 días
          corridos para el acceso y 5 días hábiles para corregir o borrar).
        </p>
        <p>
          La Agencia de Acceso a la Información Pública, órgano de control de la
          Ley 25.326, atiende las denuncias y reclamos de quienes vean afectados
          sus derechos sobre sus datos personales.
        </p>
        <p>
          Podés bloquear o borrar las cookies desde la configuración de tu
          navegador; el sitio sigue funcionando igual.
        </p>
      </Section>

      <Section title="Cambios">
        <p>
          Si cambiamos esta política, publicamos la versión nueva en esta misma
          página con la fecha de actualización.
        </p>
      </Section>
    </LegalPage>
  );
}
