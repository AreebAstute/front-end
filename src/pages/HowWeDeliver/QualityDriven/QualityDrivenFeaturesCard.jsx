import React from "react";
import { getImageALt } from "../../../utils";

const QDFeaturesCard = (props) => {
  return (
    <>
      <div className="mb-8 md:mb-12 px-5 lg:px-10">
        <div className="flex items-center mb-2  h-20">
          <img
            loading="lazy"
            className="w-2/12 lg:w-3/12 mr-5"
            alt={getImageALt(props.img)}
            src={props.img}
          />
          <h3 className="text-blue-primary text-xl font-bold">{props.title}</h3>
        </div>
        <p className="text-blue-primary text-base md:text-lg font-normal ">
          {props.desc}
        </p>
      </div>
    </>
  );
};

export default QDFeaturesCard;
