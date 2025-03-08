import React from "react";

const index = () => {
  return (
    <div className="top-padding py-8">
      <div
        className="px-10 bg-no-repeat bg-left-top relative leftPatternSize "
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/left_pattern-webp.webp')",
        }}
      >
        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0  items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              loading="lazy"
              alt="sales"
              className="w-4/5 "
              src="/Images/serviceAssets/3dModeling/sales-webp.webp"
            />
          </div>

          <div className="w-full xl:w-1/2  flex flex-col text-center lg:text-left md:px-20 space-y-10">
            <h2 className="heding1">Sales</h2>

            <p className="text-gray-text font-normal  py-0 lg:py-2 lg:text-justify space-x-2 ">
              Show case your items without being concerned about logistics. 3D
              models of larger objects enable you to deliver more information to
              your customers, technicians, and sales teams than ever.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
