import React from "react";

const LandingSection = () => {
  return (
    <div>
      <div className="pt-20 lg:pt-28 h-screen w-screen   ">
        <div
          className="flex relative flex-col md:flex-row justify-center items-center lg:justify-between bg-cover  bg-no-repeat  px-8 md:px-32  h-full "
          style={{
            backgroundImage:
              "url('Images/serviceAssets/metaverse/landing-page-background-webp.webp')",
          }}
        >
          <div className="h-full flex flex-col  items-center md:items-start justify-center w-full    lg:w-4/6 xl:w-3/6 space-y-5 ">
            <div className="flex justify-center ">
              <div className="text-center lg:text-left">
                <div className="text-3xl lg:text-5xl space-y-8  justify-center  font-extrabold text-white">
                  <h1>Metaverse Development</h1>
                  <h2>and Consulting Service</h2>
                </div>
                <div className="mx-auto mt-8 ">
                  <p
                    className=" py-3 md:py-5  text-white text-xl lg:text-2xl font-light"
                    style={{ wordBreak: "break-word" }}
                  >
                    Utilize an exciting new spectrum of chances for establishing
                    relationships, buildingaudiences, and preparing for growth
                    in an evolving digital world
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="" style={{ zIndex: 1 }}>
            <img
              loading="lazy"
              alt="langing-chracter"
              className="landingCharacter mx-auto w-2/4 lg:w-4/5   "
              src="/Images/serviceAssets/metaverse/landing-page-character-webp.webp"
            />
          </div>
        </div>
        <div className="absolute bottom-0 ">
          <img
            loading="lazy"
            alt="Our-platforms-technologies-background"
            className="w-full"
            src="/Images/serviceAssets/metaverse/Our-platforms-technologies-background-webp.webp"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingSection;
