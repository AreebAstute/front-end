import React from "react";

import StatsSection from "../StatsSection";
// const StatsSection = React.lazy(() => import("../StatsSection"));


function HeroSection() {
  return (
    <section id="hero" className="mt-10 lg:mt-40 pt-16">
      <div className="relative">
        <img
          loading="lazy"
          alt="pattern"
          className="absolute top-0 right-0 transform lg:translate-x-1/4 lg:-translate-y-24 w-full z-0 select-none hidden lg:inline"
          src="/Images/landing-page-assets/Group 53-webp.webp"
        />
      </div>

      <div className="w-11/12 mx-auto text-center px-10 text-4xl z-20">
        <div className="inline-block text-blue-primary text-center text-3xl font-extrabold lg:text-5xl leading-15 lg:leading-normal z-20">
          Astute Softwares: Where Every Byte
          {" "}
          <br className="hidden lg:inline-block" /> Turns Startups{" "}
          <span className="text-green-primary text-3xl font-extrabold lg:text-5xl">
            into Giants
          </span>
        </div>

        <p className="inline-block w-11/12 lg:w-9/12 mx-auto text-center text-blue-primary mt-6 lg:mt-10 mb-0 text-base leading-2 lg:text-lg lg:leading-8 z-20">
          In 2024, our goal is clear: to cut costs for startups, ensuring them a complete and affordable service for the development and maintenance of their digital products. With our support, more than 10 startups have successfully launched their MVPs in 2023.
        </p>

        <StatsSection />

        {/* <!-- Button Container --> */}
        <div className="flex flex-col justify-center w-full mt-8 lg:mt-16 space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4 z-20">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://chatting.page/vqbvbxrxwtrumudyxhgcwknfjgp0ismf"
            className="px-8 py-2 rounded-full shadow-lg bg-green-primary duration-200 hover:opacity-80 z-20"
          >
            Talk to Us Now
          </a>
        </div>

        <div className="flex flex-col justify-center w-full mt-0 space-y-6 text-xl md:space-y-0 md:space-x-4 z-20">
          <p className="inline text-sm text-green-primary z-20">
            Waiting Time: 1 minute
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
