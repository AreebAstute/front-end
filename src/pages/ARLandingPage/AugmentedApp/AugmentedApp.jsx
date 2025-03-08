import React from "react";
import Button from "../../../components/Button";

const Hiring = () => {
  return (
    <div className="bg-gray-light py-20 px-8 md:px-20 flex justify-end my-10 arAPP">
      <div className=" lg:w-2/5">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl text-center text-blue-primary lg:text-white lg:text-left font-bold py-3">
          Create Your Augmented Reality App Now
        </h2>
        <div className="border-2 border-green-primary w-20 mx-auto lg:mx-0"></div>
        <p className="py-3 text-xl md:text-2xl text-gray-text lg:text-white font-normal text-center lg:text-left">
          Don’t hesitate any longer and try our unique system to create your
          professional AR experience!
        </p>

        <div className="flex flex-col lg:items-start items-center">
          <Button text="Try for Free Now" link="/contact-us" />
          <span className="text-gray-text lg:text-white text-center lg:text-left">
            No credit card required. No software installation.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hiring;
