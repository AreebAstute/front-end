import React, { useEffect, useState } from 'react'
import LandingSection from './LandingSection';
import PlantSection from './PlantSection';
import RobotModel from './RobotModel';
import BottlesSection from './BottlesModel';
import BagSection from './HandBagModel';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import SwiperCore, { Scrollbar, Mousewheel, EffectFade, Navigation, Autoplay, Virtual } from 'swiper';
import 'swiper/components/scrollbar/scrollbar.scss';
// import 'swiper/components/effect-fade/effect-fade.scss';
import ConsultancySection from '../consultancy-section'

// install Swiper modules
SwiperCore.use([Scrollbar, Mousewheel, EffectFade, Navigation, Autoplay, Virtual]);

const ModelPage = () => {


  return (

    <div id='models_wrapper' className='pt-28 relative bg-cover bg-no-repeat min-h-screen '>
      {/* <Swiper
        direction={'vertical'}
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        speed={700}
        // grabCursor={true}
        followFinger={false}
        preventInteractionOnTransition={true}
        preventClicks={true}
        // effect='flip'
        onSlideChange={(e) =>console.log("e",e)}
        className="mySwiper">

        <SwiperSlide>
          <LandingSection />
        </SwiperSlide>


        <SwiperSlide>
          <PlantSection />
        </SwiperSlide>


        <SwiperSlide>
          <BagSection />
        </SwiperSlide>


        <SwiperSlide>
          <RobotModel />
        </SwiperSlide>

        <SwiperSlide>
          <BottlesSection />
        </SwiperSlide>


        <SwiperSlide>
          <ConsultancySection/>
        </SwiperSlide>


        



      </Swiper> */}


      <LandingSection />
      <PlantSection />
      <BagSection />
      <RobotModel />
      <BottlesSection />



    </div>
  )
}

export default ModelPage