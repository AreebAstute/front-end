import React from "react";

const ValueCard = (props) => {
  return (
    <div className="rounded-2xl shadow-md bg-white bg-opacity-70 px-10 py-12 relative">
      <img
        loading="lazy"
        src={props.img}
        alt="icon-bg"
        className="w-24 bg-no-repeat bg-contain bg-center absolute -top-10 left-1/2 transform -translate-x-1/2"
        style={{ backgroundImage: "url(/Images/careers/icon-bg-webp.webp)" }}
      />
      <div className="text-gray-text mt-12 text-center font-normal flex flex-col justify-center items-center space-y-1 ">
        <h2 className="font-bold text-blue-primary text-lg lg:text-xl">
          {props.title}
        </h2>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default ValueCard;
