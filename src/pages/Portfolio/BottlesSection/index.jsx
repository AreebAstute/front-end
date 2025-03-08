import React, { useEffect, useRef, useState } from 'react'
import { BOTTLE_MODEL_PALLETE, SHOES_MODEL_PALLETE } from '../../../constants'
import BottleModel1 from './BottleModel1'
import BottleModel2 from './BottleModel2'
import BottleModel3 from './BottleModel3'
import ColorsPallete from './ColorsPallete'
import { BiLoaderAlt } from "react-icons/bi";
import ArViewer from '../ArViewer'
// import '../../services.css';

const BOTTLE_MODEL_ARRAY = [
    {
        "id": "1",
        "name": "plant Model #1",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle1.glb",
    },
    {
        "id": "2",
        "name": "plant Model #2",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle2.glb",
    },
    {
        "id": "1",
        "name": "plant Model #3",
        // "model": "/models/Bottle3.glb",
        // "model": "https://pro-id.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle3.glb",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Bottle3.glb",
    },
]
const BottlesSection = ({selectedModel}) => {
    const [selectedColor, setSelectedColor] = useState("")
    const [loading, setLoading] = useState(false)
    const model = useRef(null);
    const [convertedModel,setConvertedModel]=useState(null) // I use this state to store exportedModel as an string either in array buffer or normak string



    return (
        <>
            <div className="relative ml-1/5 h-screen w-full bg-no-repeat bg-cover " style={{ backgroundImage: "url(/Images/serviceAssets/3dModelPage/robotsection_bg-webp.webp)" }}>
                <div className=''>
                    {
                        loading &&
                        <div className='flex justify-center w-full absolute top-1/2  items-center'>
                            <BiLoaderAlt className="animate-spin text-5xl text-white" />
                        </div>
                    }
                    {
                        selectedModel === 9 ?
                            <BottleModel1 data={BOTTLE_MODEL_ARRAY[0]} model={model} setLoading={setLoading} setSelectedColor={setSelectedColor} />
                            : selectedModel === 10 ?
                                <BottleModel2 data={BOTTLE_MODEL_ARRAY[1]} model={model} setLoading={setLoading} setSelectedColor={setSelectedColor} />
                                : selectedModel === 11 ?
                                    <BottleModel3 data={BOTTLE_MODEL_ARRAY[2]} model={model} setLoading={setLoading} setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
                                    : ""
                    }
                    <div className='absolute top-2 right-2 z-40 flex '>
                        {
                            BOTTLE_MODEL_PALLETE.map((item, index) => (
                                <ColorsPallete setSelectedColor={setSelectedColor} selectedColor={selectedColor} selectedModel={selectedModel} item={item} model={model} loading={loading} key={`bottleModel${index}`} />
                            ))
                        }
                    </div>
                    <div className='absolute top-16 right-4 z-40 flex '>
                     <ArViewer  model={model.current} setConvertedModel={setConvertedModel} convertedModel={convertedModel}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BottlesSection