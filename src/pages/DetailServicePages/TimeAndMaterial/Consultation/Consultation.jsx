import React from "react";
import CustomList from "../../../../components/CustomList/CustomList";

const Consultation = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-right-top md:pb-10 lg:pb-20 rightPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
        }}
      >
        <div className=" grid lg:grid-cols-2 gap-x-10 mt-10  md:mt-20 items-center  text-blue-primary tracking-wider mb-12 px-5 md:px-10 lg:px-20 ">
          <div
            className="bg-no-repeat bg-contain bg-center flex justify-center items-center relative"
            style={{
              backgroundImage:
                "url(/Images/serviceDetails/Hire-Blockchain-Web-Developer-bg-webp.webp)",
            }}
          >
            <img
              loading="lazy"
              className="w-4/5 md:w-2/5 lg:w-3/5"
              alt="CAN-THIS-MODEL-BE-OF-USE-image"
              src="/Images/serviceDetails/TimeAndMaterial/CAN-THIS-MODEL-BE-OF-USE-image-webp.webp"
            />
          </div>

          <div className="px-3 py-8 min-h-full mt-16 lg:mt-0">
            <div className="flex flex-col text-center lg:text-left text-blue-primary">
              <p className=" font-normal text-base">
                Decentralized Web Consulting
              </p>
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold mb-8 capitalize">
                Can this Model be of use for your challenge?
              </h2>
              <p className="font-normal text-base lg:text-lg text-justify">
                The Time & Material model is used if there is no whole vision of
                the final product and its implementation specifics and if it is
                imposible to divide it in to several smaler stages. This option
                is fully negotiable and can use an hourly, daily, weekly or
                monthly rate for the amount of work, tasks, resources,
                materials, or other expenses that we reapplied in the
                development process. There is an opportunity to further clarify
                the pricing distribution, e.g. whether the rate depends on the
                skill set needed to perform the task, or it is the same for all
                resources involved in the project. In order to prevent the
                uncontrolled price growth for support projects, the client can
                discuss the upper limit for the project budget beforehand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consultation;
