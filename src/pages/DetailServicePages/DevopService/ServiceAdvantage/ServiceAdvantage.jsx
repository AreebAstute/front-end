import React from "react";
import ServiceAdvantageCard from "./ServiceAdvantageCard";

const Management = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-right-top pt-10 md:pt-32 pb-20 rightPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
        }}
      >
        {/* Text section */}
        <div className="flex flex-col items-center text-blue-primary w-5/6 lg:w-3/5 text-center mx-auto">
          <h2 className="text-xl md:text-3xl 2xl:text-4xl tracking-wide font-extrabold mb-8 capitalize">
            Astute Softwares DevOps Practice gives you
          </h2>
        </div>

        {/* Text section */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  md:gap-10 w-full 2xl:w-11/12 md:mt-10 mx-auto">
          <ServiceAdvantageCard
            title="A solid Plan"
            img="/Images/serviceDetails/A-SOLID-PLAN-webp.webp"
            desc={`for a painless and predictable move to DevOps practices under AWS,
                   Google Cloud or Azure – not as a one size fits all, but tailored specifically
                   to the state of your release and deployment pipeline`}
          />
          <ServiceAdvantageCard
            title="AUTOMATION & TESTING"
            img="/Images/serviceDetails/AUTOMATION-&-TESTING-webp.webp"
            desc={`We’ll help you build or automate your CI/CD pipeline as well as 
                   application and environment testing processes for fast, reliable and 
                   predictable releases`}
          />
          <ServiceAdvantageCard
            title="Optimization"
            img="/Images/serviceDetails/OPTIMIZATION-webp.webp"
            desc={`of the costs of using a cloud provider of your choice, and the 
                   ability to adjust your product architecture to minimize those costs.`}
          />
          <ServiceAdvantageCard
            title="Integration"
            img="/Images/serviceDetails/INTEGRATION-webp.webp"
            desc={`of our DevOps personnel and/or asistance in training your people 
                   to keep DevOps running smoothly once you are up and running.`}
          />
        </div>
      </div>
    </>
  );
};

export default Management;
