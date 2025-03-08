import React, { useRef, useState, useEffect } from "react";
import ServiceCard from "./ServiceCard";
import { useViewportScroll, motion } from "framer-motion";

const HomePageServices = () => {
  const refOne = useRef(null);
  const lengthRef = useRef(null)

  const [scrolled, setScrolled] = useState(false);
  const [number, setNumber] = useState(0);
  const { scrollY } = useViewportScroll();
  // const path = document.getElementById("firstArrow");
  const path = lengthRef.current
  let length;
  let scrollVal;
  if (path) {
    length = path.getTotalLength();
  }

  useEffect(() => {
    scrollVal = refOne.current.scrollHeight;
  }, []);

  scrollY.onChange((value) => {
    if (value > scrollVal - 500) {
      setScrolled(true);
    } else if (value < scrollVal - 500) {
      setScrolled(false);
    }
  });

  return (
    <div ref={refOne} className="mt-20 md:mt-0 lg:mt-10 relative">
      {/* <div> */}
      <svg
        className="svg"
        version="1.1"
        id="arrow"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="-200px"
        width="100%"
        height="900"
        viewBox="0 0 1200 1200"
      >
        <g>
          <motion.path
            // id="firstArrow"
            ref={lengthRef}
            animate={
              scrolled
                ? { strokeDashoffset: 0 }
                : { strokeDashoffset: 1806.31591796875 }
            }
            transition={{ duration: 3, ease: "easeInOut" }}
            className="dashed"
            strokeDasharray="1806.31591796875"
            d="
                M 810.2,304.1
                c 150.3-16,251.7-14.6,293.9,69.2
                c25.4,50.4,29.5,131.4-13.3,175.5
                c-30.5,31.5-78.4,37.9-87.8,33.2
                c-29.3-14.6-14.6-58.5,70.5-58.5
                c30.6,0,49.2,77.1-31.9,146.3
                C862.5,822.5,493.8,869.3,272.9,869.3
                c-45.2,0-70.5,26.6-78.5,37.2"
          />
          <path
            className="plain"
            d="
                M 810.2,304.1
                c 150.3-16,251.7-14.6,293.9,69.2c25.4,50.4,29.5,131.4-13.3,175.5
                c-30.5,31.5-78.4,37.9-87.8,33.2
                c-29.3-14.6-14.6-58.5,70.5-58.5
                c30.6,0,49.2,77.1-31.9,146.3
                C862.5,822.5,493.8,869.3,272.9,869.3
                c-45.2,0-70.5,26.6-78.5,37.2"
          />

          {/* <polygon className="polygon-style" points="170.1,896.2 160.1,947.6 211.5,924.3 185,916.1"/>
                <polygon className="polygon-style" points="160.1,947.6 185,916.1 170.1,896.2 "/> */}
        </g>
      </svg>
      {/* </div> */}
      {/* text section */}
      <div className="text-center text-blue-primary tracking-wide mb-12 mx-5 md:mt-40 mt-20">
        <h1 className="smallHeading">Complete package</h1>
        <h2 className="heding1">From Product Design to Software Development</h2>
        <p className="text-base text-gray-text my-2">
          Astute Softwares is assuring continuous delivery for your growth
        </p>
      </div>
      {/* text section */}

      {/* services section */}
      <div className="flex flex-col lg:flex-row w-full xl:w-10/12  mx-auto ">
        <div className="serviceDiv  flex flex-col items-center">
          <ServiceCard
            margin="mx-5 md:mx-20 lg:ml-20 lg:-mr-10"
            title="Custom Software Development"
            desc="High performing software applications that grow with your business."
            img="/Images/LandingPageImage/software dev-webp.webp"
            detailLink="/services/custom-software-development"
          />
          <ServiceCard
            margin="mx-5 md:mx-20 lg:ml-10"
            title="Digital Transformation"
            desc="Team up with Astute Softwares to accelerate your journey to the cloud."
            img="/Images/LandingPageImage/Transformation-webp.webp"
            detailLink="/services/digital-transformation-services"
          />
          <ServiceCard
            margin="mx-5 md:mx-20 lg:ml-20 lg:-mr-10"
            title="Mobile Application Development"
            desc="Let’s build apps for your everyday use."
            img="/Images/LandingPageImage/app dev-webp.webp"
            detailLink="/services/mobile-application-development"
          />
        </div>
        <div className="flex items-center justify-center serviceImgDiv">
          <img
            loading="lazy"
            className="w-4/5 md:w-3/5 lg:w-full"
            alt="services-img-resized"
            src="/Images/LandingPageImage/services-img-resized-webp.webp"
          ></img>
        </div>
        <div className="serviceDiv  flex flex-col items-center">
          <ServiceCard
            margin="mx-5 md:mx-20 lg:mr-20 lg:-ml-10"
            title="QA and Testing Services"
            desc="Our Quality Assurance team ensures your code is impeccable."
            img="/Images/LandingPageImage/QA-webp.webp"
            detailLink="/services/software-quality-assurance"
          />
          <ServiceCard
            margin="mx-5 md:mx-20 lg:mr-10"
            title="UX and UI Design"
            desc="We create things, your users will love."
            img="/Images/LandingPageImage/UI-UX-webp.webp"
            detailLink="/services/ui-and-ux-design"
          />
          <ServiceCard
            margin="mx-5 md:mx-20 lg:mr-20 lg:-ml-10"
            title="Application Maintenance & Support"
            desc="Our support team is there for you 24/7, helping you high available for your clients."
            img="/Images/LandingPageImage/app maintenance-webp.webp"
            detailLink="/services/maintenance-and-support"
          />
        </div>
      </div>
      {/* services section */}
    </div>
  );
};

export default HomePageServices;
