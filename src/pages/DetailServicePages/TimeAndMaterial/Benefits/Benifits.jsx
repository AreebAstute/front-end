import React from "react";
import CustomList from "../../../../components/CustomList/CustomList";

const Benefits = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-left-top pt-10 pb-10 leftPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        {/* Text section */}
        <div className="flex flex-col items-center text-blue-primary w-5/6 lg:w-3/5 text-center mx-auto">
          <p className=" font-normal text-xl lg:text-2xl">Technology</p>
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold mb-8 capitalize">
            Benefits
          </h2>
          <p className="font-normal text-base lg:text-lg ">
            Many compaines both large and small face challenges with finding
            astute talent, from candidate qualification, to team dynamics, to
            economics that fit their financial scale. our unique solution for
            Benefits developers or complete team addresses all of these
            concerns.
          </p>
        </div>

        <div className=" grid lg:grid-cols-2 gap-10 mt-20 items-center  text-blue-primary tracking-wider mb-12 px-10 lg:px-20 ">
          <div
            className="bg-cover bg-right-top bg-no-repeat px-3 py-8 min-h-full"
            style={{
              backgroundImage: "url(/Images/serviceDetails/point-bg-webp.webp)",
            }}
          >
            <CustomList
              list={[
                "Fexible and negotiable budget and low risk for both parties.",
                "Opportunity to pay in parts and only for the performed work.",
                "Perfect for large and long-term projects that can’t predict the end product on the initial stages.",
                "Development process starts earlier, since there is no need in formulating the final requirements.",
                "Cliwnt has control over the project, approves or adds any task that will be implemented on demand.",
                "Specifications and enhancements can be negotiated during any project stage.",
              ]}
            />
          </div>
          <div
            className="order-1 lg:order-2 bg-no-repeat bg-contain bg-center flex justify-center items-center relative"
            style={{
              backgroundImage:
                "url(/Images/serviceDetails/Hire-Blockchain-Web-Developer-bg-webp.webp)",
            }}
          >
            <img
              loading="lazy"
              className="w-4/5"
              alt="Blockchain-Web-Developer"
              src="/Images/serviceDetails/TimeAndMaterial/BENEFITS-webp.webp"
            />
          </div>
          {/* <div className="circleAnimation" style={{backgroundImage:"url(/Images/serviceDetails/Hire-Blockchain-Web-Developer-bg-webp.webp)"}}>

                    </div> */}
        </div>
      </div>
    </>
  );
};

export default Benefits;
