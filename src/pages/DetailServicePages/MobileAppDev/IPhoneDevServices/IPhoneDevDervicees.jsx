import React from "react";

import CustomList from "../../../../components/CustomList/CustomList";

const Services = () => {
  return (
    <div>
      <div className=" px-5 py-10 md:px-10 md:py-20 ">
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
          {/* Text section */}
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center lg:text-left">
            Custom IPhone and IPad Application Development
          </h2>
          <div className="border-b-4 border-green-primary w-28 mx-auto lg:mx-0" />

          {/* Text section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-5">
            <div className=" md:py-8 text-base md:text-lg text-center md:text-left">
              <p>
                We excelled at developing cutting-edge iPhone and iPad
                applications that are tailored to suit client requirements. We
                have worked with industry specific solutions as well as
                customized apps for iPhone. Astute softwares iPhone software
                development teams are experts in a variety of areas including
                games, finance applications, telecom, educational applications
                and mobile solutions for the publishers.
              </p>
              <br />
              <p>
                Astute softwares can help make your iPhone application idea a
                reality bringing expertise in design and best iPhone development
                practices to the table. Our deep knowledge of mobile security
                and cross-platform integration makes us a perfect partner if you
                are thinking about BYOD strategy implementation.
              </p>
            </div>
            <div
              className="bg-cover bg-right-top bg-no-repeat px-3 py-8 min-h-full"
              style={{
                backgroundImage: "url(/Images/serviceDetails/point-bg-webp.webp)",
              }}
            >
              <p className="font-bold text-lg mb-5">
                Astute softwares iPhone and iPad Development services include:
              </p>
              <CustomList
                list={[
                  "Greenfield iOS development for iPhone, iPad, Apple Watch and IoT devices",
                  "Existing mobile app upgrades and optimization",
                  "iOS enterprise mobile application development",
                  "Desktop application migration and adaptation for iOS-enabled mobile devices",
                  "Responsive UX/UI Design services",
                  "Server-side APIs",
                  "Mobile quality assurance, testing and test automation",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
