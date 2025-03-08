import React from "react";

const FeaturesCard = (props) => {
  return (
    <>
      <div className="  tracking-wider mb-12 h-58 ">
        <div className="flex flex-col justify-center items-center mb-5 rounded-xl shadow-lg h-4/5 p-8">
          <img
            loading="lazy"
            alt={props.img.split("/").pop()}
            className="w-2/6 md:w-2/5 xl:w-3/5"
            src={props.img}
          />
        </div>
        <h3 className="text-blue-primary text-base font-bold uppercase text-center">
          {props.title}
        </h3>
      </div>
    </>
  );
};

export default FeaturesCard;
