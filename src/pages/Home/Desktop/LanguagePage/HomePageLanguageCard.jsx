import React from "react";
import { getImageALt } from "../../../../utils";
// object-contain h-2/4 w-full
const HomePageLanguageCard = ({ title, image, desc }) => {
  const languageTitle = "font-extrabold text-xl md:text-2xl text-font-primary";

  return (
    <div className="h-full">
      <div className="card">
        <div className="container text-center flex flex-col h-56 justify-center items-center ">
          <img
            loading="lazy"
            className="object-contain h-1/5 w-full"
            // className="inline-block home-page-lang-img "
            src={image}
            alt={getImageALt(image)}
          ></img>
          <h3 className={languageTitle}>{title}</h3>
          <p className="w-10/12 pb-6 text-base font-medium text-gray-text">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePageLanguageCard;
