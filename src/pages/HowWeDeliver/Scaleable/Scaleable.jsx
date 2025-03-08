import React from "react";
import "./Fifthsec.css";

import ScaleableFeaturesCard from "./ScaleableFeaturesCard";
// const ScaleableFeaturesCard = React.lazy(() => import("./ScaleableFeaturesCard"));



const Scalable = () => {
  return (
    <>
      <div
        className="bg-no-repeat bg-left-top leftPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
        }}
      >
        <div className="grid lg:grid-cols-2 px-5 md:px-10 py-10 lg:py-20 mt-20 ">
          <div className=" order-2 lg:order-1 flex justify-center pt-10 md:pt-20">
            <div
              className=" w-full md:w-3/5 lg:w-4/5 xl:w-4/5 rounded-3xl px-10 py-8 md:px-16 md:py-12 bg-cover bg-center"
              style={{
                backgroundImage: "url(/Images/how-we-deliver/We-think-bg-webp.webp)",
              }}
            >
              <h2
                className="text-xl font-extrabold mb-5 text-white"
                style={{ letterSpacing: "2px" }}
              >
                We think of it like this:
              </h2>

              <p className="text-base lg:text-lg mb-5 text-white">
                If you're a software company, development efficiency is crucial
                for you. Sometimes you need to make things happen really fast.
                At the same time, scaling up without sacrificing quality is a
                challenge.
              </p>

              <br />

              <p className="text-base lg:text-lg mb-5 text-white">
                We get it. And we have it covered. With Astute Approach, you can
                easily scale up the team, development velocity and the software
                itself.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            {/* Text section */}
            <div className=" text-blue-primary tracking-wider mb-12 lg:px-20 col-span-1">
              <div className="text-blue-primary font-normal text-base lg:text-lg uppercase">
                <div
                  className="font-medium bg-no-repeat bg-contain block py-12 relative"
                  style={{
                    backgroundImage: "url(/Images/how-we-deliver/04-webp.webp)",
                  }}
                >
                  <p className="absolute bottom-1 text-base font-normal">
                    TO SPEED UP QUICKLY WHENEVER YOU NEED IT
                  </p>
                </div>
              </div>
              <h2 className="devProcessHeading">Scalable</h2>
            </div>
            <ScaleableFeaturesCard
              title="Scaling up your team"
              desc="You can start small and scale the team along with your business. 
                    All of our developers must complete a special skill-unification Bootcamp before they start working on commercial projects for clients, so you can be sure you always get the same top-level skills."
              img="/Images/how-we-deliver/scaling-up-your-team-webp.webp"
            />
            <ScaleableFeaturesCard
              title="Scalable infrastructure in cloud"
              desc="Our DevOps engineers will help you build secure and scalable infrastructure, so your software is ready to grow with your business."
              img="/Images/how-we-deliver/scaling-up-your-team-webp.webp"
            />

            {/* Text section */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Scalable;
