import React from "react";

const index = () => {
  return (
    <div className="top-padding py-20">
      <div
        className="px-10 bg-no-repeat bg-right-top relative rightPatternSize "
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/right_pattern-webp.webp')",
        }}
      >
        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 items-center justify-center px-8">
          <div className="w-full xl:w-1/2 flex flex-col text-center lg:text-left md:px-20 space-y-10">
            <h2 className="heding1">Real Estate</h2>

            <p className="text-gray-text font-normal  py-0 lg:py-2 lg:text-justify space-x-2 ">
              Create 3D models of residences and buildings that customers may
              explore from any location. Realistic tours and models enable
              developers to market unfinished projects, and clients may get up
              close and personal with living spaces, building tours, and even
              rooms filed with 3D furniture.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              loading="lazy"
              alt="real-Estate"
              className="w-4/5 "
              src="/Images/serviceAssets/3dModeling/real-Estate-webp.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
