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
import { BiLoaderAlt} from 'react-icons/bi'

const ShoesModel = ({setLoading,loading,model}) => {
     // my base model will go inside this variable
     
    useEffect(() => {
        const renderer = createRenderer();
        const scene = createScene();
        const camera = createCamera();
        // createLight(scene);
        // createFloor(scene)

        const controls = new OrbitControls(camera, renderer.domElement)
        // controls.minDistance = 60;
        // controls.maxDistance = 200;
        controls.enableDamping = false;
        controls.enablePan = false;
        controls.enableZoom = false;
        controls.dampingFactor = 100;
        // controls.autoRotate = true; // Toggle this if you'd like the chair to automatically rotate
        // controls.autoRotateSpeed = 0.2; // 30
        // viewer controls setting

        // createModel(model, scene, '/models/superstar-shoes.glb', setLoading,renderer);
        createModel(model, scene, 'https://astute-website.s3.eu-central-1.amazonaws.com/media/astute-model/superstar-shoes.glb', setLoading,renderer);

        window.addEventListener( 'resize', () => onWindowResize(camera, renderer), false );

        animate(() => {
            controls.update();
            renderer.render(scene, camera);
          });
          
    }, [])




  return (
                // {/* {
                //     loading && 
                //     <div className="flex items-center justify-center">
                //         <BiLoaderAlt className="text-7xl text-green-500 animate-spin" />
                //     </div>
                // } */}

        
        <canvas id="shoesModel" className=''  style={{height: "0%", width:"0%"}} >
    </canvas>
  )
}

export default ShoesModel