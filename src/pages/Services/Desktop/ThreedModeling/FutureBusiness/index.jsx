import React from "react";

const index = () => {
  return (
    <div
      className="px-10 bg-no-repeat bg-right-top relative rightPatternSize "
      style={{
        backgroundImage:
          "url('/Images/serviceAssets/section2/right_pattern-webp.webp')",
      }}
    >
      <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 items-center justify-center">
        <div className="w-full xl:w-1/2 flex flex-col text-center lg:text-left md:px-20 space-y-4">
          <h2 className="heding1">The Future of Business</h2>

          {/* <div className="text-gray-text text-lg lg:text-xl py-0 lg:py-2 lg:text-justify space-x-2 "> */}
          <p className="text-gray-text font-normal  py-0 lg:py-2 lg:text-justify space-x-2 ">
            Busineses must invest in 3D models to stay competitive since the
            future of commerce points to augmented and virtual reality, from AR
            applications that allow customers to explore your items in their
            living rooms to VR showrooms.{" "}
            <span className="text-green-primary cursor-pointer ">
              Astute provides afordable
            </span>
            <span className="text-green-primary cursor-pointer">
              3D modeling services
            </span>
            , trusted by organizations around the world.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            loading="lazy"
            alt="The-future-of-Business"
            className="w-4/5 "
            src="/Images/serviceAssets/3dModeling/The-future-of-Business-webp.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
