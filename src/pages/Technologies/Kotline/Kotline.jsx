import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import LandingSection from "./LandingSection/LandingSection";
import ModernDevelopment from "./ModernDevelopment/ModernDevelopment";
import KotlineFeatures from "./KotlineFeatures/KotlineFeatures";
import Advantages from "./Advantages/Advantages";
import WhyKotline from "./WhyKotline/WhyKotline";
import ConsultancySection from "../../Services/Desktop/consultancy-section";

import "./KotlineStyles.css";

const Kotline = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "kotlin.development",
            defaultMessage: "Kotlin Development Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "asute.softwares.kotlin",
            defaultMessage:
              "Astute Softwares offers expert Kotlin developers that can build your next project with efficiency and reliability. Contact us today to get started.",
          })}
        />
        <meta
          name="keywords"
          content="Kotlin development services, Kotlin app development, Hire Kotlin developers, Kotlin for Android, Kotlin mobile solutions"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com//technologies/kotlin"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "kotlin.development",
            defaultMessage: "Kotlin Development Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "asute.softwares.kotlin",
            defaultMessage:
              "Astute Softwares offers expert Kotlin developers that can build your next project with efficiency and reliability. Contact us today to get started.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com//technologies/kotlin"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="pt-20">
        <LandingSection />
        <ModernDevelopment />
        <KotlineFeatures />
        <Advantages />
        <WhyKotline />
        <ConsultancySection />
      </div>
    </>
  );
};

export default Kotline;
