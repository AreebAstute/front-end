import React from 'react'
import {motion} from "framer-motion";
import {FaArrowLeft} from "react-icons/fa";
// import { COLOR_PALLETTE, CLOTH_PALLETE, BED_PALLETE, MATTRESS_PALLETE } from '../../../../constants';
import * as THREE from "three";



const COLOR_PALLETTE = ["#ff0000", "#68b745", "#66717E", "#D4D6B9", "#D1CAA1"]
const BED_PALLETE = [
    {
        txt: new THREE.TextureLoader().load("/textures/bed/1-webp.webp"),
        img: "/textures/bed/1-webp.webp"
    }
]
const CLOTH_PALLETE = [
    {
        txt: new THREE.TextureLoader().load("/textures/cloth/1-webp.webp"),
        img: "/textures/cloth/1-webp.webp"
    },
    {
        txt: new THREE.TextureLoader().load("/textures/cloth/2-webp.webp"),
        img: "/textures/cloth/2-webp.webp"
    },
]
const MATTRESS_PALLETE = [
    {
        txt: new THREE.TextureLoader().load("/textures/mattress/1-webp.webp"),
        img: "/textures/mattress/1-webp.webp"
    }
]

const ColorPallete = ({activeLayer, setActiveLayer, data, setData, model, setTooltipOpen}) => {
    const mesh = data.meshes.find(item => item.name === activeLayer.value)

    const handleColorChange = (color) => {
        setTooltipOpen(false);
        model.current.traverse(o => {
            if(o.isMesh && o.name === activeLayer.value){
                o.material = new THREE.MeshPhongMaterial({color: color, emmisive: 0xfffcf5, shininess: 0})
            }
        })

        setData({...data, meshes: data.meshes.map(item => {
            if(item.name === activeLayer.value){
                return({
                    ...item,
                    color: color
                })
            } else{
                return item
            }
        })})
    }
    
    const handleTextureChange = (text) => {
        console.log(text)
        setTooltipOpen(false);
        model.current.traverse(o => {
            if(o.isMesh && o.name === activeLayer.value){
                o.material = new THREE.MeshPhongMaterial({map: text.txt, emmisive: 0xfffcf5, shininess: 0})
            }
        })

        setData({...data, meshes: data.meshes.map(item => {
            if(item.name === activeLayer.value){
                return({
                    ...item,
                    color: text.texture
                })
            } else{
                return item
            }
        })})
    }


    return (
        <motion.div
            className="px-4 text-center -mt-12 md:-mt-24 relative"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <span className="inline-block text-xl text-center text-white font-bold capitalize">
                {mesh.display_name}
            </span>
            <div className="px-4 justify-center overflow-x-auto py-4 whitespace-nowrap flex items-center space-x-2 md:space-x-4">
                {activeLayer.value === "bed" ? 
                    BED_PALLETE.map((text, index) => (
                        <>
                            <div 
                                key={index}
                                className="transform cursor-pointer hover:scale-105 h-7 w-7 md:h-12 md:w-12 bg-gray-200 rounded-full border-2 border-bg-white"
                                style={{backgroundImage: `url(${text.img})`}}
                                onClick={() => handleTextureChange(text)}
                            >
                            </div>
                        </>
                    ))
                : activeLayer.value === "pillow" || activeLayer.value === "blanket" ?
                    CLOTH_PALLETE.map((text, index) => (
                        <>
                            <div 
                                key={index}
                                className="transform cursor-pointer hover:scale-105 h-7 w-7 md:h-12 md:w-12 bg-gray-200 rounded-full border-2 border-bg-white"
                                style={{backgroundImage: `url(${text.img})`}}
                                onClick={() => handleTextureChange(text)}
                            >
                            </div>
                        </>
                    ))
                : activeLayer.value === "_Mattress" ?
                    MATTRESS_PALLETE.map((text, index) => (
                        <>
                            <div 
                                key={index}
                                className="transform cursor-pointer hover:scale-105 h-7 w-7 md:h-12 md:w-12 bg-gray-200 rounded-full border-2 border-bg-white"
                                style={{backgroundImage: `url(${text.img})`}}
                                onClick={() => handleTextureChange(text)}
                            >
                            </div>
                        </>
                    ))
                : 
                COLOR_PALLETTE.map((color, index) => (
                        <>
                            <div 
                                key={index}
                                className="transform cursor-pointer hover:scale-105 h-7 w-7 md:h-12 md:w-12 bg-gray-200 rounded-full border-2 border-bg-white"
                                style={{backgroundColor: color}}
                                onClick={() => handleColorChange(color)}
                            >
                            </div>
                        </>
                    ))
                
                }
                <div className="cursor-pointer flex items-center" onClick={() => {
                    setTooltipOpen(false)
                    setActiveLayer(false)
                }}>
                    <FaArrowLeft className="text-xl md:text-2xl text-white"/>
                    <p className="text-sm md:text-base text-white ml-2">Back</p>
                </div>

            </div>
        </motion.div>
    )
}

export default ColorPallete
