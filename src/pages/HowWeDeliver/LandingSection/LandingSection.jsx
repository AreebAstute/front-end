import React from "react";

// const ScrollButton = React.lazy(() => import("../../../components/ScrollButton"));
import ScrollButton from "../../../components/ScrollButton";

const LandingSection = () => {
  return (
    <>
      <div className=" px-5 h-screen pt-8  flex flex-col justify-center items-center multiple-bg relative ">
        {/* text section */}
        <p className="text-blue-primary font-medium text-base lg:text-xl">
          <span
            className="font-medium bg-no-repeat bg-contain inline-block py-2 px-1"
            style={{
              backgroundImage:
                "url(/Images/serviceDetails/a-non-stop-text-bg-webp.webp)",
            }}
          >
            Designed
          </span>
          for remote cooperations
        </p>
        <div className="text-center space-y-6 text-blue-primary tracking-wider mb-12 md:w-5/6 lg:w-3/6 mx-auto ">
          {/* <p style={{ color: "#0a3953", }} className=" font-semibold text-sm w-full tracking-wide">BUILD DYNAMIC, ENGAGING, AND INSTRUCTIVE EXPERIENCES TO OFFER IN TELLIGENT SOLUTIONS</p> */}
          <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize">
            {" "}
            Agile
            <span className="font-extrabold text-green-primary">
              {" "}
              software development
            </span>{" "}
            process{" "}
          </h1>
          <div className=" text-lg lg:text-xl text-blue-primary my-2 font-medium text-center ">
            We help ambitious busineses like yours generate more profits by
            building awareness, driving web traffic, connecting with
            customers,and growing overall sales.
          </div>
        </div>
        <ScrollButton refOffset="740" />
      </div>
    </>
  );
};

export default LandingSection;
