import React, { useEffect, useRef, useState } from "react";
import {
  BOTTLE_MODEL_PALLETE,
  SHOES_MODEL_PALLETE,
} from "../../../../../constants";
import BottleModel1 from "./BottleModel1";
import BottleModel2 from "./BottleModel2";
import BottleModel3 from "./BottleModel3";
import ColorsPallete from "./ColorsPallete";
import { BiLoaderAlt } from "react-icons/bi";
import "../../services.css";
import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
import ArViewer from "../ArViewer";
import QrCode from "../ArViewer/QrCode";
import { AnimatePresence } from "framer-motion";

const BOTTLE_MODEL_ARRAY = [
  {
    id: "1",
    name: "plant Model #1",
    // "model": "/models/Bottle1.glb",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle1.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle1.glb",
  },
  {
    id: "2",
    name: "plant Model #2",
    // "model": "/models/Bottle2.glb",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle2.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle2.glb",
  },
  {
    id: "1",
    name: "plant Model #3",
    // "model": "/models/Bottle3.glb",
    // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle3.glb",
    model:
      "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle3.glb",
  },
];
const BottlesSection = () => {
  const [selectedColor, setSelectedColor] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState(0);
  const [convertedModel, setConvertedModel] = useState(null); // I use this state to store exportedModel as an string either in array buffer or normak string
  const model = useRef(null);

  const clickHandler = (index) => {
    setSelectedModel(index);
  };

  return (
    <>
      <div
        className=" flex flex-col space-x-3 lg:flex-row  justify-between items-center pt-32 pb-32 lg:pb-64 xl:pb-72  bg-cover bg-no-repeat  px-16 min-w-screen space-y-10 lg:space-y-0 min-h-screen "
        style={{
          backgroundImage:
            "url(/Images/serviceAssets/3dModelPage/robotsection_bg-webp.webp)",
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
                name={`Bottle${selectedModel + 1}.gltf`}
                model={model}
                setConvertedModel={setConvertedModel}
                convertedModel={convertedModel}
              />
              {BOTTLE_MODEL_PALLETE.map((item, index) => (
                <ColorsPallete
                  setSelectedColor={setSelectedColor}
                  selectedColor={selectedColor}
                  selectedModel={selectedModel}
                  item={item}
                  model={model}
                  loading={loading}
                  key={`bottleModel${index}`}
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
            <BottleModel1
              data={BOTTLE_MODEL_ARRAY[0]}
              model={model}
              setLoading={setLoading}
              setSelectedColor={setSelectedColor}
            />
          ) : selectedModel === 1 ? (
            <BottleModel2
              data={BOTTLE_MODEL_ARRAY[1]}
              model={model}
              setLoading={setLoading}
              setSelectedColor={setSelectedColor}
            />
          ) : selectedModel === 2 ? (
            <BottleModel3
              data={BOTTLE_MODEL_ARRAY[2]}
              model={model}
              setLoading={setLoading}
              setSelectedColor={setSelectedColor}
              selectedColor={selectedColor}
            />
          ) : (
            ""
          )}
        </div>
        <div className="w-full lg:w-1/4 flex justify-start items-center lg:justify-end">
          <div className="flex flex-col sm:flex-row lg:flex-col md:space-x-3 items-start md:items-center lg:space-x-0 lg:space-y-3">
            <div
              className="min-h-200 min-w-200 bg-blue-primary rounded-xl cursor-pointer flex justify-center items-center   my-3 md:my-0"
              onClick={() => clickHandler(0)}
            >
              <img
                loading="lazy"
                src="/Images/serviceAssets/3dModelPage/bottle1-webp.webp"
                alt="plant-icon"
                className="w-200"
              />
            </div>

            <div
              className="min-h-200 min-w-200 bg-white rounded-xl cursor-pointer flex justify-center items-center   my-3 md:my-0"
              onClick={() => clickHandler(1)}
            >
              <img
                loading="lazy"
                src="/Images/serviceAssets/3dModelPage/bottle2-webp.webp"
                alt="plant-icon"
                className="w-200"
              />
            </div>
            <div
              className="min-h-200 min-w-200 bg-white rounded-xl cursor-pointer flex justify-center items-center   my-3 md:my-0"
              onClick={() => clickHandler(2)}
            >
              <img
                loading="lazy"
                src="/Images/serviceAssets/3dModelPage/bottle3-webp.webp"
                alt="plant-icon"
                className="w-200"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen  relative bg-gray-consultancy">
        <img
          loading="lazy"
          alt="consultancy_pattern"
          src="/Images/serviceAssets/metaverse/consultancy_pattern-webp.webp"
          className="w-full absolute -top-16 md:-top-32  lg:-top-64  "
        />
        <div
          className="relative flex flex-col justify-center h-full w-full items-center py-5 bg-gray-consultancy"
          style={{ zIndex: 100 }}
        >
          <div className="flex  justify-center px-3 ">
            <div className=" inline-block text-center  mt-20">
              <h1
                style={{ color: "#0a3953" }}
                className="my-5 font-extrabold text-3xl lg:text-5xl "
              >
                {" "}
                <span className="text-font-secondary font-extrabold text-3xl lg:text-5xl">
                  Yearning
                </span>{" "}
                For Consultancy?
              </h1>
              <div className=" flex justify-center">
                <h1
                  style={{ color: "#0a3953" }}
                  className="mt-1 font-normal text-base lg:text-xl md:px-24 wd-seventy"
                >
                  You've come to the right place. Enter your details to get
                  business inspiration, trending solutions and consulting tips
                  delivered to your inbox
                </h1>
              </div>

              <div className=" py-8 md:py-16 text-center space-y-3 md:space-y-0 consultency-flex">
                <input
                  className="w-full"
                  type="text"
                  id="ip2"
                  placeholder="Enter your Email"
                />
                <button
                  type="button"
                  className="btn-contact label-1 text-white items-center"
                  id="header-estimate-button"
                >
                  {" "}
                  Subscribe{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottlesSection;
