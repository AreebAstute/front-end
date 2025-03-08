import React, { useState, useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import LandingSection from "./LandingSection/LandingSection";
import SecondSection from "./SecondSection/SecondSection";
import HowCanWeHelp from "./HowCanWeHelp/HowCanWeHelp";
import DigitalTransformationServices from "./DigitalTransformationServices/DigitalTransformationServices";
import DigitalTransformationDesc from "./DigitalTransformationDesc/DigitalTransformationDesc";
import ModernCoreApplication from "./ModernCoreApplication/ModernCoreApplication";
import MonetizeData from "./MonetizeData/MonetizeData";
import FourthSection from "./FourthSection/FourthSection";
import FifthSection from "./FifthSection/FifthSection";
import ConsultancySection from "../../Services/Desktop/consultancy-section";

const DTService = () => {
  const [refOffset, setRefOffset] = useState();
  const ref = useRef(null);
  const intl = useIntl();

  useEffect(() => {
    setRefOffset(ref.current.offsetTop);
  }, [ref]);

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "astute.software.digital.transformation",
            defaultMessage: "Astute Softwares, Digital Transformation Services",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.offer.the.most",
            defaultMessage:
              "Astute Softwares offers the most advanced digital transformation services. We provide an integrated and astute way of digitising internal processes and corporate tasks. We are also committed to making sure that you have all transparency about what is going on.",
          })}
        />
        <meta
          name="keywords"
          content="Digital transformation services, Business digitalization consulting, Digital strategy development, Tech innovation solutions, Digital enterprise transformation"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/digital-transformation-services"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "astute.software.digital.transformation",
            defaultMessage: "Astute Softwares, Digital Transformation Services",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.offer.the.most",
            defaultMessage:
              "Astute Softwares offers the most advanced digital transformation services. We provide an integrated and astute way of digitising internal processes and corporate tasks. We are also committed to making sure that you have all transparency about what is going on.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/digital-transformation-services"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col">
        <div className="flex-grow">
          <LandingSection refOffset={refOffset} />
          <div ref={ref}>
            <SecondSection />
          </div>
          <HowCanWeHelp />
          <DigitalTransformationDesc />
          <ModernCoreApplication />
          <DigitalTransformationServices />
          <FourthSection />
          <MonetizeData />
          <FifthSection />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default DTService;
