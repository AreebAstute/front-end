import React, { useEffect, useRef, useState } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import LandingSection from "./LandingSection";
import VirtualRoom from "./VirtualRoom";
import WinningSection from "./WinningSection";
import ArDevelopmentSection from "./ArDevelopmentSection";
import ConsultancySection from "../consultancy-section";

const ArServices = () => {
  const [refOffset, setRefOffset] = useState();
  const intl = useIntl();
  const ref = useRef(null);

  useEffect(() => {
    setRefOffset(ref.current.offsetTop);
  }, [ref]);

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "software.augmented.reality",
            defaultMessage: "Astute Softwares - Augmented Reality",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.software.offers.ar",
            defaultMessage:
              "Astute softwares offers augmented reality services that allows you to monetize your business and increase conversion rates.",
          })}
        />
        <meta
          name="keywords"
          content="Augmented reality development, AR for businesses, Immersive AR experiences, AR app design, Augmented reality consulting"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/augmented-reality"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "software.augmented.reality",
            defaultMessage: "Astute Softwares - Augmented Reality",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.software.offers.ar",
            defaultMessage:
              "Astute softwares offers augmented reality services that allows you to monetize your business and increase conversion rates.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/augmented-reality"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col">
        <div className="flex-grow">
          <LandingSection refOffset={refOffset} />
        </div>
      </div>
      <div ref={ref} className="">
        <VirtualRoom />
      </div>
      <WinningSection />
      <ArDevelopmentSection />
      <ConsultancySection />
    </>
  );
};

export default ArServices;
