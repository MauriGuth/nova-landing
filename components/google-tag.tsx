/** Etiqueta de Google de la cuenta de Google Ads de Nova Solutions. Es
 *  pública: viaja en el HTML de cualquier sitio que la use. */
export const GOOGLE_ADS_ID = "AW-18499741291";

/** El fragmento de la etiqueta de Google tal cual lo da Google Ads, en el
 *  <head> del HTML que arma el servidor. Con next/script llegaba solo como
 *  preload y se inyectaba después de hidratar: medía igual, pero "Probar
 *  conexión" de Google Ads lee el HTML y no la encontraba. */
export function GoogleTag() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`} />
      <script
        id="google-ads-gtag"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`,
        }}
      />
    </>
  );
}
