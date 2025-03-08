// import React, { Suspense } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

import "./homePageStyles.css";
import Loader from "../../../components/Loader";
import GameServices from "./GameServices/GameServices";
import MetaverseSection from "./MetaverseHomePage";
import BlogSection from "./BlogSection";

// home page section imports below
// const LandingSection = React.lazy(() => import("../Desktop/LandingPage"));
import LandingSection from '../Desktop/LandingPage'
import Services from '../Desktop/HomePageServices/HomePageServices'
import Languages from '../Desktop/LanguagePage/language'

import Consultation from '../Desktop/Consultation/Consultation'

import SeoServices from '../Desktop/SEO Services/seoServices'
import TimeAndMaterial from '../Desktop/TimeAndMaterial/TimeAndMaterial'

// import ThreeDServices from '../Desktop/ThreeDServices/ThreeDServices'

// home page section imports above

const Index = ({ gameDownload, setGameDownload }) => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "astute.software.home",
            defaultMessage:
              "Astute Softwares - Making World Digitally Astute",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "astute.software.home.desc",
            defaultMessage:
              "Astute Softwares helps tech companies and marketing agencies to scale up and reach their goals quickly. We create high-performing software applications, mobile applications, augmented reality applications, and metaverse development that grows with your business.",
          })}
        />
        <meta
          name="keywords"
          content="Leading software house, Expert software developers, Custom IT solutions, Professional web services, Software development company, Astute Softwares solutions, Innovative software services, Professional IT consulting, Custom software development, Technology solutions provider"
        />
        <link rel="canonical" href="https://astutesoftwares.com/" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "astute.software.home",
            defaultMessage:
              "Astute Softwares - Making World Digitally Astute",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "astute.software.home.desc",
            defaultMessage:
              "Astute Softwares helps tech companies and marketing agencies to scale up and reach their goals quickly. We create high-performing software applications, mobile applications, augmented reality applications, and metaverse development that grows with your business.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://astutesoftwares.com/" />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
        <link rel="preload" href="/Images/landing-page/dots(2)-webp.webp" as="image" />
      </Helmet>

      <div className="overflow-hidden">
        {/* <Suspense fallback={<Loader />}> */}
          <LandingSection />
          <Services />
          <SeoServices />
          {/* <MetaverseSection/> */}
        {/* </Suspense> */}
          <TimeAndMaterial />
          <Languages />
          {/* <ThreeDServices /> */}
          <GameServices
            gameDownload={gameDownload}
            setGameDownload={setGameDownload}
          />
          {/* <BlogSection/> */}
          <Consultation />
      </div>
    </>
  );
};

export default Index;
