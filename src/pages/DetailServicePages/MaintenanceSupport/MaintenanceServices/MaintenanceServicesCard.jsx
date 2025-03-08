import React from "react";
import { getImageALt } from "../../../../utils";

const MaintenanceServicesCard = ({ title, desc, img }) => {
  return (
    <div className="container text-center items-center qa-type-card card-multiple-bg">
      <img
        loading="lazy"
        className="inline-block "
        src={img}
        alt={getImageALt(img)}
        width="100px"
        height="100px"
      ></img>
      <h3 className=" font-extrabold text-base md:text-lg text-font-primary">
        {title.split("_")[0]} <br /> {title.split("_")[1]}{" "}
      </h3>
      <p
        className="mt-5 text-sm text-gray-text"
        style={{ paddingBottom: "80px" }}
      >
        {desc}
      </p>
    </div>
  );
};

export default MaintenanceServicesCard;
