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
        <div className="w-full xl:w-1/2 flex flex-col text-center lg:text-left md:px-20 space-y-8">
          <p className="text-blue-primary font-normal  text-lg md:text-xl lg:text-2xl uppercase tracking-wider">
            <div
              className="font-medium bg-no-repeat bg-contain inline-block pr-3 py-3"
              style={{
                backgroundImage:
                  "url(/Images/serviceDetails/less-management-text-pattern-webp.webp)",
              }}
            >
              Less
            </div>
            MANAGEMENT, MORE RESULTS
          </p>
          <h2 className="heding1">Virtual showrooms</h2>

          <p className="text-gray-text font-normal  py-0 lg:py-2 lg:text-justify space-x-2 ">
            {/* Busineses must invest in 3D models to stay competitive since
                        the future of commerce points to augmented and virtual reality,
                        from AR applications that allow customers to explore your items
                        in their living rooms to VR showrooms. <span className='text-green-primary cursor-pointer '>Astute provides afordable</span>
                        <span className='text-green-primary cursor-pointer'>3D modeling services</span>, trusted by organizations around the world. */}
            Create a unique AR popup or retail experience to exhibit your
            products. This personalized shopping experience lets you reach
            clients worldwide and build your brand.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <img
            loading="lazy"
            className="w-4/5 "
            alt="showrooms"
            src="/Images/serviceAssets/ar-Services/showrooms-webp.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
