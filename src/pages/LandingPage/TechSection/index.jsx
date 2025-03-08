import React from "react";
import TechCards from "../TechCards";

import { Link } from "react-router-dom";

function TechSection() {
  return (
    <section id="techs" className="mt-16 lg:mt-24 z-20">
      <div className="w-11/12 mx-auto text-center px-10">
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-blue-primary text-center text-3xl font-extrabold lg:text-5xl leading-15 lg:leading-normal"
        >
          The Tech Stack Behind Competitive,{" "}
          <br className="hidden lg:inline-block" /> Cloud-Native Products
        </div>

        <p
          data-aos="fade-right"
          data-aos-duration="1500"
          className="lg:w-9/12 mx-auto text-center text-blue-primary mt-6 mb-10 text-base leading-2 lg:text-lg lg:leading-8"
        >
          We help technology-oriented companies accelerate value delivery, introducing best development practices and skills that unlock internal teams. Work with future-proof technologies.
        </p>

        <div className="text-blue-primary text-center font-extrabold text-2xl lg:text-4xl mt-16 lg:mt-20 leading-15">
          Work with developers skilled in the world's most popular technologies
        </div>

        <div data-aos="fade-up" data-aos-duration="1000">
          <TechCards />
        </div>

        <div className="relative z-10 mt-10">
          <img
            loading="lazy"
            alt="box_layers"
            className="absolute top-0 w-full z-0"
            src="/Images/landing-page-assets/box_layers-webp.webp"
          />
          <p
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-blue-primary text-center font-bold text-2xl md:text-3xl leading-15 z-10"
          >
            TypeScript
          </p>

          <p
            data-aos="fade-right"
            data-aos-duration="800"
            className="w-11/12 lg:w-9/12 mx-auto text-center text-blue-primary mt-6 lg:mt-10 mb-0 text-base leading-2 lg:text-lg lg:leading-8 z-10"
          >
            Static typing increases the success rate of deployments and simplifies refactoring. For those who need reliable code.
          </p>

          {/* <!-- Button Container --> */}
          <div className="flex flex-col justify-center w-full mt-6 lg:mt-10 mb-0 space-y-6 text-xl text-white md:flex-row md:space-y-0 md:space-x-4">
            <Link
              to="/services"
              className="inline px-8 py-2 rounded-full shadow-lg bg-green-primary z-10 cursor-pointer duration-200 hover:opacity-80"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechSection;
