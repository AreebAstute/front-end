import React from "react";

const WhyUs = () => {
  return (
    <div
      className="bg-cover py-20 flex justify-center items-center"
      style={{
        backgroundImage: "url(/Images/careers/why-astute-softwares-bg-webp.webp)",
      }}
    >
      <div
        className="bg-no-repeat bg-cover bg-center px-5 py-10 md:p-20 w-full lg:w-1/2 md:mx-10 lg:mr-0  lg:ml-80 rounded-xl text-center lg:text-left bg-opacity-75"
        style={{
          backgroundImage: "url(/Images/careers/why-astute-softwares-webp.webp)",
        }}
      >
        <h1 className="text-blue-primary text-3xl lg:text-4xl font-bold mb-5">
          Why Astute Softwares
        </h1>
        <p className="text-blue-primary font-normal text-sm md:text-lg">
          AS is one of the fastest growing software services companies in
          Pakistan. We have managed to rapidly build and grow a world class team
          of engineers ready to take on diverse and challenging technology
          development projects. Astute softwares provides competitive salaries
          and great benefits. If you want to broaden your technical skills,
          building software that afects users around the world and working in an
          environment that thrives on creativity and product innovation,then be
          a part of our team and grow with us. Astute Softwares will give you
          the opportunity to develop further and fulfil your true potential.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
