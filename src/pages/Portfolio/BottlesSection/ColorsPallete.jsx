import React, { useEffect, useState } from 'react'

const ColorPallete = ({selectedColor, setSelectedColor, item,model,key,loading,selectedModel}) => {


  const [THREE, setTHREE] = useState(null);

  // Dynamically import THREE once the component is mounted
  useEffect(() => {
    import('three').then((module) => {
      setTHREE(module);
    });
  }, []);

  const handleColor=(code)=>{
    setSelectedColor(code)

    if(selectedModel===9){
      const loader = new THREE.TextureLoader();
      // const normalTexture = loader.load('textures/BottleModel/Model1/base_Normal_OpenGL-webp.webp')
      // const roughnessTexture = loader.load('textures/BottleModel/Model1/fabric_111_roughness-2K-webp.webp')
      const roughnessTexture = loader.load('textures/BottleModel/Model1/metal_0073_roughness_2k-webp.webp')
      const aoTexture = loader.load('textures/BottleModel/Model1/Material.001_Mixed_AO-webp.webp')
      const metalicTexture = loader.load('textures/BottleModel/Model1/Material.001_Metallic-webp.webp')
      const displacementTexture = loader.load('textures/BottleModel/Model1/Material.001_Height-webp.webp')


      
      const BottleMesh=model.current.children.filter((item)=>item.name==="base" || item.name==="handle")
      console.log("BottleMesh",model.current)

      // BottleMesh.material = new THREE.MeshStandardMaterial({
      //   color:code,
      //   aoMap:aoTexture, 
      //   metalnessMap : metalicTexture,
      //   // displacementMap:displacementTexture,
      //   roughnessMap:roughnessTexture,
      //   // displacementScale: 0.005
      // })
      BottleMesh.map((item)=>{
        item.material.color=new THREE.Color(code)
      })

      

    }else if(selectedModel===10){
      console.log("model",model.current)

      const loader = new THREE.TextureLoader();
      const normalTexture = loader.load('textures/BottleModel/Model2/base_Normal_OpenGL-webp.webp')
      const aoTexture = loader.load('textures/BottleModel/Model2/base_Mixed_AO-webp.webp')
      const metalicTexture = loader.load('textures/BottleModel/Model2/base_Metallic-webp.webp')
      const displacementTexture = loader.load('textures/BottleModel/Model2/base_Height-webp.webp')

      const BottleMesh=model.current.children.find((item)=>item.name==="base" )
      // BottleMesh.material = new THREE.MeshStandardMaterial({
      //     color: code,
      //     // aoMap:aoTexture, 
      //     // metalnessMap : metalicTexture,
      //     // displacementMap:displacementTexture,
      //     // displacementScale: 0.005
      // })
      // BottleMesh.material.color=new THREE.Color("goldenrod");
      BottleMesh.material.color=new THREE.Color(code)
    }
    
    else if(selectedModel ===11){
      // const loader = new THREE.TextureLoader();
      // const aoTexture = loader.load('textures/BottleModel/Model2/Material.002_Mixed_AO-webp.webp')
      // const displacementTexture = loader.load('textures/BottleModel/Model2/base_Height-webp.webp')
      // const metalicTexture = loader.load('textures/BottleModel/Model2/Material.002_Metallic-webp.webp')
      // const roughnessTexture = loader.load('textures/BottleModel/Model2/Material.002_Roughness-webp.webp')

      const BottleMesh=model.current.children.find((item)=>item.name==="cup_base")

      console.log("model", model.current)

      BottleMesh.children.map((item)=>{
        if(item.isMesh && item.name=="Cylinder012" ){
          item.material.color=new THREE.Color(code)
        }
      })
      
    }


  }
  
  return (
    <button key={key} className={`relative w-8 h-8 mt-2  mx-2 rounded-full border-[1px] shadow-md mb-5 hover:scale-125  cursor-pointer disabled:cursor-not-allowed`}
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
            <button className=' absolute opacity-4 shadow-4xl  border-2 p-5 rounded-full' style={{borderColor:item.code , top:"-6px" , left:"-6px"  }}>
              </button>
          }
    </button>
  )
}

export default ColorPallete