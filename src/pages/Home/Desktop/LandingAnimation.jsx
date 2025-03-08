import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./landingPageStyle.css";

const LandingAnimation = ({
  lightHeading,
  boldHeading,
  link,
  img,
  makeRound,
  isActive,
  metaImg,
  threedImage,
  detailLine,
}) => {
  const [rendered, setRendered] = useState(false)

  useEffect(()=>{
    setRendered(true)
  },[])
  // const headingStyles = "lg:py-3 lg:bg-white text-lg sm:text-2xl md:text-4xl xl:text-5xl text-blue-primary"
  const headingStyles =
    "lg:py-3 lg:bg-white text-lg sm:text-2xl md:text-4xl xl:text-5xl text-blue-primary";

  return (
    <div className="pb-8 relative hidden md:h-screen lg:grid grid-cols-1 lg:grid-cols-3">
      {/* text block */}
      <div className="order-2 lg:order-1 col-span-1 flex flex-col items-center lg:items-start relative z-10">
        <motion.div
          initial={{ marginTop: "5.5rem" }}
          animate={{ marginTop: "3.5rem" }}
          transition={{ duration: 2 }}
          className={`p-5 lg:p-0 text-center lg:text-left bg-white bg-opacity-80 md:bg-opacity-100 lg:bg-transparent absolute bottom-28 lg:top-1/4 ${
            metaImg
              ? "lg:-right-32"
              : threedImage
              ? "lg:-right-40 xl:-right-56 "
              : "lg:-right-40 xl:-right-48"
          }      } ${isActive ? "block" : "hidden"}  `}
        >
          {/* // className={`p-5 lg:p-0 text-center lg:text-left bg-white bg-opacity-80 md:bg-opacity-100 lg:bg-transparent absolute bottom-28 lg:top-1/4 -right-30 xl:-right-20  ${ isActive?"block":"hidden" }  `}> */}
          <motion.h1
            initial={{ opacity: 0, translateY: "-2.5rem", translateX: "5rem" }}
            animate={{ opacity: 1, translateY: "1rem", translateX: 0 }}
            transition={{ duration: 1 }}
            // exit={{marginBottom:'0'}}
            className={`${headingStyles} capitalize font-medium lg:pr-20 `}
          >
            {lightHeading}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, translateY: "-2.5rem", translateX: "3rem" }}
            animate={{ opacity: 1, translateY: "1rem", translateX: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className={`${headingStyles} font-extrabold lg:mr-10  `}
          >
            {boldHeading}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className={`mt-8 flex flex-col  ${
              metaImg
                ? "lg:flex-col xl:flex-row xl:items-center items-start  "
                : "lg:flex-row items-center"
            }  text-gray-text text-lg py-4`}
          >
            <div
              className={`w-10 border-b-2 border-green-primary ${
                metaImg ? "lg:mr-0 xl:mr-8  " : "mr-8"
              }  `}
            />
            {detailLine}
            {/* for CTOs and Tech Managers */}
          </motion.p>

          {
            rendered &&
              <motion.div
                initial={{ borderRadius: 0 }}
                animate={{ borderRadius: "100%" }}
                className="w-full flex justify-center lg:justify-start my-5"
              >
                <Link
                  to={link}
                  className=" border-2 border-green-primary hover:bg-green-primary hover:text-white rounded-full text-green-primary"
                >
                  <motion.p
                    initial={{ opacity: 0, translateX: 100 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    className="text-base lg:text-lg font-medium px-5 md:px-8 py-2"
                  >
                    Discover more
                  </motion.p>
                </Link>
              </motion.div>
          }
          {/* <Button text="Read More" link="/services" /> */}
        </motion.div>
      </div>

      {/* image block */}
      <div
        className={`order-1 relative lg:order-2 col-span-2 h-70 lg:h-full bg-cover bg-no-repeat`}
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "right",
          backgroundPositionX: "30%",
          borderBottomLeftRadius: "60px",
          // backgroundPositionY:"20%"
        }}
      >
        {/* <img className='' style={{ width:'100%' , heigth:"100%" }} src={img}  /> */}
        <img
          alt="dots"
          src="/Images/landing-page/dots(2)-webp.webp"
          className="imgAnimation"
          style={{ zIndex: "-1" }}
        />
      </div>
    </div>
  );
};

export default LandingAnimation;
