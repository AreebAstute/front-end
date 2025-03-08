import React from "react";
import { Link } from "react-router-dom";

import { FaArrowCircleRight } from "react-icons/fa";
import { getImageALt } from "../../../../utils";

const SeoServiceCard = ({
  title,
  desc,
  link,
  first,
  active,
  img,
  setActiveCard,
}) => {
  const handleHover = () => {
    // console.log("hovering:::")
    setActiveCard(false);
  };

  return (
    <>
      <Link
        to={link}
        className={`h-full seo-card  relative ${
          first === true ? (active ? "seo-active-card" : null) : null
        } `}
        onMouseEnter={handleHover}
      >
        <div className="bg-no-repeat bg-left-top bg-image-top h-full">
          <div className="bg-no-repeat h-full bg-right-bottom bg-image-bottom">
            <div className="container text-center items-center ">
              <img
                loading="lazy"
                className="inline-block py-10"
                src={img}
                alt={getImageALt(img)}
                width="150px"
                height="150px"
              ></img>
              <h3 className=" font-extrabold text-lg text-font-primary">
                {title}
              </h3>
              <p
                className="padding-detail-text pb-6 text-sm text-gray-text"
                style={{ paddingBottom: "50px" }}
              >
                {desc}
              </p>
            </div>
            <Link to={link} type="button">
              <div
                className="cursor-pointer btn-seo label-1  items-center justify-center bg-green-primary  absolute button-position-seo"
                id="header-estimate-button"
              >
                Discover more
                <span className="ml-2 text-xl text-white">
                  <FaArrowCircleRight></FaArrowCircleRight>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SeoServiceCard;
