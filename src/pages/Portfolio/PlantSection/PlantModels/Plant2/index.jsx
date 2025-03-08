import React, { useRef , useEffect, useState} from 'react'


const PlantModel2 = ({data,setLoading,model,setSelectedColor}) => {
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
        createLight(scene);
        // createFloor(scene)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.minDistance = 90;
        controls.maxDistance = 300;
        controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.dampingFactor = 0.1;
        controls.autoRotate = true; // Toggle this if you'd like the chair to automatically rotate
        controls.autoRotateSpeed = 1; // 30
        // viewer controls setting
         
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
    <canvas id="plantmodel2" className='' style={{height: "100%", width:"100%"}}>
    </canvas>
  )
}

export default PlantModel2