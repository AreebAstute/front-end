import React, { useState } from 'react'
import { BLACK_COLOR_CODE, WHITE_COLOR_CODE } from '../../../../../constants'
import * as THREE from "three";

const ColorPallete = ({selectedColor, setSelectedColor, item,model,key,loading}) => {

  const handleColor=(code)=>{
    setSelectedColor(code)
    console.log("objects", model.current)

    
    const stripeMesh=model.current.children.filter((item)=>item.name==="stripes")
    stripeMesh[0].children.map((item)=>{
        // item.material=new THREE.MeshPhongMaterial({color: code , reflectivity : 0 , shininess : 0.2})
        item.material=new THREE.MeshStandardMaterial({color: code})
        item.children.map((item)=>{
          // item.material=new THREE.MeshPhongMaterial({color: code , reflectivity : 0 , shininess : 0.2})
          item.material=new THREE.MeshStandardMaterial({color: code })
        })
      })
  }
  
  return (
    <button key={key} className={`w-8 h-8 mt-2  mx-2 rounded-full border-[1px] shadow-md mb-5 hover:scale-125  cursor-pointer disabled:cursor-not-allowed`}
        style={
        {
          outlineOffset: selectedColor ?selectedColor===item.code?'5.2px':"0.2px":"0.2px",
          outlineStyle: selectedColor? selectedColor===item.code ?'solid':"solid":"solid",
          outlineColor: WHITE_COLOR_CODE,
          borderColor:item.code,
          background:item.code,
          }}
        onClick={()=>handleColor(item.code)} 
        disabled={loading}
        >
    </button>
  )
}

export default ColorPallete