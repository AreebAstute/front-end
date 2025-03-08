import React, { useState, useEffect, useRef } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

// const LandingPageAboutUS = React.lazy(() => import("./landing-aboutUS"));
// const WhoWeArePage = React.lazy(() => import("./who-we-are-page"));
// const DigitalizationPage = React.lazy(() => import("./digitalization"));

import LandingPageAboutUS from "./landing-aboutUS";
import WhoWeArePage from "./who-we-are-page";
import DigitalizationPage from "./digitalization";

function AboutUSIndex() {
  const [refOffset, setRefOffset] = useState();
  const ref = useRef(null);
  const intl = useIntl();

  useEffect(() => {
    setRefOffset(ref.current.offsetTop);
  }, [ref]);


  const defaultTitle =
    "Software, Mobile Applications, Web Applications, and Web 3.0 Development & Consultancy - Astute Softwares";
  const defaultDescription =
    "Astute Softwares helps tech companies and marketing agencies scale up and reach their goals quickly. We create high-performing software applications, mobile applications, augmented reality applications, and metaverse solutions that grow with your business.";
  const url = "https://astutesoftwares.com/about-us";

  // TODO:
  const imageUrl = "https://astutesoftwares.com/images/about-banner-webp.webp";

  return (
    <>
      <Helmet>
        {/* General Meta Tags */}
        <title>
          {intl?.formatMessage({ id: "software.mobile.app", defaultMessage: defaultTitle }) || defaultTitle}
        </title>
        <meta
          name="description"
          content={intl?.formatMessage({ id: "astute.software.helps", defaultMessage: defaultDescription }) || defaultDescription}
        />
        <meta
          name="keywords"
          content="About Astute Softwares, Our software team, Technology expertise, Our mission and values, Professional achievements"
        />
        <link rel="canonical" href={url} />

        {/* Open Graph Meta Tags (for Social Media Sharing) */}
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content="About Astute Softwares" />

        {/* Twitter Meta Tags (for Better Sharing on Twitter) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Robots Meta Tag (Ensures SEO Indexing) */}
        <meta name="robots" content="index, follow" />

        {/* Meta Referrer Tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <LandingPageAboutUS refOffset={refOffset} />
      <div ref={ref}>
        <WhoWeArePage />
      </div>
      <DigitalizationPage />
    </>
  );
}

export default AboutUSIndex;
