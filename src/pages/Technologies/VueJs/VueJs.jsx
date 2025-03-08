import React from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";

import LandingSection from "./LandingSection/LandingSection";
import ModernDevelopment from "./ModernDevelopment/ModernDevelopment";
import VueJsFeatures from "./VueJsFeatures/VueJsFeatures";
import Advantages from "./Advantages/Advantages";
import WhyVueJs from "./WhyVueJs/WhyVueJs";
import ConsultancySection from "../../Services/Desktop/consultancy-section";

import "./VueJsStyles.css";

const VueJs = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "vue.js.development",
            defaultMessage: "Kotlin Development Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "asute.softwares.vue.js",
            defaultMessage:
              "Astute Softwares offers expert Kotlin developers that can build your next project with efficiency and reliability. Contact us today to get started.",
          })}
        />
        <meta
          name="keywords"
          content="Vue.js development services, Vue frontend development, Hire Vue.js developers, Vue SPA development, Vue application development"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com//technologies/vue"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "vue.js.development",
            defaultMessage: "Kotlin Development Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "asute.softwares.vue.js",
            defaultMessage:
              "Astute Softwares offers expert Kotlin developers that can build your next project with efficiency and reliability. Contact us today to get started.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com//technologies/vue"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="pt-20">
        <LandingSection />
        <ModernDevelopment />
        <VueJsFeatures />
        <Advantages />
        <WhyVueJs />
        <ConsultancySection />
      </div>
    </>
  );
};

export default VueJs;
