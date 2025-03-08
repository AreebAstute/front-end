import React from "react";
import LanguageCard from "./LanguageCard";

const FrontEndLanguages = () => {
  return (
    <div className="">
      <div
        className=" py-10 bg-no-repeat bg-left-top rightPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        <h2 className="text-center text-blue-primary text-xl md:text-3xl w-4/5 2xl:w-3/5 mx-auto lg:text-4xl font-bold ">
          Our Front-end, UX and UI Design and Development Services Help Clients
          Leverage the Benefits of the Latest Technologies
        </h2>
        <div className="my-10 md:my-20">
          <div className="flex flex-col md:flex-row items-center md:justify-between my-10 mx-8  md:w-3/5 2xl:w-2/5 md:mx-auto">
            <LanguageCard
              img="/Images/serviceDetails/languages_icons/html5.svg"
              text="HTML 5"
            />

            <LanguageCard
              img="/Images/serviceDetails/languages_icons/css3.svg"
              text="CSS 3"
            />

            <LanguageCard
              img="/Images/serviceDetails/languages_icons/javascript.svg"
              text="JAVASCRIPT"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between lg:w-4/5 2xl:w-3/5 mx-auto my-10">
            <LanguageCard
              img="/Images/serviceDetails/languages_icons/angular.svg"
              text="ANGULAR.JS"
            />
            <LanguageCard
              img="/Images/serviceDetails/languages_icons/node.svg"
              text="NODE.JS"
            />
            <LanguageCard
              img="/Images/serviceDetails/languages_icons/bootstrap.svg"
              text="BOOTSTRAP"
            />
            <LanguageCard
              img="/Images/serviceDetails/languages_icons/backbone.svg"
              text="BACKBONE.JS"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-baseline w-4/5 lg:w-3/5 2xl:w-2/5 mx-auto my-10">
            <LanguageCard
              img="/Images/serviceDetails/languages_icons/ember.svg"
              text="EMBER.JS"
            />
            <LanguageCard
              img="/Images/serviceDetails/languages_icons/sass.svg"
              text="SASS"
            />
            <LanguageCard
              img="/Images/serviceDetails/languages_icons/less.svg"
              text="LESS"
            />
            <LanguageCard
              img="/Images/serviceDetails/languages_icons/jquery.svg"
              text="JQUERY"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndLanguages;
