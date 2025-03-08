import React, { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";

import LandingSection from "./LandingSection/LandingSection";
import FourthSection from "./FourthSection/FourthSection";
import PurposeNeeds from "./PurposeNeeds/PurposeNeeds";
import FrontEndDevServices from "./FrontEndDevServices/FrontEndDevServices";
import FrontEndUIServices from "./FrontEndUIServices/FrontEndUIServices";
import PrototypeDevServices from "./PrototypeDevServices/PrototypeDevServices";
import UXDevServices from "./UXDevServices/UXDevServices";
import ConsultancySection from "../../Services/Desktop/consultancy-section";
import FrontEndLanguages from "./FrontEndLanguages/FrontEndLanguages";

const UxDesign = () => {
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
            id: "ui.ux.design",
            defaultMessage: "UI and UX Design - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "we.blend.a.variety",
            defaultMessage:
              "We blend a variety of ui and ux design skills to produce elegant, functional and user-focused interfaces that gives users an immersive experience.",
          })}
        />
        <meta
          name="keywords"
          content="User experience design services, Professional UI/UX design, Creative design solutions, Interactive app design, UX/UI consulting services"
        />
        <link
          rel="canonical"
          href="https://astutesoftwares.com/services/ui-and-ux-design"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "ui.ux.design",
            defaultMessage: "UI and UX Design - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "we.blend.a.variety",
            defaultMessage:
              "We blend a variety of ui and ux design skills to produce elegant, functional and user-focused interfaces that gives users an immersive experience.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/services/ui-and-ux-design"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col">
        <div className="flex-grow">
          <LandingSection refOffset={refOffset} />
          <div ref={ref}>
            <PurposeNeeds />
          </div>

          <FrontEndDevServices />
          <UXDevServices />
          <FrontEndUIServices />
          <PrototypeDevServices />
          <FourthSection />
          <FrontEndLanguages />
          <ConsultancySection />
        </div>
      </div>
    </>
  );
};

export default UxDesign;
