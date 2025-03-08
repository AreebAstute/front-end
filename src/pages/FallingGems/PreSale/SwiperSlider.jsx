import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar,Autoplay, Virtual } from 'swiper';
// Import Swiper styles
import 'swiper/swiper-bundle.css';

import BucketCart from '../../../components/BucketCart';


const SwiperSlider = () => {
    SwiperCore.use([Scrollbar, Navigation, Autoplay, Virtual,Pagination ]);
  return <Swiper
        // spaceBetween={50}
        slidesPerView={5}
        navigation
        // pagination={{ clickable: true }}
        // observer = {true}
        // observeParents = {true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
            
            1024: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            520: {
                slidesPerView: 2
            },
            320: {
                slidesPerView: 1
            },
        }}
        >
            <SwiperSlide>
                <BucketCart 
                img="/Images/falling-gems/bucket2-webp.webp"
                heading="40"
                text="ump-start your project and get to the finish line faster with an ever"
                />
            </SwiperSlide>
            <SwiperSlide>
                <BucketCart 
                img="/Images/falling-gems/bucket3-webp.webp"
                heading="80"
                text="ump-start your project and get to the finish line faster with an ever"
                />
            </SwiperSlide>
            <SwiperSlide>
                <BucketCart 
                img="/Images/falling-gems/bucket4-webp.webp"
                heading="120"
                text="ump-start your project and get to the finish line faster with an ever"
                />
            </SwiperSlide>
            <SwiperSlide>
                <BucketCart 
                img="/Images/falling-gems/bucket5-webp.webp"
                heading="160"
                text="ump-start your project and get to the finish line faster with an ever"
                />
            </SwiperSlide>
            <SwiperSlide>
                <BucketCart 
                img="/Images/falling-gems/bucket6-webp.webp"
                heading="200"
                text="ump-start your project and get to the finish line faster with an ever"
                />
            </SwiperSlide>
            <SwiperSlide>
                <BucketCart 
                img="/Images/falling-gems/bucket7-webp.webp"
                heading="240"
                text="ump-start your project and get to the finish line faster with an ever"
                />
            </SwiperSlide>
        </Swiper>
        
};

export default SwiperSlider;
