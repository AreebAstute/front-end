import React from "react";

import CustomList from "../../../../components/CustomList/CustomList";

const Services = () => {
  return (
    <div>
      <div className=" px-5 md:px-10 py-10  bg-gray-light ">
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
          {/* Text section */}

          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center lg:text-left">
            Mobile Application Development Services
          </h2>
          <div className="border-b-4 border-green-primary w-28 mx-auto lg:mx-0" />

          {/* Text section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
            <div className="px-3 md:py-8">
              <CustomList
                list={[
                  "Native iOS mobile app development",
                  "Native Android mobile app development",
                  "Cross-Platform mobile solutions",
                  "Responsive HTML5 mobile applications",
                  "Hybrid app development",
                ]}
              />
            </div>
            <div className="px-3 md:py-8 min-h-full">
              <p className="font-bold text-lg mb-5">
                As a full-cycle mobile app development company, we offer:
              </p>
              <CustomList
                list={[
                  "Research, Discovery and Strategy services",
                  "UX/UI Design",
                  "Rapid Prototyping and Proof-of-Concept applications",
                  "Greenfield mobile app development",
                  "Mobile application migration and optimization",
                  "Legacy application modernization",
                  "Quality assurance, Testing and test Automation",
                  "Maintenance and Support",
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
