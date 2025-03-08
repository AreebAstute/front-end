import React from "react";

const FeatureCard = ({ img, title, desc, alt }) => {
  return (
    <div className="bg-white h-96 md:h-70 lg:h-96">
      <div className="bg-gray-light h-full w-10/12">
        <div className="flex justify-center mb-5">
          <img loading="lazy" className="w-20 -mt-10" src={img} alt={alt} />
        </div>
        <div className="bg-white pl-8 pt-3 ml-10 2xl:ml-8 py-5 h-4/5 ">
          <h3 className="text-2xl text-blue-primary font-bold my-3 lg:h-14">
            {title}
          </h3>
          <p className="text-gray-text">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
