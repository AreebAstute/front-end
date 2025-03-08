import React, { useState } from "react";
import AdvantageCard from "./AdvantageCard";
import ResponsiveAdvantages from "./ResponsiveAdvantages";

import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

const Advantages = () => {
  const [arrowDown, setArrowDown] = useState(false);

  const advantageStyling =
    "text-blue-primary tracking-wide text-lg md:text-xl 2xl:text-xl font-normal  py-5 px-3 lg:px-8 rounded-xl w-full md:w-5/6 xl:w-4/6 cursor-pointer hover:bg-green-primary transition-all duration-200 mx-auto lg:mx-0 ";
  const [number, setNumber] = useState(1);
  const [content, setContent] = useState({
    title: "Enterprise-level application development",
    desc: `VueJs is a go-to framework for many JavaScript developers on 
        enterprise-level web applications.That’s because it is a very
        robust frontend framework which has almost everything needed to develop big 
        and scalable apps without having to add many various dependencies.As a result,
        the VueJs setup is
        more standardized, making it easier to onboard new JavaScript developers who 
        don’t need to learn many new tools as long as they know VueJs.`,
  });

  const clickHandling = (n, t, d) => {
    setArrowDown(!arrowDown);
    setNumber(n);
    setContent({
      title: t,
      desc: d,
    });
  };
  return (
    <div className="advantage-tech-bg">
      <div className="hidden lg:block bg-no-repeat bg-right-top lg:w-11/12 lg:mx-auto mx-5 py-20">
        <h2 className="sub-heading">
          Advantage from the VueJs framework to build:
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-10 mr-10 ">
          <div className="space-y-3">
            <p
              onClick={() => {
                clickHandling(
                  1,
                  "Enterprise-level application development",
                  `VueJs is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the VueJs setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know VueJs.`
                );
              }}
              className={`${advantageStyling} ${
                number === 1 ? "bg-green-primary" : "bg-transparent"
              } flex  items-center justify-between `}
            >
              Enterprise-level applications
              {arrowDown ? (
                <>
                  <FaArrowCircleDown className="visible lg:hidden" />
                </>
              ) : (
                <FaArrowCircleUp className="visible lg:hidden" />
              )}
            </p>
            <p
              onClick={() => {
                clickHandling(
                  2,
                  "Lighting fast user interfaces",
                  `VueJs is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the VueJs setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know VueJs.`
                );
              }}
              className={`${advantageStyling} ${
                number === 2 ? "bg-green-primary" : "bg-transparent"
              } `}
            >
              Lighting-fast user interfaces
            </p>
            <p
              onClick={() => {
                clickHandling(
                  3,
                  "Highly-productive frontend team",
                  `VueJs is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the VueJs setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know VueJs.`
                );
              }}
              className={`${advantageStyling} ${
                number === 3 ? "bg-green-primary" : "bg-transparent"
              } `}
            >
              Highly-productive frontend team
            </p>
            <p
              onClick={() => {
                clickHandling(
                  4,
                  "Web and mobile apps that share code",
                  `VueJs is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the VueJs setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know VueJs.`
                );
              }}
              className={`${advantageStyling} ${
                number === 4 ? "bg-green-primary" : "bg-transparent"
              } `}
            >
              Web and mobile apps that share code
            </p>
            <p
              onClick={() => {
                clickHandling(
                  5,
                  "Scalable web applications",
                  `VueJs is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the VueJs setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know VueJs.`
                );
              }}
              className={`${advantageStyling} ${
                number === 5 ? "bg-green-primary" : "bg-transparent"
              } `}
            >
              Scalable web applications
            </p>
            <p
              onClick={() => {
                clickHandling(
                  6,
                  "Innovative projects and companies",
                  `VueJs is a go-to framework for many JavaScript developers on 
                                enterprise-level web applications.That’s because it is a very
                                robust frontend framework which has almost everything needed to develop big 
                                and scalable apps without having to add many various dependencies.As a result,
                                the VueJs setup is
                                more standardized, making it easier to onboard new JavaScript developers who 
                                don’t need to learn many new tools as long as they know VueJs.`
                );
              }}
              className={`${advantageStyling} ${
                number === 6 ? "bg-green-primary" : "bg-transparent"
              } `}
            >
              Innovative projects and companies
            </p>
          </div>
          <div className=" hidden lg:block w-full md:w-11/12">
            <AdvantageCard title={content.title} desc={content.desc} />
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <ResponsiveAdvantages />
      </div>
    </div>
  );
};

export default Advantages;
