import React from "react";

const WorkingPrincipleCard = (props) => {
  return (
    <div>
      <div
        className={`text-blue-primary space-y-3 p-3 text-center ${
          props.center === "false" ? "-mt-16" : ""
        } `}
      >
        <h3 className="text-lg lg:text-xl font-bold border-b-2 border-blue-primary lg:inline-block pb-1 px-6">
          {props.title}
        </h3>
        <p className="text-xs md:text-base lg:text-lg font-normal">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default WorkingPrincipleCard;
