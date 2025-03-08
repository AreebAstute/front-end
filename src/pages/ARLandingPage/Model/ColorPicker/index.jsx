import React, {useState} from 'react'
import { HexColorPicker } from "react-colorful";
import {motion} from "framer-motion";
import {FaTimes, FaCheck} from "react-icons/fa";
import * as THREE from "three";
import "./styles.css";

const ColorPicker = ({data, setData, activeLayer, setActiveLayer, model}) => {
    const mesh = data.meshes.find(item => item.name === activeLayer)

    const handleColorChange = (color, throughInput) => {
        let value;
        if(throughInput){
            console.log("it's input")
            if(/^#[0-9A-F]{0,6}$/i.test(color)){
                value = color
            } else{
                return 
            }
        } else{
            value = color;
            console.log("it's picker")

        }
        
        model.current.traverse(o => {
            if(o.isMesh && o.name === activeLayer){
                console.log("Found")
                console.log(activeLayer)
                o.material = new THREE.MeshPhongMaterial({color: value, emmisive: 0xff0000, shininess: 120})
            }
        })

        setData({...data, meshes: data.meshes.map(item => {
            if(item.name === activeLayer){
                return({
                    ...item,
                    color: value
                })
            } else{
                return item
            }
        })})
    }

    return (
        <motion.div
            className="top-0 absolute h-56 w-80 shadow-lg right-0"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <HexColorPicker color={mesh.color} onChange={(color) => handleColorChange(color, false) } />

            <div className="mt-3">
            <label htmlFor="colorVal" className="font-bold mb-2 text-base text-white block ">
                Hex Color Value
            </label>
            
            <input type="text" onChange={(e) => handleColorChange(e.target.value, true)} value={mesh.color} name="colorVal" id="colorVal" className="rounded-md focus:outline-none focus:border-green-500 rounded-sm py-2 px-4 w-full border-gray-400 border-2" />
            </div>
            
            {/* <div className="mt-12 flex items-center justify-center space-x-4">
                <button onClick={() => setActiveLayer(false)} className="py-2 bg-white shadow-lg flex-grow flex justify-center">
                    <FaTimes className="text-xl text-gray-800"/>
                </button>
                <button onClick={() => setActiveLayer(false)} className="py-2 bg-green-600 shadow-lg flex-grow flex justify-center">
                    <FaCheck className="text-xl text-white"/>
                </button>
            </div> */}
        </motion.div>
    )
}

export default ColorPicker
