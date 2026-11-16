import type { Metadata } from "next";
import { LEGAL, LegalPage, Section } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Términos y condiciones | Nova Solutions",
  description: "Las condiciones para usar el sitio www.novasolutions.ar.",
  alternates: { canonical: "/terminos" },
};

export default function TerminosPage() {
  return (
    <LegalPage title="Términos y condiciones">
      <Section title="Sobre este sitio">
        <p>
          www.novasolutions.ar es el sitio de {LEGAL.responsable}, CUIT {LEGAL.cuit},
          con domicilio en {LEGAL.domicilio}. Al usarlo aceptás estos términos.
        </p>
      </Section>

      <Section title="Para qué sirve">
        <p>
          El sitio cuenta qué hacemos y te permite contactarnos. Lo que ves acá
          es información general: no es una oferta ni un presupuesto. Cada
          proyecto o producto se contrata con una propuesta y un acuerdo
          escritos, que son los que valen.
        </p>
        <p>
          El diagnóstico es orientativo: te da una idea de por dónde empezar, no
          reemplaza una evaluación de tu caso.
        </p>
      </Section>

      <Section title="Uso correcto">
        <p>
          No uses el sitio ni el formulario para mandar spam, contenido ilegal o
          para intentar romper o sobrecargar el servicio.
        </p>
      </Section>

      <Section title="Propiedad intelectual">
        <p>
          Los textos, el diseño, las marcas NovaERP, NovaStay, NovaPoints y
          Jarvis y el código del sitio son de Nova Solutions. No los copies ni los
          uses sin permiso escrito.
        </p>
      </Section>

      <Section title="Enlaces a otros sitios">
        <p>
          Si un enlace te lleva a un sitio de otra empresa, ese sitio tiene sus
          propias condiciones y no somos responsables de su contenido.
        </p>
      </Section>

      <Section title="Tus datos">
        <p>
          Cómo tratamos los datos que nos dejás está en la{" "}
          <a href="/privacidad" className="underline underline-offset-4">
            política de privacidad
          </a>
          .
        </p>
      </Section>

      <Section title="Ley aplicable">
        <p>
          Estos términos se rigen por las leyes de la República Argentina.
          Cualquier diferencia se resuelve ante los tribunales ordinarios de la
          ciudad de Neuquén, sin perjuicio de los derechos que te da la ley de
          defensa del consumidor.
        </p>
        <p>
          Consultas:{" "}
          <a href={`mailto:${LEGAL.mail}`} className="underline underline-offset-4">
            {LEGAL.mail}
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
