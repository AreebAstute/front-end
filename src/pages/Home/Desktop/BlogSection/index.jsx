import React from "react";
import Card from "./Card";
import { BsArrowRight } from "react-icons/bs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

const BlogSection = () => {
  return (
    <div className="top-padding  " style={{ paddingBottom: "8%" }}>
      <div
        className="  sm:px-10 bg-no-repeat bg-right-top relative rightPatternSize "
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/right_pattern-webp.webp')",
        }}
      >
        <div className="text-center">
          <h1 className="smallHeading ">Our Latest Case Studies</h1>
          <p className="text-lg tracking-wider text-gray-text my-2 headin1">
            Join a community of tech-savvy enthusiasts and stay ahead of the
            curve with Astute Software's cutting-edge blog series!"
          </p>
        </div>

        <div className=" flex flex-col items-center justify-center xl:mx-32   mt-16  ">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3  2xl:grid-cols-4  gap-12  relative">
            <Card />
            <Card />
            <Card />
            <Card />

            <span className="hidden lg:block md:absolute md:-bottom-16 right-0 ">
              <p className=" transition transform ease-in-out duration-500  space-x-2 bg-green-primary  text-white px-5 rounded-full py-2 inline-flex items-center cursor-pointer">
                <p className="text-lg">All Cases</p>{" "}
                <span>
                  <BsArrowRight className="text-2xl" />
                </span>
              </p>
            </span>
          </div>
          <span className="block lg:hidden ">
            <p className=" mt-8 bg-green-primary text-white px-5 rounded-full py-2 right-0  inline-flex items-center space-x-2 cursor-pointer">
              <p className="text-xl">All Cases</p>{" "}
              <span>
                <BsArrowRight className="text-2xl" />
              </span>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
