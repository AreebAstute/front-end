import React from "react";

import { getImageALt } from "../../../../utils";

const EngagementModelCard = ({ title, desc, img }) => {
  return (
    <div className={`h-full relative engagement-model-card`}>
      <div className="bg-no-repeat bg-left-top bg-image-top">
        <div className="bg-no-repeat bg-right-bottom bg-image-bottom h-full">
          <div className="container text-center items-center ">
            <img
              loading="lazy"
              className="inline-block my-3 "
              src={img}
              alt={getImageALt(img)}
              width="80px"
              height="80px"
            ></img>
            <h3 className=" font-extrabold text-lg text-font-primary">
              {title}
            </h3>
            <p
              className="mt-5 text-sm text-gray-text"
              style={{ paddingBottom: "80px" }}
            >
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngagementModelCard;
