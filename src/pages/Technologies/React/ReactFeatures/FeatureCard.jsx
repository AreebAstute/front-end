import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="rounded-xl bg-white shadow-lg hover:shadow-none cursor-pointer flex flex-col justify-center px-5 lg:px-8 2xl:px-16  h-60 lg:h-72 space-y-3 border-1 border-gray-light">
      <div className="flex flex-col lg:flex-row  items-center">
        <img
          loading="lazy"
          className="w-16 lg:w-24"
          src={props.img}
          alt={props.alt}
        />
        <h3 className="text-blue-primary text-lg 2xl:text-xl font-bold pl-3">
          {props.title}
        </h3>
      </div>
      <p className="text-gray-text text-sm xl:text-lg lg:text-left text-center">
        {props.desc}
      </p>
    </div>
  );
};

export default FeatureCard;
