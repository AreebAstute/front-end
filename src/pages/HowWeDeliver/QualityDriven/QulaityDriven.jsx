import React from "react";

// const QDFeaturesCard = React.lazy(() => import("./QualityDrivenFeaturesCard"));
import QDFeaturesCard from "./QualityDrivenFeaturesCard";

const QualityDriven = () => {
  const listItemStyle = "font-bold my-5 ml-5";
  return (
    <div
      className="px-5 md:px-10  pt-28 bg-no-repeat bg-right-top rightPatternSize"
      style={{
        backgroundImage:
          "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
      }}
    >
      {/* <div className="bg-no-repeat bg-cover" style={{backgroundImage:"url(/Images/how-we-deliver/Quality-driven-bg-webp.webp)"}} > */}
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-20 ">
        {/* Text section */}
        <div className=" text-blue-primary tracking-wider mb-12 col-span-1">
          <div className="text-blue-primary font-normal text-base lg:text-lg uppercase">
            <div
              className="font-medium bg-no-repeat bg-contain block py-12 relative"
              style={{ backgroundImage: "url(/Images/how-we-deliver/03-webp.webp)" }}
            >
              <p className="absolute bottom-1 text-base font-normal">
                TO MAKE TECHNOLOGY YOUR COMPETITIVE ADVANTAGE
              </p>
            </div>
          </div>
          <h2 className="devProcessHeading">Qulaity-driven</h2>
        </div>
        {/* Text section */}
        {/* empty section */}
        <div className=" flex items-center justify-center"></div>
        {/* empty section */}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 lg:px-10 gap-3 ">
        <QDFeaturesCard
          title="Project planning & control"
          desc="Scope, milestones, priorities, estimation, reporting"
          img="/Images/how-we-deliver/PPC-webp.webp"
        />

        <QDFeaturesCard
          title="Standards & proceses"
          desc="Code Coverage, Quality Gates, Git Flow, DoR, DoD"
          img="/Images/how-we-deliver/standards-processes-webp.webp"
        />

        <QDFeaturesCard
          title="Testing Levels"
          desc="Unit, integration, system and end-to-end testing"
          img="/Images/how-we-deliver/Testing-levels-webp.webp"
        />

        <QDFeaturesCard
          title="CI / CD"
          desc="Executed with Bitbucket Pipelines or Jenkins"
          img="/Images/how-we-deliver/ci-cd-webp.webp"
        />

        <QDFeaturesCard
          title="Code reviews"
          desc="Always done by at least two other team members and approved by the team lead"
          img="/Images/how-we-deliver/code-reviews-webp.webp"
        />

        <QDFeaturesCard
          title="Automted Tests"
          desc="For the most important parts of business logic"
          img="/Images/how-we-deliver/automated-tests-webp.webp"
        />
        <QDFeaturesCard
          title="Code Qulaity"
          desc="SOLID, Code Style, Version Control"
          img="/Images/how-we-deliver/Code quality-webp.webp"
        />
        <QDFeaturesCard
          title="Cloud Solutions"
          desc="Scalable servers set up on AWS and GCP"
          img="/Images/how-we-deliver/cloud-solutions-webp.webp"
        />
      </div>

      {/* </div> */}
    </div>
  );
};

export default QualityDriven;
