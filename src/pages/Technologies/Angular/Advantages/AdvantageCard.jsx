import React from "react";
import { motion } from "framer-motion";

const AdvantageCard = (props) => {
  return (
    <div
      className="px-10 py-5 bg-no-repeat bg-cover space-y-6 h-full"
      style={{
        backgroundImage: "url(/Images/how-we-deliver/astute-approach-webp.webp)",
      }}
    >
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
          },
        }}
      >
        <h3 className="text-blue-primary text-2xl font-bold tracking-wider">
          {props.title}
        </h3>
        <p className="text-gray-text tracking-wide leading-8 text-lg xl:text-xl">
          {props.desc}
        </p>
      </motion.div>
    </div>
  );
};

export default AdvantageCard;
