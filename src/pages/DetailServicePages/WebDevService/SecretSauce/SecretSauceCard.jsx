import React, { useEffect } from "react";
import { getImageALt } from "../../../../utils";

const SecretSauceCard = (props) => {
  return (
    <div className=" bg-white shadow-md py-10 lg:p-10 my-10 flex flex-col lg:flex-row items-center lg:h-96 2xl:h-80 ">
      <div className="flex flex-col lg:pr-10  items-center w-1/6  ">
        <h3 className="text-blue-primary text-2xl mb-5">{props.title}</h3>
        <img loading="lazy" alt={getImageALt(props.image)} src={props.image} />
      </div>
      <div className="w-5/6 pt-5 lg:pt-0 ">
        <ul className="lg:border-l-2 lg:pl-10 space-y-3">
          {props.list.map((item, index) => {
            return (
              <li key={index} className="contentListItem">
                <img
                  loading="lazy"
                  alt="bullet-point"
                  src="/Images/serviceDetails/bullet-point-webp.webp"
                />
                <p className="text-gray-text text-sm">{item}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SecretSauceCard;
