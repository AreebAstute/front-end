import React from "react";

const FeaturesCard = (props) => {
  return (
    <div>
      <div
        className={`text-blue-primary space-y-3 p-3 text-center  ${
          props.center === "true" ? "md:-mt-10" : "md:mt-3"
        }  `}
      >
        <h3 className="text-lg lg:text-xl font-bold">{props.title}</h3>
        <p className="text-sm lg:text-lg font-normal">{props.desc}</p>
        <div
          className={`mx-20 hidden md:flex
                ${
                  props.center === "true"
                    ? "flex flex-col items-center justify-center"
                    : ""
                } 
                ${
                  props.center === "end"
                    ? "flex flex-col items-end justify-end"
                    : ""
                }
                `}
        >
          <img
            loading="lazy"
            className="flex text-center w-3 mt-5"
            alt="Blockchain-conpect-cart"
            src="/Images/serviceDetails/Blockchain-conpect-cart-webp.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
