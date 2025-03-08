import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useViewportScroll } from "framer-motion";

const Consultation = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useViewportScroll();
  const refLast = useRef(null);
  let length;
  let scrollVal;
  
  
  useEffect(() => {
    const path = document.getElementById("arrowFour");
    if (path) {
      length = path.getTotalLength();
    }
    scrollVal = refLast.current.scrollHeight;
    // console.log("ref:::",refLast);
  }, []);
  scrollY.onChange((value) => {
    // console.log("inside:::",value)
    if (value > 2690) {
      setScrolled(true);
    } else if (value < 2690) {
      setScrolled(false);
    }
  });

  return (
    <div
      ref={refLast}
      className=" relative md:pt-28"
      style={{ zIndex: "2", backgroundColor: "rgb(250,250,250)" }}
    >
      <svg
        className="svg"
        version="1.1"
        id="arrow4"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="1200"
        height="1200"
        viewBox="0 0 1200 1200"
      >
        <motion.path
          id="arrowFour"
          animate={
            scrolled
              ? { strokeDashoffset: 0 }
              : { strokeDashoffset: 639.8660888671875 }
          }
          transition={{ duration: 1, ease: "easeInOut" }}
          className="dashed"
          strokeDasharray="639.8660888671875"
          // strokeDashoffset="0"

          d="M737.2,607.8c-18,31.7-41.3,62.6-72.4,92.5c-101.4,97.3-532.6,12.5-446.8,145"
        />
        <path
          className="plain"
          d="M737.2,607.8c-18,31.7-41.3,62.6-72.4,92.5c-101.4,97.3-532.6,12.5-446.8,145"
        />
        {/* <g>
                    <polygon className="st1" points="206.8,861.3 238.6,884.4 239.1,841.9 225.1,857.4 	"/>
                    <polygon className="st1" points="238.6,884.4 225.1,857.4 206.8,861.3 	"/>
                </g> */}
      </svg>
      <div className="h-100 hidden md:flex justify-center consultationDiv relative ">
        <div
          className="innerDiv text-center text-blue-primary tracking-wide mb-5 absolute"
          style={{ zIndex: "4" }}
        >
          <p className="smallHeading">
            Is digital important for your business?
          </p>
          <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold my-3 mb-10">
            Build it with Astute Softwares
          </h3>
          <Link
            to="/contact-us"
            className=" px-8 py-4 border-2  border-green-primary bg-green-primary rounded-2xl text-white  font-bold my-5 cursor-pointer"
          >
            Book free Consultation
          </Link>
        </div>
        {/* <div className=" absolute flex justify-end w-full right-20" style={{bottom:0 }}> */}
        <img
          loading="lazy"
          className="absolute aiIcon"
          alt="AI Pattern"
          src="/Images/LandingPageImage/AI Pattern-webp.webp"
          style={{}}
        />
        {/* </div> */}
      </div>

      <div className="py-10 h-96 block md:hidden relative">
        <div className="text-center">
          <p className="smallHeading">
            Is software important for your business?
          </p>
          <h3 className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-extrabold my-2 text-blue-primary">
            Build it with Astute Softwares
          </h3>
          <div className="mt-10">
            <Link
              to="/contact-us"
              className="px-5 py-4 border-2 border-green-primary bg-green-primary rounded-2xl text-white  font-bold cursor-pointer"
            >
              Book free Consultation
            </Link>
          </div>
        </div>
        <img
          loading="lazy"
          className=" absolute bottom-0 left-1/3 w-full"
          alt="AI Pattern-resized"
          src="/Images/LandingPageImage/AI Pattern-resized-webp.webp"
          style={{ zIndex: "-1" }}
        />
      </div>

      {/* <div className="h-screen relative">
            
            <img loading="lazy" className="" src="/Images/LandingPageImage/waves-pattern-animation.gif" />
            
            <div className="text-center text-blue-primary tracking-wide mb-5 bg-contain w-full h-full consultationInnerDiv  py-20">
                <p className="text-xl md:text-2xl 2xl:text-3xl font-medium my-3">Is software important for your business?</p>
                <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-extrabold my-3 mb-10">Build it with Astute Softwares</h3>
                <Link to="/contact-us" className=" px-8 py-4 border-2 border-green-primary bg-green-primary rounded-2xl text-white  font-bold my-5">
                    Book free Consultation
                </Link>
            </div>
            
            <img loading="lazy" className="absolute" src="/Images/LandingPageImage/AI Pattern-webp.webp" style={{width:"500px",right:"", top:""}} />
            
        </div> */}
    </div>
  );
};

export default Consultation;
