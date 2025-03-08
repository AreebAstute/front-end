import React from "react";

const index = () => {
  return (
    <div className="top-padding pb-16">
      <div
        className="px-10 bg-no-repeat bg-right-top relative rightPatternSize "
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/right_pattern-webp.webp')",
        }}
      >
        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 items-center justify-center">
          <div className="w-full xl:w-1/2 flex flex-col text-center lg:text-left md:px-20 space-y-10">
            <h2 className="heding1">Marketing</h2>

            <p className="text-gray-text font-normal  py-0 lg:py-2 lg:text-justify space-x-2 ">
              With 3D models, you can give your marketing strategies a new
              dimension while giving your customers more information than ever
              about your items.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              loading="lazy"
              alt="marketing"
              className="w-4/5 "
              src="/Images/serviceAssets/3dModeling/marketing-webp.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
