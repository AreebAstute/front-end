import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import LandingSection from "./LandingSection/LandingSection";
import ModernDevelopment from "./ModernDevelopment/ModernDevelopment";
import LaravelFeatures from "./LaravelFeatures/LaravelFeatures";
import Advantages from "./Advantages/Advantages";
import WhyLaravel from "./WhyLaravel/WhyLaravel";
import ConsultancySection from "../../Services/Desktop/consultancy-section";
import "./LaravelStyles.css";

const Laravel = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "laravel.development",
            defaultMessage: "Laravel Development Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.softwares.offers",
            defaultMessage:
              "Astute Softwares offers expert Laravel development services solutions for web application development, e-commerce solutions, and more.",
          })}
        />
        <meta
          name="keywords"
          content="Laravel development services, Custom Laravel solutions, PHP Laravel developer, Laravel web application, Laravel enterprise solutions"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com//technologies/laravel"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "laravel.development",
            defaultMessage: "Laravel Development Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.softwares.offers",
            defaultMessage:
              "Astute Softwares offers expert Laravel development services solutions for web application development, e-commerce solutions, and more.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com//technologies/laravel"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="pt-20">
        <LandingSection />
        <ModernDevelopment />
        <LaravelFeatures />
        <Advantages />
        <WhyLaravel />
        <ConsultancySection />
      </div>
    </>
  );
};

export default Laravel;
