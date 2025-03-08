import React from "react";

const index = () => {
  return (
    <div className="top-padding py-16">
      <div
        className="px-10 bg-no-repeat bg-right-top relative rightPatternSize "
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/right_pattern-webp.webp')",
        }}
      >
        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 items-center justify-center">
          <div className="w-full xl:w-1/2 flex flex-col text-center lg:text-left md:px-20 space-y-10">
            <h2 className="heding1">E-Commerce</h2>

            <p className="text-gray-text font-normal  py-0 lg:py-2 lg:text-justify space-x-2 ">
              With expectations for online shopping at an al-time high,
              busineses of all sizes must digitize their catalogs to remain
              competitive. Our 3D models are affordable and unmatched — prepared
              to bring your items to life.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              loading="lazy"
              alt="e-commerce"
              className="w-4/5 "
              src="/Images/serviceAssets/3dModeling/E-commerce-webp.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
