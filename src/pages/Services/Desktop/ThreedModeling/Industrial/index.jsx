import React from "react";

const index = () => {
  return (
    <div className="top-padding py-16">
      <div
        className="px-10 bg-no-repeat bg-left-top relative leftPatternSize "
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/left_pattern-webp.webp')",
        }}
      >
        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              loading="lazy"
              alt="Industrial"
              className="w-4/5 "
              src="/Images/serviceAssets/3dModeling/Industrial-webp.webp"
            />
          </div>

          <div className="w-full xl:w-1/2 flex flex-col text-center lg:text-left md:px-20 space-y-10">
            <h2 className="heding1">Industrial</h2>

            <p className="text-gray-text font-normal  py-0 lg:py-2 lg:text-justify space-x-2 ">
              To deliver instructions or to explain how a productis
              manufactured, create life like representations of your asembly
              line procedures
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
