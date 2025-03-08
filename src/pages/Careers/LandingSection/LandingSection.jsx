import React from "react";
import { handleScroll } from "../../../utils";

const LandingSection = ({ refOffset }) => {
  const handleClick = () => {
    handleScroll(refOffset);
  };

  const headingStyles =
    "py-3 bg-white text-4xl lg:text-3xl xl:text-5xl text-blue-primary";

  return (
    <div className=" pb-1 h-100 grid grid-cols-1 lg:grid-cols-3">
      {/* text block */}
      <div className="order-2 lg:order-1   col-span-1 flex flex-col items-center lg:items-start relative">
        <div className="p-5 md:p-10 lg:p-0 bg-white lg:bg-transparent absolute bottom-28 lg:top-1/4 lg:left-16 xl:left-20 text-center lg:text-left">
          <p className={`${headingStyles} font-extrabold lg:mr-10  `}>
            Your Place in IT
          </p>

          <p className="text-xl text-blue-primary font-normal my-5">
            Junior or veteran –whatever! At{" "}
            <span className="text-green-primary font-normal">
              Astute Softwares
            </span>
            , you’ll develop your career in a respectful and open atmosphere.
          </p>
          <button
            className="rounded-full border-green-primary border-2 px-8 py-2 hover:bg-green-primary hover:text-white"
            onClick={handleClick}
          >
            Job Offers
          </button>
        </div>
      </div>
      {/* text block */}

      {/* image block */}
      <div
        className="order-1 lg:order-2 col-span-2 bg-no-repeat bg-cover lg:bg-contain bg-left-top h-70 lg:h-full "
        style={{ backgroundImage: "url(/Images/careers/vector-webp.webp" }}
      ></div>
      {/* image block */}
    </div>
  );
};

export default LandingSection;
