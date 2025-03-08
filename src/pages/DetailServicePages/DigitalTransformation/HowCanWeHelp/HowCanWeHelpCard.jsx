import React from "react";

import { getImageALt } from "../../../../utils";

const SecretSauceCard = (props) => {
  return (
    <div className=" bg-white shadow-md py-10 lg:p-10 my-10 flex flex-col lg:flex-row items-center  ">
      <div className="flex flex-col lg:pr-10  items-center lg:w-1/4  ">
        <h3 className="text-blue-primary text-center text-xl md:text-2xl lg:text-xl font-bold mb-5">
          {props.title}
        </h3>
        <img
          loading="lazy"
          alt={getImageALt(props.image)}
          className="w-3/5"
          src={props.image}
        />
      </div>
      <div className="px-5 md:w-3/4 pt-5 lg:pt-0 ">
        <div className="lg:border-l-2 lg:pl-10 text-lg font-bold space-y-5">
          <p className="text-blue-primary text-lg md:text-xl">
            {props.blueText}
          </p>
          <p className="text-gray-text text-base md:text-lg  ">
            {props.grayText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SecretSauceCard;
