import React, { useState, useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import LandingSection from "./LandingSection/LandingSection";
import SecondSection from "./SecondSection/SecondSection";
import MaintenanceServices from "./MaintenanceServices/MaintenanceServices";
import Monitoring from "./Monitoring/Monitoring";
import SupportServices from "./SupportServices/SupportServices";
import WhyUs from "./WhyUs/WhyUs";
import ConsultancySection from "../../Services/Desktop/consultancy-section";

const MaintenanceSupport = () => {
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
            id: "maintenance.and.support",
            defaultMessage: "Maintenance and Support - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "outsourcing.your.application",
            defaultMessage:
              "Outsourcing your application's support and maintenance frees up your team to focus on what really matters. Astute Softwares seamlessly becomes the binding glue keeping everything together.",
          })}
        />
        <meta
          name="keywords"
          content="IT support and maintenance, Software maintenance services, Application support solutions, Ongoing IT assistance, Technical support services"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/maintenance-and-support"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "maintenance.and.support",
            defaultMessage: "Maintenance and Support - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "outsourcing.your.application",
            defaultMessage:
              "Outsourcing your application's support and maintenance frees up your team to focus on what really matters. Astute Softwares seamlessly becomes the binding glue keeping everything together.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/maintenance-and-support"
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
          <WhyUs />
          <MaintenanceServices />
          <SupportServices />
          <Monitoring />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default MaintenanceSupport;
