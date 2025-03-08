import React from "react";

const Services = () => {
  return (
    <div>
      <div
        className="  md:px-10 md:py-28 bg-no-repeat bg-left leftPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-12 xl:px-20 w-full">
          <div>
            <div className="space-y-3 flex flex-col justify-center items-center">
              <img
                loading="lazy"
                className="w-2/12"
                alt="DevOps-Assessment"
                src="/Images/serviceDetails/DevOps-Assessment-webp.webp"
              />

              <h2 className="text-2xl md:text-2xl 2xl:text-4xl font-extrabold mb-5 capitalize">
                DevOps As a Service
              </h2>
              <p className="font-normal text-base md:text-lg text-center w-5/6 lg:w-4/6 pt-10">
                If your strategy focuses on including DevOps as a part of a
                larger cloud initiative, we have the technical skils and
                experience to help your team move to a DevOps development and
                delivery model. Our DevOps engineers will work with your team on
                defining a workflow and tool chain, including CI/CD, continuous
                testing, versioning,and orchestration, writing the scripts
                needed to automate the workflow, and providing recommendations
                and implementation on security and performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
