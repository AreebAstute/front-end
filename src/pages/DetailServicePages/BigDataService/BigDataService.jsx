import React from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";

import "../DetailServicePageStyles.css";
import LandingSection from "./LandingSection/LandingSection";
import Services from "./Services/Services";
import Industries from "./Industries/Industries";
import KandaIndustries from "./KandaIndustries/KandaIndustries";
import ConsultancySection from "../../Services/Desktop/consultancy-section";

const BigDataService = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "big.data.services",
            defaultMessage: "Big Data Consulting Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "get.insights.from",
            defaultMessage:
              "Get insights from your data with our expert big data consulting services. From data collection to analysis, Astute Softwares helps you make informed decisions.",
          })}
        />
        <meta
          name="keywords"
          content="Big data solutions, Data analytics services, Big data consulting, Data management solutions, Advanced analytics services"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/big-data-consulting-services"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "big.data.services",
            defaultMessage: "Big Data Consulting Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "get.insights.from",
            defaultMessage:
              "Get insights from your data with our expert big data consulting services. From data collection to analysis, Astute Softwares helps you make informed decisions.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/big-data-consulting-services"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col">
        <div className="flex-grow pt-24">
          <LandingSection />
          <Services />
          <Industries />
          <KandaIndustries />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default BigDataService;
