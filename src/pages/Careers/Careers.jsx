import React, { useState, useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";
import { HelmetComp } from "../../components/Helmet";



// const LandingSection = React.lazy(() => import("./LandingSection/LandingSection"));
// const OpenPositions = React.lazy(() => import("./OpenPositions/OpenPositions"));
// const WhyUs = React.lazy(() => import("./WhyUs/WhyUs"));
// const CoreValues = React.lazy(() => import("./CoreValues/CoreValues"));
// const ConsultancySection = React.lazy(() => import("../Services/Desktop/consultancy-section"));

import LandingSection from "./LandingSection/LandingSection";
import OpenPositions from "./OpenPositions/OpenPositions";
import WhyUs from "./WhyUs/WhyUs";
import CoreValues from "./CoreValues/CoreValues";
import ConsultancySection from "../Services/Desktop/consultancy-section";

const Careers = () => {
  const [refOffset, setRefOffset] = useState();
  const ref = useRef(null);
  const intl = useIntl();

  useEffect(() => {
    window.scrollTo(0, 0);
    setRefOffset(ref.current.offsetTop);
  }, [ref]);


  const title = intl.formatMessage({ id: 'careers.title', defaultMessage: "Careers at Astute Softwares | Join Our Growing IT Team" });
  const description = intl.formatMessage({ id: 'careers.description', defaultMessage: "Looking for a career in IT? Join Astute Softwares – one of the fastest-growing software services companies. Explore job opportunities in React, WordPress, Django, QA, 3D Design, and more!" });
  const keywords = intl.formatMessage({ id: 'careers.keywords', defaultMessage: "IT jobs, software careers, React, WordPress, Django, QA, 3D Design" });
  
  const url = "https://astutesoftwares.com/careers";

  // TODO: Replace with the final career page banner once available
  const imageUrl = "https://astutesoftwares.com/images/careers-placeholder-webp.webp";

  return (
    <>
      <HelmetComp
        title={title}
        description={description}
        keywords={keywords}
        url={url}
        imageUrl={imageUrl}
      />

      <div className="pt-28">
        <LandingSection refOffset={refOffset} />
        <div ref={ref}>
          <OpenPositions />
        </div>
        <WhyUs />
        <CoreValues />
        <ConsultancySection />
      </div>
    </>
  );
};

export default Careers;

      // <Helmet>
      //   {/* Helmet-general-tags */}
      //   <title>
      //     {intl.formatMessage({
      //       id: "careers.services",
      //       defaultMessage: "Careers - Astute Softwares",
      //     })}
      //   </title>
      //   <meta
      //     name="description"
      //     content={intl.formatMessage({
      //       id: "junior.or.veteran",
      //       defaultMessage:
      //         "Junior or veteran –whatever! At Astute Softwares, you’ll develop your career in a respectful and open atmosphere.",
      //     })}
      //   />
      //   <meta
      //     name="keywords"
      //     content="Software career opportunities, Join our IT team, Open tech positions, Developer job application, Career growth in IT"
      //   />
      //   <link rel="canonical" href="https://astutesoftwares.com/careers" />

      //   {/* OG Tags */}
      //   <meta
      //     property="og:title"
      //     content={intl.formatMessage({
      //       id: "careers.services",
      //       defaultMessage: "Careers - Astute Softwares",
      //     })}
      //     data-react-helmet="true"
      //   />
      //   <meta
      //     property="og:description"
      //     content={intl.formatMessage({
      //       id: "junior.or.veteran",
      //       defaultMessage:
      //         "Junior or veteran –whatever! At Astute Softwares, you’ll develop your career in a respectful and open atmosphere.",
      //     })}
      //     data-react-helmet="true"
      //   />
      //   <meta property="og:type" content="website" />
      //   <meta property="og:url" content="https://astutesoftwares.com/careers" />

      //   {/* Meta-referrer-tag */}
      //   <meta name="referrer" content="origin-when-crossorigin" />
      // </Helmet>