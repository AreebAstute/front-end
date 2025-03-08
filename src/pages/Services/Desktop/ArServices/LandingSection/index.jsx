import React from "react";
import ScrollButton from "../../../../../components/ScrollButton";

const index = ({ refOffset }) => {
  return (
    <div className=" px-5 h-screen pt-8  flex flex-col justify-center items-center multiple-bg relative ">
      {/* text section */}
      <div className="text-center space-y-6 text-blue-primary tracking-wider mb-12 md:w-5/6 lg:w-3/6 mx-auto ">
        {/* <p style={{ color: "#0a3953", }} className=" font-semibold text-sm w-full tracking-wide">BUILD DYNAMIC, ENGAGING, AND INSTRUCTIVE EXPERIENCES TO OFFER IN TELLIGENT SOLUTIONS</p> */}
        <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize">
          {" "}
          Augmented{" "}
          <span className="font-extrabold text-green-primary">
            Reality Agency
          </span>
        </h1>
        <div className=" text-lg lg:text-xl text-blue-primary my-2 font-medium text-center ">
          Whether your business is B2B or B2C, augmented reality may help you
          close more deals and raise brand awareness. Build dynamic,engaging,and
          instructive experiences to offer intelligent solutions that engage
          with your audience and deliver quantifiable outcomes.
        </div>
      </div>
      <ScrollButton refOffset={refOffset} />
    </div>
  );
};

export default index;
