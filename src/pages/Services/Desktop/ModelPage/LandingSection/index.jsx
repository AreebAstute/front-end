import React, { useState,useRef, useEffect } from 'react'
import { LANDING_MODEL_PALLETE, SHOES_MODEL_PALLETE, WHITE_COLOR_CODE } from '../../../../../constants'
import ColorPallete from './ColorsPallete'
import ShoesModel from './ShoesModel'
import {BiLoaderAlt} from "react-icons/bi";
import ArViewer from '../ArViewer'

const LandingSection = () => {

  const [selectedColor,setSelectedColor]=useState("")
  const [loading,setLoading]=useState(false)
  const [convertedModel,setConvertedModel]=useState(null) // I use this state to store exportedModel as an string either in array buffer or normak string

  const model = useRef(null);

  return (
    <div className=" flex flex-col xl:flex-row items-center  justify-between   py-8 md:py-16 lg:py-16 bg-cover bg-no-repeat min-h-screen  px-16 min-w-screen"  style={{backgroundImage:"url(/Images/serviceAssets/3dModelPage/landingBackground-webp.webp)"}}>
          <div className="space-y-8">
              <h1 className="text-white font-bold text-4xl md:text-6xl 2xl:text-7xl ">
                SUPERSTAR SHOES
              </h1>
              <p className="text-white font-normal text-base 2xl:text-2xl ">
              Cloud White / Core Black / Cloud White
              </p>
              <div className='space-y-5'>
                <h1 className='text-white font-normal text-base 2xl:text-xl'>Colors</h1>
                <ArViewer name={`Shoes.gltf`} model={model.current} setConvertedModel={setConvertedModel} convertedModel={convertedModel}/>
                {
                  LANDING_MODEL_PALLETE.map((item,index)=>(
                    <ColorPallete  setSelectedColor={setSelectedColor} selectedColor={selectedColor} item={item} model={model} loading={loading} key={`landingSection${index}`}/>
                  ))
                }
              </div>
          </div>
      <div className='flex  justify-center items-center '>
      {   
        loading&&
          <div className='mx-auto absolute'>
            <BiLoaderAlt className="animate-spin text-5xl text-white"/>
          </div>
      }
        <ShoesModel selectedColor={selectedColor} model={model} setLoading={setLoading}/>
      </div>
  </div>
  )
}

export default LandingSection