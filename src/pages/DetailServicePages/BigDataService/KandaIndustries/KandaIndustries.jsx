import React from "react";

const KandaIndustries = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-left-top py-10 lg:py-20 leftPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        {/* Text section */}
        <div className="flex flex-col items-center text-blue-primary  text-center mx-auto">
          <p className=" font-normal text-xl lg:text-2xl">
            <div
              className="font-medium bg-no-repeat bg-contain bg-center inline-block py-3"
              style={{
                backgroundImage: "url(/Images/serviceDetails/title-bg-webp.webp)",
              }}
            >
              Technology
            </div>
          </p>
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-8 w-5/6 md:w-3/5 xl:w-2/5 leading-normal ">
            Astute Softwares' Data Scientists are commited to bringing change to
            your Business
          </h2>

          <p className="font-normal text-lg text-center w-5/6 lg:w-4/6">
            Our Data Scientists will explore and carefully examine data from a
            variety of the disparate sources, deliver new insight critical for
            better decision—making proceses related to competitive positioning
            or existing business issues and provide recommendations how to
            efectively use existing data to achieve unique clients’goals. By
            analyzing velocity, variety, volume and complexity of client’s data
            our Data Scientists and software development teams will propose
            optimal solution to address specific client business needs.
          </p>
        </div>

        {/* Text section */}
      </div>
    </>
  );
};

export default KandaIndustries;
