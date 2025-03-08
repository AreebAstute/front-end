import React from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";

import LandingSection from "./LandingSection/LandingSection";
import ModernDevelopment from "./ModernDevelopment/ModernDevelopment";
import ReactFeatures from "./ReactFeatures/ReactFeatures";
import Advantages from "./Advantages/Advantages";
import WhyReact from "./WhyReact/WhyReact";
import ConsultancySection from "../../Services/Desktop/consultancy-section";
import "./ReactStyles.css";

const ReactTechnology = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "react.development.services",
            defaultMessage: "React Development Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.softwares.offers.react",
            defaultMessage:
              "Astute Softwares offers expert React development services for creating immersive and interactive UIs that deliver great UX to consumers.",
          })}
        />
        <meta
          name="keywords"
          content="React development services, React JS development, Hire React developers, React web application, React native for mobile"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com//technologies/react"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "react.development.services",
            defaultMessage: "React Development Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.softwares.offers.react",
            defaultMessage:
              "Astute Softwares offers expert React development services for creating immersive and interactive UIs that deliver great UX to consumers.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com//technologies/react"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="pt-20">
        <LandingSection />
        <ModernDevelopment />
        <ReactFeatures />
        <Advantages />
        <WhyReact />
        <ConsultancySection />
      </div>
    </>
  );
};

export default ReactTechnology;
