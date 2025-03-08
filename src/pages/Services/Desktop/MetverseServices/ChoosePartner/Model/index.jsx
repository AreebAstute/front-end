import React, { useRef , useEffect, useState} from 'react'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import { AnimatePresence } from 'framer-motion';
import{
    createCamera,
    createLight,
    createModel,
    createRenderer,
    createScene,
    onWindowResize,
    animate,
    
} from "./method";

const ThreeDModel = ({data,setLoading}) => {
     // my base model will go inside this variable
     const model = useRef(null);
    useEffect(() => {
        const renderer = createRenderer();
        const scene = createScene();
        const camera = createCamera();
        createLight(scene);

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.minDistance = 60;
        controls.maxDistance = 200;
        controls.enableDamping = true;
        controls.enablePan = true;
        controls.enableZoom = true;
        controls.dampingFactor = 0.1;
        controls.autoRotate = true; // Toggle this if you'd like the chair to automatically rotate
        controls.autoRotateSpeed = 0.2; // 30
        // viewer controls setting
         
        createModel(model, scene, data.model, setLoading);

        window.addEventListener( 'resize', () => onWindowResize(camera, renderer), false );

        animate(() => {
            controls.update();
            renderer.render(scene, camera);
          });
          
    }, [])

  return (
    <canvas id="model" className='-m/t-12' style={{height: "100%", width:"100%"}}>
    </canvas>
  )
}

export default ThreeDModel