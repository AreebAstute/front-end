import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useIntl } from "react-intl";

import LandingSection from "./LandingSection/LandingSection";
import LevelOne from "./LevelOne/LevelOne";
import LevelTwo from "./LevelTwo/LevelTwo";
import LevelThree from "./LevelThree/LevelThree";
import PreSale from "./PreSale/PreSale";
import Profile from "./Profile/Profile";

const Index = ({ setShowHeaderFooter }) => {
  const intl = useIntl();

  useEffect(() => {
    setShowHeaderFooter(true);
    return () => {
      setShowHeaderFooter(false);
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "falling.gems",
            defaultMessage: "Falling Gems - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "introducing.astute.softwares",
            defaultMessage:
              "Introducing Astute Softwares' Falling Gems. Don't let these precious GEMS FALL! From exciting game levels to gold coins, everything is put up to make you feel good and relax.",
          })}
        />
        {/* <meta name="keywords" content={metaKeywords} /> */}
        <link
          rel="canonical"
          href="https://astutesoftwares.com/falling-gems"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "falling.gems",
            defaultMessage: "Falling Gems - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "introducing.astute.softwares",
            defaultMessage:
              "Introducing Astute Softwares' Falling Gems. Don't let these precious GEMS FALL! From exciting game levels to gold coins, everything is put up to make you feel good and relax.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/falling-gems"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div>
        <div className="w-full md:w-1/2 lg:w-1/3  2xl:w-1/4 mx-auto lg:mx-0 px-20 pt-10 pb-10 lg:pb-0">
          {/* <img loading="lazy" alt="logo" className="w-4/5 mx-auto xl:w-full lg:mx-0" src="/Images/falling-gems/logo-webp.webp" /> */}
        </div>
        <LandingSection />
        <LevelOne />
        <LevelTwo />
        <LevelThree />
        <PreSale />
        <Profile />
      </div>
    </>
  );
};

export default Index;
