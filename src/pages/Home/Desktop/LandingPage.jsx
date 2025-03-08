// import "./homePageStyles.css";
import React, { useRef, useState } from "react";
// import Button from "../../../components/Button";
import LandingAnimation from "./LandingAnimation";
import { BsDot } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/swiper-react.cjs.js';
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  Virtual,
  EffectFade,
} from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import { AnimatePresence } from "framer-motion";
import Tablet from "./LandingSection/Tablet";
import Mobile from './LandingSection/Mobile'
import { OUR_SERVICES_HASH_LINK } from "../../../constants";

const MainPageContent = () => {
  // const sliderRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  // const [activeIndex, setActiveIndex] = useState(0);

  SwiperCore.use([
    Scrollbar,
    Navigation,
    Autoplay,
    Virtual,
    Pagination,
    EffectFade,
  ]);

  const handleSlideChange = () => {
    setCurrentSlide((old) => {
      let copy = old + 1;
      if (copy === 4) {
        // setActiveIndex(0);
        return 0;
      } else {
        // setActiveIndex(copy);
        return copy;
      }
    });
  };

  return (
    <div className="relative">
      {/* <LandingAnimation
        lightHeading=" Product Development &"
        boldHeading="Software Consultancy"
        link="/services"
        img="/Images/landing-page/rounded-corner-webp.webp"
        /> */}

      {/* slider for desktop */}
      <Swiper
        // install Swiper modules
        spaceBetween={0}
        slidesPerView={2}
        allowTouchMove={false}
        autoplay={{
          delay: 5000,
          duration: 400,
          // disableOnInteraction: false,
        }}
        slideToClickedSlide
        effect="fade"
        className=" w-full hidden lg:block "
        onSlideChange={(e) => handleSlideChange(e)}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          {({ isActive }) => (
            <AnimatePresence exitBeforeEnter>
              <LandingAnimation
                lightHeading=" Product Development &"
                boldHeading="Software Consultancy"
                link={"/services" + OUR_SERVICES_HASH_LINK}
                img="/Images/landing-page/rounded-corner-webp.webp"
                isActive={isActive}
                detailLine="for CTOs and Tech Managers"
              />
            </AnimatePresence>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <AnimatePresence exitBeforeEnter>
              <LandingAnimation
                lightHeading="Create your Own"
                boldHeading="Immersive Experience"
                link="/metaverse"
                // img="/Images/landing-page/meta-webp.webp"
                img="/Images/landing-page/meta-webp.webp"
                makeRound={true}
                isActive={isActive}
                metaImg={true}
                detailLine="for Marketing agencies and corporates"
              />
            </AnimatePresence>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <AnimatePresence exitBeforeEnter>
              <LandingAnimation
                lightHeading="Increase conversion rate"
                boldHeading="with 3D models"
                link="/3d-modelling"
                img="/Images/landing-page/3d-modeling-webp.webp"
                makeRound={true}
                isActive={isActive}
                threedImage={true}
                detailLine="for key Decision Makers"
              />
            </AnimatePresence>
          )}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => (
            <AnimatePresence exitBeforeEnter>
              <LandingAnimation
                lightHeading=" Product Development &"
                boldHeading="QA Testing"
                link="services/software-quality-assurance"
                img="/Images/landing-page/qa-testing1-webp.webp"
                isActive={isActive}
                detailLine="for Quality Assurance heads"
              />
            </AnimatePresence>
          )}
        </SwiperSlide>

        <div className=" hidden lg:block flex flex-col items-center absolute top-1/2 right-0 z-50">
          <div>
            <BsDot
              className={`text-4xl ${
                currentSlide === 0 ? "text-green-500" : "text-white"
              } `}
            />
          </div>
          <div>
            <BsDot
              className={`text-4xl ${
                currentSlide === 1 ? "text-green-500" : "text-white"
              } `}
            />
          </div>
          <div>
            <BsDot
              className={`text-4xl ${
                currentSlide === 2 ? "text-green-500" : "text-white"
              } `}
            />
          </div>
          <div>
            <BsDot
              className={`text-4xl ${
                currentSlide === 3 ? "text-green-500" : "text-white"
              } `}
            />
          </div>
        </div>
      </Swiper>
      {/* slider for desktop */}

      {/* slider for tablet */}
      <div className="hidden md:block lg:hidden">
        <Tablet />
      </div>
      {/* slider for tablet */}

      {/* slider for mobile */}
      <div className="block md:hidden md:pt-10">
        <Mobile />
      </div>
      {/* slider for mobile */}
    </div>
  );
};

export default MainPageContent;
