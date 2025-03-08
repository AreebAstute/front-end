import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import "../DetailServicePageStyles.css";
import LandingSection from "./LandingSection/LandingSection";
import Benifits from "./Benefits/Benifits";
import ConsultancySection from "../../Services/Desktop/consultancy-section";
import OurServices from "./OurServices/OurServices";
import Consultation from "./Consultation/Consultation";
import Hiring from "./Hiring/Hiring";

const TimeAndMaterialService = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "time.and.material",
            defaultMessage: "Time and Material Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "maintain.your.goals",
            defaultMessage:
              "Maintain your goals according to your allocated budget with our reliable time and material services. The experts at Astute Softwares offers reasonable pricing and timely delivery.",
          })}
        />
        <meta
          name="keywords"
          content="Time and material model, Flexible project pricing, Custom billing solutions, Pay as you go IT services, Project-based billing services"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/time-and-material-services"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "time.and.material",
            defaultMessage: "Time and Material Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "maintain.your.goals",
            defaultMessage:
              "Maintain your goals according to your allocated budget with our reliable time and material services. The experts at Astute Softwares offers reasonable pricing and timely delivery.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/time-and-material-services"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col overflow-x-hidden ">
        <div className="flex-grow pt-24">
          <LandingSection />
          <Benifits />
          <OurServices />
          <Consultation />
          <Hiring />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default TimeAndMaterialService;
