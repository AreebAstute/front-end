import React from "react";
import "./Fifthsec.css";
import { getImageALt } from "../../../../utils";

const CardLanguage = (props) => {
  return (
    <>
      <div className="card-fifth-section relative">
        <div className="flex flex-row justify-center items-center container text-center  ">
          <img
            loading="lazy"
            className="inline-block bg-contain py-10 pl-5 pr-5 "
            src={props.imgCard}
            alt={getImageALt(props.imgCard)}
            width="100px"
            height="100px"
          ></img>
          <h3 className=" font-extrabold text-2xl h1-text ">
            {props.titleCard}
          </h3>
        </div>
      </div>
    </>
  );
};

export default CardLanguage;
