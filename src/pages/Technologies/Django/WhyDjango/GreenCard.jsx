import React from "react";

const GreenCard = (props) => {
  return (
    <div className="bg-green-secondary rounded-xl shadow-md p-5 lg:p-10 h-42 space-y-3 my-3">
      <div className="flex flex-col lg:flex-row items-center space-y-3">
        <img loading="lazy" alt="card img" src={props.img} />
        <h3 className="text-blue-primary font-bold text-lg lg:text-xl pl-3 text-center lg:text-left">
          {props.title}
        </h3>
      </div>
      <p className="text-gray-text text-sm md:text-lg pl-3 text-center lg:text-left">
        {props.desc}
      </p>
    </div>
  );
};

export default GreenCard;
