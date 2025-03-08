import React from "react";

const ModernDevelopment = () => {
  const p2 =
    "font-normal text-base md:text-lg xl:text-xl text-center lg:text-left px-3 lg:px-0";
  return (
    <div
      className="bg-no-repeat bg-right-top py-0 md:py-10 lg:py-32 rightPatternSize"
      style={{
        backgroundImage:
          "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2  ">
        <div className="order-1 lg:order-2 flex flex-col items-center lg:items-start justify-center text-blue-primary space-y-3 px-5 md:px-0 md:w-4/5 mx-auto">
          <p className="font-bold text-lg">Technology</p>
          <h2 className="sub-heading">Modern JS development with Angular</h2>
          <p className={p2}>
            Turn your ideas into high-performance and scalable apps with
            experienced “What if we had a robust and complete front-end solution
            for making high-performance and supremely scalable
            applications?".That is probably what developers at Google thought
            when they devised DjangoJS. Nearly a decade (and a complete rewrite
            in 2016)later, Django its a top of frontend frameworks. Why is that?
          </p>
          <br />
          <p className={p2}>
            Turn your ideas into high-performance and scalable apps with
            experienced “What if we had a robust and complete front-end solution
            for making high-performance and supremely scalable
            applications?".That is probably what developers at Google thought
            when they devised DjangoJS. Nearly a decade (and a complete rewrite
            in 2016)later, Django its a top of frontend frameworks. Why is that?
          </p>
        </div>
        <div className=" order-2 lg:order-1 bg-cover px-5 py-10 flex justify-center items-center">
          <img
            loading="lazy"
            className="w-4/5 md:w-3/6 lg:w-4/5"
            alt="modern-js-development"
            src="/Images/technologies/modern-js-development-webp.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default ModernDevelopment;
