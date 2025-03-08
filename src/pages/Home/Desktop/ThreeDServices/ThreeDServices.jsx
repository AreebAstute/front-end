import React from "react";
import { Link } from "react-router-dom";

const ThreeDServices = () => {
  return (
    <div>
      <div className=" threed-services">
        <div className=" flex flex-col py-10 lg:py-10">
          <div className="flex  justify-center">
            <div className="px-5 md:px-20 lg:px-0 inline-block text-center">
              <h1 className=" smallHeading"> Our 3D Services </h1>
              <h2 className="heding1">
                {" "}
                Let us transform your product into 3D models!{" "}
              </h2>
              {/* <p className="text-gray-text text-lg">Astute Softwares has been creating innivative games since 2003. 
              We offer our clients professional development services.</p> */}
            </div>
          </div>
          <div className="flex lg:flex-row flex-col items-center justify-center">
            <div className="lg:w-1/2 px-8 md:px-12 xl:px-20 2xl:px-32 py-10 md:py-20 space-y-5 text-center lg:text-left ">
              <h3 className="text-blue-primary font-bold text-xl 2xl:text-2xl">
                What We Do For You
              </h3>
              <p className="text-gray-text text-lg">
                Our developers convert your idea into stunning 3D apps,
                enchanting your users with an immersive alternate reality. Share
                your idea and we will help you unlock its full potential with
                our 3D and AR expertise.
              </p>
              <div className="pt-10">
                <Link
                  to="/ar-solutions"
                  className="text-base lg:text-lg font-medium px-5 md:px-8 py-1 border-2 border-green-primary hover:bg-white bg-green-primary text-white rounded-full hover:text-green-primary"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2  flex items-center justify-center">
              <img
                loading="lazy"
                alt="Three-d-image"
                className="w-3/5"
                src="/Images/ThreeDServices/Threed-image-webp.webp"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeDServices;
