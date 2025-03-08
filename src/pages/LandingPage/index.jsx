import React from "react";
import { useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";



// const HeroSection = React.lazy(() => import("./HeroSection"));
// const MostSearchedSection = React.lazy(() => import("./MostSearchedSection"));
// const SolutionSection = React.lazy(() => import("./SolutionSection"));
// const TechSection = React.lazy(() => import("./TechSection"));
// const ReviewSection = React.lazy(() => import("./ReviewSection"));
// const TidioChat = React.lazy(() => import("../../components/TidioChat"));

// Components
import HeroSection from "./HeroSection";
import MostSearchedSection from "./MostSearchedSection";
import SolutionSection from "./SolutionSection";
import TechSection from "./TechSection";
import ReviewSection from "./ReviewSection";
// import FaqSection from "./FaqSection";

import TidioChat from "../../components/TidioChat";

function LandingPage() {
  const intl = useIntl();

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


  const defaultTitle = "Astute Softwares - Empowering Startups with Scalable Tech Solutions";
  const defaultDescription =
    "Astute Softwares helps startups cut costs and launch MVPs with cloud-optimized development. Trusted by 10+ startups, handling 100K+ users daily.";
  const url = "https://astutesoftwares.com/usa-startups";

  // TODO: Replace this placeholder with the actual banner image URL once available
  const imageUrl = "https://astutesoftwares.com/images/home-banner-placeholder-webp.webp";

  return (
    <>
      <Helmet>
        {/* General Meta Tags */}
        <title>
          {intl?.formatMessage({ id: "home.title", defaultMessage: defaultTitle }) || defaultTitle}
        </title>
        <meta
          name="description"
          content={intl?.formatMessage({ id: "home.description", defaultMessage: defaultDescription }) || defaultDescription}
        />
        <meta
          name="keywords"
          content="Startup software solutions, MVP development, Cloud cost optimization, Web and mobile development, DevOps consulting, AWS services, 3D modeling, IT consulting"
        />
        <link rel="canonical" href={url} />

        {/* Open Graph Meta Tags (for Social Media Sharing) */}
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Astute Softwares - Empowering Startups" />

        {/* Twitter Meta Tags (for Better Twitter Sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Robots Meta Tag (Ensures SEO Indexing) */}
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
