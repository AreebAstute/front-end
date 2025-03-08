import React from "react";
import { handleScroll } from "../../../../utils";
import ScrollButton from "../../../../components/ScrollButton";

const LandingSection = ({ refOffset }) => {
  return (
    <>
      <div className=" px-5 h-screen pt-32  flex flex-col justify-center items-center multiple-bg relative ">
        {/* text section */}
        <div className="text-center space-y-6 text-blue-primary tracking-wider mb-12 md:w-5/6 lg:w-3/6 mx-auto ">
          <h1 className="text-2xl md:text-4xl 2xl:text-5xl font-extrabold my-2 capitalize">
            <div
              className="font-bold bg-no-repeat bg-contain inline-block p-3"
              style={{
                backgroundImage:
                  "url(/Images/serviceDetails/a-non-stop-text-bg-webp.webp)",
              }}
            >
              Custom
            </div>
            <span className="font-extrabold text-green-primary">
              Mobile application development{" "}
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-blue-primary my-2 font-medium">
            We are pushing the boundaries of what’s possible on mobile by
            creating transformative mobile experiences that solve business
            challenges for clients ranging from large enterprises to innovative
            startups and creative entrepreneurs. With in-depth knowledge of
            native iOS, Android and cross-platform application development, we
            make sure that your idea is transformed into a beautifully designed,
            user-friendly and engaging mobile solution of a superior quality.
          </p>
        </div>
        {/* text section */}
        <ScrollButton refOffset={refOffset} />
      </div>
    </>
  );
};

export default LandingSection;
