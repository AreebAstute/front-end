import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button";

const SecondSection = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2  px-5 md:px-20 pt-10 md:pt-16 lg:py-28 bg-no-repeat bg-right-top rightPatternSize text-center md:text-left" style={{backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}> */}
      <div className=" text-blue-primary tracking-wider mb-12 md:px-20 pt-20 text-center md:text-left">
        <p className="text-blue-primary font-normal  text-lg md:text-xl lg:text-2xl uppercase">
          <div
            className="font-medium bg-no-repeat bg-contain inline-block pr-3 py-3"
            style={{
              backgroundImage:
                "url(/Images/serviceDetails/less-management-text-pattern-webp.webp)",
            }}
          >
            Less
          </div>
          MANAGEMENT, MORE RESULTS
        </p>
        <p className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold mb-10">
          One scalable team for start-to-finish digital transformation
        </p>
      </div>
      <div
        className="grid grid-cols-1 lg:grid-cols-2  px-5 md:px-20 items-center   bg-no-repeat bg-right-top rightPatternSize text-center md:text-left"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
        }}
      >
        {/* Text section */}

        <div className=" text-blue-primary tracking-wider mb-12  lg:mt-8  text-justify">
          <p className="font-normal">
            What does it mean to be reliable?
            <span className="text-green-primary font-normal">
              {" "}
              It means your outsourced team will take care of your digital
              transformation from start to end.{" "}
            </span>
            Astute Software's Digital Transformation Practice draws on our
            decades-long experience in converting legacy systems into
            cutting-edge architectural environments. We’re experts in breaking
            down internal silos, moving and improving applications in the cloud,
            accelerating custom software development processes, and
            orchestrating a data-driven approach to digital services delivery.
          </p>
          <br />
          <p className="font-normal">
            Team up with Astute Softwares to accelerate your journey to the
            cloud, deliver new customer experiences, redesign business models,
            and improve operational efficiency. We promptly act on your vision
            and realize it in a secure, reliable and scalable way.
          </p>
          <Button text="Talk to an Expert" link="/contact-us" />
        </div>
        {/* image section */}
        <div className="flex items-center justify-center">
          <img
            loading="lazy"
            alt="Digital Transformation"
            className="w-4/5"
            src="/Images/serviceDetails/Digital Transformation-webp.webp"
          />
        </div>
        {/* image section */}
      </div>
    </div>
  );
};

export default SecondSection;
