import React, { useState } from "react";
import { Link } from "react-router-dom";

import CardLanguage from "./CardLanguages";
import ResponsiveTechnologies from "./ResponsiveTechnologies";
import { FaArrowCircleRight } from "react-icons/fa";

const FifthSection = () => {
  const [content, setContent] = useState({
    link: "/technologies/django",
    title: "Django development teams",
    desc: `Our team includes top-tier experts in Python & Django, and our 
        clients are leading fast growing Startups and Grownups. Django is 
        production proven and used by leading digital companies in the world. 
        Among them Instagram, Spotify, Dropbox, Disqus, Bitbucket and Pinterest. 
        Astute developed Django software is in used by top businesses around the world.`,
  });

  const clickHandler = (l, t, d) => {
    setContent({
      link: l,
      title: t,
      desc: d,
    });
  };

  return (
    <>
      <div
        className="bg-no-repeat bg-left-top leftPatternSize "
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        <div className="fifthSec-grid-style fifthSec-grid-margin hidden">
          <div
            className="cursor-pointer"
            onClick={() => {
              clickHandler(
                "/technologies/django",
                "Django",
                `Our team includes top-tier experts in Python & Django, and our clients are leading fast growing Startups and Grownups. Django is production proven and used by leading digital companies in the world. Among them Instagram, Spotify, Dropbox, Disqus, Bitbucket and Pinterest. Astute developed Django software is in used by top businesses around the world.`
              );
            }}
          >
            <CardLanguage
              titleCard="Django"
              imgCard="/Images/languageAssets/Django-webp.webp"
            />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => {
              clickHandler(
                "/technologies/kotlin",
                "Kotlin",
                `A modern programming language that our developers love to use. Its natural way to share code between mobile platforms, modern development experience with familiar JVM technology and feasibility of extension to web projects is the reason why our developers feel comfortable to work with it.
                    `
              );
            }}
          >
            <CardLanguage
              titleCard="Kotlin"
              imgCard="/Images/languageAssets/kotlin-webp.webp"
            />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => {
              clickHandler(
                "/technologies/angular",
                "Angular",
                `Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.
                    At Astute, we make best use of this reliable technology to build beautiful things.`
              );
            }}
          >
            <CardLanguage
              titleCard="Angular"
              imgCard="/Images/languageAssets/angular-webp.webp"
            />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => {
              clickHandler(
                "/technologies/nodejs",
                "Node",
                `Whether you’re developing a real-time application, IoT device, or high-traffic site, Node.js can give you speed, efficiency, and lower development costs. Node.js is an open-source server environment that runs on various platforms using JavaScript. It’s not a framework, but a runtime environment that allows you to execute JavaScript code on the server-side. 
                    Its high performance and scalability are the reason we choose to work with this technology.
                    `
              );
            }}
          >
            <CardLanguage
              titleCard="Node.js"
              imgCard="/Images/languageAssets/node_js-webp.webp"
            />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => {
              clickHandler(
                "/technologies/laravel",
                "Laravel",
                `Laravel is the most in-demand framework for developing top-notch web applications. A PHP-based web application development framework is most sought after in web app developers because it is simple and quick to deploy highly effective and user-centric applications to solve most business needs.
                    We have expertise in nuts and bolts of Laravel framework i.e. Authorisation Technique, Object-Oriented Libraries, Object-Relational Mapper and so much more, which helps us to meet your requirements.`
              );
            }}
          >
            <CardLanguage
              titleCard="Laravel"
              imgCard="/Images/languageAssets/laravel-webp.webp"
            />
          </div>

          <div
            className="cursor-pointer"
            onClick={() => {
              clickHandler(
                "/technologies/react",
                "React",
                `We create beautiful, intuitive applications with the scalability, adaptability and convenience of React JS and React Native libraries. React is an open-source Javascript library maintained by the engineers at Facebook, Instagram, and individual contributors, who help to create interactive applications and ensures an immersive user experience.
                    At Astute, with our agile processes and DevOps practices, our feature releases are guaranteed fast and efficient.
                    
                    `
              );
            }}
          >
            <CardLanguage
              titleCard="React.js"
              imgCard="/Images/languageAssets/react-webp.webp"
            />
          </div>
        </div>

        <div className="h-full py-5 lg:py-20 flex flex-col lg:flex-row items-center justify-center w-full xl:w-4/5 xl:mx-auto ">
          <div className="w-full px-5 md:px-10 hidden lg:block ">
            <div className=" text-center lg:text-justify">
              <h2
                className="text-2xl md:text-3xl font-extrabold mb-5 text-font-primary"
                style={{ letterSpacing: "2px" }}
              >
                {" "}
                {content.title}
              </h2>
              <h3
                className="text-base lg:text-lg font-medium  text-font-primary lg:pr-10"
                style={{ letterSpacing: "1px" }}
              >
                {content.desc}
              </h3>
            </div>
            <Link to={content.link}>
              <div
                style={{
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                }}
                className="h-12 px-4 my-6 border rounded-3xl text-center bg-green-primary text-white cursor-pointer inline-flex label-1 items-center justify-center"
              >
                Discover more
                <span className="ml-2 text-xl text-white">
                  <FaArrowCircleRight />
                </span>
              </div>
            </Link>
          </div>

          <div className="w-full block lg:hidden">
            <ResponsiveTechnologies />
          </div>
          {/* contact detail below */}
          <div className="w-full flex justify-center items-center my-10 md:mt-20 lg:mt-0 ">
            <div className="">
              <div className=" bg-white shadow-xl px-5 py-5 md:py-12 md:px-12 rounded-2xl relative ">
                <div
                  className=" bg-font-primary h-full py-10 px-8"
                  style={{ borderRadius: "20px" }}
                >
                  <h2 className="text-lg mb-1 text-white font-normal">
                    {" "}
                    Contact Detail
                  </h2>
                  <h3
                    className="text-xl font-extrabold mb-5 text-white"
                    style={{ letterSpacing: "2px" }}
                  >
                    Your new team
                  </h3>

                  <ul className="list-style ">
                    <li className="list-item-style">Masters everything</li>
                    <li className="list-item-style">
                      Always curious for new challenges
                    </li>
                    <li className="list-item-style">
                      Focused towards achieving big
                    </li>
                    <li className="list-item-style">Always ready to deliver</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* contact detail above */}
        </div>
      </div>
    </>
  );
};

export default FifthSection;
