import React from "react";

import CustomList from "../../../../components/CustomList/CustomList";

const Services = () => {
  return (
    <div>
      <div className=" px-5 md:px-10 py-10">
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
          {/* Text section */}

          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center lg:text-left">
            Why Astute Softwares
          </h2>
          <div className="border-b-4 border-green-primary w-28 mx-auto lg:mx-0" />

          {/* Text section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-20 mt-5">
            <div
              className="bg-cover bg-right-top bg-no-repeat px-3 md:py-8"
              style={{
                backgroundImage: "url(/Images/serviceDetails/point-bg-webp.webp)",
              }}
            >
              <CustomList
                list={[
                  "Direct access to experienced engineers",
                  "Knowledgeable support personnel providing personalized service",
                  "Guaranteed response to all inquiries in a timely manner",
                  "Support channel flexibility (phone, e-mail, Instant messenger, etc.)",
                  "Bug fixing and troubleshooting on an ongoing basis",
                  "Upgrades and patch deployment",
                ]}
              />
            </div>
            <div
              className="bg-cover bg-right-top bg-no-repeat px-3 md:py-8 min-h-full"
              style={{
                backgroundImage: "url(/Images/serviceDetails/point-bg-webp.webp)",
              }}
            >
              <CustomList
                list={[
                  "Tier 1, 2 and 3 support options",
                  "Seamless integration with unique client’s business and support practices",
                  "Smooth and fast knowledge transfer",
                  "Skilled at supporting and maintaining both modern and legacy applications",
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
