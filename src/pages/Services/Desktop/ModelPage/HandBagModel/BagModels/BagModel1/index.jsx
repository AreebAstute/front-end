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
    createFloor,
    
} from "./method";


const BagModel1 = ({data,setLoading,model , setSelectedColor,selectedColor}) => {
     // my base model will go inside this variable     
    useEffect(() => {
        setSelectedColor("")
        const renderer = createRenderer();
        const scene = createScene();
        const camera = createCamera();
        // createLight(scene);
        // createFloor(scene)

        const controls = new OrbitControls(camera, renderer.domElement)
        // controls.minDistance=10;
        // controls.maxDistance=10;
        // controls.minDistance = 60;
        // controls.maxDistance = 150;
        // controls.enableDamping = true;
        controls.enablePan = false;
        controls.enableZoom = false;
        // controls.dampingFactor = 0.1;
        // controls.autoRotate = true; // Toggle this if you'd like the chair to automatically rotate
        // controls.autoRotateSpeed = 0.2; // 30
        // viewer controls setting
         
        createModel(model, scene, data.model, setLoading,renderer,selectedColor);

        window.addEventListener( 'resize', () => onWindowResize(camera, renderer), false );

        animate(() => {
            controls.update();
            renderer.render(scene, camera);
          });
          
    }, [])

  return (
    <canvas id="bagModel1" className='' style={{height: "0%", width:"0%"}}>
    </canvas>
  )
}

export default BagModel1