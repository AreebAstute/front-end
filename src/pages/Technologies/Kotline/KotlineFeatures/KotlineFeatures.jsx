import React from "react";
import FeatureCard from "./FeatureCard";

const KotlineFeatures = () => {
  return (
    <div
      className="bg-no-repeat bg-left-top leftPatternSize"
      style={{
        backgroundImage: "url(/Images/serviceAssets/section2/left_pattern-webp.webp)",
      }}
    >
      <div className="lg:w-11/12 lg:mx-auto mx-5 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12 ">
        <FeatureCard
          alt="benefits-from-Kotlin"
          img="/Images/technologies/Benefits from Kotlin's powerfu-webp.webp"
          title="Rapid development"
          desc="Kotlin provides top-quality,ready-made solutions,templates and components"
        />
        <FeatureCard
          alt="best-application"
          img="/Images/technologies/Follows best application-webp.webp"
          title="Awesome user experience"
          desc={`At times, great efort ends in failure, or conversely, ordinary efort 
            leads to succes. We recognize and reward efort and resist the temptation to
            judge you based on outcomes.`}
        />
        <FeatureCard
          alt="Kotlin"
          img="/Images/technologies/Kotlin documentation-webp.webp"
          title="All-in-one approach "
          desc={`Since it's robust, you can limit external dependencies to as elected
            number of trusted solutions`}
        />
        <FeatureCard
          alt="SEO-friendly-code"
          img="/Images/technologies/SEO-friendly-code-webp.webp"
          title="Verstaile use"
          desc={`You can build web apps, mobile web apps, native mobile 
            apps and even desktop software`}
        />
        <FeatureCard
          alt="PHP-developers-choice"
          img="/Images/technologies/PHP Developers’ choice-webp.webp"
          title="Best practice"
          desc={`At times, great efort ends in failure, or conversely, ordinary efort 
            leads to succes. We recognize and reward efort and resist the temptation to 
            judge you based on outcomes.`}
        />
        <FeatureCard
          alt="focus-on-business"
          img="/Images/technologies/Focus-on-busines-webp.webp"
          title="Focus on business"
          desc={`It's used, developed and trusted by the biggest and most innovative 
            companies in the business`}
        />
      </div>
    </div>
  );
};

export default KotlineFeatures;
