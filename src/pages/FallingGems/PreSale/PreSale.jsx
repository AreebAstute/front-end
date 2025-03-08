import React from 'react';
import SwiperSlider from './SwiperSlider';

const PreSale = () => {
  return <div className="-mt-40" style={{zIndex:"-10"}}>
      <div className="pt-32 pb-10"  style={{backgroundImage:'url(/Images/falling-gems/background-webp.webp)'}}>
        <h2 className="text-white font-bold text-2xl lg:text-3xl text-center">BUCKET STORE</h2>
        <p className="text-white text-xl md:text-2xl text-center">Get as many buckets as you want. </p>
      </div>
      <div className="max-w-full py-16 mt-5" style={{backgroundImage:('url(/Images/falling-gems/background-webp.webp)')}}>
        <div className="relative px-5 w-full overflow-hidden">
          <SwiperSlider />
        </div>
          {/* <div className="flex flex-nowrap overflow-scroll">
            <BucketCart 
            img="/Images/falling-gems/bucket2-webp.webp"
            heading="40"
            text="ump-start your project and get to the finish line faster with an ever"
            />
            <BucketCart 
            img="/Images/falling-gems/bucket3-webp.webp"
            heading="80"
            text="ump-start your project and get to the finish line faster with an ever"
            />
            <BucketCart 
            img="/Images/falling-gems/bucket4-webp.webp"
            heading="120"
            text="ump-start your project and get to the finish line faster with an ever"
            />
            <BucketCart 
            img="/Images/falling-gems/bucket5-webp.webp"
            heading="160"
            text="ump-start your project and get to the finish line faster with an ever"
            />
            <BucketCart 
            img="/Images/falling-gems/bucket6-webp.webp"
            heading="200"
            text="ump-start your project and get to the finish line faster with an ever"
            />
            <BucketCart 
            img="/Images/falling-gems/bucket7-webp.webp"
            heading="240"
            text="ump-start your project and get to the finish line faster with an ever"
            />
          </div> */}
      </div>

  </div>;
};

export default PreSale;
