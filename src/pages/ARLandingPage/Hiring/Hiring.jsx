import React from "react";
import Button from "../../../components/Button";

const Hiring = () => {
  return (
    <div className="bg-gray-light flex justify-end my-10">
      <div
        className="w-0 lg:w-3/5 bg-blue-50 bg-cover bg-center hireAr"
        style={{ backgroundImage: "url(/Images/AR-assets/hire-an-AR-webp.webp)" }}
      ></div>
      <div className="  lg:w-2/5 py-16 px-8 md:pr-20 ">
        <h2 className="text-3xl md:text-4xl 2xl:text-5xl text-center text-blue-primary lg:text-left font-bold py-3">
          Hire an Augmented Reality Developer
        </h2>
        <div className="border-2 border-green-primary w-20 mx-auto lg:mx-0"></div>
        <p className="py-3 text-xl md:text-2xl text-gray-text font-normal text-center lg:text-left">
          If you don’t have your own development resources, contact our team to
          get in touch with one of our preferred developers.
        </p>

        <Button text="Contact Us" link="/contact-us" />
      </div>
    </div>
  );
};

export default Hiring;
