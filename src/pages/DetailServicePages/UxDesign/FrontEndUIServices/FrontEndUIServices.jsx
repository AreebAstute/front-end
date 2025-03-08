import React, { useState, useRef } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import FrontEndUIDevSevicesCard from "./FrontEndUIServicesCard";
import "./frontEndUIServices.css";

function QATypes() {
  return (
    <>
      <div className=" my-12 md:my-28 relative">
        <div className=" flex flex-col ">
          <h2 className="text-xl text-center md:text-3xl text-blue-primary 2xl:text-4xl font-extrabold mb-5 tracking-wide">
            Front-End and UI Development Process
          </h2>
          <div className="border-b-4 border-green-primary w-28 mx-auto" />
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 md:mt-20 gap-10 w-4/5  mx-auto"
          style={{}}
        >
          <FrontEndUIDevSevicesCard
            title="GOALS & TARGETS"
            desc={`We start by analyzing client business goals and target user groups`}
            img="/Images/serviceDetails/goals-webp.webp"
          />

          <FrontEndUIDevSevicesCard
            title="BEHAVIOR SCENARIOS"
            desc={`We study how users will interact with the website or web 
            application in great detail and document user behavior scenarios`}
            img="/Images/serviceDetails/behavior scenarios-webp.webp"
          />
          <FrontEndUIDevSevicesCard
            title="TESTING"
            desc={`We integrate usability testing on each stage of development 
            to avoid vital mistakes that can slow down front-end development processes`}
            img="/Images/serviceDetails/testing-webp.webp"
          />
        </div>
      </div>
    </>
  );
}

export default QATypes;
