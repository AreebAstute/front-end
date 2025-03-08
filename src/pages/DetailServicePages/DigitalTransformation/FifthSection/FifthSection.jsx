import React, { useState } from "react";
import CardLanguage from "./CardLanguages";
import ResponsiveTechnologies from "./ResponsiveTechnologies";

const FifthSection = () => {
  const [content, setContent] = useState({
    title: "Django development teams",
    desc: ` Django is a framework, not a language. Python is the language in
        which Django is written. Django is a collection of Python libs
        allowing you to quickly and efficiently create a quality Web
        application, and is suitable for both frontend and backend.
        However, Django is pretty famous for its "Django admin", an auto
        generated backend that allows you to manage your website in a
        blink for a lot of simple use cases without having to code much.`,
  });

  const clickHandler = (t, d) => {
    setContent({
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
        <div className="hidden lg:block w-full lg:flex  items-center">
          <div className="w-1/2">
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
                  <p
                    className="text-base lg:text-lg font-medium  text-font-primary lg:pr-10"
                    style={{ letterSpacing: "1px" }}
                  >
                    {content.desc}
                  </p>
                </div>
              </div>

              {/* contact detail below */}
              {/* <div className="w-full flex justify-center items-center my-10 md:mt-20 lg:mt-0 ">
                        <div className="">
                            <div className=" bg-white shadow-xl px-5 py-5 md:py-12 md:px-12 rounded-2xl relative " >
                                <div className=" bg-font-primary h-full py-10 px-8" style={{borderRadius:"20px"}}>
                                    
                                    <h1 className="text-lg mb-1 text-white font-normal"> Contact Detail</h1>
                                    <h1 className="text-xl font-extrabold mb-5 text-white" style={{letterSpacing:"2px"}}>Your new team will</h1>

                                    <ul className="list-style ">
                                        <li className="list-item-style">Develop microservice</li>
                                        <li className="list-item-style">Optimized the app for high scalabilit</li>
                                        <li className="list-item-style">Enable live data processin</li>
                                        <li className="list-item-style">Use Django for frontend and backend</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
              {/* contact detail above */}
            </div>
          </div>
          <div className="w-1/2">
            <div className="fifthSec-grid-style fifthSec-grid-margin hidden">
              <div
                className="cursor-pointer"
                onClick={() => {
                  clickHandler(
                    "Django development teams",
                    `Django is a framework, not a language. Python is the language in
                    which Django is written. Django is a collection of Python libs
                    allowing you to quickly and efficiently create a quality Web
                    application, and is suitable for both frontend and backend.
                    However, Django is pretty famous for its "Django admin", an auto
                    generated backend that allows you to manage your website in a
                    blink for a lot of simple use cases without having to code much.`
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
                    "Kotline development teams",
                    `Kotline is a framework, not a language. Python is the language in
                    which Kotline is written. Kotline is a collection of Python libs
                    allowing you to quickly and efficiently create a quality Web
                    application, and is suitable for both frontend and backend.
                    However, Kotline is pretty famous for its "Kotline admin", an auto
                    generated backend that allows you to manage your website in a
                    blink for a lot of simple use cases without having to code much.`
                  );
                }}
              >
                <CardLanguage
                  titleCard="Kotline"
                  imgCard="/Images/languageAssets/kotlin-webp.webp"
                />
              </div>

              <div
                className="cursor-pointer"
                onClick={() => {
                  clickHandler(
                    "Angular development teams",
                    `Angular is a framework, not a language. Python is the language in
                    which Angular is written. Angular is a collection of Python libs
                    allowing you to quickly and efficiently create a quality Web
                    application, and is suitable for both frontend and backend.
                    However, Angular is pretty famous for its "Angular admin", an auto
                    generated backend that allows you to manage your website in a
                    blink for a lot of simple use cases without having to code much.`
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
                    "Node development teams",
                    `Node is a framework, not a language. Python is the language in
                    which Node is written. Node is a collection of Python libs
                    allowing you to quickly and efficiently create a quality Web
                    application, and is suitable for both frontend and backend.
                    However, Node is pretty famous for its "Node admin", an auto
                    generated backend that allows you to manage your website in a
                    blink for a lot of simple use cases without having to code much.`
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
                    "Laravel development teams",
                    `Laravel is a framework, not a language. Python is the language in
                    which Laravel is written. Laravel is a collection of Python libs
                    allowing you to quickly and efficiently create a quality Web
                    application, and is suitable for both frontend and backend.
                    However, Laravel is pretty famous for its "Laravel admin", an auto
                    generated backend that allows you to manage your website in a
                    blink for a lot of simple use cases without having to code much.`
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
                    "React development teams",
                    `React is a framework, not a language. Python is the language in
                    which React is written. React is a collection of Python libs
                    allowing you to quickly and efficiently create a quality Web
                    application, and is suitable for both frontend and backend.
                    However, React is pretty famous for its "React admin", an auto
                    generated backend that allows you to manage your website in a
                    blink for a lot of simple use cases without having to code much.`
                  );
                }}
              >
                <CardLanguage
                  titleCard="React.js"
                  imgCard="/Images/languageAssets/react-webp.webp"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full block lg:hidden">
          <ResponsiveTechnologies />
        </div>
      </div>
    </>
  );
};

export default FifthSection;
