import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

// const ServiceLandingPage = React.lazy(() => import("./service-Landing"));
// const OurServiceSection = React.lazy(() => import("./our-services"));
// const ChooseUs = React.lazy(() => import("./choose-us"));

import ServiceLandingPage from "./service-Landing";
import OurServiceSection from "./our-services";
import ChooseUs from "./choose-us";
import { handleScroll } from "../../../utils";
import { OUR_SERVICES_HASH_LINK } from "../../../constants";

function ServiceIndex() {
  const { hash } = useLocation();
  const [refOffset, setRefOffset] = useState();

  const ref = useRef(null);
  const intl = useIntl();

  useEffect(() => {
    if (hash == OUR_SERVICES_HASH_LINK) {
      handleScroll(ref.current.offsetTop);
    }

    setRefOffset(ref.current.offsetTop);
  }, [ref]);


  const defaultTitle = "Astute Softwares - Services";
  const defaultDescription =
    "Astute Softwares is a software development company offering mobile application development, web design, 3D modeling and animation, AR, and VR services.";
  const url = "https://astutesoftwares.com/services";


  // TODO:
  const imageUrl = "https://astutesoftwares.com/images/services-banner-webp.webp"; 

  return (
    <>
      <Helmet>
        {/* General Meta Tags */}
        <title>
          {intl?.formatMessage({ id: "software.services", defaultMessage: defaultTitle }) || defaultTitle}
        </title>
        <meta
          name="description"
          content={intl?.formatMessage({ id: "astute.software.is.a.development", defaultMessage: defaultDescription }) || defaultDescription}
        />
        <meta
          name="keywords"
          content="IT consulting services, Professional web development, Mobile app development, UX/UI design services, Custom software solutions"
        />
        <link rel="canonical" href={url} />

        {/* Open Graph Meta Tags (for Social Media Sharing) */}
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="Astute Softwares Services" />

        {/* Twitter Meta Tags (for Better Twitter Sharing) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Robots Meta Tag (Ensures SEO Indexing) */}
        <meta name="robots" content="index, follow" />

        {/* Meta Referrer Tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <ServiceLandingPage refOffset={refOffset}></ServiceLandingPage>
      <div id="our-services" ref={ref}>
        <OurServiceSection></OurServiceSection>
      </div>
      <ChooseUs></ChooseUs>
    </>
  );
}

export default ServiceIndex;
