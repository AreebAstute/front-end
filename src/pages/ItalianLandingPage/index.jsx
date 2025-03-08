
import React from "react";
// import { useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";


import HeroSection from "./HeroSection";
import MostSearchedSection from "./MostSearchedSection";
import SolutionSection from "./SolutionSection";
import TechSection from "./TechSection";
import ReviewSection from "./ReviewSection";
// import FaqSection from "./FaqSection";

import TidioChat from "../../components/TidioChat";

function LandingPage() {
  const intl = useIntl();

  const defaultTitle = "Astute Softwares - Potenziamo le Startup con Soluzioni Scalabili";
  const defaultDescription =
  "Astute Softwares aiuta le startup a ridurre i costi e lanciare MVP con sviluppo cloud-ottimizzato. Oltre 10 startup avviate con successo nel 2023, servendo 100K+ utenti al giorno.";
  const url = "https://astutesoftwares.com/turin-startup-campaign";
  
  // TODO: Sostituisci con l'URL reale dell'immagine banner una volta disponibile
  const imageUrl = "https://astutesoftwares.com/images/home-banner-placeholder-webp.webp";
  
  return (
    <>
      <Helmet>
        {/* Meta Tag Generali */}
        <title>
          {intl?.formatMessage({ id: "home.title.it", defaultMessage: defaultTitle }) || defaultTitle}
        </title>
        <meta
          name="description"
          content={intl?.formatMessage({ id: "home.description.it", defaultMessage: defaultDescription }) || defaultDescription}
        />
        <meta
          name="keywords"
          content="Soluzioni software per startup, sviluppo MVP, ottimizzazione costi cloud, sviluppo web e mobile, consulenza DevOps, servizi AWS, modellazione 3D, consulenza IT"
          />
        <link rel="canonical" href={url} />

        {/* Open Graph Meta Tags (per la Condivisione sui Social) */}
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Astute Softwares - Potenziamo le Startup" />

        {/* Meta Tag Twitter (per Migliorare la Condivisione su Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Meta Tag Robots (per Assicurare l'Indicizzazione SEO) */}
        <meta name="robots" content="index, follow" />

        {/* Meta Referrer Tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>


      <div className="main_landing flex flex-col py-8">
        <HeroSection />
        <MostSearchedSection />
        <SolutionSection />
        <TechSection />
        <ReviewSection />
        {/* <FaqSection /> */}

        <TidioChat />
      </div>
    </>
  );
}
export default LandingPage;



















// Components
// const HeroSection = React.lazy(() => import("./HeroSection"));
// const MostSearchedSection = React.lazy(() => import("./MostSearchedSection"));
// const SolutionSection = React.lazy(() => import("./SolutionSection"));
// const TechSection = React.lazy(() => import("./TechSection"));
// const ReviewSection = React.lazy(() => import("./ReviewSection"));
// const TidioChat = React.lazy(() => import("../../components/TidioChat"));



// useEffect(() => {

//   var _mtm = (window._mtm = window._mtm || []);
//   _mtm.push({ "mtm.startTime": new Date().getTime(), event: "mtm.Start" });
//   _mtm.push(["enableHeartBeatTimer"]);
//   var d = document,
//     g = d.createElement("script"),
//     s = d.getElementsByTagName("script")[0];
//   g.async = true;
//   g.src = "https://analytics.shu-equipment.it/js/container_wpXJbnah.js";
//   s.parentNode.insertBefore(g, s);

//   var matomo_heartbeat = setInterval(function () {
//     _mtm.push(["ping"]);
//   }, 1 * (60 * 1000));

//   return () => {

//     // Clean up Matomo script when unmounting component
//     const scripts = document.getElementsByTagName("script");
//     for (let i = scripts.length - 1; i >= 0; i--) {
//       if (
//         scripts[i] &&
//         scripts[i].src &&
//         scripts[i].src.includes(
//           "https://analytics.shu-equipment.it/js/container_wpXJbnah.js"
//         )
//       ) {
//         scripts[i].parentNode.removeChild(scripts[i]);
//       }
//     }
//   };
// }, []);

// useEffect(() => {
//   // <!-- Matomo -->
//   var _paq = (window._paq = window._paq || []);
//   {
//     /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
//   }
//   _paq.push(["trackPageView"]);
//   _paq.push(["enableLinkTracking"]);
//   (function () {
//     var u = "//analytics.shu-equipment.it/";
//     _paq.push(["setTrackerUrl", u + "matomo.php"]);
//     _paq.push(["setSiteId", "3"]);
//     var d = document,
//       g = d.createElement("script"),
//       s = d.getElementsByTagName("script")[0];
//     g.async = true;
//     g.src = u + "matomo.js";
//     s.parentNode.insertBefore(g, s);
//   })();
//   // <!-- End Matomo Code -->
// }, []);