import React, { useRef , useEffect, useState} from 'react'

const Model3 = ({data,setLoading,model}) => {
     // my base model will go inside this variable
    useEffect(() => {
      const {OrbitControls} = import("three/examples/jsm/controls/OrbitControls");
      const{
          createCamera,
          createLight,
          createRenderer,
          createScene,
          onWindowResize,
          animate,
          createFloor,
          createAnimatedModel
      } = import("./method");

      const renderer = createRenderer();
      const camera = createCamera();

      createAnimatedModel(model, data.model, setLoading);
      window.addEventListener( 'resize', () => onWindowResize(camera, renderer), false ); 
    }, [])

  return (
    <canvas id="Robotmodel3" className='' style={{height: "100%", width:"100%"}}>
    </canvas>
  )
}

export default Model3