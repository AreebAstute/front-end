import React from "react";

const Services = () => {
  return (
    <div>
      <div
        className=" px-10 bg-no-repeat bg-right-top rightPatternSize "
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
        }}
      >
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-12 xl:px-20 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 lg:gap-y-0 mt-10">
            <div>
              <div className="space-y-3 flex flex-col justify-center lg:h-72">
                <img
                  loading="lazy"
                  className="w-2/12"
                  alt="DevOps-Assessment"
                  src="/Images/serviceDetails/DevOps-Assessment-webp.webp"
                />
                <p className="text-blue-primary font-normal text-xl lg:text-2xl">
                  Technology
                </p>
                <h2 className="text-xl md:text-2xl 2xl:text-4xl font-extrabold mb-5 capitalize w-4/5">
                  DevOps Assessment and Strategy
                </h2>
              </div>

              <ul
                className="space-y-3 bg-no-repeat pt-12 pb-14 bg-contain lg:pr-20  "
                style={{
                  backgroundPositionY: "100%",
                  backgroundImage:
                    "url(/Images/serviceDetails/DevOps-Assessment-pattern-webp.webp)",
                }}
              >
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>
                    Assess DevOps maturity level including DevOps culture,
                    proceses, and tools
                  </p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>
                    Audit DevOps existing practices, infrastructure, and
                    existing development pipeline
                  </p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>
                    Visualize and define an agile transformation roadmap
                    tailored to your organizational needs and the pace of your
                    delivery and innovation
                  </p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Identify DevOps metrics, tools and processes</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>
                    Develop a transformation timeline and define required skills
                    and resources to achieve business specific goals on budget
                  </p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Recommend an optimal DevOps tool chain</p>
                </li>
              </ul>
            </div>
            <div>
              <div className="space-y-3 lg:pl-12 pb-10 lg:pb-0 flex flex-col justify-center lg:h-72">
                <img
                  loading="lazy"
                  alt="DevOps-Automation"
                  className="w-2/12"
                  src="/Images/serviceDetails/DevOps-Automation-webp.webp"
                />
                <p className="text-blue-primary font-normal text-xl lg:text-2xl">
                  Technology
                </p>
                <h2 className="text-xl md:text-2xl 2xl:text-4xl font-extrabold mb-5 capitalize">
                  DevOps Automation
                </h2>
              </div>

              <ul
                className="space-y-3 pt-12 bg-contain bg-top bg-no-repeat lg:pl-12  "
                style={{
                  backgroundImage:
                    "url(/Images/serviceDetails/DevOps-Automation-pattern-webp.webp)",
                }}
              >
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>CI/CD pipeline Creation and Maintenance</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>
                    Continuous Delivery pipeline automation and optimization
                  </p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Version control and configuration management</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Application deployment automation</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>
                    Infrastructure provision in gandend-to-end infrastructure
                    management
                  </p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Test and QA automation, code quality control automation</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Centralized log tracking and management</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
