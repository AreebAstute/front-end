// import "../../../index.css";
import "./aboutUS.css";

import CardSection from "./CardSection";
import ProgressBar from "./ProgressBar";

function SectionChooseUS() {
  return (
    <div className="mt-10 md:mt-0">
      <div className=" flex  justify-center">
        <div className=" section3-grid ">
          <CardSection
            number="01"
            title="Dev Ops"
            desc="Achieve a greater business agility and a faster time to market by eliminating bottlenecks in software
                development with our DevOps Services. "
          />
          <CardSection
            number="02"
            title="Block chain"
            desc="Enable trusted data exchange and workflow automation beyond the boundaries with distributed ledger technology and blockchain."
          />
          <CardSection
            number="03"
            title="Big Data"
            desc="Maximize your data investment, activate actionable business and consumers insights"
          />
        </div>
      </div>

      <div
        className=" section3-parent-div "
        style={{
          backgroundImage:
            "url('/Images/about-usAssets/why-chooseus-background-webp.webp')",
        }}
      >
        <div className="  flex lg:flex-row flex-col lg:mx-10 xl:mx-20 ">
          <div className="section3-text-div">
            <div className="section3-inner-text-div ">
              <p className="text-xl mb-5 text-font-primary font-normal">
                {" "}
                Who do we help?
              </p>
              <h2
                className="text-2xl font-extrabold mb-2 text-font-primary"
                style={{ letterSpacing: "2px" }}
              >
                {" "}
                We're on a Mission to <br />
                Change Your View
              </h2>
              <h3 className="text-lg md:text-2xl font-medium mb-10 text-font-primary">
                {" "}
                Companies that rely on technology for business growth. Our
                clients see us as a long-term strategic partner and trusted
                adviser for product design, development, DevOps, and cloud
                computing work.
              </h3>

              <h4 className="text-xl mb-3 text-font-primary font-normal">
                {" "}
                Web Developmant
              </h4>
              <ProgressBar width="90%" />

              <h4 className="text-xl mb-3 text-font-primary font-normal">
                {" "}
                Mobile Developmant
              </h4>
              <ProgressBar width="75%" />

              <h4 className="text-xl mb-3 text-font-primary font-normal">
                {" "}
                UI and UX Design
              </h4>
              <ProgressBar width="80%" />
            </div>
          </div>

          <div className="section3-image-div">
            <img
              loading="lazy"
              className=" section3-image-inner-div"
              src="/Images/about-usAssets/why-choose-us-webp.webp"
              alt="why-choose-us"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionChooseUS;
