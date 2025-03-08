import React from "react";
import HiringStepCard from "./HiringStepCard";

const Hiring = () => {
  return (
    <div
      className="lg:px-20 leftPatternSize bg-no-repeat bg-left-top lg:pb-16"
      style={{
        backgroundImage: "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
      }}
    >
      <h2 className="text-2xl 2xl:text-3xl font-semibold mb-8 capitalize text-blue-primary text-center">
        Hiring Made Easy
      </h2>
      <div className="flex flex-row mdmd:flex-col 2xl:w-4/5 xl:mx-auto justify-between mt-10">
        <div className=" w-2/12 mdmd:w-auto">
          <img
            loading="lazy"
            alt="3-steps"
            className=" px-10 hidden mdmd:block"
            src="/Images/serviceDetails/TimeAndMaterial/3-steps-webp.webp"
          />
          <img
            loading="lazy"
            alt="3-steps"
            style={{ height: "80%" }}
            className=" block mdmd:hidden "
            src="/Images/serviceDetails/TimeAndMaterial/3-steps copy-webp.webp"
          />
        </div>

        <div className="grid grid-cols-1 mdmd:grid-cols-3 gap-x-0 lg:gap-x-5 mt-5 w-10/12  mdmd:w-auto">
          <HiringStepCard
            heading="Talk to One of Our Industry Experts"
            text="An expert on our team will work with you to understand your goals, technical 
                needs, and team dynamics."
          />
          <HiringStepCard
            heading="Work With Hand-Selected Talent"
            text="Within days, we'l introduce you to the right talent for your project. 
                Average time to match is under 24 hours."
          />
          <HiringStepCard
            heading="The Right Fit, Guaranteed"
            text="Work with your new team member on a trial basis (pay only if satisfied),
                ensuring you hire the right people for the job."
          />
        </div>
      </div>
    </div>
  );
};

export default Hiring;
