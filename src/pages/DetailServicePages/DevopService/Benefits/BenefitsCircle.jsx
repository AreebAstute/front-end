import React from "react";

const BenefitsCircle = (props) => {
  const outerBoxStyle =
    "bg-contain rounded-full  bg-no-repeat flex p-5 lg:p-8 justify-center items-center   ";
  const innerBoxStyle =
    "bg-white w-20 h-20 md:w-16 md:h-16 lg:w-28 lg:h-28 2xl:w-32 2xl:h-32 rounded-full shadow-2xl flex justify-center items-center transform -rotate-90 md:rotate-0";
  const circleText =
    " py-1 text-blue-primary normal-case lg:uppercase text-sm font-normal flex justify-center w-full w-4/5 lg:mx-auto text-center transform -rotate-90 md:rotate-0";
  return (
    <div>
      <div className={`${props.marginLeft} h-58 flex flex-col items-center`}>
        {props.number === "odd" ? (
          <h3 className={`${circleText} pl-12`}> {props.title}</h3>
        ) : null}

        <div
          className={`${outerBoxStyle} ${
            props.number === "odd" ? "bg-top " : "bg-bottom mt-12"
          } `}
          style={{ backgroundImage: `url(${props.bgImage})` }}
        >
          <div className={`${innerBoxStyle}`}>
            <img
              loading="lazy"
              alt={props.innerImage.split("/").pop()}
              className="w-2/5"
              src={props.innerImage}
            />
          </div>
        </div>

        {props.number === "even" ? (
          <h3 className={`${circleText} pr-12 `}> {props.title}</h3>
        ) : null}
      </div>
    </div>
  );
};

export default BenefitsCircle;
