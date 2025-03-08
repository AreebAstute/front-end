import React from "react";
import { getImageALt } from "../../../utils";

const FeaturesCard = (props) => {
  return (
    <>
      <div className="  tracking-wider mb-12">
        <div className="flex items-start mb-2 h-16">
          <img
            loading="lazy"
            className="w-2/12 mr-3 "
            alt={getImageALt(props.img)}
            src={props.img}
          />
          <h3 className="text-blue-primary text-xl 2xl:text-2xl font-bold">
            {props.title}
          </h3>
        </div>
        <p className="text-blue-primary text-base font-normal ">{props.desc}</p>
      </div>
    </>
  );
};

export default FeaturesCard;
