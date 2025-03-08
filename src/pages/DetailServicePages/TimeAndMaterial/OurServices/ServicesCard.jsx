import React from "react";

const ServicesCard = ({ text, font }) => {
  return (
    <div
      className={`bg-gray-light shadow-xl text-center rounded-t-md text-blue-primary  py-4 ${
        font === "small" ? "text-sm px-1.5" : "text-base px-2"
      }`}
      style={{ maxWidth: "180px", minWidth: "180px" }}
    >
      {text}
    </div>
  );
};

export default ServicesCard;
