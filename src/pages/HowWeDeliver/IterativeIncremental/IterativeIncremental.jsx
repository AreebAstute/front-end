import React, { useState, useEffect } from "react";
import "./iterativeStyles.css";
import "./LineSvg";
import SvgShape from "./SvgShape";
// const ProcessDetailCard = React.lazy(() => import("./ProcessDetailCard"));
import { AnimatePresence } from "framer-motion";
// const MobileIterativeIncrementalBlock = React.lazy(() => import("./MobileIterativeIncrementalBlock"));



import ProcessDetailCard from "./ProcessDetailCard";
import MobileIterativeIncrementalBlock from "./MobileIterativeIncrementalBlock";

const IterativeIncremental = () => {
  const listItemStyle = "font-bold my-5 ml-5";

  const [activeCard, setActiveCard] = useState(1);

  return (
    <>
      {/* Desktop Block */}
      <div
        className=" hidden lg:block px-5 md:px-10 xl:px-10 md:pt-28 bg-no-repeat bg-left-top leftPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        <div className="relative ">
          {/* Text section */}
          <div
            className=" absolute top-0 xl:top-32 left-0 text-blue-primary tracking-wider mb-12 lg:px-20 col-span-1 w-1/2"
            style={{ zIndex: "1" }}
          >
            <div className="text-blue-primary font-normal text-base lg:text-lg uppercase">
              <div
                className="font-medium bg-no-repeat bg-contain block py-12 relative"
                style={{
                  backgroundImage: "url(/Images/how-we-deliver/02-webp.webp)",
                }}
              >
                <p className="absolute bottom-1 text-base font-normal">
                  To improve the quality of a product and optimize costs.
                </p>
              </div>
            </div>
            <h2 className="devProcessHeading">Iterative & Incremental</h2>
            <p className="font-normal">
              Adapt to change and stay on the track at the same time.
            </p>
            <ul className="mt-5 xl:mt-10 list text-base lg:text-lg">
              <li className={`${listItemStyle} mylist`}>
                <h3>Flexibility</h3>
              </li>
              <li className={`${listItemStyle} mylist`}>
                <h3>Risk reduction</h3>
              </li>
              <li className={`${listItemStyle} mylist`}>
                <h3>Higher quality</h3>
              </li>
            </ul>
          </div>
          {/* Text section */}

          <SvgShape setActiveCard={setActiveCard} />

          <AnimatePresence exitBeforeEnter>
            {activeCard === 1 ? (
              <ProcessDetailCard
                key="1"
                title="Planning"
                desc={`Before the actual development 
                    proces, we organise the Project Planning Sesion. You meet the our experts and 
                    together we aim to understand the project’s business requirements and 
                    agree on our mutual approach to the project delivery.`}
              />
            ) : activeCard === 2 ? (
              <ProcessDetailCard
                key="2"
                title="Analysis & Design"
                desc={`Our team will prepare all crucial analysis and get back to you with few design proposal which will become our main lead in customer engagement.`}
              />
            ) : activeCard === 3 ? (
              <ProcessDetailCard
                key="3"
                title="Development"
                desc={`Now its all Astute Softwares genius developers game. We will develop our idea from paper and discussion table into a digital product. We deliver in iterations so that meanwhile you are evaluating one iteration, our developers still get their game high on another iteration.`}
              />
            ) : activeCard === 4 ? (
              <ProcessDetailCard
                key="4"
                title="Testing"
                desc={`Our QA team utilizes an Integrated Quality Assurance practice to ensure the highest quality of our deliverables. We have perfected QA strategy and methodology that blend seamlessly into the development lifecycle without crossing the important boundary between the development and software quality assurance processes.`}
              />
            ) : activeCard === 5 ? (
              <ProcessDetailCard
                key="5"
                title="Evaluation"
                desc={`At this stage all Astute Softwares project stake holders get together to evaluate if the final product meets your requirements and is truly a ASTUTE product.`}
              />
            ) : activeCard === 6 ? (
              <ProcessDetailCard
                key="6"
                title="Deployment"
                desc={`FINALLY. We will deliver the product to your clients who can then taste the ASTUTENESS of the technology.`}
              />
            ) : null}
          </AnimatePresence>
        </div>
      </div>
      {/* Desktop Block */}
      <MobileIterativeIncrementalBlock />
    </>
  );
};

export default IterativeIncremental;
