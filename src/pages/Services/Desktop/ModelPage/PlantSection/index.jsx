import React, { useEffect, useRef, useState } from "react";
import { PLANT_MODEL_PALLETE } from "../../../../../constants";
import PlantModel1 from "./PlantModels/Plant1";
import PlantModel2 from "./PlantModels/Plant2";
import PlantModel3 from "./PlantModels/Plant3";
import ColorsPallete from "./ColorsPallete";
import { BiLoaderAlt } from "react-icons/bi";
import ArViewer from "../ArViewer";

const PLANT_MODEL_ARRAY = [
  {
    id: "1",
    name: "plant Model #1",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/plant1.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/plant1.glb",
  },
  {
    id: "2",
    name: "plant Model #2",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/plant2.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/plant2.glb",
  },
  {
    id: "1",
    name: "plant Model #3",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/plant3.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/plant3.glb",
  },
];

const PlantSection = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [convertedModel, setConvertedModel] = useState(null); // I use this state to store exportedModel as an string either in array buffer or normak string

  const model = useRef(null);

  const [selectedModel, setSelectedModel] = useState(0);

  return (
    <div
      className=" flex flex-col space-x-3 lg:flex-row  justify-between items-center py-8 md:py-16  bg-cover bg-no-repeat  px-16 min-w-screen space-y-10 lg:space-y-0 min-h-screen "
      style={{
        backgroundImage:
          "url(/Images/serviceAssets/3dModelPage/plantBackground-webp.webp)",
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
          <div className="space-y-8">
            <h1 className="text-white font-normal text-base 2xl:text-xl">
              Colors
            </h1>
            <ArViewer
              name={`Plant${selectedModel}.gltf`}
              model={model.current}
              setConvertedModel={setConvertedModel}
              convertedModel={convertedModel}
            />
            {PLANT_MODEL_PALLETE.map((item, index) => (
              <ColorsPallete
                setSelectedColor={setSelectedColor}
                selectedColor={selectedColor}
                item={item}
                model={model}
                loading={loading}
                key={`plantSection${index}`}
                selectedModel={selectedModel}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2  flex lg:flex-row flex-col lg:items-center  justify-center">
        {loading && (
          <BiLoaderAlt className="absolute animate-spin text-5xl text-white" />
        )}
        {selectedModel === 0 ? (
          <PlantModel1
            data={PLANT_MODEL_ARRAY[0]}
            model={model}
            setLoading={setLoading}
            setSelectedColor={setSelectedColor}
          />
        ) : selectedModel === 1 ? (
          <PlantModel2
            data={PLANT_MODEL_ARRAY[1]}
            model={model}
            setLoading={setLoading}
            setSelectedColor={setSelectedColor}
          />
        ) : selectedModel === 2 ? (
          <PlantModel3
            data={PLANT_MODEL_ARRAY[2]}
            model={model}
            setLoading={setLoading}
            setSelectedColor={setSelectedColor}
          />
        ) : (
          ""
        )}
      </div>
      <div className="w-full lg:w-1/4 flex justify-start items-center lg:justify-end">
        <div className="flex flex-col sm:flex-row lg:flex-col md:space-x-3 items-start md:items-center lg:space-x-0 lg:space-y-3">
          <div
            className="bg-blue-primary  rounded-xl cursor-pointer flex justify-center items-center my-3 md:my-0"
            onClick={() => setSelectedModel(0)}
          >
            <img
              loading="lazy"
              src="/Images/serviceAssets/3dModelPage/plant-webp.webp"
              alt="plant-icon"
              className="w-180"
            />
          </div>
          <div
            className=" bg-white rounded-xl cursor-pointer flex justify-center items-center my-3 md:my-0 "
            onClick={() => setSelectedModel(1)}
          >
            <img
              loading="lazy"
              src="/Images/serviceAssets/3dModelPage/plant2-webp.webp"
              alt="plant-icon"
              className="w-200"
            />
          </div>
          <div
            className="bg-white rounded-xl cursor-pointer flex justify-center items-center my-3 md:my-0 "
            onClick={() => setSelectedModel(2)}
          >
            <img
              loading="lazy"
              src="/Images/serviceAssets/3dModelPage/plant3-webp.webp"
              alt="plant-icon"
              className="w-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantSection;
