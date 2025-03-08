import React from 'react'
import {BiLoaderAlt} from 'react-icons/bi';


const Loader = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-white" style={{zIndex: "1001"}}>
            <BiLoaderAlt className="text-7xl text-green-primary animate-spin" />
        </div>
    )
}

export default Loader
