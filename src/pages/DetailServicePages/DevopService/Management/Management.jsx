import React from "react";
import ManagementCard from "./ManagementCard";

const Management = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-left-top pt-10 lg:pt-32 pb-10 lg:pb-20 leftPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        {/* Text section */}
        <div className="flex flex-col items-center text-blue-primary w-5/6 lg:w-3/5 text-center mx-auto">
          <p className=" font-medium text-xl lg:text-2xl">Technology</p>
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-8 capitalize">
            Devops Management
          </h2>

          <p className="font-normal text-lg ">
            Achieve a greater business agility and a faster time to market by
            eliminating botlenecks in software development
          </p>
        </div>

        {/* Text section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10  xl:grid-cols-3 mt-20 mx-5  md:w-4/5 md:mx-auto">
          <ManagementCard
            title="Continous Learning"
            img="/Images/serviceDetails/Continuous-Learning-webp.webp"
            desc={`In the world of Cloud DevOps tools, platforms and best practices are complex and are rapidly evolving. Continuous learning keeps Astute teams up-to-the-minute on the latest technologies, tools, automation and development methodologies.
                   `}
          />
          <ManagementCard
            title="Continous delivery & pipline management & optimization"
            img="/Images/serviceDetails/CONTINUOUS-DELIVERY-PIPELINE-MANAGEMENT-&-OPTIMIZATION-webp.webp"
            desc={`We assist your core team in ensuring a full- fledged integrated functioning of the delivery pipeline automation cycle and in adapting your automated deployment cycle to changes.
                   `}
          />
          <ManagementCard
            title="Continous Integration"
            img="/Images/serviceDetails/CONTINUOUS-INTEGRATION-webp.webp"
            desc={`We take care of release management, continuous deployment, replica environment, new server setup, change management and performance optimization on an ongoing basis.
                   `}
          />
        </div>
      </div>
    </>
  );
};

export default Management;
