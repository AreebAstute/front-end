import React, { useEffect, useRef, useState } from 'react'
import { SHOES_MODEL_PALLETE } from '../../../constants'
import BagModel1 from './BagModels/BagModel1'
import BagModel2 from './BagModels/BagModel2'
import BagModel3 from './BagModels/BagModel3'
import ColorsPallete from './ColorsPallete'
import { BiLoaderAlt } from "react-icons/bi";
import ArViewer from '../ArViewer'

const BAG_MODEL_ARRAY = [
    {
        "id": "1",
        "name": "plant Model #1",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Handbag1.glb",
    },
    {
        "id": "2",
        "name": "plant Model #2",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Handbag2.glb",
    },
    {
        "id": "1",
        "name": "plant Model #3",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/Handbag3.glb",
    },
]


const BagSection = ({selectedModel}) => {
    const [selectedColor, setSelectedColor] = useState("")
    const [loading, setLoading] = useState(false)
    const [convertedModel,setConvertedModel]=useState(null) // I use this state to store exportedModel as an string either in array buffer or normak string

    const model = useRef(null);




    return (
        <div className="relative ml-1/5 h-screen w-full bg-no-repeat bg-cover" style={{ backgroundImage: "url(/Images/serviceAssets/3dModelPage/bag_bg-webp.webp)" }}>
            <div className=''>
                {
                    loading &&
                    <div className='flex flex-col w-full absolute top-1/2  justify-center items-center'>
                        <BiLoaderAlt className="animate-spin text-5xl text-white" />
                    </div>
                }
                {
                    selectedModel === 3 ?
                        <BagModel1 data={BAG_MODEL_ARRAY[0]} model={model} setSelectedColor={setSelectedColor} setLoading={setLoading} selectedColor={selectedColor} />
                        : selectedModel === 4 ?
                            <BagModel2 data={BAG_MODEL_ARRAY[1]} model={model} setSelectedColor={setSelectedColor} setLoading={setLoading} />
                            : selectedModel === 5 ?
                                <BagModel3 data={BAG_MODEL_ARRAY[2]} model={model} setSelectedColor={setSelectedColor} setLoading={setLoading} />
                        : ""
                }
                  <div className='absolute top-2 right-2 z-40 flex'>
                    {
                        SHOES_MODEL_PALLETE.map((item, index) => (
                            <ColorsPallete setSelectedColor={setSelectedColor} selectedColor={selectedColor} selectedModel={selectedModel} item={item} model={model} loading={loading} key={`plantSection${index}`} />
                        ))
                    }
                </div>
                <div className='absolute top-16 right-4 z-40 flex '>
           
                     <ArViewer name={`https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/robot_rocket.glb`} model={model.current} setConvertedModel={setConvertedModel} convertedModel={convertedModel} selectedModel={selectedModel} />
                </div>
            </div>

        </div>
    )
}

export default BagSection