import "../../../index.css";
import "./services.css";
import React from "react";
import ServicePageServiceCard from "./ServicePageServiceCard";

function OurServiceSection() {
  // const [style1, setStyle1] = useState({display: 'none'});
  // const [style2, setStyle2] = useState({display: 'none'});
  // const [style3, setStyle3] = useState({display: 'none'});
  // const [style4, setStyle4] = useState({display: 'none'});
  // const [style5, setStyle5] = useState({display: 'none'});
  // const [style6, setStyle6] = useState({display: 'none'});

  return (
    <>
      <div
        className="flex flex-col pb-10 our-service-bg-img-main pt-10"
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/back_pattern-webp.webp')",
        }}
      >
        <div
          className=" pt-10 bg-right-top bg-no-repeat rightPatternSize"
          style={{
            backgroundImage:
              "url('/Images/serviceAssets/section2/right_pattern-webp.webp')",
          }}
        >
          <div className=" flex flex-col items-center pb-10 pt-15" style={{}}>
            <div className="flex  justify-center ">
              <div
                className=" inline-block text-center our-service-bg-img-top"
                style={{
                  width: "70%",
                  backgroundImage:
                    "url('/Images/serviceAssets/section2/back_pattern-webp.webp')",
                }}
              >
                <p
                  style={{ color: "#0a3953" }}
                  className=" font-medium text-2xl"
                >
                  {" "}
                  Our Services{" "}
                </p>
                <h2
                  style={{ color: "#0a3953" }}
                  className="mt-1 font-extrabold text-2xl md:text-3xl"
                >
                  Preparing for your success, We provide truly optimum IT
                  solutions.
                </h2>
              </div>
            </div>
          </div>

          <div className=" items-stretch grid-view grid-margin-our-services ">
            <ServicePageServiceCard
              title="Custom Software Development"
              desc="Full-service Custom Software Development, Cloud Engineering, QA and DevOps
            company, specializing in the development of time-sensitive and innovative solutions."
              link="/services/custom-software-development"
              img="/Images/serviceAssets/section2/software_dev-webp.webp"
            />

            <ServicePageServiceCard
              title="Digital Transformation"
              desc="An experienced team to help you take advantage of new technologies and reap the benefits of being a digital enterprise."
              link="/services/digital-transformation-services"
              img="/Images/serviceAssets/section2/transformation-webp.webp"
            />

            <ServicePageServiceCard
              title="QA and Testing Services"
              desc="For 25 years Astute Softwares utilized an Integrated Quality Assurance practice to ensure the highest
            quality of our deliverables."
              link="/services/software-quality-assurance"
              img="/Images/serviceAssets/section2/QA-webp.webp"
            />

            <ServicePageServiceCard
              title="Mobile Application development"
              desc="Your customers want access to your business anytime, anywhere… Our TOP-NOTCH mobile app development talent will make sure they can."
              link="/services/mobile-application-development"
              img="/Images/serviceAssets/section2/app_dev-webp.webp"
            />

            <ServicePageServiceCard
              title="UI and UX Design"
              desc="We let the purpose of the particular web or mobile application drive its design and user experience to deliver
            high user acceptance and engagement rates of your product."
              link="/services/ui-and-ux-design"
              img="/Images/serviceAssets/section2/uiux-webp.webp"
            />

            <ServicePageServiceCard
              title="Maintenance & Support Services"
              desc="Our maintenance and support teams seamlessly blend with clients
            development and support practices ensuring smooth software operation and scalability."
              link="/services/maintenance-and-support"
              img="/Images/serviceAssets/section2/app_maintenance-webp.webp"
            />
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
}

export default OurServiceSection;
