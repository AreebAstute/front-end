import React from "react";
import IndustryCard from "./IndustryCard";

const ThirdSection = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-left-top mt-20 pt-10 md:mt-0 md:pt-32 pb-20 leftPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        {/* Text section */}
        <div className="flex flex-col items-center text-blue-primary w-5/6 lg:w-3/5 text-center mx-auto">
          <p className=" font-normal text-xl lg:text-2xl">
            <div
              className="font-medium bg-no-repeat bg-contain bg-center inline-block py-3"
              style={{
                backgroundImage: "url(/Images/serviceDetails/title-bg-webp.webp)",
              }}
            >
              Technology
            </div>
          </p>
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-8 capitalize">
            Industries We work with
          </h2>

          <p className="font-normal text-lg ">
            Astute Softwares' Big Data Development Services are designed to
            satisfy unique clients’business objectives and budgets with
            customized oferings. Our skiled teams of Data Scientists, ML
            engineers, BigData developers and QA specialists work with
            innovative startups and large enterprises helping them get the most
            out of their data investment, extract business value from data,
            optimize business processes, gain consumer insights, and predict
            sales.
          </p>
        </div>

        {/* Text section */}
        <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 mt-20 w-5/6 2xl:w-3/5 gap-12 mx-auto ">
          <IndustryCard
            title="Digital health"
            img="/Images/serviceDetails/DIGITAL-HEALTH-webp.webp"
          />
          <IndustryCard
            title="Financial services"
            img="/Images/serviceDetails/FINANCIALSERVICE-webp.webp"
          />
          <IndustryCard title="Retail" img="/Images/serviceDetails/RETAI-webp.webp" />
          <IndustryCard
            title="Education"
            img="/Images/serviceDetails/Educatio-webp.webp"
          />
          <IndustryCard
            title="ADTECH & MARKETING"
            img="/Images/serviceDetails/ADTECH&MARKETING-webp.webp"
          />
          <IndustryCard title="IOT" img="/Images/serviceDetails/IOT-webp.webp" />
          <IndustryCard
            title="Publishing"
            img="/Images/serviceDetails/PUBLISHING-webp.webp"
          />
          <IndustryCard
            title="Non-profit"
            img="/Images/serviceDetails/NON-PROFIT-webp.webp"
          />
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
