import React, { useState, useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import LandingSection from "./LandingSection/LandingSection";
import SecondSection from "./SecondSection/SecondSection";
import DevelopmentServices from "./DevelopmentServices/DevelopmentServices";
import EngagementModels from "./EngagementModel/EngagementModel";
import SecretSauce from "./SecretSauce/SecretSauce";
import FourthSection from "./FourthSection/FourthSection";
import FifthSection from "./FifthSection/FifthSection";
import ConsultancySection from "../../Services/Desktop/consultancy-section";

const WebDevService = () => {
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
            id: "ideal.company.for",
            defaultMessage:
              "The ideal company for top-notch websites and web application development.",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "we.offer.web.design",
            defaultMessage:
              "We offer web design, framework coding, and backend development for reliable, scalable and maintainable software. Start-ups, established businesses and marketers all need web development services. We specialize in building custom websites and mobile apps.",
          })}
        />
        <meta
          name="keywords"
          content="Custom web development, Professional website creation, E-commerce development services, Responsive web design, Full-stack web developers"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/custom-software-development"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "ideal.company.for",
            defaultMessage:
              "The ideal company for top-notch websites and web application development.",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "we.offer.web.design",
            defaultMessage:
              "We offer web design, framework coding, and backend development for reliable, scalable and maintainable software. Start-ups, established businesses and marketers all need web development services. We specialize in building custom websites and mobile apps.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/custom-software-development"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col">
        <div className="flex-grow ">
          <LandingSection refOffset={refOffset} />
          <div ref={ref}>
            <SecondSection />
          </div>
          <DevelopmentServices />
          <EngagementModels />
          <SecretSauce />
          <FourthSection />
          <FifthSection />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default WebDevService;
