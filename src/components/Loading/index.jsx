import React from 'react'
import {BiLoaderAlt} from "react-icons/bi";

export const Loading = () => {
    return (
        <div className="flex justify-center items-center my-12">
            <span className="text-xl text-green-primary">
                <BiLoaderAlt className="animate-spin"/>
            </span>
        </div>
    )
}




