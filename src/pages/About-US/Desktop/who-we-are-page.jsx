// import "../../../index.css";
import "./aboutUS.css";
import SectionChooseUS from "./section3";

function WhoWeArePage() {
  return (
    <>
      <div className=" flex lg:flex-row flex-col ">
        <div className="whoWeAre-imageSection relative">
          <img
            loading="lazy"
            src="/Images/about-usAssets/who-we-50-expert-webp.webp"
            alt="who we are"
          />
        </div>

        <div
          className="WhoWeAre-textSection lg:pt-20 rightPatternSize"
          style={{
            backgroundSize: "15%",
            backgroundImage:
              "url('/Images/serviceAssets/section2/right_pattern-webp.webp')",
          }}
        >
          <div className="textSectionStyle">
            <div
              className="bg-no-repeat py-5 bg-left-top pt-20"
              style={{
                backgroundImage:
                  "url('/Images/serviceAssets/section2/back_pattern-webp.webp')",
              }}
            >
              <p className="text-xl mb-2 text-font-primary font-normal">
                {" "}
                Who We Are
              </p>
            </div>
            <h2
              className="text-2xl font-extrabold mb-2 text-font-primary"
              style={{ letterSpacing: "2px" }}
            >
              {" "}
              We're on a Mission to <br />
              Bring you The Innovation
            </h2>
            <h3 className="text-2xl font-medium mb-10 text-font-primary">
              {" "}
              We take care of all the technology so you can focus on what you do
              best
            </h3>
            <p
              className="text-lg font-medium text-font-primary"
              style={{ letterSpacing: "1px" }}
            >
              Our team of 50+ experienced software engineers, developers, UX
              architects, and designers like to produce impactful software. We
              create software that is used by millions of users, in sectors
              spanning Education, Technology, Healthcare, Travel and beyond.
            </p>
          </div>
        </div>
      </div>
      <SectionChooseUS />
    </>
  );
}

export default WhoWeArePage;
