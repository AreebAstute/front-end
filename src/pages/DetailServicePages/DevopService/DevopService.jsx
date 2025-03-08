import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import "../DetailServicePageStyles.css";
import LandingSection from "./LandingSection/LandingSection";
import Services from "./Services/Services";
import Management from "./Management/Management";
import Benefits from "./Benefits/Benefits";
import ServicesPractice from "./ServicesPractice/ServicesPractice";
import DevopAsService from "./DevopAsService/DevopAsService";
import ConsultancySection from "../../Services/Desktop/consultancy-section";
import ServiceAdvantage from "./ServiceAdvantage/ServiceAdvantage";

const DevopService = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "devops.services",
            defaultMessage: "DevOps Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "maximize.efficiency",
            defaultMessage:
              "Maximize efficiency and streamline your software development process with our expert DevOps services. Contact us today to see how we can help your business succeed",
          })}
        />
        <meta
          name="keywords"
          content="DevOps consulting services, Continuous integration solutions, Automated deployment services, DevOps strategy and tools, Cloud and DevOps services"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/devops-services"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "devops.services",
            defaultMessage: "DevOps Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "maximize.efficiency",
            defaultMessage:
              "Maximize efficiency and streamline your software development process with our expert DevOps services. Contact us today to see how we can help your business succeed",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/devops-services"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col">
        <div className="flex-grow pt-24">
          <LandingSection />
          <Services />
          <Management />
          <Benefits />
          <ServicesPractice />
          <ServiceAdvantage />
          <DevopAsService />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default DevopService;
