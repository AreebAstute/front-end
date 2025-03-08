import React from "react";
import VideoModal from "../ModalVideo/ModalVideo";

const LevelOne = () => {
  return (
    <div
      className="md:px-10 xl:px-20 my-20 bg-no-repeat"
      style={{
        backgroundImage: "url(/Images/falling-gems/level3background-webp.webp)",
      }}
    >
      <div className="bg-white flex lg:flex-row flex-col items-center justify-between mx-auto rounded-3xl shadow-md py-10 px-8 md:px-12 space-y-10">
        <div>
          <div className="relative md:w-4/5 lg:w-full mx-auto xl:mx-0 ">
            <img
              alt="level 3 picture"
              loading="lazy"
              className=""
              src="/Images/falling-gems/level3 picture-webp.webp"
            />
            <h2 className="text-golden-text text-lg md:text-2xl 2xl:text-3xl font-bold absolute top-2 md:top-5 2xl:top-8 left-5 md:left-10  ">
              Level.3 Nerd
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img
            alt="level 3 objects"
            loading="lazy"
            className="mb-10 w-3/5 xl:w-3/5 mx-auto"
            src="/Images/falling-gems/level3 object-webp.webp"
          />
          <h3 className="font-bold text-blue-dark text-3xl my-3 text-center">
            Falling objects
          </h3>
          <p className="text-blue-light text-lg md:text-xl text-center lg:w-10/12 mx-auto">
            Being nerdy was never this exciting. Catch these alphabets to score
            more!
          </p>
          <div className="border-b-4 border-blue-dark w-52 mx-auto mt-10" />
        </div>
      </div>
      <div
        className="border-blue-dark videoOverlay bg-blue-50 relative  border-2 h-60 lg:h-70 rounded-2xl shadow-md mt-20 p-10 bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: "url(/Images/falling-gems/3rd-stage-webp.webp)" }}
      >
        <VideoModal level="3" videoID={"FebU9q3m7Oo"} />
      </div>
    </div>
  );
};

export default LevelOne;
