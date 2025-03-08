import React, { useEffect, useState } from 'react'
import { BLACK_COLOR_CODE, WHITE_COLOR_CODE } from '../../../constants'

const ColorPallete = ({selectedColor, setSelectedColor, item,model,key,loading,selectedModel}) => {
  const [THREE, setTHREE] = useState(null);

  useEffect(() => {
    import('three').then((module) => {
      setTHREE(module);
    });
  }, []);

  const handleColor=(code)=>{
    setSelectedColor(code)

    if (!THREE || !model.current) return;

    if(selectedModel===0){
      const PlantMesh=model.current.children.find((item)=>item.name==="pod")
      // PlantMesh[0].children[0].material = new THREE.MeshStandardMaterial({color: code})
      console.log("plant mesh", PlantMesh)
      // PlantMesh[0].children[0].material.color=new THREE.Color(code)
      PlantMesh.material.color=new THREE.Color(code)
    }else if(selectedModel===1){
      const podMesh=model.current.children.filter((item)=>item.name==="pod")
      // podMesh[0].material = new THREE.MeshStandardMaterial({color: code})
      podMesh[0].material.color=new THREE.Color(code)

    }else if(selectedModel ===2){
      const podMesh=model.current.children.filter((item)=>item.name==="pod")
      // podMesh[0].material = new THREE.MeshStandardMaterial({color: code , })
      podMesh[0].material.color=new THREE.Color(code)
      podMesh.receiveShadow=true
      podMesh.castShadow=true
    }


  }
  
  return (
    <button key={key} className={` relative w-8 h-8 mt-2  mx-2 rounded-full border-[1px] shadow-md mb-5 hover:scale-125  cursor-pointer disabled:cursor-not-allowed`}
        style={
          {
            // outlineOffset: selectedColor ?selectedColor===item.code?'5.2px':"0.2px":"0.2px",
            // outlineStyle: selectedColor? selectedColor===item.code ?'solid':"solid":"solid",
            // outlineColor: WHITE_COLOR_CODE,
            // borderColor:item.code,
            background:item.code,
          }}
        onClick={()=>handleColor(item.code)} 
        disabled={loading}
        >
           {
            selectedColor&&selectedColor===item.code&&
            <button className=' absolute opacity-4 shadow-4xl  border-2 p-5 rounded-full' style={{borderColor:WHITE_COLOR_CODE , top:"-6px" , left:"-6px"  }}>
              </button>
          }
    </button>
  )
}

export default ColorPallete