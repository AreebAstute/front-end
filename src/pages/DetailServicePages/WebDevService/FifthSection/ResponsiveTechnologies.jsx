import React, { useState } from "react";
import { Link } from "react-router-dom";
// import AdvantageCard from './AdvantageCard';
import { motion, AnimatePresence } from "framer-motion";

import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const ResponsiveAdvantages = () => {
  const [arrowDown, setArrowDown] = useState(false);

  const advantageStyling = `text-blue-primary border-2 border-gray-light tracking-wide text-lg md:text-xl 2xl:text-xl font-normal  py-5 px-8 rounded-3xl shadow-md w-full md:w-5/6 xl:w-4/6 cursor-pointer hover:bg-green-primary transition-all duration-200 mx-auto lg:mx-0 overflow-hidden `;
  const hiddenBlockStyles =
    "flex flex-col mt-5 w-full md:w-5/6 text-gray-text text-base overflow-hidden";
  const [number, setNumber] = useState(1);
  const [content, setContent] = useState({
    link: "/technologies/django",
    desc: `Our team includes top-tier experts in Python & Django, and our clients are leading fast growing Startups and Grownups. Django is production proven and used by leading digital companies in the world. Among them Instagram, Spotify, Dropbox, Disqus, Bitbucket and Pinterest. Astute developed Django software is in used by top businesses around the world.
        `,
  });

  const variants = {
    hidden: { height: 0 },
    visible: {
      height: "auto",
      transition: { duration: 1 },
    },
  };
  const clickHandling = (n, l, d) => {
    setArrowDown(!arrowDown);
    setNumber(n);
    setContent({
      link: l,
      desc: d,
    });
  };

  return (
    <div className="">
      <div className="bg-no-repeat bg-right-top lg:w-11/12 lg:mx-auto mx-5 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 ">
          <div className="space-y-3 ">
            {/* django */}
            <div
              onClick={() => {
                clickHandling(
                  1,
                  "/technologies/django",
                  `Our team includes top-tier experts in Python & Django, and our clients are leading fast growing Startups and Grownups. Django is production proven and used by leading digital companies in the world. Among them Instagram, Spotify, Dropbox, Disqus, Bitbucket and Pinterest. Astute developed Django software is in used by top businesses around the world.
                                `
                );
              }}
              className={`${advantageStyling} group`}
            >
              <div className="flex justify-between items-center group-hover:text-white group-focus:text-white">
                <img
                  loading="lazy"
                  alt="Django"
                  className="w-20"
                  src="/Images/languageAssets/Django-webp.webp"
                />
                <p className="flex items-center justify-between font-bold ">
                  Django
                </p>
                {number === 1 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </div>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 1 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={`${hiddenBlockStyles} group-hover:text-white group-focus:text-white`}
                >
                  {content.desc}

                  <Link to={content.link}>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                      }}
                      className="h-8 px-4 my-6 border rounded-3xl text-center bg-green-primary text-white cursor-pointer inline-flex label-1 items-center justify-center"
                    >
                      Discover more
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Kotlin */}
            <div
              onClick={() => {
                clickHandling(
                  2,
                  "/technologies/kotlin",
                  `A modern programming language that our developers love to use. Its natural way to share code between mobile platforms, modern development experience with familiar JVM technology and feasibility of extension to web projects is the reason why our developers feel comfortable to work with it.
                                `
                );
              }}
              className={`${advantageStyling} group`}
            >
              <div className="flex justify-between items-center group-hover:text-white group-focus:text-white">
                <img
                  loading="lazy"
                  alt="kotlin"
                  className="w-20"
                  src="/Images/languageAssets/kotlin-webp.webp"
                />
                <p className="flex  items-center justify-between font-bold ">
                  Kotlin
                </p>
                {number === 2 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </div>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 2 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={`${hiddenBlockStyles} group-hover:text-white group-focus:text-white`}
                >
                  {content.desc}

                  <Link to={content.link}>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                      }}
                      className="h-8 px-4 my-6 border rounded-3xl text-center bg-green-primary text-white cursor-pointer inline-flex label-1 items-center justify-center"
                    >
                      Discover more
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Angular */}
            <div
              onClick={() => {
                clickHandling(
                  3,
                  "/technologies/angular",
                  `Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.
                                At Astute, we make best use of this reliable technology to build beautiful things.`
                );
              }}
              className={`${advantageStyling} group`}
            >
              <div className="flex justify-between items-center group-hover:text-white group-focus:text-white">
                <img
                  loading="lazy"
                  alt="angular"
                  className="w-20"
                  src="/Images/languageAssets/angular-webp.webp"
                />
                <p className="flex  items-center justify-between font-bold ">
                  Angular
                </p>
                {number === 3 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </div>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 3 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={`${hiddenBlockStyles} group-hover:text-white group-focus:text-white`}
                >
                  {content.desc}

                  <Link to={content.link}>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                      }}
                      className="h-8 px-4 my-6 border rounded-3xl text-center bg-green-primary text-white cursor-pointer inline-flex label-1 items-center justify-center"
                    >
                      Discover more
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Node */}
            <div
              onClick={() => {
                clickHandling(
                  4,
                  "/technologies/nodejs",
                  `Whether you’re developing a real-time application, IoT device, or high-traffic site, Node.js can give you speed, efficiency, and lower development costs. Node.js is an open-source server environment that runs on various platforms using JavaScript. It’s not a framework, but a runtime environment that allows you to execute JavaScript code on the server-side. 
                                Its high performance and scalability are the reason we choose to work with this technology.`
                );
              }}
              className={`${advantageStyling} group`}
            >
              <div className="flex justify-between items-center group-hover:text-white group-focus:text-white">
                <img
                  loading="lazy"
                  alt="node"
                  className="w-20"
                  src="/Images/languageAssets/node-webp.webp"
                />
                <p className="flex  items-center justify-between font-bold ">
                  Node
                </p>
                {number === 4 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </div>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 4 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={`${hiddenBlockStyles} group-hover:text-white group-focus:text-white`}
                >
                  {content.desc}

                  <Link to={content.link}>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                      }}
                      className="h-8 px-4 my-6 border rounded-3xl text-center bg-green-primary text-white cursor-pointer inline-flex label-1 items-center justify-center"
                    >
                      Discover more
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Laravel */}
            <div
              onClick={() => {
                clickHandling(
                  5,
                  "/technologies/laravel",
                  `Laravel is the most in-demand framework for developing top-notch web applications. A PHP-based web application development framework is most sought after in web app developers because it is simple and quick to deploy highly effective and user-centric applications to solve most business needs.
                                We have expertise in nuts and bolts of Laravel framework i.e. Authorisation Technique, Object-Oriented Libraries, Object-Relational Mapper and so much more, which helps us to meet your requirements.`
                );
              }}
              className={`${advantageStyling} group`}
            >
              <div className="flex justify-between items-center group-hover:text-white group-focus:text-white">
                <img
                  loading="lazy"
                  alt="laravel"
                  className="w-20"
                  src="/Images/languageAssets/laravel-webp.webp"
                />
                <p className="flex  items-center justify-between font-bold ">
                  Laravel
                </p>
                {number === 5 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </div>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 5 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={`${hiddenBlockStyles} group-hover:text-white group-focus:text-white`}
                >
                  {content.desc}

                  <Link to={content.link}>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                      }}
                      className="h-8 px-4 my-6 border rounded-3xl text-center bg-green-primary text-white cursor-pointer inline-flex label-1 items-center justify-center"
                    >
                      Discover more
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* React */}
            <div
              onClick={() => {
                clickHandling(
                  6,
                  "/technologies/react",
                  `We create beautiful, intuitive applications with the scalability, adaptability and convenience of React JS and React Native libraries. React is an open-source Javascript library maintained by the engineers at Facebook, Instagram, and individual contributors, who help to create interactive applications and ensures an immersive user experience.
                                At Astute, with our agile processes and DevOps practices, our feature releases are guaranteed fast and efficient.
                                `
                );
              }}
              className={`${advantageStyling} group`}
            >
              <div className="flex justify-between items-center group-hover:text-white group-focus:text-white">
                <img
                  loading="lazy"
                  alt="react"
                  className="w-20"
                  src="/Images/languageAssets/react-webp.webp"
                />
                <p className="flex  items-center justify-between font-bold ">
                  React
                </p>
                {number === 6 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </div>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 6 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={`${hiddenBlockStyles} group-hover:text-white group-focus:text-white`}
                >
                  {content.desc}

                  <Link to={content.link}>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        lineHeight: "1.25rem",
                      }}
                      className="h-8 px-4 my-6 border rounded-3xl text-center bg-green-primary text-white cursor-pointer inline-flex label-1 items-center justify-center"
                    >
                      Discover more
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveAdvantages;
