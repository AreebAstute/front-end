import React from "react";

const ServiceAdvantageCard = (props) => {
  return (
    <div
      className="relative bg-no-repeat bg-center bg-contain h-96 flex items-center w-4/5 mx-auto md:w-full"
      style={{
        backgroundPositionX: "right 0",
        backgroundImage:
          "url(/Images/serviceDetails/DevOps-Practice-gives-you-cart-design-webp.webp)",
      }}
    >
      {/* <div className=" bg-transparent  space-y-5 flex flex-col items-center w-6/12 md:w-7/12 lg:w-4/5 ml-28 md:ml-16 lg:ml-0  px-5"> */}
      <div className=" space-y-3  sm:space-y-5 flex flex-col items-center w-10/12 md:w-7/12 lg:w-4/5 px-5 absolute top-20 md:top-10 lg:top-12 md:ml-12 lg:ml-0 lg:left-0 ">
        <img
          loading="lazy"
          alt="service-card"
          className="w-5/12"
          src={props.img}
        />
        <h3 className="font-medium text-center text-sm sm:text-base text-blue-primary uppercase h-8">
          {props.title}
        </h3>
        <p className="text-blue-primary text-center text-xs sm:text-sm font-normal">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default ServiceAdvantageCard;
