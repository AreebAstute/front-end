import React from 'react'
import {motion} from "framer-motion";

const LayerPicker = ({data, setState, setTooltipOpen}) => {

    return (
        <motion.div
            className=""
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <div className="-mt-12 md:-mt-24 px-4 overflow-x-auto py-4 whitespace-nowrap flex justify-center items-center space-x-4 relative z-50">
                {data.meshes.map((mesh, index) => (
                    <div key={index} className="group cursor-pointer text-center" onClick={() => {
                        setTooltipOpen(false)
                        setState({value: mesh.name, label: mesh.display_name})
                    }}>
                        <div className="h-10 w-10 sm:h-16 sm:w-16 bg-contain" style={{backgroundImage: `url(${mesh.image})`}}>
                        </div>
                        <p className={`text-xs text-gray-400 group-hover:text-white capitalize`}>
                            {mesh.display_name}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default LayerPicker
