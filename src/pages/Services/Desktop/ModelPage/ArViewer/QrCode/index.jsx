import React, {useState, useEffect} from 'react'
import QRCode from 'react-qr-code'
import {FaTimes} from "react-icons/fa";
import {BiLoaderAlt} from "react-icons/bi";
import {motion} from "framer-motion";
import { Axios } from '../../../../../../api';
import axios from "axios";
import { AR_MODEL_VIEWER_LINK } from '../../../../../../constants';

const QrCode = ({setConvertedModel, convertedModel}) => {
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState("");
    const [error, setError] = useState(false);

    const postModel = async () => {
        try{
            setLoading(true);
            setError(false);
            const result = await Axios.post("/api/ar-model",{string_data: convertedModel}, {requestId: "ar-model"});
            setId(result.data.payload.id)
            console.log(result);
            setLoading(false);
        } catch(e){
            if(e.response){
                setError(JSON.stringify(e.response.data.description))
            } else if(axios.isCancel(e)){

            } else{
                setError("Network error occured");
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        postModel()
    }, [])

    return (
        <motion.div 
            initial={{opacity: 0, top: "-100%"}}
            animate={{opacity: 1, top: "100%"}}
            exit={{opacity: 0, top: "-100%"}}
            className="transform mt-1 absolute w-56 rounded-md bg-black bg-opacity-25 flex justify-center items-start"
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
                        <div className="flex justify-end">
                                <FaTimes className="text-white text-2xl cursor-pointer" onClick={() => setConvertedModel("")}/>
                        </div>
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
                            <FaTimes className="text-white text-2xl cursor-pointer" onClick={() => setConvertedModel("")}/>
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
}

export default QrCode
