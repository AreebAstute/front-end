import React from "react";

const Services = () => {
  return (
    <div>
      <div
        className=" px-10 pt-10 md:pt-28 bg-no-repeat bg-right-top rightPatternSize "
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
        }}
      >
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full 2xl:w-4/5">
          {/* Text section */}
          <p className="text-blue-primary font-normal text-xl lg:text-2xl">
            <div
              className="font-medium bg-no-repeat bg-contain inline-block py-3"
              style={{
                backgroundImage: "url(/Images/serviceDetails/title-bg-webp.webp)",
              }}
            >
              Tech
            </div>
            nology
          </p>
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 capitalize">
            Big data services
          </h2>

          <p className="font-normal text-lg ">
            From consulting and development to optimization and maintenance, we
            provide resources and expertise to cover end-to-end big data
            platform software development initiatives.
          </p>
          {/* Text section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-28 mt-10">
            <div
              className="bg-cover bg-right-top bg-no-repeat px-3 py-8"
              style={{
                backgroundImage: "url(/Images/serviceDetails/point-bg-webp.webp)",
              }}
            >
              <ul className="space-y-3">
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Strategic Consulting</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Big Data Project Asesment</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Data Ware house and Data Lake Architecture and Design</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Big Data Software and Platform development</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>ETL Design and Development</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Data Governance and Security Management</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Data Integration Services</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Querying and Reporting</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Scalable Data Procesing and Management</p>
                </li>
              </ul>
            </div>
            <div
              className="bg-cover  bg-right-top bg-no-repeat px-3 py-8 min-h-full"
              style={{
                backgroundImage: "url(/Images/serviceDetails/point-bg-webp.webp)",
              }}
            >
              <ul className="space-y-3">
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Data Ware house Modernization and Cloud Migration</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Optimization, Maintenance and Support services</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>
                    Predictive and Real-Time Analytics Design and Implementation
                  </p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Machine Learning and AI</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Data Science and Custom Data Modelling</p>
                </li>
                <li className="contentListItem">
                  <img
                    loading="lazy"
                    alt="bullet point"
                    src="/Images/serviceDetails/bullet-point-webp.webp"
                  />
                  <p>Data Visualization</p>
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
