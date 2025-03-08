import React, { useEffect } from "react";
import ScrollButton from "../../../../components/ScrollButton";
import { handleScroll } from "../../../../utils";

const LandingSection = ({ refOffset }) => {
  return (
    <>
      <div className=" px-5 h-screen pt-32  flex flex-col justify-center items-center multiple-bg relative ">
        {/* text section */}
        <div className="text-center space-y-6 text-blue-primary tracking-wider mb-12 md:w-5/6 lg:w-3/6 mx-auto ">
          {/* <p className="text-blue-primary font-medium text-base lg:text-xl capitalize">
                    <div className="font-medium bg-no-repeat bg-contain inline-block py-3" 
                    style={{backgroundImage:"url(/Images/serviceDetails/a-non-stop-text-bg-webp.webp)"}}>
                        A One 
                    </div>
                        -STOP-SHOP FOR Digital transformation
                </p> */}
          <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize">
            <span className="font-extrabold text-green-primary">
              Digital transformation Service
            </span>
          </h1>
          <p className="text-xl md:text-xl 2xl:text-2xl font-medium">
            Accelerating your digital transformation journey
          </p>
          <p className="text-lg lg:text-xl text-blue-primary my-2 font-medium">
            Digital transformation is constantly evolving — a journey, not a
            destination — you need an experienced team to help you take
            advantage of new technologies and reap the benefits of being a
            digital enterprise.
          </p>
        </div>
        {/* text section */}
        <ScrollButton refOffset={refOffset} />
      </div>
    </>
  );
};

export default LandingSection;
