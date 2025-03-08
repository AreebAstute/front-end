import React from "react";

const Momemntum = () => {
  return (
    <>
      <div
        className="py-16 flex  flex-col lg:flex-row justify-center items-center lg:justify-between bg-cover  bg-no-repeat  px-8 md:px-32 space-x-10 space-y-10  h-full "
        style={{
          backgroundImage:
            "url('/Images/serviceAssets/metaverse/landing-page-background-webp.webp')",
        }}
      >
        <div className="h-full lg:w-1/2  flex flex-col  items-center md:items-start  space-y-5 ">
          <div className="w-full lg:w-4/5 flex flex-col text-center lg:text-left  space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl 2xl:text-4xl font-extrabold my-2 text-white">
                Momentum
              </h2>
              <p className="text-white font-light text-lg lg:text-xl">
                {" "}
                Modern business is at a crosroads in the age of digital
                innovation:
              </p>
            </div>

            <div className="space-y-3">
              <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/icon-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light">
                  Customer-brand interactions are changing quickly.
                </div>
              </div>
              <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/icon-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light">
                  We're rushing toward a future where digital and physical
                  encounters are closer than ever.
                </div>
              </div>
              <div className="text-white text-lg  py-0 lg:py-2 lg:text-justify space-x-2 flex space-x-4 items-center">
                <img
                  loading="lazy"
                  alt="icon"
                  src="/Images/serviceAssets/metaverse/icon-webp.webp"
                  className="flex-shrink-0 w-4 h-4"
                />
                <div className="font-light">
                  To stay competitive and expand, we need to take bold,
                  forward-thinking action as we scale and build in the next
                  digital frontier.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-600 ">
          <iframe
            src="https://player.vimeo.com/video/779520218?h=07fc9f6cb2&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&muted=1&autoplay=1&loop=1"
            width="100%"
            height="100%"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Office in Metaverse | Astute Software&amp;#039;s Virtual Office"
            style={{ borderRadius: "12px" }}
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Momemntum;
