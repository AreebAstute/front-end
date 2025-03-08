import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import "../DetailServicePageStyles.css";
import LandingSection from "./LandingSection/LandingSection";
import BlockChainWebDevelopment from "./BlockchainWebDevelopment/BlockChainWebDevelopment";
import Hiring from "./Hiring/Hiring";
import Features from "./Features/Features";
import ConsultancySection from "../../Services/Desktop/consultancy-section";
import WorkingPrinciple from "./WorkingPrinciple/WorkingPrinciple";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const BlockChainService = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "blockchain.solutions",
            defaultMessage: "Blockchain Solutions - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "transform.your.business",
            defaultMessage:
              "Transform your business with Astute Softwares's cutting-edge blockchain solutions and services that are secure, transparent, and efficient. Contact us to explore how we can help you.",
          })}
        />
        <meta
          name="keywords"
          content="Blockchain development services, Custom blockchain solutions, Blockchain technology consulting, Decentralized application development, Smart contract development"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/blockchain-solutions"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "blockchain.solutions",
            defaultMessage: "Blockchain Solutions - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "transform.your.business",
            defaultMessage:
              "Transform your business with Astute Softwares's cutting-edge blockchain solutions and services that are secure, transparent, and efficient. Contact us to explore how we can help you.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/blockchain-solutions"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col overflow-x-hidden ">
        <div className="flex-grow pt-24">
          <LandingSection />
          <BlockChainWebDevelopment />
          <Hiring />
          <Features />
          <WorkingPrinciple />
          <WhyChooseUs />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default BlockChainService;
