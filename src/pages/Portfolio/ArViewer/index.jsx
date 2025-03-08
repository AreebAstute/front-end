import React, { useEffect, useState } from "react";
import { exportGltfModel } from "../../../utils";
import { AnimatePresence } from "framer-motion";
import QrCode from "./QrCode";
import { BiLoaderAlt } from "react-icons/bi";
import { useDetectClickOutside } from "react-detect-click-outside";

const ArViewer = ({
  name,
  model,
  setConvertedModel,
  convertedModel,
  selectedModel,
}) => {
  const [clickImage, setClickImage] = useState(false);
  const ref = useDetectClickOutside({
    onTriggered: () => setConvertedModel(false),
  });

  const handleExport = () => {
    setClickImage(true);
    exportGltfModel(model, setConvertedModel, setClickImage);
  };

  useEffect(() => {
    setConvertedModel("");
    setClickImage(false);
  }, [selectedModel]);

  return (
    <div className="rounded-md relative">
      {/* <p className='text-white'>View In Ar</p> */}
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
            src="/Images/serviceAssets/3dModelPage/ar-webp.webp"
            loading="lazy"
            alt="ar-icon"
            className="w-10 mx-auto h-8"
          />
        }
      </div>
      {clickImage && !convertedModel && (
        <p className="text-white text-sm">Processing..</p>
      )}
      <div className="absolute -left-36 rounded-md" ref={ref}>
        {convertedModel && (
          <AnimatePresence>
            <QrCode
              setConvertedModel={setConvertedModel}
              convertedModel={convertedModel}
              setClickImage={setClickImage}
            />
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default ArViewer;
