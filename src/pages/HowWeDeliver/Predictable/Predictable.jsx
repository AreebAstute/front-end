import React from "react";
import FeaturesCard from "./FeaturesCard";
// const FeaturesCard = React.lazy(() => import("./FeaturesCard"));


const Predictable = () => {
  return (
    <div>
      <div
        className="grid grid-cols-1 xl:grid-cols-5 px-5 md:px-10 lg:px-28 bg-no-repeat bg-right-top rightPatternSize"
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
        }}
      >
        {/* Text section */}
        <div className=" text-blue-primary tracking-wider mb-12 col-span-1 xl:col-span-2 md:pr-10">
          <div className="text-blue-primary font-normal text-base lg:text-lg uppercase">
            <div
              className="font-medium bg-no-repeat bg-contain block py-12 relative"
              style={{ backgroundImage: "url(/Images/how-we-deliver/01-webp.webp)" }}
            >
              <p className="absolute bottom-1 text-base font-normal">
                To make things happen{" "}
              </p>
            </div>
          </div>
          <h2 className="devProcessHeading">Predictable</h2>
          <p className="font-normal text-base lg:text-lg">
            When software is important to your business, you cannot trust to
            chance. Reliability is everything and proven processes with the
            right methodology are key to success.
          </p>
          <br />
          <p className="font-normal text-base lg:text-lg">
            At Astute Softwares, we follow our custom development process which
            gives our teams a proven way to deliver IT projects within agreed
            metrics. Both business and technical.
          </p>
        </div>
        {/* Text section */}
        {/* image section */}
        <div className="xl:col-span-3 flex items-center justify-center md:px-8">
          <div className="grid md:grid-cols-2 md:gap-10">
            <FeaturesCard
              title="Budget & timeline control"
              desc="Being agile doesn't mean you have to worry about overspending. We've established good practices that help you to stay within your budget."
              img="/Images/how-we-deliver/btc-webp.webp"
            />
            <FeaturesCard
              title="Project planning"
              desc="Before the actual development process, we organise the Project Planning Session. You meet the Astute experts and together we aim to understand the project’s business requirements and agree on our mutual approach to the project delivery."
              img="/Images/how-we-deliver/project planning-webp.webp"
            />
            <FeaturesCard
              title="Executive reports"
              desc="Sent to you every sprint with all agreed metrics, which means you are always up to date."
              img="/Images/how-we-deliver/ER-webp.webp"
            />
            <FeaturesCard
              title="Certified project Managers"
              desc="Most of our Project Managers are AgilePM Certified. They are also encouraged to constantly improve their project management skills. That means you can sleep well – you are in good hands.
                        "
              img="/Images/how-we-deliver/cpm-webp.webp"
            />
          </div>
        </div>
        {/* image section */}
      </div>
    </div>
  );
};

export default Predictable;
