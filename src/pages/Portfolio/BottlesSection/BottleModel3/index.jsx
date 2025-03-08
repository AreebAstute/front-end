import React, { useRef , useEffect, useState} from 'react'

const BottleModel3 = ({data,setLoading,model,setSelectedColor,selectedColor}) => {
     // my base model will go inside this variable
    useEffect(() => {
      const  {OrbitControls} = import("three/examples/jsm/controls/OrbitControls");
      const {
          createCamera,
          createLight,
          createModel,
          createRenderer,
          createScene,
          onWindowResize,
          animate,
          createFloor,
          
      } = import("./method");


      setSelectedColor("")
      const renderer = createRenderer();
      const scene = createScene();
      const camera = createCamera();
    
      // createLight(scene);
    
      // createFloor(scene)

      const controls = new OrbitControls(camera, renderer.domElement)
      // controls.minDistance = 60;
      controls.maxDistance = 200;
      controls.enableDamping = true;
      controls.enablePan = false;
      controls.enableZoom = false;
      controls.dampingFactor = 0.1;
      controls.autoRotate = true; // Toggle this if you'd like the chair to automatically rotate
      controls.autoRotateSpeed = 2; // 30
      // viewer controls setting
        
      createModel(model, scene, data.model, setLoading,renderer);

      window.addEventListener( 'resize', () => onWindowResize(camera, renderer), false );

      animate(() => {
          controls.update();
          renderer.render(scene, camera);
        });
          
    }, [])

  return (
    <canvas id="botttleModel3" className='' style={{height: "100%", width:"100%"}}>
    </canvas>
  )
}

export default BottleModel3