import React, { useState, useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import LandingSection from "./LandingSection/LandingSection";
import SecondSection from "./SecondSection/SecondSection";
import MutualSuccess from "./MutualSuccess/MutualSuccess";
import QATypes from "./QATypes/QATypes";
import QATestingServices from "./QATestingServices/QATestingServices";
import ConsultancySection from "../../Services/Desktop/consultancy-section";

const QAService = () => {
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
            id: "astute.software.quality",
            defaultMessage: "Astute Softwares, Software Quality Assurance",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.offer.has.perfected",
            defaultMessage:
              "Astute Softwares has perfected QA and Testing strategy and methodology that blend seamlessly into the development lifecycle without crossing the important boundaries,",
          })}
        />
        <meta
          name="keywords"
          content="Quality assurance services, Software testing experts, Application testing services, Automated testing solutions, QA and testing consultancy"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/software-quality-assurance"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "astute.software.quality",
            defaultMessage: "Astute Softwares, Software Quality Assurance",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.offer.has.perfected",
            defaultMessage:
              "Astute Softwares has perfected QA and Testing strategy and methodology that blend seamlessly into the development lifecycle without crossing the important boundaries,",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/software-quality-assurance"
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
          <MutualSuccess />
          <QATestingServices />
          <QATypes />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default QAService;
