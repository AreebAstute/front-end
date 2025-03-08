import React, { useEffect, useRef, useState } from 'react'
import PlantModel1 from './PlantModels/Plant1'
import PlantModel2 from './PlantModels/Plant2'
import PlantModel3 from './PlantModels/Plant3'
import ColorsPallete from './ColorsPallete'
import { BiLoaderAlt } from "react-icons/bi";
import { PLANT_MODEL_PALLETE } from '../../../constants'
import ArViewer from '../ArViewer'

const PLANT_MODEL_ARRAY = [
    {
        "id": "1",
        "name": "plant Model #1",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/plant1.glb",
    },
    {
        "id": "2",
        "name": "plant Model #2",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/plant2.glb",
    },
    {
        "id": "1",
        "name": "plant Model #3",
        "model": "https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/plant3.glb",
    },
]

const PlantSection = ({ selectedModel }) => {
    const [selectedColor, setSelectedColor] = useState("")
    const [loading, setLoading] = useState(false)
    const [convertedModel,setConvertedModel]=useState(null) // I use this state to store exportedModel as an string either in array buffer or normak string


    const model = useRef(null);

    return (
        <div className=" relative ml-1/5 h-screen bg-no-repeat bg-cover " style={{ backgroundImage: "url(/Images/serviceAssets/3dModelPage/plantBackground-webp.webp)" }}>
            <div className=''>
                {
                    loading &&
                    <div className='flex flex-col absolute left-1/2 top-1/2  justify-center items-center'>
                        <BiLoaderAlt className="animate-spin text-5xl text-white" />
                    </div>
                }
                {
                    selectedModel === 0 ?
                        <PlantModel1 data={PLANT_MODEL_ARRAY[0]} model={model} setLoading={setLoading} setSelectedColor={setSelectedColor} />
                        : selectedModel === 1 ?
                            <PlantModel2 data={PLANT_MODEL_ARRAY[1]} model={model} setLoading={setLoading} setSelectedColor={setSelectedColor} />
                            : selectedModel === 2 ?
                                <PlantModel3 data={PLANT_MODEL_ARRAY[2]} model={model} setLoading={setLoading} setSelectedColor={setSelectedColor} />
                                : ""
                }
                
                <div className='absolute top-2 right-2 z-40 flex '>
                    {/* <h1 className='text-white'>Colors</h1> */}
                    {
                        PLANT_MODEL_PALLETE.map((item, index) => (
                            <ColorsPallete setSelectedColor={setSelectedColor} selectedColor={selectedColor} item={item} model={model} loading={loading} key={`plantSection${index}`} selectedModel={selectedModel} />
                            ))
                    }
                </div>
                <div className='absolute top-16 right-4 z-40 flex '>
                     <ArViewer  model={model.current} setConvertedModel={setConvertedModel} convertedModel={convertedModel}/>
                </div>
            </div>
        </div>
    )
}

export default PlantSection