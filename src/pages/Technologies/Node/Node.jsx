import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import LandingSection from "./LandingSection/LandingSection";
import ModernDevelopment from "./ModernDevelopment/ModernDevelopment";
import NodeFeatures from "./NodeFeatures/NodeFeatures";
import Advantages from "./Advantages/Advantages";
import WhyNode from "./WhyNode/WhyNode";
import ConsultancySection from "../../Services/Desktop/consultancy-section";
import "./NodeStyles.css";

const Node = () => {
  const intl = useIntl();
  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "node.js.development",
            defaultMessage: "NodeJS Development Services - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "asute.softwares.node.js",
            defaultMessage:
              "Astute Softwares offers expert NodeJS development services for building efficient web applications. Contact us today to learn how we can help bring your project to life.",
          })}
        />
        <meta
          name="keywords"
          content="Node.js development services, Node.js backend development, Hire Node.js developers, Scalable Node.js applications, Node.js API development"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com//technologies/nodejs"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "node.js.development",
            defaultMessage: "NodeJS Development Services - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "asute.softwares.node.js",
            defaultMessage:
              "Astute Softwares offers expert NodeJS development services for building efficient web applications. Contact us today to learn how we can help bring your project to life.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com//technologies/nodejs"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="pt-20">
        <LandingSection />
        <ModernDevelopment />
        <NodeFeatures />
        <Advantages />
        <WhyNode />
        <ConsultancySection />
      </div>
    </>
  );
};

export default Node;
