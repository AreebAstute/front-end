// import "../../../index.css";
import "./services.css";
import ConsultancySection from "./consultancy-section";
import { Link } from "react-router-dom";
import { useState } from "react";
import cardPatrren from "../../../images/cart_pattern-webp.webp";

function ChooseUs() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className="flex flex-col bg-contain bg-no-repeat leftPatternSize"
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/section2/left_pattern-webp.webp')",
        }}
      >
        <div className=" flex flex-col items-center py-5" style={{}}>
          <div className="flex  justify-center ">
            <div className=" inline-block text-center ">
              <p
                style={{ color: "#0a3953" }}
                className=" font-medium text-2xl "
              >
                {" "}
                Why Choose Us{" "}
              </p>
              <h2
                style={{ color: "#0a3953" }}
                className="my-5 font-extrabold px-8 md:px-0 text-2xl md:text-3xl "
              >
                {" "}
                Work with a Dedicated Software Development Team
              </h2>
              <div className=" flex justify-center">
                <h3
                  style={{ color: "#0a3953" }}
                  className="mt-1 font-normal text-xl sm:px-24 px-5 wd-seventy"
                >
                  {" "}
                  We craft unique digital experiences. With more than twenty
                  years of knowladge and experties,we design and code clean
                  softwares!
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div></div>

        <div
          className="items-stretch grid-view_choose-us grid-margin-choose-us"
          style={{ marginTop: "3%" }}
        >
          <Card
            link="/services/blockchain-solutions"
            image="/Images/serviceAssets/section3/blockchain-webp.webp"
            alt="blockchain"
            text="Block Chain"
            custom_className="-mt-6"
          />
          <Card
            link="/services/devops-services"
            image="/Images/serviceAssets/section3/devops-webp.webp"
            alt="devops"
            text="DevOps Services"
          />
          <Card
            link="/services/big-data-consulting-services"
            image="/Images/serviceAssets/section3/big_data-webp.webp"
            alt="big_data"
            text="Big Data"
            custom_className="-mt-6"
          />
          <Card
            link="/metaverse"
            image="/Images/serviceAssets/section3/metaverse-icon-webp.webp"
            alt="metaverse-icon"
            text="Metaverse"
          />
          <Card
            link="/augmented-reality"
            image="/Images/serviceAssets/section3/ar-icon-webp.webp"
            alt="augmented_reality"
            text="Augmented Reality"
            custom_className="-mt-4"
          />
          <Card
            link="/3d-modelling"
            image="/Images/serviceAssets/section3/3d-modeling-icon-webp.webp"
            alt="3d_model_icon"
            text="3d Modeling"
            custom_className="-mt-6"
          />

          {/* ---------------- helper div for mantaining size of last row when grid shifted to grid-col-2 */}

          <div className="h-full hide-helper  card-helper relative bg-contain bg-no-repeat bg-left-bottom">
            <div className="container text-center items-center ">
              <div className="helper-img-width"></div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------------------------- Consultancy Section------------------------------------------- */}

      <ConsultancySection></ConsultancySection>
    </>
  );
}

export default ChooseUs;

const Card = ({ link, image, text, alt, custom_class }) => {
  const [active, setActive] = useState(false);

  return (
    <Link
      to={`${link}`}
      className="h-full card-choose-page relative bg-contain bg-no-repeat bg-left-bottom"
    >
      <div
        className=" h-full relative rounded-lg hover:bg-gray-abc"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <div className="flex  flex-col   pt-8 text-center relative z-20 ">
          <div className="">
            <img
              loading="lazy"
              className="inline-block bg-contain img-width-ln"
              src={`${image}`}
              alt={`${alt}`}
            ></img>
            <h3
              className={`font-extrabold text-lg text-font-primary ${
                active && !custom_class
                  ? "-mt-8"
                  : active && custom_class
                  ? `${custom_class}`
                  : ""
              }`}
            >
              {text}
            </h3>
            <p className="padding-detail-text py-3 hoverText text-sm lg:text-base text-gray-text font-medium"></p>
          </div>
        </div>
        <img
          loading="lazy"
          className="bottom-0 absolute rounded-lg"
          src={cardPatrren}
          alt={`${alt}`}
        ></img>
      </div>
    </Link>
  );
};
