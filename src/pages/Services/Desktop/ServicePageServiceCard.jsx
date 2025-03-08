import React from "react";
import { Link } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import { getImageALt } from "../../../utils";

const ServicePageServiceCard = ({ title, desc, link, img }) => {
  return (
    <>
      <Link to={link} className="h-full card-50 relative ">
        <div className="container text-center items-center pt-5">
          <img
            loading="lazy"
            className="inline-block w-2/5 "
            src={img}
            alt={getImageALt(img)}
          ></img>
          <h3 className=" font-extrabold text-lg text-font-primary">{title}</h3>
          <p className=" padding-detail-text pb-6  text-sm text-gray-text">
            {desc}
          </p>
        </div>
        <p to={link} type="button">
          <div
            className="btn-services label-1 items-center justify-center bg-green-primary  absolute button-position"
            id="header-estimate-button"
          >
            Discover more
            <span className="ml-2 text-xl text-white">
              <FaArrowCircleRight />
            </span>
          </div>
        </p>
      </Link>
    </>
  );
};

export default ServicePageServiceCard;
