import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import LandingSection from "./LandingSection";
import FutureBusiness from "./FutureBusiness";
import Marketing from "./Marketing";
import ConsultancySection from "../consultancy-section";
import ExtraOrdinaryQuality from "./ExtraOrdinaryQuality";
import Sales from "./Sales";
import ECommerce from "./ECommerce";
import RealEstate from "./RealEstate";
import Industrial from "./Industrial";

const ThreedModeling = () => {
  const [refOffset, setRefOffset] = useState();
  const ref = useRef(null);
  const intl = useIntl();

  useEffect(() => {
    setRefOffset(ref.current.offsetTop);
  }, [ref]);

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "software.3d.modeling",
            defaultMessage: "Astute Softwares - 3D modelling",
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
          content="3D modeling services, Custom 3D design, Professional 3D rendering, 3D animation services, Virtual product modeling"
        />
        <link rel="canonical" href="https://astutesoftwares.com/3d-modelling" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "software.3d.modeling",
            defaultMessage: "Astute Softwares - 3D modelling",
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
          content="https://astutesoftwares.com/3d-modelling"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col">
        <div className="flex-grow">
          <LandingSection refOffset={refOffset} setRefOffset={setRefOffset} />
        </div>
      </div>
      <div ref={ref}>
        <FutureBusiness />
      </div>
      <ExtraOrdinaryQuality />
      <Marketing />
      <Sales />
      <ECommerce />
      <Industrial />
      <RealEstate />

      <ConsultancySection />
    </>
  );
};

export default ThreedModeling;
