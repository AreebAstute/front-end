import React, { useEffect, useState } from "react";
import { exportGltfModel } from "../../../../../utils";
import { AnimatePresence } from "framer-motion";
import QrCode from "./QrCode";
import { BiLoaderAlt } from "react-icons/bi";

const ArViewer = ({ name, model, setConvertedModel, convertedModel }) => {
  const handleExport = () => {
    console.log("name", model);
    console.log("name", name);
    console.log("name", setConvertedModel);
    exportGltfModel(model, name, setConvertedModel);
  };

  return (
    <div className="rounded-md">
      <div
        className="bg-green-primary w-20 rounded-md h-16 flex justify-center items-center cursor-pointer"
        onClick={() => handleExport()}
      >
        {
          // modelConverting?
          // <div className="flex justify-center w-full">
          //   <BiLoaderAlt className="text-white text-4xl animate-spin"/>
          // </div>
          // :
          <img
            loading="lazy"
            alt="ar-icon"
            src="/Images/serviceAssets/3dModelPage/ar-webp.webp"
            className="w-10 mx-auto h-8"
          />
        }
      </div>
      <div className="relative rounded-md">
        {convertedModel && (
          <AnimatePresence>
            <QrCode
              setConvertedModel={setConvertedModel}
              convertedModel={convertedModel}
            />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default ArViewer;
