import React, { useEffect, useRef, useState } from "react";
import { SHOES_MODEL_PALLETE } from "../../../../../constants";
import Model1 from "./Model1";
import Model2 from "./Model2";
import Model3 from "./Model3";
import { BiLoaderAlt } from "react-icons/bi";
import ArViewer from "../ArViewer";

const ROBOT_MODEL_ARRAY = [
  {
    id: "1",
    name: "plant Model #1",
    // "model": "/models/robot_rocket.glb",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/robot_rocket.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/robot_rocket.glb",
  },
  {
    id: "2",
    name: "plant Model #2",
    // "model": "/models/travel.glb",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/travel.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/travel.glb",
  },
  {
    id: "1",
    name: "plant Model #3",
    // "model": "/models/astronaut-animation.glb",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/astronaut-animation.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/astronaut-animation.glb",
  },
];

const RobotSection = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [convertedModel, setConvertedModel] = useState(null); // I use this state to store exportedModel as an string either in array buffer or normak string

  const model = useRef(null);

  const [selectedModel, setSelectedModel] = useState(0);

  useEffect(() => {
    return () => {
      setSelectedColor("");
    };
  }, []);

  return (
    <div
      id="model-container"
      className=" flex flex-col space-x-3 lg:flex-row  justify-between items-center py-8 md:py-16  bg-cover bg-no-repeat  px-16 min-w-screen space-y-10 lg:space-y-0 min-h-screen "
      style={{
        backgroundImage:
          "url(/Images/serviceAssets/3dModelPage/bottles_bg-webp.webp)",
      }}
    >
      <div className="w-full lg:w-1/4 flex lg:flex-row flex-col pt-18 ">
        <div className="space-y-8">
          <h1 className="text-white font-bold text-4xl md:text-6xl 2xl:text-7xl ">
            Virtual Showrooms
          </h1>
          <p className="text-white font-normal text-base 2xl:text-2xl ">
            There is no one who loves pain itself
          </p>
          <ArViewer
            name={`Robot${selectedModel}.gltf`}
            model={model.current}
            setConvertedModel={setConvertedModel}
            convertedModel={convertedModel}
          />
        </div>
      </div>

      <div className="lg:w-1/2  flex lg:flex-row flex-col lg:items-center  justify-center">
        {loading && (
          <BiLoaderAlt className="absolute animate-spin text-5xl text-white" />
        )}
        {selectedModel === 0 ? (
          <Model1
            data={ROBOT_MODEL_ARRAY[0]}
            model={model}
            setLoading={setLoading}
          />
        ) : selectedModel === 1 ? (
          <Model2
            data={ROBOT_MODEL_ARRAY[1]}
            model={model}
            setLoading={setLoading}
          />
        ) : selectedModel === 2 ? (
          <Model3
            data={ROBOT_MODEL_ARRAY[2]}
            model={model}
            setLoading={setLoading}
          />
        ) : (
          ""
        )}
      </div>
      <div className="w-full lg:w-1/4 flex justify-start items-center lg:justify-end">
        <div className="flex flex-col sm:flex-row lg:flex-col md:space-x-3 items-start md:items-center lg:space-x-0 lg:space-y-3">
          <div
            className="min-h-200 min-w-200 bg-blue-primary rounded-xl cursor-pointer flex justify-center items-center  my-3 md:my-0"
            onClick={() => setSelectedModel(0)}
          >
            {/* <img src='/Images/serviceAssets/3dModelPage/Character-webp.webp' alt='robot-icon' className='w-200' /> */}
            <img
              loading="lazy"
              src="/Images/serviceAssets/3dModelPage/robot-webp.webp"
              alt="robot-icon"
              className="w-200"
            />
          </div>
          <div
            className="min-h-200 min-w-200 bg-white rounded-xl cursor-pointer flex justify-center items-center  my-3 md:my-0"
            onClick={() => setSelectedModel(1)}
          >
            <img
              loading="lazy"
              src="/Images/serviceAssets/3dModelPage/Character1-webp.webp"
              alt="robot-icon"
              className="w-200"
            />
          </div>
          <div
            className="min-h-200 min-w-200 bg-white rounded-xl cursor-pointer flex justify-center items-center  my-3 md:my-0"
            onClick={() => setSelectedModel(2)}
          >
            <img
              loading="lazy"
              src="/Images/serviceAssets/3dModelPage/Character2-webp.webp"
              alt="robot-icon"
              className="w-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotSection;
