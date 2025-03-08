import React, { useState, useRef } from "react";
import "./seo.css";
// import "../../../../index.css"
import { useViewportScroll, motion } from "framer-motion";
import SeoServiceCard from "./SeoServiceCard";

function SEOServices() {
  const [scrolled, setScrolled] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [number, setNumber] = useState(0);
  const ref = useRef();


  const { scrollY } = useViewportScroll();

  // const p = document.getElementById("dashedPath");
  // console.log("path:::",p.getTotalLength())

  scrollY.onChange((value) => {
    if (value > 1000) {
      setScrolled(true);
    } else if (value < 1000) {
      setScrolled(false);
    }
    if (value > 1787 && window.innerWidth > 768) {
      setActiveCard("1");
    }
  });

  const svgVariants = {
    hidden: {
      strokeDashoffset: 3773.508056640625,
    },
    visible: {
      strokeDashoffset: 0,
    },
  };

  return (
    <div ref={ref} className=" top-padding">
      <div
        className="h-full my-10  bg-no-repeat bg-left-top relative leftPatternSize  "
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/left_pattern-webp.webp')",
        }}
      >
        <svg
          className="svg"
          version="1.1"
          id="arrow2"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="110%"
          height="1100"
          viewBox="0 0 1200 1200"
        >
          <g>
            <polygon
              className="path"
              points="-303.1,1152.2 -301.5,1188.2 -270.9,1164.4 -289.9,1163.1 	"
            />
            <polygon
              className="path"
              points="-301.5,1188.2 -289.9,1163.1 -303.1,1152.2 	"
            />
          </g>
          {/* <motion.path
        variants={svgVariants}
        animate={scrolled ? "visible" : "hidden"}
        transition={{duration:2, ease:"easeInOut"}}
        className="path" d="M577.2,149.3c-4,29.5-100.1,127,93.1,290c85.4,72.1,567.5,211.6,645.3,226.8c162.4,31.6,20.8,136.2,7.4,150.8
            c-57,62.1-232,44.8-235.1,113.7c-1.5,33.2,121.1,63.1,148.1,51.1c40.9-18.2,23.6-100.5-19.1-129.9c-84-57.9-165.5-72.7-376.1-4.9
            c-269.6,86.8-355.2,22.8-545.4-18.4c-153.2-36.8-461.1,128.7-366.6,2C32.4,748.8,30.8,948.9-53,999s-173.4,68-226.6,150.7"/> */}
          <motion.path
            id="dashedPath"
            // variants={svgVariants}
            animate={
              scrolled
                ? { strokeDashoffset: 0 }
                : { strokeDashoffset: 3773.508056640625 }
            }
            transition={{ duration: 3, ease: "easeInOut" }}
            className="dashed"
            strokeDasharray="3773.508056640625"
            d="M577.2,149.3c-4,29.5-100.1,127,93.1,290c85.4,72.1,567.5,211.6,645.3,226.8c162.4,31.6,20.8,136.2,7.4,150.8
            c-57,62.1-232,44.8-235.1,113.7c-1.5,33.2,121.1,63.1,148.1,51.1c40.9-18.2,23.6-100.5-19.1-129.9c-84-57.9-165.5-72.7-376.1-4.9
            c-269.6,86.8-355.2,22.8-545.4-18.4c-153.2-36.8-461.1,128.7-366.6,2C32.4,748.8,30.8,948.9-53,999s-173.4,68-226.6,150.7"
          />
          <path
            className="plain"
            d="M577.2,149.3c-4,29.5-100.1,127,93.1,290c85.4,72.1,567.5,211.6,645.3,226.8c162.4,31.6,20.8,136.2,7.4,150.8
            c-57,62.1-232,44.8-235.1,113.7c-1.5,33.2,121.1,63.1,148.1,51.1c40.9-18.2,23.6-100.5-19.1-129.9c-84-57.9-165.5-72.7-376.1-4.9
            c-269.6,86.8-355.2,22.8-545.4-18.4c-153.2-36.8-461.1,128.7-366.6,2C32.4,748.8,30.8,948.9-53,999s-173.4,68-226.6,150.7"
          />
        </svg>
        <div className=" flex flex-col ">
          <div className="flex  justify-center mt-10">
            <div className=" inline-block text-center mx-2">
              <h1 className=" smallHeading"> Complete Astuteness </h1>
              <h2 className="heding1">
                Select the best service for your business’s digital growth
              </h2>
            </div>
          </div>
        </div>

        <div className=" items-stretch grid-view-seo mx-5  grid-margin-seo mt-16">
          <SeoServiceCard
            title="Block Chain"
            desc="Enable trusted data exchange and workflow automation beyond the boundaries with distributed ledger technology and blockchain."
            link="/services/blockchain-solutions"
            first={true}
            setActiveCard={setActiveCard}
            active={activeCard}
            img="/Images/LandingPageImage/Services2/blockchain copy-webp.webp"
          />

          <SeoServiceCard
            title="DevOps Services"
            desc="Achieve a greater business agility and a faster time to market by eliminating bottlenecks in software development with our DevOps Services. "
            link="/services/devops-services"
            first={false}
            setActiveCard={setActiveCard}
            active={activeCard}
            img="/Images/LandingPageImage/Services2/devops copy-webp.webp"
          />
          <SeoServiceCard
            title="Big Data Services"
            desc="Maximize your data investment, activate actionable business and consumers insights"
            link="/services/big-data-consulting-services"
            first={false}
            active={activeCard}
            setActiveCard={setActiveCard}
            img="/Images/LandingPageImage/Services2/big_data copy-webp.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default SEOServices;
