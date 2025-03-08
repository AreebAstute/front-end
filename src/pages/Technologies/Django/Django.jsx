import React from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";

import LandingSection from "./LandingSection/LandingSection";
import ModernDevelopment from "./ModernDevelopment/ModernDevelopment";
import DjangoFeatures from "./DjangoFeatures/DjangoFeatures";
import Advantages from "./Advantages/Advantages";
import WhyDjango from "./WhyDjango/WhyDjango";
import ConsultancySection from "../../Services/Desktop/consultancy-section";
import "./DjangoStyles.css";

const Django = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "django.development",
            defaultMessage: "Django Development Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "django.development.services",
            defaultMessage:
              "Astute Softwares offers expert Django development services that can build your next web application efficiently. Contact us today to get started.",
          })}
        />
        <meta
          name="keywords"
          content="Django development services, Python Django web development, Django application development, Hire Django developers, Custom Django solutions"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com//technologies/django"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "django.development",
            defaultMessage: "Django Development Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "django.development.services",
            defaultMessage:
              "Astute Softwares offers expert Django development services that can build your next web application efficiently. Contact us today to get started.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com//technologies/django"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="pt-20">
        <LandingSection />
        <ModernDevelopment />
        <DjangoFeatures />
        <Advantages />
        <WhyDjango />
        <ConsultancySection />
      </div>
    </>
  );
};

export default Django;
