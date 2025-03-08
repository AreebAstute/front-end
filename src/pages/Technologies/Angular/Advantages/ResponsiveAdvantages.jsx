import React, { useState } from "react";
import AdvantageCard from "./AdvantageCard";
import { animate, motion, AnimatePresence } from "framer-motion";

import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const ResponsiveAdvantages = () => {
  const [arrowDown, setArrowDown] = useState(false);

  const advantageStyling = ` text-blue-primary border-2 border-gray-light tracking-wide text-lg md:text-xl 2xl:text-xl font-normal  py-5 px-5 rounded-3xl shadow-md w-full md:w-5/6 xl:w-4/6 cursor-pointer hover:bg-green-primary transition-all duration-200 mx-auto lg:mx-0`;
  const hiddenBlockStyles =
    "mt-5 w-full md:w-5/6 text-gray-text text-sm overflow-hidden";
  const [number, setNumber] = useState(1);
  const [content, setContent] = useState({
    desc: `Angular is a go-to framework for many JavaScript developers on 
        enterprise-level web applications.That’s because it is a very
        robust frontend framework which has almost everything needed to develop big 
        and scalable apps without having to add many various dependencies.As a result,
        the Angular setup is
        more standardized, making it easier to onboard new JavaScript developers who 
        don’t need to learn many new tools as long as they know Angular.`,
  });

  const variants = {
    hidden: { height: 0 },
    visible: {
      height: "auto",
      transition: { duration: 1 },
    },
  };

  const clickHandling = (n, d) => {
    setArrowDown(!arrowDown);
    setNumber(n);
    setContent({
      desc: d,
    });
  };
  return (
    <div className="">
      <div className="bg-no-repeat bg-right-top lg:w-11/12 lg:mx-auto mx-3 md:mx-5 py-20">
        <h2 className="sub-heading">
          Advantage from the Angular framework to build:{" "}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 ">
          <div className="space-y-3">
            <div
              onClick={() => {
                clickHandling(
                  1,
                  `Angular is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the Angular setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know Angular.`
                );
              }}
              className={`${advantageStyling}`}
            >
              <p className="flex items-center justify-between text-sm font-bold">
                Enterprise-level applications
                {number === 1 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </p>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 1 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={hiddenBlockStyles}
                >
                  {content.desc}
                </motion.div>
              </AnimatePresence>
            </div>
            <div
              onClick={() => {
                clickHandling(
                  2,
                  `Angular is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the Angular setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know Angular.`
                );
              }}
              className={`${advantageStyling} `}
            >
              <p className="flex  items-center text-sm justify-between font-bold">
                Lighting-fast user interfaces
                {number === 2 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </p>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 2 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={hiddenBlockStyles}
                >
                  <p>{content.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div
              onClick={() => {
                clickHandling(
                  3,
                  `Angular is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the Angular setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know Angular.`
                );
              }}
              className={`${advantageStyling} `}
            >
              <p className="flex text-sm  items-center justify-between font-bold">
                Highly-productive frontend team
                {number === 3 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </p>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 3 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={hiddenBlockStyles}
                >
                  <p>{content.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div
              onClick={() => {
                clickHandling(
                  4,
                  `Angular is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the Angular setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know Angular.`
                );
              }}
              className={`${advantageStyling} `}
            >
              <p className="flex text-sm  items-center justify-between font-bold">
                Web and mobile apps that share code
                {number === 4 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </p>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 4 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={hiddenBlockStyles}
                >
                  <p>{content.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div
              onClick={() => {
                clickHandling(
                  5,
                  `Angular is a go-to framework for many JavaScript developers on 
                            enterprise-level web applications.That’s because it is a very
                            robust frontend framework which has almost everything needed to develop big 
                            and scalable apps without having to add many various dependencies.As a result,
                            the Angular setup is
                            more standardized, making it easier to onboard new JavaScript developers who 
                            don’t need to learn many new tools as long as they know Angular.`
                );
              }}
              className={`${advantageStyling} `}
            >
              <p className="flex text-sm  items-center justify-between font-bold">
                Scalable web applications
                {number === 5 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </p>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 5 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={hiddenBlockStyles}
                >
                  <p>{content.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div
              onClick={() => {
                clickHandling(
                  6,
                  `Angular is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the Angular setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know Angular.`
                );
              }}
              className={`${advantageStyling} `}
            >
              <p className="flex text-sm items-center justify-between font-bold">
                Innovative projects and companies
                {number === 6 && arrowDown ? (
                  <FaArrowCircleDown className="visible lg:hidden" />
                ) : (
                  <FaArrowCircleUp className="visible lg:hidden" />
                )}
              </p>
              <AnimatePresence>
                <motion.div
                  variants={variants}
                  initial={"hidden"}
                  animate={number === 6 && arrowDown ? "visible" : "hidden"}
                  exit={"hidden"}
                  className={hiddenBlockStyles}
                >
                  <p>{content.desc}</p>
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
