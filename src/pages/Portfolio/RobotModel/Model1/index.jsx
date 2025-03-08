import React, { useRef , useEffect, useState} from 'react'
import { AnimatePresence } from 'framer-motion';

const Model1 = ({data,setLoading,model}) => {
     // my base model will go inside this variable
    useEffect(() => {

      const { OrbitControls } = import ("three/examples/jsm/controls/OrbitControls");
      const {
          createCamera,
          createRenderer,
          onWindowResize,
          createAnimatedModel,
          
      } = import("./method");

      const renderer = createRenderer();
      // const scene = createScene();
      const camera = createCamera();
      createAnimatedModel(model, data.model, setLoading);
      window.addEventListener( 'resize', () => onWindowResize(camera, renderer), false );
    }, [])

  return (
    <canvas id="Robotmodel1" className='' style={{height: "0%", width:"0%"}}>
    </canvas>
  )
}

export default Model1