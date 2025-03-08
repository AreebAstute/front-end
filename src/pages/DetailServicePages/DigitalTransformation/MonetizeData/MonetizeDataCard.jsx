import React from "react";
import { getImageALt } from "../../../../utils";

const MonetizeDataCard = ({ title, img, desc }) => {
  return (
    <div className="flex py-5 ">
      <div className="w-1/4 mx-3">
        <img
          loading="lazy"
          alt={getImageALt(img)}
          className="bg-gray-light rounded-full"
          src={img}
        />
      </div>
      <div className="w-3/4 space-y-3">
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-text text-sm md:text-base">{desc}</p>
      </div>
    </div>
  );
};

export default MonetizeDataCard;
