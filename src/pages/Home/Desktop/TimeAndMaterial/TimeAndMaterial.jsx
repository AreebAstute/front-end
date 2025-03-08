import React, { useState, useRef, useViewportScroll, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

const TimeAndMaterial = ({}) => {
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState();

  useEffect(()=>{
    window.onscroll = () => {
      // console.log("scrolling..",window.scrollY)
      const scrollY = window.scrollY;
      if (scrollY >= 2340) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  })

  useEffect(() => {
    const p = document.getElementById("myPath");
    setPath(p);
    // console.log("path:::",p.getTotalLength())
  }, []);

  return (
    <div>
      <div
        className=" py-32 px-10 bg-no-repeat bg-right-top relative rightPatternSize "
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/right_pattern-webp.webp')",
        }}
      >
        <svg
          style={{ zIndex: "-1" }}
          className="svg"
          version="1.1"
          id="arrow5"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100%"
          height="980"
          viewBox="600 150 1200 1200"
        >
          <motion.path
            animate={
              scrolled
                ? { strokeDashoffset: 0 }
                : { strokeDashoffset: 2830.588134765625 }
            }
            transition={{ duration: 3, ease: "easeInOut" }}
            className="dashed"
            strokeDasharray="2830.588134765625"
            id="myPath"
            d="M370.4,11.4
      C397.2,30.2,435.5,55,484,79.8
      c35.9,18.3,101,48.6,203.7,76.4
      c189.1,51.1,211,14.1,270.4,58.8
      c95.2,71.6,123,230.1,74.4,291.9
      c-3.5,4.4-21.8,27.8-47,27.4
      c-29.3-0.4-62.9-33-56.8-64.7
      c4.6-24.3,31.7-43.6,52.9-41.1
      c36.1,4.2,67.5,76.8,62.7,133.2
      c-11.1,130.8-222.1,240.9-395.7,268.4
      c-80.3,12.7-108.7,0.7-235.1,23.5
      c-106,19.1-214.9,39.8-227.3,96
      c-6.4,29.1,12.6,69.7,43.1,82.3
      c27.1,11.2,54.4-3.4,58.8-5.9
      c33.4-18.6,53-64.1,41.1-78.4
      c-20.5-24.7-169.8,1.9-184.2,99.9"
          />
          <path
            className="plain"
            id="myPath"
            d="M370.4,11.4
      C397.2,30.2,435.5,55,484,79.8
      c35.9,18.3,101,48.6,203.7,76.4
      c189.1,51.1,211,14.1,270.4,58.8
      c95.2,71.6,123,230.1,74.4,291.9
      c-3.5,4.4-21.8,27.8-47,27.4
      c-29.3-0.4-62.9-33-56.8-64.7
      c4.6-24.3,31.7-43.6,52.9-41.1
      c36.1,4.2,67.5,76.8,62.7,133.2
      c-11.1,130.8-222.1,240.9-395.7,268.4
      c-80.3,12.7-108.7,0.7-235.1,23.5
      c-106,19.1-214.9,39.8-227.3,96
      c-6.4,29.1,12.6,69.7,43.1,82.3
      c27.1,11.2,54.4-3.4,58.8-5.9
      c33.4-18.6,53-64.1,41.1-78.4
      c-20.5-24.7-169.8,1.9-184.2,99.9"
          />
        </svg>

        <div className="flex lg:flex-row flex-col space-y-10 lg:space-y-0 items-center justify-center">
          <div className="w-full lg:w-1/2 px-8">
            <img
              loading="lazy"
              alt="time-and-material"
              className="w-3/5 lg:w-full xl:w-4/5 mx-auto"
              src="/Images/LandingPageImage/time-and-material-webp.webp"
            />
          </div>

          <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left space-y-10">
            <div>
              <h1 className=" smallHeading"> Complete package </h1>
              <h2 className="heding1"> Time and Materials Services </h2>
            </div>
            <p className="text-gray-text text-lg lg:text-xl py-0 lg:py-8">
              Time and materials (T&M) is a standard phrase in a contract for
              construction, product development or any other piece of work in
              which the employer agrees to pay the contractor based upon the
              time spent by the contractor's employees and subcontractors
              employees to perform the work, and for materials used in the
              construction (plus the contractor's mark up on the materials
              used), no matter how much work is required to complete
              construction
            </p>
            <div className="cursor-pointer flex justify-center lg:justify-start">
              <Link
                to="/services/time-and-material-services"
                className="text-base px-5 py-2 flex items-center justify-between lg:text-lg font-medium border-2 border-green-primary bg-green-primary text-white rounded-full"
                style={{ width: "200px" }}
              >
                Learn More
                <span className="bg-white p-1 rounded-full">
                  <BsArrowRight className="text-green-primary text-2xl font-bold" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeAndMaterial;
