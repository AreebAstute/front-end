import React from "react";
import VideoModal from "../ModalVideo/ModalVideo";

const LevelOne = () => {
  return (
    <div
      className="md:px-10 xl:px-20 my-20 bg-no-repeat"
      style={{
        backgroundImage: "url(/Images/falling-gems/level1background-webp.webp)",
      }}
    >
      <div className="bg-white flex lg:flex-row flex-col justify-between mx-auto rounded-3xl shadow-md py-10 px-8 md:px-12 space-y-10">
        <div>
          <div className="relative md:w-4/5 lg:w-full mx-auto xl:mx-0 ">
            <img
              loading="lazy"
              alt="level one picture"
              className=""
              src="/Images/falling-gems/level 1 picture-webp.webp"
            />
            <h2 className="text-golden-text text-lg md:text-2xl 2xl:text-3xl font-bold absolute top-2 md:top-5 2xl:top-8 left-5 md:left-10   ">
              Level.1 Raisins
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <img
            className="mb-10 w-4/5 xl:w-4/5 mx-auto"
            loading="lazy"
            alt="fruits"
            src="/Images/falling-gems/fruits-webp.webp"
          />
          <h3 className="font-bold text-blue-dark text-3xl my-3 text-center">
            Falling Raisins
          </h3>
          <p className="text-blue-light text-lg md:text-xl text-center lg:w-10/12 mx-auto">
            Want to get fruits in your bucket for free of cost? Catch these
            fruits to score more!
          </p>
          <div className="border-b-4 border-blue-dark w-52 mx-auto mt-10" />
        </div>
      </div>

      <div
        className="border-blue-dark videoOverlay bg-blue-50 relative  border-2 h-60 lg:h-70 rounded-2xl shadow-md mt-20 p-10 bg-no-repeat bg-center bg-cover "
        style={{ backgroundImage: "url(/Images/falling-gems/sun-set-webp.webp)" }}
      >
        <VideoModal level="1" videoID={"0DYF0HD9GcE"} />
      </div>
    </div>
  );
};

export default LevelOne;
