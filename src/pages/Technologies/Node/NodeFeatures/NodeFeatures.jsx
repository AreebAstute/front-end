import React from "react";
import FeatureCard from "./FeatureCard";

const NodeFeatures = () => {
  return (
    <div
      className="bg-no-repeat bg-left-top"
      style={{
        backgroundSize: "10%",
        backgroundImage: "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
      }}
    >
      <div className="lg:w-11/12 lg:mx-auto mx-5 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        <FeatureCard
          alt="1st choice for scalable apps"
          img="/Images/technologies/1st choice for scalable apps-webp.webp"
          title="Supportive"
          desc="Node provides top-quality,ready-made solutions,templates and components"
        />
        <FeatureCard
          alt="Community-made"
          img="/Images/technologies/Community-made -webp.webp"
          title="Higher quality"
          desc={`At times, great efort ends in failure, or conversely, ordinary efort 
            leads to succes. We recognize and reward efort and resist the temptation to
            judge you based on outcomes.`}
        />
        <FeatureCard
          alt="Designed to empower"
          img="/Images/technologies/Designed to empower-webp.webp"
          title="Micro front-ends "
          desc={`Since it's robust, you can limit external dependencies to as elected
            number of trusted solutions`}
        />
        <FeatureCard
          alt="Microservice-ready"
          img="/Images/technologies/Microservice-ready a-webp.webp"
          title="Higher performance"
          desc={`You can build web apps, mobile web apps, native mobile 
            apps and even desktop software`}
        />
        <FeatureCard
          alt="Ready for full-stack"
          img="/Images/technologies/Ready for full-stack-webp.webp"
          title="Reusable components"
          desc={`At times, great efort ends in failure, or conversely, ordinary efort 
            leads to succes. We recognize and reward efort and resist the temptation to 
            judge you based on outcomes.`}
        />
        <FeatureCard
          alt="Real-time data flow"
          img="/Images/technologies/Real-time data flow-webp.webp"
          title="SEO optimized"
          desc={`It's used, developed and trusted by the biggest and most innovative 
            companies in the business`}
        />
      </div>
    </div>
  );
};

export default NodeFeatures;
