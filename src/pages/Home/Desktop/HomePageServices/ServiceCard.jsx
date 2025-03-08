import React from "react";
import { Link } from "react-router-dom";
import { getImageALt } from "../../../../utils";

const ServiceCard = (props) => {
  return (
    <Link
      to={props.detailLink}
      className={`${props.margin} w-4/5  md:h-40 lg:h-40 md:grid md:grid-cols-5 lg:grid-cols-1 xl:grid-cols-3 justify-center items-center lg:items-start rounded-xl shadow-md hover:shadow-none border-1 border-gray-light py-5 px-5 md:px-3 cursor-pointer my-8  transition duration-500 bg-white`}
    >
      <div className=" ">
        <img
          loading="lazy"
          className="w-2/6 md:w-4/6 lg:w-1/6 xl:w-4/6 mx-auto md:mx-0"
          alt={getImageALt(props.img)}
          src={props.img}
        ></img>
      </div>
      <div className="col-span-4 xl:col-span-2 text-blue-primary mt-5 md:mt-0 text-center md:text-left ">
        <h1 className="text-base md:text-lg lg:text-base 2xl:text-lg leading-tighter font-bold mb-1">
          {props.title}
        </h1>
        <p className="text-gray-text text-sm  md:text-lg lg:text-sm font-normal">
          {props.desc}
        </p>
      </div>
    </Link>
  );
};

export default ServiceCard;
