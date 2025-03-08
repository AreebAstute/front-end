import React, {useState, useEffect} from 'react'
import {BiLoaderAlt} from "react-icons/bi";
import {Axios} from "../../api";
import axios from "axios";
import { useParams } from 'react-router-dom';
import ModelViewer from "./ModelViewer";
import {Link} from "react-router-dom"

const ArViewer = ({setShowHeaderFooter}) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);
    const [data, setData] = useState(false);
    const {id} = useParams()

    const getModel = async () => {
        setLoading(true);
        setError(false);
        try{
            const result = await Axios.get("/api/main/ar-model/"+id, {requestId: "get-ar-model"});
            const url = result.data.payload.string_data;
            fetch(url)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], "model.gltf",{ type: "" })
                setData(file)
                setLoading(false);
            })
        } catch(e){
            if(e.response){
                setError(JSON.stringify(e.response.data.description))
            } else if(axios.isCancel(e)){

            } else{
                setError("Network Error");
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        setShowHeaderFooter(false);
        getModel()
        return () => {
            setShowHeaderFooter(true);
        }
    },[])

    return (
        <>
         <div className="w-full p-4 fixed top-0" style={{zIndex: 10001}}>
            <Link to="/">
            <img loading="lazy" src="/Images/logo-webp.webp" alt="logo" className="w-56"/>   
            </Link>   
        </div>
        {!loading && !error ?
            <ModelViewer data={URL.createObjectURL(data)}/>
        :
            <div className="bg-white fixed top-0 bottom-0 left-0 right-0 py-16 justify-center flex items-center" style={{zIndex: 1000}}>
                {loading && !error ? 
                    <BiLoaderAlt className="text-6xl text-green-primary animate-spin"/>    
                    : !loading && error ?
                    <div className="text-center">
                        <p className="text-base text-red-500">
                            {error}
                        </p>
                    </div>
                : null
            }
            </div>
        }
        </>
    )
}

export default ArViewer
