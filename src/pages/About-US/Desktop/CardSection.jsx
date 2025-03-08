import React from "react";

const CardSection = ({ title, desc, img, number }) => {
  return (
    <div className="card-section-2  ">
      <div
        className=" h-full bg-no-repeat bg-left-top "
        style={{
          borderRadius: "15px",
          backgroundSize: "20%",
          backgroundImage: "url('/Images/about-usAssets/top_pattern-webp.webp')",
        }}
      >
        <div
          className=" h-full bg-no-repeat bg-right-bottom flex flex-col justify-center items-center"
          style={{
            borderRadius: "15px",
            backgroundSize: "20%",
            backgroundImage: "url('/Images/about-usAssets/bottom_pattern-webp.webp')",
          }}
        >
          <div className="flex flex-row w-11/12 justify-center items-center py-10">
            <div className="numberCircle mr-5">
              <p className="text-sm font-medium">{number}</p>
            </div>

            <div className="flex flex-col w-3/5 ">
              <h2 className=" inline-block  font-extrabold text-lg text-font-primary ">
                {title}
              </h2>
              <p className="inline-block  text-sm text-gray-text ">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
