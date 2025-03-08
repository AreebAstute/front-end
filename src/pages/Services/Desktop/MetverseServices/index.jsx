import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import ConsultancySection from "../consultancy-section";
import ChoosePartner from "./ChoosePartner";
import LandingSection from "./LandingSection";
import Momemntum from "./Momentum";
import PlatFormAndTechnologies from "./PlatFormAndTechnologies";
import Table from "./Table";

const MetverseServices = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "software.metaverse",
            defaultMessage: "Astute Softwares - Metaverse",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.software.is.a.leading",
            defaultMessage:
              "Astute softwares is a leading software development company that specializes in the development of metaverse and Web 3.0 services.",
          })}
        />
        <meta
          name="keywords"
          content="Metaverse development services, Virtual reality solutions, Augmented reality services, Metaverse platform development, Custom metaverse applications"
        />
        <link rel="canonical" href="https://astutesoftwares.com/metaverse" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "software.metaverse",
            defaultMessage: "Astute Softwares - Metaverse",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.software.is.a.leading",
            defaultMessage:
              "Astute softwares is a leading software development company that specializes in the development of metaverse and Web 3.0 services.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/metaverse"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="">
        <LandingSection />
        <Momemntum />
        {/* <ChoosePartner /> */}
        <PlatFormAndTechnologies />
        <div className="">
          <div className="">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default MetverseServices;
