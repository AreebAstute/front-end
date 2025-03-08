import React from "react";
import ScrollButton from "../../../../../components/ScrollButton";

const index = ({ refOffset }) => {
  return (
    <>
      <div className=" px-5 h-screen pt-8  flex flex-col justify-center items-center multiple-bg relative ">
        {/* text section */}
        <div className="text-center space-y-6 text-blue-primary tracking-wider mb-12 md:w-5/6 lg:w-3/6 mx-auto ">
          <p
            style={{ color: "#0a3953" }}
            className=" font-semibold text-sm w-full tracking-wide"
          >
            <span
              className="font-semibold text-sm  bg-no-repeat bg-contain inline-block pr-3 py-3"
              style={{
                backgroundSize: "40px",
                backgroundImage:
                  "url(/Images/serviceDetails/less-management-text-pattern-webp.webp)",
              }}
            >
              USE
            </span>
            OUR AWARD-WINNING EXPERTISE TO GET AFFORDABLE ASSETS
          </p>
          <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize">
            {" "}
            Visualize,{" "}
            <span className="font-extrabold text-green-primary">
              {" "}
              Render and Simulate{" "}
            </span>
          </h1>
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-normal my-2 capitalize">
            {" "}
            3D Models for VR and AR Experiences
          </h2>
          <p className=" font-normal text-center  mx-auto py-0 lg:py-2  space-x-2 text-blue-primary ">
            3D Modeling Services to Display and Advertise Your Items / Products
          </p>
        </div>
        <ScrollButton refOffset={refOffset} />
      </div>
    </>
  );
};

export default index;
