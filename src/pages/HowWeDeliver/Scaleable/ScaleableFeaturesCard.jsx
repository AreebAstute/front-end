import React from "react";
import { getImageALt } from "../../../utils";

const FeaturesCard = (props) => {
  return (
    <>
      <div className=" flex flex-col md:flex-row md:items-start tracking-wider mb-12  lg:px-20 ">
        <img
          loading="lazy"
          className="w-1/4 md:w-2/12 mt-2 mx-3"
          alt={getImageALt(props.img)}
          src={props.img}
        />

        <div className="ml-3">
          <h3 className="text-blue-primary text-xl 2xl:text-2xl font-bold">
            {props.title}
          </h3>
          <p className="text-blue-primary text-base font-normal ">
            {props.desc}
          </p>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
