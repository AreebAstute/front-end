import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/Button";

const SecondSection = () => {
  return (
    <div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2  px-5 md:px-20 pt-10 md:pt-16 lg:py-28 bg-no-repeat bg-right-top rightPatternSize text-center md:text-left" style={{backgroundImage:"url(/Images/serviceAssets/section2/right_pattern-webp.webp)"}}> */}
      <div
        className="grid grid-cols-1 lg:grid-cols-2 items-center  px-5 md:px-20  lg:pt-20 bg-no-repeat bg-right-top rightPatternSize text-center md:text-left"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
        }}
      >
        {/* Text section */}
        <div className=" text-blue-primary tracking-wider mb-12 ">
          <div className="mb-10">
            <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 tracking-wide text-center lg:text-left">
              Clickable Prototype Development
            </h2>
            <div className="border-b-4 border-green-primary w-28 mx-auto lg:mx-0" />
          </div>

          <p className="font-normal">
            Unique to Astute Softwares is our “Clickable Prototype” — developing
            a sampling of the foreseen screens with transitions, but without any
            underlying technical implementation. In our experience, when clients
            see the user flow, interactions, and how pages are transformed, they
            are much more likely to understand and provide constructive feedback
            on the product. Alternatively, dry verbal descriptions, or even
            wireframes embedded in Word documents, have proven to be a less
            effective way to assess the solution’s UX flow and application
            usability.
          </p>
          <br />
          <p className="font-normal mb-10">
            The prototype also serves as a proof of concept that the chosen
            technology stack is capable of satisfying its technical and business
            objectives. It can also be used to accompany the proposed solution
            as a demonstration environment to familiarize various internal
            and/or external stakeholders and to solicit their feedback.
          </p>

          {/* <Button text='Talk to an Expert' link='/contact-us'/> */}
        </div>
        {/* Text section */}

        {/* image section */}
        <div className="flex items-center justify-center">
          <img
            loading="lazy"
            alt="prototype"
            className="w-4/5"
            src="/Images/serviceDetails/prototype-webp.webp"
          />
        </div>
        {/* image section */}
      </div>
    </div>
  );
};

export default SecondSection;
