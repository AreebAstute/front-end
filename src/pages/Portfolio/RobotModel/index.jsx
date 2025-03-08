import React, { useEffect, useRef, useState } from 'react'
import { SHOES_MODEL_PALLETE } from '../../../constants'
import Model1 from './Model1'
import Model2 from './Model2'
import Model3 from './Model3'
import {BiLoaderAlt} from "react-icons/bi";
import ArViewer from '../ArViewer/index'

const ROBOT_MODEL_ARRAY =[
    {
        "id": "1",
        "name": "plant Model #1",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/robot_rocket.glb",
    },
    {
        "id": "2",
        "name": "plant Model #2",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/travel.glb",
    },
    {
        "id": "1",
        "name": "plant Model #3",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/astronaut-animation.glb",
    },
] 

const RobotSection = ({selectedModel}) => {
    const [selectedColor, setSelectedColor] = useState("")
    const [loading, setLoading] = useState(false)
    const [convertedModel,setConvertedModel]=useState(null) // I use this state to store exportedModel as an string either in array buffer or normak string

    const model = useRef(null);


    return (
        <div className="relative ml-1/5 h-screen w-full bg-no-repeat bg-cover " style={{ backgroundImage: "url(/Images/serviceAssets/3dModelPage/bottles_bg-webp.webp)" }}>
           <div className=''>
                {
                    loading &&
                    <div className='flex flex-col w-full  absolute top-1/2  justify-center items-center'>
                        <BiLoaderAlt className="animate-spin text-5xl text-white" />
                    </div>
                }
                {
                    selectedModel === 6 ?
                    <Model1 data={ROBOT_MODEL_ARRAY[0]} model={model} setLoading={setLoading}/>
                    :selectedModel === 7?
                    <Model2 data={ROBOT_MODEL_ARRAY[1]} model={model} setLoading={setLoading}/>
                    :selectedModel === 8?
                    <Model3 data={ROBOT_MODEL_ARRAY[2]} model={model} setLoading={setLoading}/>
                    :""
                }
                {/* <div className='absolute top-8 right-8 z-40 flex '>
                     <ArViewer name={`https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/robot_rocket.glb`} model={model.current} setConvertedModel={setConvertedModel} convertedModel={convertedModel}/>
                </div> */}
                </div>
        </div>
    )
}

export default RobotSection