import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ResponsiveProcessDetailCard = (props) => {
  return (
    <div className="bg-cover p-5 text-blue-primary">
      <div className="rounded-full border-2 border-green-primary w-10 h-10 inline-block flex justify-center items-center text-base mb-2">
        {props.number}
      </div>
      <h3 className="text-lg font-bold">{props.title}</h3>
      <p className=" text-base font-normal ">{props.desc}</p>
    </div>
  );
};

export default ResponsiveProcessDetailCard;
