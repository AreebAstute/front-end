import React from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";

const UnderConstruction = () => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "coming.soon",
            defaultMessage: "Coming Soon - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "exciting.things.are",
            defaultMessage:
              "Exciting things are coming soon! Stay tuned for Astute Softwares' new innovative products and services.",
          })}
        />
        {/* <meta name="keywords" content={metaKeywords} /> */}
        <link rel="canonical" href="https://astutesoftwares.com/coming-soon" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "coming.soon",
            defaultMessage: "Coming Soon - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "exciting.things.are",
            defaultMessage:
              "Exciting things are coming soon! Stay tuned for Astute Softwares' new innovative products and services.",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://astutesoftwares.com/coming-soon"
        />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div className="h-full flex flex-col pt-32">
        <div className="flex-grow flex justify-center items-center flex-col mt-10">
          <img
            loading="lazy"
            alt="underconstruction-vector"
            className="w-3/6 md:w-2/6"
            src="/Images/under-constructionAssets/underconstruction-vector-webp.webp"
          ></img>
          <div className="mt-10 text-center w-full md:w-3/6 mb-20 px-5">
            <p className="text-blue-primary font-medium text-base lg:text-xl capitalize">
              <div
                className="font-medium bg-no-repeat bg-cover inline-block p-2"
                style={{
                  backgroundImage:
                    "url(/Images/contact-usAssets/get-in-touch-text-bg-webp.webp)",
                }}
              >
                Who{" "}
              </div>
              we are
            </p>
            <h1 className="text-xl md:text-3xl text-blue-primary font-bold pt-2 pb-4">
              This Page is Under Construction
            </h1>
            <p className="text-blue-primary font-medium mb-3 md:mb-10">
              Over the years,we have worked with Fortune 500s and brand-new
              startups. We help ambitious busineses like yours generate more
              profits by building awarenes,driving webtraffic,connecting with
              customers,and growing over all sales.Give us a call.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UnderConstruction;
