import React from "react";

const ManagementCard = (props) => {
  return (
    <>
      <div className="  tracking-wider h-58 px-5">
        <div className="flex flex-col md:flex-row items-center mb-3 h-20">
          <img
            loading="lazy"
            alt="management-card"
            className="w-2/12"
            src={props.img}
          />
          <h3 className="font-bold text-center md:text-left md:font-medium text-base lg:text-xl text-blue-primary ml-3">
            {props.title}
          </h3>
        </div>
        <p className="text-blue-primary text-base font-normal text-center md:text-left ">
          {props.desc}
        </p>
      </div>
    </>
  );
};

export default ManagementCard;
