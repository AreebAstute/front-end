import React from "react";
import SecretSauceCard from "./SecretSauceCard";
import { Link } from "react-router-dom";

const SecretSauce = () => {
  return (
    <div className="bg-gray-light py-5">
      <div className="relative py-10">
        <div className=" flex flex-col ">
          <h2 className="text-xl text-center md:text-3xl text-blue-primary 2xl:text-4xl font-extrabold mb-5 tracking-wide">
            Our “Secret Sauce”
          </h2>
          <div className="border-b-4 border-green-primary w-28 mx-auto" />
        </div>
      </div>
      <div className="w-11/12 lg:w-4/5 mx-auto">
        <SecretSauceCard
          title="Skill"
          image="/Images/serviceDetails/skill-webp.webp"
          list={[
            `We recruit and retain exceptional engineering talent and 
                    keep training them. 80% of our developers and over 
                    50% or QA staff hold MS degree in Computer Science or 
                    related fields. We have developed and perfected recruitment, hiring, 
                    training, and retention practices that allow us to bring on the 
                    best and the brightest technical personnel and empower them with 
                    rigorous agile engineering processes – which together constitute 
                    the greatest differentiator of our services in the marketplace.`,
            `Breadth of technical expertise rare for a mid-sized software 
                    development partner. Astute Softwares has several hundred engineers well 
                    versed in different combinations of C++, Java, C#, RoR, Python, 
                    Objective C, JavaScript and other languages with 
                    experience in multitude of underlying platforms, 
                    IDEs, APIs, databases and frameworks.`,
            `Integrated Quality Assurance – Manual and Automated`,
          ]}
        />
        <SecretSauceCard
          title="Speed"
          image="/Images/serviceDetails/speed-webp.webp"
          list={[
            `We assemble a dedicated team ready to engage faster than 
                    hiring locally. We are able to quickly scale up or downsize 
                    according to client’s needs`,
            `Ingrained Agile Development Methodology.`,
            `Astute Softwares has been actively using Agile Methodology since 2007. 
                    Our first agile team was trained in Amsterdam as there was 
                    no agile training available locally at that time. Currently 
                    over 70% of our projects utilize Agile or near-Agile development.`,
            `Tight integration with the Client’s team and processes`,
          ]}
        />
        <SecretSauceCard
          title="Security"
          image="/Images/serviceDetails/security-webp.webp"
          list={[
            `Thorough protection of client’s IP`,
            `Astute Softwares has worked on various enterprise-class applications that 
                    require strict security protocols. Security is assured at 
                    several levels, including authentication and authorization 
                    capabilities, communication and data security.`,
            `Internal training and regular audits`,
            `Spotless record for 20 years`,
            `We have experienced zero security-related breaches or 
                    complaints in company’s history`,
          ]}
        />
      </div>
      <div className="flex justify-center items-center w-full my-5">
        <Link
          className="py-3 px-10 border-2 border-green-primary hover:bg-green-primary hover:text-white text-green-primary rounded-full"
          to="/contact-us"
        >
          Contact Us to Get Started
        </Link>
      </div>
    </div>
  );
};

export default SecretSauce;
