import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";

import "../Home/Desktop/homePageStyles.css";
import "../DetailServicePages/DetailServicePageStyles.css";

const CouponPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const intl = useIntl();

  useEffect(() => {
    const p = document.getElementById("couponPath");
    setScrolled(true);
    return () => {
      setScrolled(false);
    };
  }, []);

  return (
    <>
      <Helmet>
        {/* Helmet-general-tags */}
        <title>
          {intl.formatMessage({
            id: "coupon.astute.softwares",
            defaultMessage: "Coupons - Astute Softwares",
          })}
        </title>
        <meta
          name="description"
          content={intl.formatMessage({
            id: "save.big.with",
            defaultMessage:
              "Save big with our exclusive coupons! Astute Softwares offers a wide range of discounts on products and services. Visit our website today to see how much you can save!",
          })}
        />
        <meta
          name="keywords"
          content="Exclusive software deals, IT service discounts, Promo codes for services, Software coupon offers, Discounted tech solutions"
        />
        <link rel="canonical" href="https://astutesoftwares.com/careers" />

        {/* OG Tags */}
        <meta
          property="og:title"
          content={intl.formatMessage({
            id: "coupon.astute.softwares",
            defaultMessage: "Coupons - Astute Softwares",
          })}
          data-react-helmet="true"
        />
        <meta
          property="og:description"
          content={intl.formatMessage({
            id: "save.big.with",
            defaultMessage:
              "Save big with our exclusive coupons! Astute Softwares offers a wide range of discounts on products and services. Visit our website today to see how much you can save!",
          })}
          data-react-helmet="true"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://astutesoftwares.com/careers" />

        {/* Meta-referrer-tag */}
        <meta name="referrer" content="origin-when-crossorigin" />
      </Helmet>

      <div
        className="h-full flex flex-col pt-20 bg-bottom bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(/Images/coupon-page/backgorund-pattern-webp.webp)",
        }}
      >
        <svg
          className="svg"
          style={{ zIndex: "-1" }}
          version="1.1"
          id="arrow6"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="200 -200 1200 1200"
        >
          <motion.path
            animate={
              scrolled
                ? { strokeDashoffset: 5410.134765625 }
                : { strokeDashoffset: 2705.0673828125 }
            }
            transition={{ duration: 3, ease: "easeInOut" }}
            className="dashed"
            strokeDasharray="2705.0673828125"
            id="couponPath"
            d="M578.2,283.5c0,0,7.7,0.9,113.4,40.6s135.8-0.9,188.5-28.2c57-29.6,125.9-29.6,125.9-29.6
        c79.7,3.6,175,86.3,191.9,194.9c11.6,75.1-24.7,158.8-77.5,202.8c-88,73.4-165.1-10.9-331,27.8C659.9,721.9,532.6,814,540.6,858.3
        c8.1,45.1,160.2,64.1,180.7,16.7c10.8-24.9-15.2-67-30.5-86.1c-24.8-30.8-57.8-42.5-91.5-52.8C327,716.7,92.3,794.5-11,947.2"
          />
          {/* <polygon 
        className="st1 polygonAnimate" 
        points="563.4,276.8 584.2,248 526.4,264.5 565.9,313.4 "
        /> */}
          <path
            className="plain"
            id="myPath"
            d="M578.2,283.5c0,0,7.7,0.9,113.4,40.6s135.8-0.9,188.5-28.2c57-29.6,125.9-29.6,125.9-29.6
        c79.7,3.6,175,86.3,191.9,194.9c11.6,75.1-24.7,158.8-77.5,202.8c-88,73.4-165.1-10.9-331,27.8C659.9,721.9,532.6,814,540.6,858.3
        c8.1,45.1,160.2,64.1,180.7,16.7c10.8-24.9-15.2-67-30.5-86.1c-24.8-30.8-57.8-42.5-91.5-52.8C327,716.7,92.3,794.5-11,947.2"
          />
        </svg>

        <div className="w-full flex justify-between  items-center flex-col mt-10  ">
          <div className="mt-10 text-center w-full md:w-3/6 mb-20 px-5">
            <h1 className="text-xl md:text-5xl text-blue-primary font-bold pt-2 pb-4">
              Coupon Page
            </h1>
            <p className="text-blue-primary font-medium mb-3 md:mb-10">
              Over the years,we have worked with Fortune 500s and brand-new
              startups.
            </p>
          </div>
          <div className="flex justify-center relative mt-40 ">
            <img
              // id="stars"
              loading="lazy"
              alt="confetti"
              className=" absolute -top-60 z-10 animate-pulse"
              src="/Images/coupon-page/confetti-webp.webp"
            ></img>

            <img
              id="couponImg"
              loading="lazy"
              alt="coupon image"
              className="transform w-9/12 md:w-8/12 absolute bottom-32 md:bottom-48 left-18"
              src="/Images/coupon-page/coupon image-webp.webp"
            ></img>

            <img
              loading="lazy"
              alt="qr-code"
              className="w-8/12 md:w-7/12"
              src="/Images/coupon-page/qr-code-webp.webp"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponPage;
