import React from "react";
import WorkingPrincipleCard from "./WorkingPrincipleCard";

const WorkingPrinciple = () => {
  return (
    <>
      <div className=" py-10 lg:py-20">
        <div className="flex flex-col items-center text-blue-primary  text-center mx-auto">
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold mb-8 w-5/6 md:w-3/5 xl:w-2/5 leading-normal ">
            Working Principle of Decentralized Web
          </h2>
        </div>
        <div className="md:w-4/5 md:mx-auto w-full ">
          <div className="">
            <img
              loading="lazy"
              className="w-4/5 mx-auto"
              alt="Working-Principle-of-Decentralized-Web"
              src="/Images/serviceDetails/Working-Principle-of-Decentralized-Web-webp.webp"
            />
          </div>

          <div className="grid grid-cols-3 md:gap-10 lg:gap-32 mt-12  md:mt-5">
            <WorkingPrincipleCard
              title="Read"
              desc={`All users on the network can read the information available on the web.`}
              center="false"
            />
            <WorkingPrincipleCard
              title="Write"
              desc={`All users available on the network can add to the information 
                    available as far as they comply with the set protocols.`}
              center="true"
            />
            <WorkingPrincipleCard
              title="Execute"
              desc={`The transfer of data or exchange of files and 
                    money can occur between any users without any third-party service provider.`}
              // center="end"
              center="false"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingPrinciple;
