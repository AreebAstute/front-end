import React, { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/swiper-react.cjs.js';
// Import Swiper styles
import "swiper/swiper-bundle.css";
import { AnimatePresence } from "framer-motion";
import Button from "../../../../components/Button";
import { OUR_SERVICES_HASH_LINK } from "../../../../constants";

const headingStyles =
  "lg:py-3 lg:bg-white text-lg sm:text-2xl md:text-4xl xl:text-5xl text-blue-primary";

const Mobile = () => {
  const [slideForMobile, setSlideForMobile] = useState(0);
    const [rendered, setRendered] = useState(false)
  
    useEffect(()=>{
      setRendered(true)
    },[])

  const handleSlideChangeForMobile = (e) => {
    console.log("e.realIndex", e.realIndex);
    setSlideForMobile((old) => {
      let copy = old + 1;
      if (copy === 4) {
        return 0;
      } else {
        return copy;
      }
    });
  };

  return (
    <>
      <Swiper
        // install Swiper modules
        spaceBetween={0}
        slidesPerView={2}
        allowTouchMove={false}
        autoplay={{
          delay: 3000,
          duration: 400,
          disableOnInteraction: false,
        }}
        slideToClickedSlide
        effect="fade"
        className=" w-full "
        onSlideChange={(e) => handleSlideChangeForMobile(e)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <AnimatePresence exitBeforeEnter>
              <LandingAnimationForMobile
                isActive={isActive}
                lightHeading="Product Development &"
                boldHeading="Software Consultancy"
                link={"/services" + OUR_SERVICES_HASH_LINK}
                img="/Images/landing-page/1st-webp.webp"
                detailLine="for CTOs and Tech Managers"
              />
            </AnimatePresence>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <AnimatePresence exitBeforeEnter>
              <LandingAnimationForMobile
                isActive={isActive}
                lightHeading="Create your Own"
                boldHeading="Immersive Experience"
                img="/Images/landing-page/2nd-webp.webp"
                link="/metaverse"
                detailLine="for Marketing agencies and corporates"
              />
            </AnimatePresence>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <AnimatePresence exitBeforeEnter>
              <LandingAnimationForMobile
                isActive={isActive}
                lightHeading="Increase conversion rate"
                boldHeading="with 3D models"
                link="/3d-modelling"
                img="/Images/landing-page/3rd-webp.webp"
                detailLine="for key Decision Makers"
              />
            </AnimatePresence>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <AnimatePresence exitBeforeEnter>
              <LandingAnimationForMobile
                isActive={isActive}
                lightHeading=" Product Development &"
                boldHeading="QA Testing"
                link="services/software-quality-assurance"
                img="/Images/landing-page/4th-webp.webp"
                detailLine="for Quality Assurance heads"
              />
            </AnimatePresence>
          )}
        </SwiperSlide>
      </Swiper>
      <div className="flex flex-row md:flex-col justify-center items-center absolute w-full md:w-auto z-50 md:top-1/2 md:right-0 ">
        <div>
          <BsDot
            className={`text-lg sm:text-4xl ${
              slideForMobile === 0
                ? "text-green-500"
                : "text-gray-400  md:text-white  "
            } `}
          />
        </div>
        <div>
          <BsDot
            className={`text-lg sm:text-4xl ${
              slideForMobile === 1
                ? "text-green-500"
                : "text-gray-400  md:text-white  "
            } `}
          />
        </div>
        <div>
          <BsDot
            className={`text-lg sm:text-4xl ${
              slideForMobile === 2
                ? "text-green-500"
                : "text-gray-400  md:text-white  "
            } `}
          />
        </div>
        <div>
          <BsDot
            className={`text-lg sm:text-4xl ${
              slideForMobile === 3
                ? "text-green-500"
                : "text-gray-400  md:text-white  "
            } `}
          />
        </div>
      </div>
    </>
  );
};

export default Mobile;

const LandingAnimationForMobile = ({
  lightHeading,
  boldHeading,
  link,
  img,
  isActive,
  detailLine,
}) => {
  return (
    <>
      <div
        className=" bg-cover bg-no-repeat h-70 relative  "
        style={{ backgroundImage: `url(${img})` }}
      />
      <div>
        <LandingSectionContent
          lightHeading={lightHeading}
          boldHeading={boldHeading}
          link={link}
          isActive={isActive}
          detailLine={detailLine}
        />
      </div>
    </>
  );
};

const LandingSectionContent = ({
  headingStyles,
  lightHeading,
  boldHeading,
  link,
  isActive,
  detailLine,
}) => {
  const [rendered, setRendered] = useState(false)

  useEffect(()=>{
    setRendered(true)
  },[])
  return (
    <>
      <div
        className={`flex flex-col items-center  ${
          isActive ? "block" : "hidden"
        }  `}
      >
        <div className=" w-4/5 mx-auto p-5 text-center lg:text-left  bg-white absolute md:-bottom-10 -bottom-8">
          <h3 className={`${headingStyles} font-medium `}>{lightHeading}</h3>

          <p className={`${headingStyles} font-extrabold  `}>{boldHeading}</p>

          <p className="flex flex-col gap-4 lg:flex-row items-center text-gray-text text-lg pt-4">
            <div className=" w-10 border-b-2 border-green-primary mx-auto"></div>
            {detailLine}
          </p>
          {
            rendered &&
              <Button text="Discover more" link={link} />
          }
        </div>
      </div>
    </>
  );
};
