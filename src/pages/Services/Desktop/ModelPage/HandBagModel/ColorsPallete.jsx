import React, { useState } from 'react'
import { BLACK_COLOR_CODE, WHITE_COLOR_CODE } from '../../../../../constants'
import * as THREE from "three";

const ColorPallete = ({selectedColor, setSelectedColor, item,model,key,loading,selectedModel}) => {

  const handleColor=(code)=>{
    setSelectedColor(code)
    if(selectedModel===0){
      const baseMesh=model.current.children.find((item)=>item.name==="base")
      //loading texture

      // const loader = new THREE.TextureLoader();
      // // const normalTexture = loader.load('textures/BagModel/Model1/Material.001-Normal-OpenGL-webp.webp')
      // const normalTexture = loader.load('textures/BagModel/Model1/0b0a413dbcb89fb50ab6cfce51808737-webp.webp')
      // // const roughnessTexture = loader.load('textures/BagModel/Model1/Material.001_Roughness-webp.webp')
      // const roughnessTexture = loader.load('textures/BagModel/Model1/BlackLeather01_2K_Roughness-webp.webp')
      // const aoTexture = loader.load('textures/BagModel/Model1/Material.001-Mixed-AO-webp.webp')
      // const metalicTexture = loader.load('textures/BagModel/Model1/Material.001Metallic-webp.webp')
      // const displacementTexture = loader.load('textures/BagModel/Model1/Material.001Height-webp.webp')\


      baseMesh.children.map((item)=>{
        if(item.isMesh && item.name!="NurbsPath003" && item.name!="Cylinder002"  ){
          
          // item.material = new THREE.MeshStandardMaterial({color: code, 
          //   normalMap : item.name==='Cube001'&& normalTexture,
          //   normalMapType:THREE.ObjectSpaceNormalMap, 
          //   roughnessMap : roughnessTexture , 
          //   aoMap:aoTexture, 
          //   metalnessMap : metalicTexture,
          //   displacementMap:displacementTexture,
          //   displacementScale: 0.005

          // })   
          //  item.material = new THREE.MeshStandardMaterial({color:code});
           item.material.color = new THREE.Color(code);
        }
      })
    }else if(selectedModel===1){      
      const bagLayer=model.current.children.find((item)=>item.name==="bag")
      const loader = new THREE.TextureLoader();
      const normalTexture = loader.load('textures/BagModel/Model2/Material.001_Normal_OpenGL-webp.webp')
      // const roughnessTexture = loader.load('textures/BagModel/Model2/Material.001_Roughness-webp.webp')
      const roughnessTexture = loader.load('textures/BagModel/Model2/fabric_111_roughness-2K-webp.webp')
      const aoTexture = loader.load('textures/BagModel/Model2/Material.001_Mixed_AO-webp.webp')
      const metalicTexture = loader.load('textures/BagModel/Model2/Material.001_Metallic-webp.webp')
      const displacementTexture = loader.load('textures/BagModel/Model2/Material.001_Height-webp.webp')


      bagLayer.children.map((item)=>{
        if(item.isMesh){
          
          // item.material = new THREE.MeshStandardMaterial({color: code,
          //   // map : normalTexture , 
          //   // roughnessMap : roughnessTexture , 
          //   // aoMap:aoTexture, 
          //   // metalnessMap : metalicTexture,
          //   // displacementMap:displacementTexture,
          //   // displacementScale: 0.005
          
          // })
          item.material.color=new THREE.Color(code)
        }
      })
    }else if(selectedModel ===2){
      console.log("model",model.current)
      const baseLayer=model.current.children.find((item)=>item.name==="base")

      const loader = new THREE.TextureLoader();
      const normalTexture = loader.load('textures/BagModel/Model3/texture_Normal_OpenGL-webp.webp')
      // const roughnessTexture = loader.load('textures/BagModel/Model3/texture_Roughness-webp.webp')
      const roughnessTexture = loader.load('textures/BagModel/Model3/grey-leather-texture-can-be-use-as-background_35652-2315-webp.webp')
      const aoTexture = loader.load('textures/BagModel/Model3/texture_Mixed_AO-webp.webp')
      const metalicTexture = loader.load('textures/BagModel/Model3/texture_Metallic-webp.webp')
      const displacementTexture = loader.load('textures/BagModel/Model3/texture_Height-webp.webp')

      baseLayer.children.map((item)=>{
        if(item.isMesh ){
          // item.material = new THREE.MeshStandardMaterial({color: code,
          //   // normalMap : normalTexture , 
          //   // roughnessMap : roughnessTexture , 
          //   // aoMap:aoTexture, 
          //   // metalnessMap : metalicTexture,
          //   // displacementMap:displacementTexture,
          //   // displacementScale: 0.005
          // })
          item.material.color=new THREE.Color(code)
        }
        
      })
    }


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