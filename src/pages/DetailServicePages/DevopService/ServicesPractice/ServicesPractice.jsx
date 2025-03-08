import React from "react";

const Services = () => {
  return (
    <div>
      <div
        className=" px-5 md:px-10 pt-16 md:pt-28 bg-no-repeat bg-left-top leftPatternSize "
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full 2xl:w-4/5 mx-auto">
          {/* Text section */}

          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide  text-center">
            Astute Softwares Agile DevOps-as-a-Service Practice
          </h2>

          {/* Text section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-28 mt-5 md:mt-10">
            <div className="px-3 py-8">
              <ul className="space-y-3">
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Devops maturity assesment</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Devops org transformation consulting</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Devops training with our partners</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Agile + devops team up skilling</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Devops team augmentation</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Migrations with devops best practices</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Ci/cd pipeline creation and maintenance</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Cloud agnostic devops implementations</p>
                </li>
              </ul>
            </div>
            <div className="px-3 py-8 min-h-full">
              <ul className="space-y-3">
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Open source and commercial tools implementations</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Automation (infrastructureasacode,qa)</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Application performance monitoring</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Devops proceses efectiveness measurement</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Automated delivery, deployment and rolbacks</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>24x7 monitoring and support</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Site reliability engineering</p>
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
