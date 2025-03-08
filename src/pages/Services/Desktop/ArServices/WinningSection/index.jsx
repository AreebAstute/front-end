import React from "react";

const index = () => {
  return (
    <>
      <div className=" top-padding py-32">
        <div
          className="h-full my-10  bg-no-repeat bg-left-top relative leftPatternSize  "
          style={{
            backgroundImage:
              "url('/Images/serviceAssets/section2/left_pattern-webp.webp')",
          }}
        >
          <div className=" flex flex-col ">
            <div className="sm:mx-6 lg:mx-32 ">
              <div className=" heding1 pl-2 lg:pl-0 md:text-center lg:text-left ">
                {" "}
                Winning Formula{" "}
              </div>
              <div className="grid grid-cols-6 lg:grid-cols-9 gap-8  items-center pt-12">
                <div className="col-span-3 flex flex-col space-y-4 ">
                  <div className="p-2 lg:p-8 ">
                    <div className="flex flex-col md:flex-row space-x-4 items-center">
                      <img
                        loading="lazy"
                        alt="ar-service-1"
                        src="/Images/serviceAssets/ar-Services/01-webp.webp"
                      />
                      <h2 className="text-xl md:text-3xl 2xl:text-4xl text-blue-primary font-semibold">
                        Discovery
                      </h2>
                    </div>
                    <div className="pt-4 text-lg">
                      <p>To succeed, we'll discover your goals, </p>
                      <p>strategy, and mision.</p>
                    </div>
                  </div>
                  <div className="p-2 lg:p-8 ">
                    <div className="flex flex-col md:flex-row space-x-4 items-center">
                      <img
                        loading="lazy"
                        alt="ar-service-3"
                        src="/Images/serviceAssets/ar-Services/03-webp.webp"
                      />
                      <h2 className="text-xl md:text-3xl 2xl:text-4xl text-blue-primary font-semibold">
                        Development
                      </h2>
                    </div>
                    <div className="pt-4 text-lg">
                      <p>Our two-week sprints keep you informed. </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-3 mx-auto hidden lg:block ">
                  <img
                    loading="lazy"
                    alt="wining-points"
                    src="/Images/serviceAssets/ar-Services/wining-points-webp.webp"
                  />
                </div>
                <div className="col-span-3   flex flex-col space-y-4 ">
                  <div className="p-2 lg:p-8">
                    <div className="flex flex-col md:flex-row space-x-4 items-center">
                      <img
                        loading="lazy"
                        alt="ar-service-2"
                        src="/Images/serviceAssets/ar-Services/02-webp.webp"
                        className=""
                      />
                      <p className="text-xl md:text-3xl 2xl:text-4xl text-blue-primary font-semibold">
                        Design
                      </p>
                    </div>
                    <div className="pt-4 text-lg">
                      <p>Our award-winning designers will </p>
                      <p>create your flow and assets.</p>
                    </div>
                  </div>
                  <div className="p-2 lg:p-8 ">
                    <div className="flex flex-col md:flex-row space-x-4 items-center">
                      <img
                        loading="lazy"
                        alt="ar-service-4"
                        src="/Images/serviceAssets/ar-Services/04-webp.webp"
                      />
                      <h2 className="text-xl md:text-3xl 2xl:text-4xl text-blue-primary font-semibold">
                        Deployment
                      </h2>
                    </div>
                    <div className="pt-4 text-lg">
                      <p>Two weeks after launch, contact our team for </p>
                      <p>iterative modifications or repairs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
