import React, { useEffect } from "react";
import { motion } from "framer-motion";

const ProcessDetailCard = (props) => {
  return (
    <motion.div
      className="bg-cover p-5 text-blue-primary absolute mx-auto flex flex-col items-center justify-center "
      style={{
        top: "28%",
        left: "62%",
        width: "25%",
        height: "50%",
        backgroundImage: "url(/Images/how-we-deliver/astute-approach-webp.webp)",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, type: "tween" }}
    >
      <div className=" font-bold text-2xl">
        <h3 className="text-base xl:text-xl font-bold">{props.title}</h3>
        <p className="mt-5 text-sm xl:text-base font-normal ">{props.desc}</p>
      </div>
    </motion.div>
  );
};

export default ProcessDetailCard;
