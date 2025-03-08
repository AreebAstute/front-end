import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import Companies from "./Companies/Companies";
import AugmentedApp from "./AugmentedApp/AugmentedApp";
import Features from "./Features/Features";
import Hiring from "./Hiring/Hiring";
import Intro from "./Intro/Intro";
import StepFive from "./StepFive/StepFive";
import StepFour from "./StepFour/StepFour";
import StepOne from "./StepOne/StepOne";
import StepThree from "./StepThree/StepThree";
import StepTwo from "./StepTwo/StepTwo";
// import Technologies from "./Technologies/Technologies";
import LandingSection from "./LandingSection/LandingSection";

const ARLandingPage = () => {
  const intl = useIntl();

  const defaultTitle = "Augmented Reality Solutions - Astute Softwares";
  const defaultDescription =
    "Experience the future with our cutting-edge AR solutions. Astute Softwares offers innovative technology and expert consulting to help you stay ahead of the game.";
  const url = "https://astutesoftwares.com/ar-solutions";

  // TODO:
  const imageUrl = "/Images/icons/in-1-webp.webp";

  return (
    <>
      <Helmet>
        {/* General Meta Tags */}
        <title>
          {intl?.formatMessage({
            id: "augmented.reality",
            defaultMessage: defaultTitle,
          }) || defaultTitle}
        </title>
        <meta
          name="description"
          content={
            intl?.formatMessage({
              id: "experience.the.future.with",
              defaultMessage: defaultDescription,
            }) || defaultDescription
          }
        />
        <meta
          name="keywords"
          content="Augmented reality services, AR app development, Custom AR solutions, AR technology company, Innovative AR apps"
        />
        <link rel="canonical" href={url} />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content={defaultTitle} />
        <meta property="og:description" content={defaultDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={defaultTitle} />

        {/* Twitter Meta Tags (for better Twitter previews) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={defaultTitle} />
        <meta name="twitter:description" content={defaultDescription} />
        <meta name="twitter:image" content={imageUrl} />

        {/* Robots Meta Tag (Ensure it's indexable) */}
        <meta name="robots" content="index, follow" />

        {/* Meta Referrer Tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="py-28 relative z-20">
        <LandingSection />
        <Intro />
        {/* <div className="absolute left-1/2 transform -translate-x-1/2 -mt-32 w-10/12  h-full ">
          <SvgComplete />
        </div> */}
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        <StepFive />
        {/* commented technology section */}
        {/* <Technologies />    */}
        <Hiring />
        <Features />
        <AugmentedApp />
        <Companies />
      </div>
    </>
  );
};

export default ARLandingPage;
