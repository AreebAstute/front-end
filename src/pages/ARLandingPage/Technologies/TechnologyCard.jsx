import React from 'react'
import { getImageALt } from '../../../utils'

const TechnologyCard = ({img,content}) => {
    return (
        <div className="flex flex-col mx-5 2xl:mx-10">
            <div className="border-2 border-gray-light flex items-center">
                <img loading="lazy" alt={getImageALt(img)} className="" src={img} />
            </div>
            <p className="text-gray-text mt-10 text-lg  pr-5">{content}</p>
        </div>
    )
}

export default TechnologyCard
