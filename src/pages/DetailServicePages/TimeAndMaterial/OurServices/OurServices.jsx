import React from "react";
import PricingText from "../PricingText/PricingText";
import ServicesCard from "./ServicesCard";

const OurServices = () => {
  return (
    <div
      className="bg-no-repeat bg-right-bottom"
      style={{
        backgroundImage:
          "url(/Images/serviceDetails/TimeAndMaterial/our-service-bg-webp.webp)",
      }}
    >
      <div className=" px-5 md:px-10 py-12 md:py-28 ">
        <div className="space-y-5 text-blue-primary  md:w-4/5 md:mx-auto text-center">
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 capitalize">
            Our Services
          </h2>
          <p className="font-normal text-base md:text-lg leading-relaxed  ">
            Astute Softwares offers the Time & Material model for the following
            services:
          </p>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-0 mt-20 xl:10/12  2xl:w-9/12 lg:mx-auto"
          style={{ justifyItems: "center" }}
        >
          <ServicesCard text="Javascript" />
          <ServicesCard text="HTML/CSS" />
          <ServicesCard text="ReactJS" />
          <ServicesCard text="TypeScript" />
          <ServicesCard text="Vue.Js" />
          <ServicesCard text="DevOps/SysOps" />
          <ServicesCard text="Python(Django)" />
          <ServicesCard text="SQL" />
          <ServicesCard text="Java" />
          <ServicesCard text="Node.Js" />
          <ServicesCard text="Php(Laravel)" />
          <ServicesCard text="Quality Assurance Engineer" font="small" />
          <ServicesCard text="Unity" />
          <ServicesCard text="3D modeling   (Blender)" />
          <ServicesCard text="Kotlin" />
          <ServicesCard text="Swift" />
          <ServicesCard text="Flutter" />
          <ServicesCard text="Kubernetes expert" />
          <ServicesCard text="AWS experts" />
          {/* <ServicesCard text="AWS experts" /> */}
          <ServicesCard text="Software architect" />
          <ServicesCard text="Data Scientist" />
        </div>
      </div>
      <PricingText />
    </div>
  );
};

export default OurServices;
