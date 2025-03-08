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
              alt="Extraordinary-quality"
              className="w-4/5 "
              src="/Images/serviceAssets/3dModeling/Extraordinary-quality-webp.webp"
            />
          </div>

          <div className="w-full xl:w-1/2 flex flex-col text-center lg:text-left md:px-20 space-y-10">
            <h2 className="heding1">Extraordinary Quality Outstanding Rates</h2>

            <p className="text-gray-text font-normal  py-0 lg:py-2 lg:text-justify space-x-2 ">
              Startups and market giants alike rely on us to build spectacular
              models at affordable pricing. Companies worldwide put their faith
              in us to create 3D models for their businesses and asked us to
              expertly render their high-end 3D designs for their augmented
              reality (AR) experience.
              {/* <span className='text-green-primary cursor-pointer '>Astute provides afordable</span> */}
              {/* <span className='text-green-primary cursor-pointer'>3D modeling services</span>, trusted by organizations around the world. */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
