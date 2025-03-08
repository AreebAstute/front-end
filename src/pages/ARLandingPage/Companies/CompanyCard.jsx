import React from "react";

const FeatureCard = ({ img, alt }) => {
  return (
    <div className="flex justify-center items-center">
      <img loading="lazy" alt={alt} className="w-10" src={img} />
    </div>
  );
};

export default FeatureCard;
