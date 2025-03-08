import React from "react";

import CustomList from "../../../../components/CustomList/CustomList";

const Services = () => {
  return (
    <>
      <div className=" px-5 py-10 md:px-10 md:py-20 ">
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 w-full">
          {/* Text section */}
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center lg:text-left">
            Custom Android Application Development
          </h2>
          <div className="border-b-4 border-green-primary w-28 mx-auto lg:mx-0" />

          {/* Text section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-5">
            <div className=" md:py-8 text-base md:text-lg text-center md:text-left ">
              <p>
                Astute softwares has experience of working with a diverse
                clientele in Android application development ranging from
                aspiring entrepreneurs, early stage ventures to large enterprise
                enterprises. Astute Android app development teams follow
                industry standards paired with agile processes, adopt best
                application development practices and proven methodologies.
                Utilizing myriad of Android development tools along with
                harnessing maximum potential of Android SDK, Our Android
                developers ensure successful completing of any project within
                client development timelines.
              </p>
            </div>
            <div
              className="bg-cover bg-right-top bg-no-repeat px-3 py-8 min-h-full"
              style={{
                backgroundImage: "url(/Images/serviceDetails/point-bg-webp.webp)",
              }}
            >
              <p className="font-bold text-lg mb-5">
                Custom Android development services include:
              </p>
              <CustomList
                list={[
                  "Greenfield Android development for phones, tablets, wearable and IoT devices",
                  "Existing mobile app upgrades and optimization",
                  "Android and cross-platform enterprise mobile application development",
                  "Responsive UX/UI Design services",
                  "Android Widget development",
                  "Mobile quality assurance, testing and test automation",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
