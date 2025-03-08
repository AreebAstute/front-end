import React, { useState, useEffect } from "react";
import "./iterativeStyles.css";

import ResponsiveProcessDetailCard from "./ResponsiveProcessDetailCard";

const MobileIterativeIncrementalBlock = () => {
  const listItemStyle = "font-bold my-5 ml-5";
  const [activeCard, setActiveCard] = useState(1);

  return (
    <>
      <div
        className=" block lg:hidden  px-5 md:px-10 pt-28 bg-no-repeat bg-left-top leftPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        <div className=" text-blue-primary tracking-wider mb-12 lg:px-20">
          <p className="text-blue-primary font-normal text-base lg:text-lg uppercase">
            <div
              className="font-medium bg-no-repeat bg-contain block py-12 relative"
              style={{ backgroundImage: "url(/Images/how-we-deliver/02-webp.webp)" }}
            >
              <p className="absolute bottom-1 text-base font-normal">
                To improve the quality of a product and optimize costs.
              </p>
            </div>
          </p>
          <h2 className="devProcessHeading">Iterative & Incremental</h2>
          <p className="font-normal">
            Adapt to change and stay on the track at the same time.
          </p>
          <ul className="mt-10 list text-base lg:text-lg">
            <li className={`${listItemStyle} mylist`}>
              <h3>Flexibility</h3>
            </li>
            <li className={`${listItemStyle} mylist`}>
              <h3>Risk reduction</h3>
              <p className="font-normal">
                Isues are identified and resolved during iterations. Business
                risk is managed through small releases that are verified by the
                clients every two weeks.
              </p>
            </li>
            <li className={`${listItemStyle} mylist`}>
              <h3>Higher qulaity</h3>
            </li>
          </ul>
        </div>
        <div className="">
          <ResponsiveProcessDetailCard
            number="1"
            title="Planning"
            desc={`Before the actual development 
                    proces, we organise the Project Planning Sesion.You meet the TSH experts and 
                    together we aim to understand the project’s business requirements and 
                    agree on our mutual approach to the project delivery`}
          />
          <ResponsiveProcessDetailCard
            number="2"
            title="Designing"
            desc={`Before the actual development 
            proces, we organise the Project Planning Sesion.You meet the TSH experts and 
            together we aim to understand the project’s business requirements and 
            agree on our mutual approach to the project delivery`}
          />
          <ResponsiveProcessDetailCard
            number="3"
            title="Development"
            desc={`Before the actual development 
            proces, we organise the Project Planning Sesion.You meet the TSH experts and 
            together we aim to understand the project’s business requirements and 
            agree on our mutual approach to the project delivery`}
          />
          <ResponsiveProcessDetailCard
            number="4"
            title="Testing"
            desc={`Before the actual development 
            proces, we organise the Project Planning Sesion.You meet the TSH experts and 
            together we aim to understand the project’s business requirements and 
            agree on our mutual approach to the project delivery`}
          />
          <ResponsiveProcessDetailCard
            number="5"
            title="Evaluation"
            desc={`Before the actual development 
            proces, we organise the Project Planning Sesion.You meet the TSH experts and 
            together we aim to understand the project’s business requirements and 
            agree on our mutual approach to the project delivery`}
          />
        </div>
      </div>
    </>
  );
};

export default MobileIterativeIncrementalBlock;
