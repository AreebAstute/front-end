import React, { useEffect, useState } from "react";
// import "../../../../index.css";
import "./languagefile.css";

import HomePageLanguageCard from "./HomePageLanguageCard";

import { motion, useViewportScroll } from "framer-motion";

function LanguagePage() {
  const languageTitle = "font-extrabold text-xl md:text-2xl text-font-primary";

  const [scrolled, setScrolled] = useState(false);
  const [number, setNumber] = useState(0);

  const { scrollY } = useViewportScroll();

  useEffect(()=>{
    const path = document.getElementById("thirdArrow");
  
    let length;
    if (path) {
      length = path.getTotalLength();
      //  console.log("inside this:::",length)
    }
  
    scrollY.onChange((value) => {
      // console.log("inside this:::",value)
      if (value >= 2947) {
        setScrolled(true);
      } else if (value < 2947) {
        setScrolled(false);
      }
    });
  }, [])

  return (
    <div className="relative">
      <svg
        className="svg"
        version="1.1"
        id="arrow3"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="100%"
        height="1200"
        viewBox="-50 200 1200 1200"
      >
        <motion.path
          id="thirdArrow"
          className="dashed"
          animate={
            scrolled ? { strokeDashoffset: 0 } : { strokeDashoffset: 3790 }
          }
          transition={{ duration: 3, ease: "easeInOut" }}
          strokeDasharray="3790"
          d="M-340,181.9 
             c120,0-40,70.3+99.9,193 
             s150,185.9,203.7,225 
             s98,161,105.7,193.2 
             s62.6,160.3,445.5,133.3 
             c218-16.9,246.5-69.3,330.9-67.4 
             c57.7,1.3,145.4-5.6,265.4,10.5 
             c257.1,96.5,234.8,80,626.7,996.4"
          //  d="M-31,181.9c0,0-40,70.3-19.9,193s170,175.9,203.7,225s98,161,105.7,193.2s62.6,278.3,465.5,183.3
          //     c118-16.9,246.5-69.3,330.9-67.4c57.7,1.3,145.4-1.6,185.4,24.5c147.1,96.5,134.8,233,226.7,266.4"
        />
        <path
          className="plain"
          d="M-340,181.9 
             c120,0-40,70.3+99.9,193 
             s150,185.9,203.7,225 
             s98,161,105.7,193.2 
             s62.6,160.3,445.5,133.3 
             c218-16.9,246.5-69.3,330.9-67.4 
             c57.7,1.3,145.4-5.6,265.4,10.5 
             c257.1,96.5,234.8,80,626.7,996.4"
          //  d="M-31,181.9c0,0-40,70.3-19.9,193s170,175.9,203.7,225s98,161,105.7,193.2s62.6,278.3,465.5,183.3
          //     c118-16.9,246.5-69.3,330.9-67.4c57.7,1.3,145.4-1.6,185.4,24.5c147.1,96.5,134.8,233,226.7,266.4"
        />
      </svg>

      <div
        className="flex flex-col bg-no-repeat h-full mb-16 relative languageBg  "
        style={{
          backgroundImage: "url('/Images/languageAssets/backpattern-webp.webp')",
        }}
      >
        {/* <svg className="svg" version="1.1" id="arrow3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="100%" height="1200" viewBox="0 0 1200 1200" >
            <motion.path
             className="dashed" 
            //  animate={scrolled ? {strokeDashoffset:0} : {strokeDashoffset:1806.31591796875}}
             transition={{duration:1, ease:"easeInOut"}}
             d="M-31,181.9c0,0-142,70.3-19.9,193s170,175.9,203.7,225s98,161,105.7,193.2s62.6,278.3,465.5,183.3
                c118-16.9,246.5-69.3,330.9-67.4c57.7,1.3,145.4-1.6,185.4,24.5c147.1,96.5,134.8,233,226.7,266.4"/>
            <path
             className="plain" 
             d="M-31,181.9c0,0-142,70.3-19.9,193s170,175.9,203.7,225s98,161,105.7,193.2s62.6,278.3,465.5,183.3
                c118-16.9,246.5-69.3,330.9-67.4c57.7,1.3,145.4-1.6,185.4,24.5c147.1,96.5,134.8,233,226.7,266.4"/>
        </svg> */}

        <div className=" flex flex-col  language-page-top-padding ">
          <div className="flex  justify-center">
            <div className=" inline-block text-center">
              <h1 className=" smallHeading"> Technologies </h1>
              <h2 className="heding1">
                {" "}
                All your favorite technologies at one place{" "}
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-center pt-10 mrgin-5-ptg">
          <div className=" language-grid-style  w-11/12" style={{ zIndex: 10 }}>
            <div>
              {/* <Link to="/technologies/react"> */}
              <HomePageLanguageCard
                image="/Images/landing-page-assets/c_logo-webp.webp"
                title="C++ / C#"
                desc="High performance web applications that grow with your bussiness"
              />
              {/* </Link> */}
            </div>

            <div>
              {/* <Link to="/technologies/django"> */}
              <HomePageLanguageCard
                image="/Images/landing-page-assets/Django_Logo-webp.webp"
                title="Django"
                desc="Python web framework that encourages rapid development"
              />
              {/* </Link> */}
            </div>

            <div>
              {/* <Link to="/technologies/react"> */}
              <HomePageLanguageCard
                image="/Images/landing-page-assets/React_icon-webp.webp"
                title="React"
                desc="User-centred JavaScript framework for crafting real-time interfaces"
              />
              {/* </Link> */}
            </div>

            <div>
              {/* <Link to ="/technologies/kotline"> */}
              <HomePageLanguageCard
                image="/Images/landing-page-assets/kotlin_logo-webp.webp"
                title="Kotline"
                desc="Writing better android apps faster with Kotlin "
              />
              {/* </Link> */}
            </div>

            <div className=" items-center grid grid-rows-2 gap-y-8">
              <div className="h-full">
                {/* <Link to="/technologies/angular"> */}
                <div className="card">
                  <div
                    className="flex flex-row text-center items-center justify-between px-8 py-6 h-28"
                    // style={{ padding: "10%" }}
                  >
                    <h3 className={languageTitle}>Angular</h3>
                    <img
                      loading="lazy"
                      className="object-contain w-1/6 h-full"
                      //   className="inline-block "
                      src="/Images/landing-page-assets/angular_icon-webp.webp"
                      alt="angular"
                      //   width="35px"
                      //   height="35px"
                    ></img>
                  </div>
                </div>
                {/* </Link>  */}
              </div>

              <div className="h-full">
                {/* <Link to="/technologies/laravel"> */}
                <div className="card">
                  <div
                    className="flex flex-row text-center items-center justify-between px-8 py-6 h-28"
                    // style={{ padding: "10%" }}
                  >
                    <h3 className={languageTitle}>Laravel</h3>
                    <img
                      loading="lazy"
                      className="object-contain w-1/6 h-full"
                      src="/Images/landing-page-assets/l-webp.webp"
                      alt="laravel"
                      //   width="35px"
                      //   height="35px"
                    ></img>
                  </div>
                </div>
                {/* </Link>         */}
              </div>
            </div>

            <div className=" items-center grid grid-rows-2 gap-y-8">
              <div className="h-full">
                {/* <Link to="/technologies/nodejs"> */}
                <div className="card">
                  <div
                    className="flex flex-row text-center items-center justify-between px-8 py-6 h-28"
                    // style={{ padding: "10%" }}
                  >
                    <h3 className={languageTitle}>Node.js</h3>
                    <img
                      loading="lazy"
                      className="object-contain w-1/6 h-full"
                      src="/Images/landing-page-assets/nodeJs_logo-webp.webp"
                      alt="node"
                      //   width="50px"
                      //   height="50px"
                    ></img>
                  </div>
                </div>
                {/* </Link>     */}
              </div>

              <div className="h-full">
                {/* <Link to="/technologies/vue"> */}
                <div className="card">
                  <div
                    className="flex flex-row text-center items-center justify-between px-8 py-6 h-28"
                    // style={{ padding: "10%" }}
                  >
                    <h3 className={languageTitle}>Vue JS</h3>
                    <img
                      loading="lazy"
                      className="object-contain w-1/6 h-full"
                      src="/Images/landing-page-assets/vuejs_logo-webp.webp"
                      alt="vue"
                      //   width="50px"
                      //   height="50px"
                    ></img>
                  </div>
                </div>
                {/* </Link>  */}
              </div>
            </div>

            <div className=" items-center grid gap-y-8">
              <div className="h-full">
                {/* <Link to="/technologies/nodejs"> */}
                <div className="card">
                  <div
                    className="flex flex-row text-center items-center justify-between px-8 py-6 h-28"
                    // style={{ padding: "10%" }}
                  >
                    <h3 className={languageTitle}>Swift</h3>
                    <img
                      loading="lazy"
                      className="object-contain w-1/6 h-full"
                      src="/Images/landing-page-assets/swift_logo-webp.webp"
                      alt="node"
                      //   width="50px"
                      //   height="50px"
                    ></img>
                  </div>
                </div>
                {/* </Link>     */}
              </div>
            </div>

            <div className=" items-center grid gap-y-8">
              <div className="h-full">
                {/* <Link to="/technologies/nodejs"> */}
                <div className="card">
                  <div
                    className="flex flex-row text-center items-center justify-between px-8 py-6 h-28"
                    // style={{ padding: "10%" }}
                  >
                    <h3 className={languageTitle}>Java</h3>
                    <img
                      loading="lazy"
                      className="object-contain w-1/6 h-full"
                      src="/Images/landing-page-assets/Java_logo-webp.webp"
                      alt="node"
                      //   width="50px"
                      //   height="50px"
                    ></img>
                  </div>
                </div>
                {/* </Link>     */}
              </div>
            </div>

            <div className=" items-center grid gap-y-8">
              <div className="h-full">
                {/* <Link to="/technologies/nodejs"> */}
                <div className="card">
                  <div
                    className="flex flex-row text-center items-center justify-between px-8 py-6 h-28"
                    // style={{ padding: "10%" }}
                  >
                    <h3 className={languageTitle}>Flutter</h3>
                    <img
                      loading="lazy"
                      className="object-contain w-1/6 h-full"
                      src="/Images/landing-page-assets/flutter-webp.webp"
                      alt="node"
                      //   width="50px"
                      //   height="50px"
                    ></img>
                  </div>
                </div>
                {/* </Link>     */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguagePage;
