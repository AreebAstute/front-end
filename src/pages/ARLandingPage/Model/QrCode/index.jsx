import React, { useState, useEffect } from 'react'
import QRCode from 'react-qr-code'
import { FaTimes } from "react-icons/fa";
import { BiLoaderAlt } from "react-icons/bi";
import { motion } from "framer-motion";
import { AR_MODEL_VIEWER_LINK } from '../../../../constants';

const QrCode = ({ setTooltipOpen, tooltipOpen }) => {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [axiosInstance, setAxiosInstance] = useState(null);

  useEffect(() => {
    import('axios').then((module) => {
      setAxiosInstance(module.default);
    });
  }, []);

  const postModel = async () => {
    try {
      if (!axiosInstance) {
        // Wait or retry until axiosInstance is set
        return;
      }
      setLoading(true);
      setError(false);
      const result = await axiosInstance.post(
        "/api/main/ar-model",
        { string_data: tooltipOpen },
        { requestId: "ar-model" }
      );
      setId(result.data.payload.id);
      console.log(result);
      setLoading(false);
    } catch (e) {
      if (e.response) {
        setError(JSON.stringify(e.response.data.description));
      } else if (axiosInstance && axiosInstance.isCancel(e)) {
        // Handle cancellation if needed
      } else {
        setError("Network error occurred");
      }
      setLoading(false);
    }
  };

  useEffect(() => {
    postModel();
  }, [axiosInstance]);

  return (
    <motion.div 
        initial={{opacity: 0, top: "-100%"}}
        animate={{opacity: 1, top: "100%"}}
        exit={{opacity: 0, top: "-100%"}}
        className="transform -translate-x-full top-16 -left-12 absolute w-56 bg-black bg-opacity-25 flex justify-center items-start"
        style={{zIndex: 51}}
    >
        <div className="p-4 bg-green-primary rounded-md shadow-lg w-full">
            {loading && !error ?
                <>
                    <div className="flex justify-center w-full">
                        <BiLoaderAlt className="text-white text-4xl animate-spin"/>
                    </div>
                </>
            :!loading && error ?
                <>
                    <p className="text-sm text-white text-center mb-4">
                        An Error Occured!
                    </p>
                    <div className="flex items-center justify-center">
                        <button className="py-2 px-4 bg-white text-green-primary shadow-md rounded-md" onClick={postModel}>
                            Retry
                        </button>
                    </div>
                </>
            : !loading && !error ?
                <>
                    <div className="flex justify-end">
                        <FaTimes className="text-white text-2xl cursor-pointer" onClick={() => setTooltipOpen(false)}/>
                    </div>
    
                    <h3 className="text-white text-base font-bold text-center mb-4">
                        Scan the QR code below and you'll be taken to the model's AR page.
                    </h3>
                    <div className="justify-center mb-4 hidden md:flex">
                        <QRCode
                            value={`${AR_MODEL_VIEWER_LINK}/${id}`}
                            size={100}
                        />
                    </div>
                    <div className="text-center block md:hidden mb-4">
                        <a target="_blank" rel="noopener noreferrer" href={`${AR_MODEL_VIEWER_LINK}/${id}`} className="text-white text-sm font-bold">View Model</a>
                    </div>
                    <p className="text-xs text-gray-200 ">
                        In order for AR to work, make sure you are running a latest Android device with chrome version 81 or above.
                    </p>
                </>
            :
                null
            }
        </div>            
    </motion.div>
    )
};

export default QrCode;
