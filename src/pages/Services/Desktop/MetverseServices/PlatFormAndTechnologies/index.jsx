import React from "react";

const PlatFormAndTechnologies = () => {
  return (
    <>
      <div
        className="relative py-32 flex  flex-col lg:flex-row justify-center items-center lg:justify-between bg-cover  bg-no-repeat  px-8 md:px-32  h-full "
        style={{
          backgroundImage:
            "url('Images/serviceAssets/metaverse/landing-page-background-webp.webp')",
        }}
      >
        <div className=" h-full flex flex-col lg:flex-row items-center md:items-start  justify-between w-full space-y-5  ">
          <div className="flex justify-center ">
            <div className="text-center lg:text-left space-y-5">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold my-2 text-white">
                Our platforms & technologies
              </h2>
              <div className="">
                <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                  <img
                    loading="lazy"
                    alt="icon"
                    src="/Images/serviceAssets/metaverse/icon-webp.webp"
                    className="flex-shrink-0 w-4 h-4"
                  />
                  <div className="font-light">
                    HP, MagicLeap, MicrosoftHoloLens, Oculus/Meta, Pico, Vive
                  </div>
                </div>
                <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                  <img
                    loading="lazy"
                    alt="icon"
                    src="/Images/serviceAssets/metaverse/icon-webp.webp"
                    className="flex-shrink-0 w-4 h-4"
                  />
                  <div className="font-light">Decentraland, Sandbox.</div>
                </div>
                <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                  <img
                    loading="lazy"
                    alt="icon"
                    src="/Images/serviceAssets/metaverse/icon-webp.webp"
                    className="flex-shrink-0 w-4 h-4"
                  />
                  <div className="font-light">Eth, Polygon, Ripple.</div>
                </div>
                <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                  <img
                    loading="lazy"
                    alt="icon"
                    src="/Images/serviceAssets/metaverse/icon-webp.webp"
                    className="flex-shrink-0 w-4 h-4"
                  />
                  <div className="font-light">AWS, NVIDIA Cloud XR.</div>
                </div>
                <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                  <img
                    loading="lazy"
                    alt="icon"
                    src="/Images/serviceAssets/metaverse/icon-webp.webp"
                    className="flex-shrink-0 w-4 h-4"
                  />
                  <div className="font-light">Web3, WebXR.</div>
                </div>
                <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                  <img
                    loading="lazy"
                    alt="icon"
                    src="/Images/serviceAssets/metaverse/icon-webp.webp"
                    className="flex-shrink-0 w-4 h-4"
                  />
                  <div className="font-light">Unity, Unreal.</div>
                </div>
                <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                  <img
                    loading="lazy"
                    alt="icon"
                    src="/Images/serviceAssets/metaverse/icon-webp.webp"
                    className="flex-shrink-0 w-4 h-4"
                  />
                  <div className="font-light">Photon.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-no-repeat flex items-center  justify-center ">
            <img
              loading="lazy"
              alt="circle-image"
              src="/Images/serviceAssets/metaverse/circle-webp.webp"
              className="relative antiClockwiseSpin w-4/5 "
            />
            <img
              loading="lazy"
              alt="our-platforms-technologies"
              className="absolute w-200 sm:w-300 md:w-300 lg:w-350  "
              src="/Images/serviceAssets/metaverse/our-platforms-technologies-webp.webp"
            />
          </div>
        </div>
        <div className="absolute bottom-0">
          <img
            loading="lazy"
            alt="Our-platforms-technologies-background"
            className="w-full"
            src="/Images/serviceAssets/metaverse/Our-platforms-technologies-background-webp.webp"
          />
        </div>
      </div>
    </>
  );
};

export default PlatFormAndTechnologies;
