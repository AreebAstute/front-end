import React from "react";

import CustomList from "../../../../components/CustomList/CustomList";

const Services = () => {
  return (
    <div>
      <div className=" px-5 md:px-10 py-20  bg-gray-light ">
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
          {/* Text section */}

          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center lg:text-left">
            Mobile Application Development Expertise
          </h2>
          <div className="border-b-4 border-green-primary w-28 mx-auto lg:mx-0" />

          {/* Text section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
            <div className="px-3 md:py-8">
              <CustomList
                list={[
                  "Conferencing and video/audio calling applications",
                  "Games",
                  "IoT and wearables",
                  "mCommerce",
                  "Finance apps",
                  "mHealth and Telemedicine",
                ]}
              />
            </div>
            <div className="px-3 md:py-8 min-h-full">
              <CustomList
                list={[
                  "Social Media and Marketing apps",
                  "VR and AR applications",
                  "Mobile CMS",
                  "Mobile analytics application",
                  "BYOD implementation",
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
