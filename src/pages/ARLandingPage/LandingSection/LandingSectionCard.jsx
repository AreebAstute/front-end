import React from 'react'

const LandingSectionCard = ({img,desc,text}) => {
    return (
        <div className="text-center flex flex-col items-center space-y-5">
            <img loading="lazy" alt="" className="w-48" src={img} />
            <p className="px-5 text-gray-text text-lg 2xl:text-xl ">{desc}</p>
            <button className="px-8 py-2 rounded-md text-white text-sm 2xl:text-base uppercase bg-blue-primary">
                {text}
            </button>
        </div>
    )
}

export default LandingSectionCard
