import React from "react";

const index = () => {
  return (
    <>
      <div className="top-padding pt-8 pb-12 bg-right-top relative">
        <div
          className="px-10 bg-no-repeat bg-right-top relative rightPatternSize "
          style={{
            backgroundImage:
              "url('/Images/serviceAssets/section2/right_pattern-webp.webp')",
          }}
        >
          <div className="flex flex-col lg:flex-row  space-y-10 lg:space-y-0 items-center justify-center ">
            <div className="w-full xl:w-1/2 flex flex-col text-center lg:text-left md:px-20 space-y-10 bg-no-repeat bg-right-top relative">
              <h2 className="heding1">AR development partner selection</h2>

              <p className="text-gray-text font-normal  py-0 lg:py-2 lg:text-justify space-x-2 ">
                Global companies are using AR experiences to increase brand
                recognition and conversions, with 4.3 bilion frequent AR users
                projected by 2025. Our developers and designers can help you
                achieve busines goals and folow consumer experience trends.
              </p>
            </div>

            <div
              className="flex items-center justify-center md:justify-end bg-no-repeat  "
              style={{
                backgroundPosition: "center center",
                backgroundImage:
                  "url('/Images/serviceAssets/ar-Services/AR-development-partner-backgound-webp.webp')",
              }}
            >
              <img
                loading="lazy"
                alt="AR-development-partner"
                className="w-9/12 mx-auto "
                style={{ zIndex: 1 }}
                src="/Images/serviceAssets/ar-Services/AR-development-partner-webp.webp"
              />
            </div>
          </div>

          {/* <div className="absolute bg-red-200 md:top-3 lg:top-64 "> */}
          <div className="absolute  -bottom-24 ">
            <img
              loading="lazy"
              alt="ar-development-partner-background"
              className="w-full"
              src="/Images/serviceAssets/ar-Services/ar-development-partner-background-webp.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
