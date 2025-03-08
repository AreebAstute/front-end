import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className=" py-12 2xl:py-20">
      <div className="lg:w-10/12 mx-auto 2xl:flex">
        <div className="2xl:w-1/3 md:mr-5">
          <h2 className="text-3xl md:text-4xl 2xl:text-5xl text-center text-blue-primary  font-bold py-3 2xl:text-right">
            {/* <h2 className="text-blue-primary leading-tight text-2xl md:text-4xl 2xl:text-6xl font-extrabold text-center lg:text-right"> */}
            Unique Features <br /> of the ViewAR System
          </h2>
          <div className="flex justify-center 2xl:justify-end">
            <div className="w-28  mt-5 border-green-primary border-b-2" />
          </div>
        </div>
        <div className=" 2xl:w-2/3  mx-5 md:mx-auto gap-y-8 grid grid-cols-1 md:grid-cols-3 mt-16 2xl:mt-0 lg:ml-5">
          <FeatureCard
            alt="multi-platform"
            img="/Images/AR-assets/multi-platform-webp.webp"
            title="Multi Platform Support"
            desc="Apps created with our system run on iOS or 
                Android devices using the same codebase and styling. 
                This drastically lowers app development effort, cost, and time."
          />
          <FeatureCard
            alt="css"
            img="/Images/AR-assets/css-webp.webp"
            title="Style with CSS"
            desc="Since our templates are HMTL-based, you can utilize all 
                the features and the flexibility of CSS to style your app. 
                This way we make sure that your AR Application is WebAR ready. "
          />
          <FeatureCard
            alt="web-browser"
            img="/Images/AR-assets/web-browser-webp.webp"
            title="Web-Browser Support"
            desc="Since our templates are HMTL-based, you can utilize all 
                the features and the flexibility of CSS to style your app. 
                This way we make sure that your AR Application is WebAR ready."
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
