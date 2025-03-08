import React from "react";

const SupportServicesCard = ({ title, desc, hidden, link, first, active }) => {
  return (
    <div className={`container ${hidden ? "hidden lg:block" : null}`}>
      <img
        loading="lazy"
        className="inline-block "
        src="/Images/serviceDetails/levels-webp.webp"
        alt="levels"
        width="150px"
        height="150px"
      ></img>
      <h3 className=" font-extrabold text-lg text-font-primary">{title} </h3>
      <p className="mt-5 text-sm text-gray-text">{desc}</p>
    </div>
  );
};

export default SupportServicesCard;
