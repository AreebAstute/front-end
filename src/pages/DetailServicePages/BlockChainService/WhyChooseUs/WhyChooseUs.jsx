import React from "react";
import ReasonCard from "./ReasonCard";

const WhyChooseUs = () => {
  return (
    <div>
      <div
        className=" px-5 md:px-10 py-12 md:py-28 bg-no-repeat bg-right-top rightPatternSize "
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/section2/right_pattern-webp.webp)",
        }}
      >
        <div className="space-y-5 text-blue-primary  md:w-4/5 md:mx-auto text-center">
          <h2 className="text-xl md:text-3xl 2xl:text-4xl font-extrabold mb-5 capitalize">
            Why Choose Us for Blockchain Web Development
          </h2>
          <p className="font-normal text-base md:text-lg leading-relaxed  ">
            Since from the day of our inception, we have directed our efforts in
            creating best-in-classed and value-added web solutions over
            blockchain to facilitate them with higher security and transparency.
          </p>
        </div>

        <div
          className="grid md:grid-cols-2 gap-y-10 gap-x-5 mt-20  lg:w-4/5 lg:mx-auto"
          style={{ justifyItems: "center" }}
        >
          <ReasonCard
            title="Peace of Mind"
            img="/Images/serviceDetails/Experienced-Blockchain-Developers-webp.webp"
            desc={`It frees the business administrators from the blockchain infrastructure management headaches. For this, a sufficiently skilled third-party team of blockchain experts is available round-the-clock to look for any bugs and issues.`}
          />
          <ReasonCard
            title="A pool of Experts"
            img="/Images/serviceDetails/Experienced-Blockchain-Developers-webp.webp"
            desc={`By partnering-up with a fully competent and skilled Blockchain as a Service (BaaS) provider, you can access a vast pool of knowledge and experience under-one-roof. As a whole, you get professional assistance cost-effectively.`}
          />
          <ReasonCard
            title="Offer Vast Scalability"
            img="/Images/serviceDetails/Experienced-Blockchain-Developers-webp.webp"
            desc={`Blockchain is the backbone of future technology, no matter what size of business you want to integrate, it offers massive scalability to adjust with the changing business needs as your business grows.`}
          />
          <ReasonCard
            title="Unmatched Security"
            img="/Images/serviceDetails/Experienced-Blockchain-Developers-webp.webp"
            desc={`Blockchain works on a decentralised ledger technology, which makes it immutable, fully transparent, and easily traceable. Blockchain is unquestionably a highly secured platform, but to implement it securely, you need experts.                    `}
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
