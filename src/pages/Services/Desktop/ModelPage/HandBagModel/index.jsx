import React, { useEffect, useRef, useState } from "react";
import { SHOES_MODEL_PALLETE } from "../../../../../constants";
import BagModel1 from "./BagModels/BagModel1";
import BagModel2 from "./BagModels/BagModel2";
import BagModel3 from "./BagModels/BagModel3";
import ColorsPallete from "./ColorsPallete";
import { BiLoaderAlt } from "react-icons/bi";
import ArViewer from "../ArViewer";

const BAG_MODEL_ARRAY = [
  {
    id: "1",
    name: "plant Model #1",
    // "model": "/models/Handbag1.glb",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/Handbag1.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Handbag1.glb",
  },
  {
    id: "2",
    name: "plant Model #2",
    // "model": "/models/Handbag2.glb",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/Handbag2.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Handbag2.glb",
  },
  {
    id: "1",
    name: "plant Model #3",
    // "model": "/models/Handbag3.glb",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/Handbag3.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Handbag3.glb",
  },
];

const BagSection = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [convertedModel, setConvertedModel] = useState(null); // I use this state to store exportedModel as an string either in array buffer or normak string

  const model = useRef(null);

  const [selectedModel, setSelectedModel] = useState(0);

  const clickHandler = (index) => {
    setSelectedModel(index);
  };

  return (
    <div
      className=" flex flex-col space-x-3 lg:flex-row  justify-between items-center py-8 md:py-16  bg-cover bg-no-repeat  px-16 min-w-screen space-y-10 lg:space-y-0 min-h-screen "
      style={{
        backgroundImage: "url(/Images/serviceAssets/3dModelPage/bag_bg-webp.webp)",
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
              name={`bag${selectedModel + 1}.gltf`}
              model={model.current}
              setConvertedModel={setConvertedModel}
              convertedModel={convertedModel}
            />
            {SHOES_MODEL_PALLETE.map((item, index) => (
              <ColorsPallete
                setSelectedColor={setSelectedColor}
                selectedColor={selectedColor}
                selectedModel={selectedModel}
                item={item}
                model={model}
                loading={loading}
                key={`plantSection${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:w-1/2  flex lg:flex-row flex-col lg:items-center  justify-center relative">
        {loading && (
          <BiLoaderAlt className="absolute animate-spin text-5xl text-white" />
        )}
        {selectedModel === 0 ? (
          <BagModel1
            data={BAG_MODEL_ARRAY[0]}
            model={model}
            setSelectedColor={setSelectedColor}
            setLoading={setLoading}
            selectedColor={selectedColor}
          />
        ) : selectedModel === 1 ? (
          <BagModel2
            data={BAG_MODEL_ARRAY[1]}
            model={model}
            setSelectedColor={setSelectedColor}
            setLoading={setLoading}
          />
        ) : selectedModel === 2 ? (
          <BagModel3
            data={BAG_MODEL_ARRAY[2]}
            model={model}
            setSelectedColor={setSelectedColor}
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
            onClick={() => clickHandler(0)}
          >
            <img
              loading="lazy"
              src="/Images/serviceAssets/3dModelPage/bag1-webp.webp"
              alt="bag-icon"
              className="w-200"
            />
          </div>
          <div
            className="min-h-200 min-w-200 bg-white rounded-xl cursor-pointer flex justify-center items-center  my-3 md:my-0"
            onClick={() => clickHandler(1)}
          >
            <img
              loading="lazy"
              src="/Images/serviceAssets/3dModelPage/bag2-webp.webp"
              alt="bag-icon"
              className="w-200"
            />
          </div>
          <div
            className="min-h-200 min-w-200 bg-white rounded-xl cursor-pointer flex justify-center items-center  my-3 md:my-0"
            onClick={() => clickHandler(2)}
          >
            <img
              loading="lazy"
              src="/Images/serviceAssets/3dModelPage/bag3-webp.webp"
              alt="bag-icon"
              className="w-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BagSection;
