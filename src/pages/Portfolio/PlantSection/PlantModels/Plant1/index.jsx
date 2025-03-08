import React, { useRef , useEffect, useState} from 'react'

const PlantModel1 = ({data,setLoading,model,setSelectedColor}) => {
     // my base model will go inside this variable
    useEffect(() => {
      async function loadMore (){
        const { OrbitControls } = await import("three/examples/jsm/controls/OrbitControls")
        const {createCamera,
                createLight,
                createModel,
                createRenderer,
                createScene,
                onWindowResize,
                animate,
                createFloor,} = await import("./method")
        setSelectedColor("")
          const renderer = createRenderer();
          const scene = createScene();
          const camera = createCamera();
  
          const controls = new OrbitControls(camera, renderer.domElement)
          controls.enablePan = false;
          controls.enableZoom = false;
          controls.autoRotate = true; 
          controls.autoRotateSpeed = 1;          
          createModel(model, scene, data.model, setLoading,renderer);
  
          window.addEventListener( 'resize', () => onWindowResize(camera, renderer), false );
  
          animate(() => {
              controls.update();
              renderer.render(scene, camera);
            });
      }
      loadMore()
    }, [])

  return (
      <canvas id="plantModel1" className='' style={{height: "0%", width:"0%"}}>
      </canvas>
  )
}

export default PlantModel1