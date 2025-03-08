import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import LandingSection from "./LandingSection/LandingSection";
import ModernDevelopment from "./ModernDevelopment/ModernDevelopment";
import AngularFeatures from "./AngularFeatures/AngularFeatures";
import Advantages from "./Advantages/Advantages";
import WhyAngular from "./WhyAngular/WhyAngular";
import ConsultancySection from "../../Services/Desktop/consultancy-section";

import "./angularStyles.css";

const Angular = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "angular.development",
            defaultMessage: "Angular Development Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.softwares.offers.angular",
            defaultMessage:
              "Astute Softwares offers expert Angular development services for creating immersive and interactive UIs that deliver great UX to consumers.",
          })}
        />
        <meta
          name="keywords"
          content="Angular development services, Angular web development, Certified Angular developers, Enterprise Angular solutions, Angular application development"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com//technologies/angular"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "angular.development",
            defaultMessage: "Angular Development Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.softwares.offers.angular",
            defaultMessage:
              "Astute Softwares offers expert Angular development services for creating immersive and interactive UIs that deliver great UX to consumers.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com//technologies/angular"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="pt-20">
        <LandingSection />
        <ModernDevelopment />
        <AngularFeatures />
        <Advantages />
        <WhyAngular />
        <ConsultancySection />
      </div>
    </>
  );
};

export default Angular;
