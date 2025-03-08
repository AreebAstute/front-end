import React, { useState, useRef, useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import LandingSection from "./LandingSection/LandingSection";
import SecondSection from "./SecondSection/SecondSection";
import FourthSection from "./FourthSection/FourthSection";
import DevelopmentServices from "./DevelopmentServices/DevelopmentServices";
import IPhoneDevServices from "./IPhoneDevServices/IPhoneDevDervicees";
import AndroidDevServices from "./AndroidDevServices/AndroidDevServices";
import DevelopmentExpertise from "./DevelopmentExpertise/DevelopmentExpertise";
import ConsultancySection from "../../Services/Desktop/consultancy-section";

const MobileAppDev = () => {
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
            id: "astute.software.custom.mobile.app",
            defaultMessage:
              "Astute Softwares, Custom Mobile Application Development",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.software.is.a",
            defaultMessage:
              "Astute Softwares is a leading mobile application developer with a wide range of products and services. We have a team of skilled, qualified specialists in the field of iOS and Android development to help you create an app that suits your needs.",
          })}
        />
        <meta
          name="keywords"
          content="Mobile application development, iOS and Android app services, Cross-platform app solutions, Custom mobile app design, Mobile app project consultation"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/mobile-application-development"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "astute.software.custom.mobile.app",
            defaultMessage:
              "Astute Softwares, Custom Mobile Application Development",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.software.is.a",
            defaultMessage:
              "Astute Softwares is a leading mobile application developer with a wide range of products and services. We have a team of skilled, qualified specialists in the field of iOS and Android development to help you create an app that suits your needs.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/mobile-application-development"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col">
        <div className="flex-grow">
          <LandingSection refOffset={refOffset} />
          <div ref={ref}>
            <SecondSection />
          </div>
          <DevelopmentServices />
          <IPhoneDevServices />
          <AndroidDevServices />
          <DevelopmentExpertise />
          <FourthSection />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default MobileAppDev;
