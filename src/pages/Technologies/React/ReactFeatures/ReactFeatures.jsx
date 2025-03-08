import React from "react";
import FeatureCard from "./FeatureCard";

const ReactFeatures = () => {
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
          alt="supportive"
          img="/Images/technologies/A supportive -webp.webp"
          title="Supportive"
          desc="React provides top-quality,ready-made solutions,templates and components"
        />
        <FeatureCard
          alt="Higher quality, cheaper"
          img="/Images/technologies/Higher quality, cheapeR-webp.webp"
          title="Higher quality"
          desc={`At times, great efort ends in failure, or conversely, ordinary efort 
            leads to succes. We recognize and reward efort and resist the temptation to
            judge you based on outcomes.`}
        />
        <FeatureCard
          alt="Micro frontends"
          img="/Images/technologies/Micro frontends-webp.webp"
          title="Micro front-ends "
          desc={`Since it's robust, you can limit external dependencies to as elected
            number of trusted solutions`}
        />
        <FeatureCard
          alt="Performance"
          img="/Images/technologies/Performance-webp.webp"
          title="Higher performance"
          desc={`You can build web apps, mobile web apps, native mobile 
            apps and even desktop software`}
        />
        <FeatureCard
          alt="Reusable components"
          img="/Images/technologies/Reusable components-webp.webp"
          title="Reusable components"
          desc={`At times, great efort ends in failure, or conversely, ordinary efort 
            leads to succes. We recognize and reward efort and resist the temptation to 
            judge you based on outcomes.`}
        />
        <FeatureCard
          alt="SEO-optimized"
          img="/Images/technologies/SEO-optimized-webp.webp"
          title="SEO optimized"
          desc={`It's used, developed and trusted by the biggest and most innovative 
            companies in the business`}
        />
      </div>
    </div>
  );
};

export default ReactFeatures;
