import React from "react";

const ReasonCard = (props) => {
  return (
    <>
      {/* <div className="   tracking-wider py-2 md:py-10 px-10 xl:px-20 h-80 bg-contain bg-no-repeat" style={{backgroundImage:"url(/Images/serviceDetails/why-choose-us-cart-design-webp.webp)"}}> */}
      <div className=" tracking-wider py-2  xl:px-10 h-80 borderedDiv">
        <div className="flex items-center mb-3 h-20">
          <img
            loading="lazy"
            alt={props.img.split("/").pop()}
            className="w-2/12"
            src={props.img}
          />
          <h3 className="font-medium text-base lg:text-xl text-blue-primary ml-3">
            {props.title}
          </h3>
        </div>
        <p className="text-blue-primary text-base font-normal xl:mt-8 ">
          {props.desc}
        </p>
      </div>
    </>
  );
};

export default ReasonCard;
